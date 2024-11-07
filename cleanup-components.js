import fs from 'fs';
import path from 'path';

export async function cleanupComponents(baseDir) {
  console.log('Starting cleanup...');

  const issues = {
    movedFiles: [],
    updatedImports: [],
    removedDuplicates: []
  };

  const processDirectory = async (dir) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Process subdirectories
        await processDirectory(fullPath);

        // Check for duplicate structure
        const hasIndexJsx = fs.existsSync(path.join(fullPath, 'index.jsx'));
        const hasComponentJsx = fs.existsSync(
          path.join(fullPath, `${path.basename(fullPath)}.jsx`)
        );

        if (hasIndexJsx && hasComponentJsx) {
          const componentPath = path.join(fullPath, `${path.basename(fullPath)}.jsx`);
          fs.unlinkSync(componentPath);
          issues.removedDuplicates.push(componentPath);
        }

        // Similarly check for SCSS files
        const hasIndexScss = fs.existsSync(path.join(fullPath, 'index.scss'));
        const hasComponentScss = fs.existsSync(
          path.join(fullPath, `${path.basename(fullPath)}.scss`)
        );

        if (hasIndexScss && hasComponentScss) {
          const componentScssPath = path.join(fullPath, `${path.basename(fullPath)}.scss`);
          fs.unlinkSync(componentScssPath);
          issues.removedDuplicates.push(componentScssPath);
        }

        continue;
      }

      if (entry.name.endsWith('.jsx')) {
        // Update import statements
        let content = await fs.promises.readFile(fullPath, 'utf8');
        let modified = false;

        // Fix component imports
        content = content.replace(
          /from ['"]([\.\/]+)(.*?)['"]/g,
          (match, dots, importPath) => {
            modified = true;
            const cleanPath = importPath
              .replace(/\/index$/, '')
              .toLowerCase();
            return `from '${dots}${cleanPath}'`;
          }
        );

        // Fix SCSS imports
        content = content.replace(
          /import ['"].*\.scss['"];?/g,
          `import './index.scss';`
        );

        if (modified) {
          await fs.promises.writeFile(fullPath, content);
          issues.updatedImports.push(fullPath);
        }
      }
    }
  };

  try {
    await processDirectory(baseDir);

    // Report changes
    console.log('\nCleanup Report:');
    console.log('---------------');

    if (issues.movedFiles.length) {
      console.log('\nMoved files:');
      issues.movedFiles.forEach(file => console.log(`- ${file}`));
    }

    if (issues.updatedImports.length) {
      console.log('\nUpdated imports in:');
      issues.updatedImports.forEach(file => console.log(`- ${file}`));
    }

    if (issues.removedDuplicates.length) {
      console.log('\nRemoved duplicate files:');
      issues.removedDuplicates.forEach(file => console.log(`- ${file}`));
    }

    console.log('\nCleanup completed successfully');
  } catch (error) {
    console.error('Error during cleanup:', error);
    throw error;
  }
}