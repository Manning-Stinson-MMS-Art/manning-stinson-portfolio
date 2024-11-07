import fs from 'fs';
import path from 'path';

export async function restructureComponents(baseDir) {
  const processDirectory = async (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    // First, find any existing barrel files
    const barrelFile = entries.find(e => e.name === 'index.jsx');
    const barrelContent = barrelFile ? fs.readFileSync(path.join(dir, barrelFile.name), 'utf8') : null;
    
    // Process regular component files first
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
        continue;
      }

      // Skip non-jsx files, barrel files, and already processed files
      if (!entry.name.endsWith('.jsx') || entry.name === 'index.jsx') {
        continue;
      }

      const dirName = path.dirname(fullPath);
      const componentName = path.basename(entry.name, '.jsx');
      const componentContent = fs.readFileSync(fullPath, 'utf8');

      // Check if this component is exported in a barrel file
      const isBarreled = barrelContent?.includes(`export * from './${componentName}'`) ||
                        barrelContent?.includes(`export { default } from './${componentName}'`);

      if (isBarreled) {
        // Create subdirectory for the component
        const componentDir = path.join(dirName, componentName.toLowerCase());
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir);
        }

        // Move component file
        const newComponentPath = path.join(componentDir, 'index.jsx');
        fs.writeFileSync(newComponentPath, componentContent);

        // Move associated SCSS file if it exists
        const scssPath = fullPath.replace('.jsx', '.scss');
        if (fs.existsSync(scssPath)) {
          const newScssPath = path.join(componentDir, 'index.scss');
          fs.renameSync(scssPath, newScssPath);
          
          // Update SCSS import in the component file
          const updatedContent = componentContent.replace(
            new RegExp(`import ['"].*${componentName}\\.scss['"]`),
            `import './index.scss'`
          );
          fs.writeFileSync(newComponentPath, updatedContent);
        }

        // Remove original file
        fs.unlinkSync(fullPath);
      } else {
        // Just rename to index.jsx if not in barrel file
        const indexPath = path.join(dirName, 'index.jsx');
        if (!fs.existsSync(indexPath)) {
          fs.renameSync(fullPath, indexPath);
          
          // Handle associated SCSS file
          const scssPath = fullPath.replace('.jsx', '.scss');
          if (fs.existsSync(scssPath)) {
            const newScssPath = path.join(dirName, 'index.scss');
            fs.renameSync(scssPath, newScssPath);
            
            // Update SCSS import
            const updatedContent = componentContent.replace(
              new RegExp(`import ['"].*${componentName}\\.scss['"]`),
              `import './index.scss'`
            );
            fs.writeFileSync(indexPath, updatedContent);
          }
        }
      }
    }

    // Update barrel file imports if it exists
    if (barrelContent) {
      const updatedBarrelContent = barrelContent.replace(
        /from ['"]\.\/([^'"]+)['"]/g,
        (match, importPath) => {
          return `from './${importPath.toLowerCase()}/index'`;
        }
      );
      fs.writeFileSync(path.join(dir, 'index.jsx'), updatedBarrelContent);
    }
  };

  await processDirectory(baseDir);
}