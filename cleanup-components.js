import fs from 'fs';
import path from 'path';

export async function cleanupComponents(baseDir) {
  const issues = {
    emptyDirs: [],
    fixedImports: [],
    updatedScss: [],
    unusedFiles: []
  };

  async function updateImportPaths(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await updateImportPaths(fullPath);
        continue;
      }

      if (entry.name.endsWith('.jsx')) {
        let content = await fs.promises.readFile(fullPath, 'utf8');
        let modified = false;

        // Fix relative imports
        const importRegex = /from\s+['"]([\.\/]+)([^'"]+)['"]/g;
        content = content.replace(importRegex, (match, dots, importPath) => {
          modified = true;
          // Clean up the import path
          const cleanPath = importPath
            .replace(/\/index$/, '')
            .replace(/\.jsx$/, '');
          return `from '${dots}${cleanPath}'`;
        });

        // Fix SCSS imports
        const scssRegex = /import\s+['"][^'"]*\.scss['"]/g;
        content = content.replace(scssRegex, match => {
          modified = true;
          return `import './index.scss'`;
        });

        if (modified) {
          issues.fixedImports.push(fullPath);
          await fs.promises.writeFile(fullPath, content);
        }
      }
    }
  }

  async function removeEmptyDirs(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      
      const fullPath = path.join(dir, entry.name);
      await removeEmptyDirs(fullPath);
      
      const files = await fs.promises.readdir(fullPath);
      if (files.length === 0) {
        issues.emptyDirs.push(fullPath);
        await fs.promises.rmdir(fullPath);
      }
    }
  }

  // Run cleanup functions
  await updateImportPaths(baseDir);
  await removeEmptyDirs(baseDir);

  // Generate report
  console.log('\nCleanup Report:');
  console.log('---------------');
  
  if (issues.fixedImports.length) {
    console.log('\nFixed imports in:');
    issues.fixedImports.forEach(file => console.log(`- ${file}`));
  }

  if (issues.emptyDirs.length) {
    console.log('\nRemoved empty directories:');
    issues.emptyDirs.forEach(dir => console.log(`- ${dir}`));
  }

  if (issues.updatedScss.length) {
    console.log('\nUpdated SCSS imports in:');
    issues.updatedScss.forEach(file => console.log(`- ${file}`));
  }

  if (issues.unusedFiles.length) {
    console.log('\nFound unused files:');
    issues.unusedFiles.forEach(file => console.log(`- ${file}`));
  }
}