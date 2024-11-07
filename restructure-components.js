import fs from 'fs';
import path from 'path';

export async function restructureComponents(baseDir) {
  console.log('Starting component restructuring...');

  const processDirectory = async (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    console.log(`Processing directory: ${dir}`);

    // First pass: Handle component files
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
        continue;
      }

      // Skip index files in first pass
      if (entry.name === 'index.jsx' || entry.name === 'index.scss') {
        continue;
      }

      // Handle component files (e.g., Footer.jsx, FooterContainer.jsx)
      if (entry.name.endsWith('.jsx')) {
        const dirName = path.dirname(fullPath);
        const componentName = path.basename(entry.name, '.jsx');
        const componentDir = path.join(dirName, componentName.toLowerCase());
        const newIndexPath = path.join(componentDir, 'index.jsx');
        
        console.log(`Processing component: ${componentName}`);

        // Create component directory if it doesn't exist
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir, { recursive: true });
        }

        // Move JSX file
        const content = fs.readFileSync(fullPath, 'utf8');
        // Update SCSS import in content if it exists
        const updatedContent = content.replace(
          new RegExp(`import ['"].*${componentName}\\.scss['"]`),
          `import './index.scss'`
        );
        fs.writeFileSync(newIndexPath, updatedContent);

        // Handle associated SCSS file
        const scssFile = fullPath.replace('.jsx', '.scss');
        if (fs.existsSync(scssFile)) {
          const newScssPath = path.join(componentDir, 'index.scss');
          fs.renameSync(scssFile, newScssPath);
        }

        // Remove original files
        fs.unlinkSync(fullPath);
      }
    }

    // Second pass: Update and clean up index files
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.name === 'index.jsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Update import paths in index files
        const updatedContent = content.replace(
          /from ['"]\.\/([^/'"]+)['"];?/g,
          (match, importName) => `from './${importName.toLowerCase()}/index';`
        );
        
        fs.writeFileSync(fullPath, updatedContent);
      }
    }
  };

  try {
    await processDirectory(baseDir);
    console.log('Component restructuring completed successfully');
  } catch (error) {
    console.error('Error during restructuring:', error);
    throw error;
  }
}