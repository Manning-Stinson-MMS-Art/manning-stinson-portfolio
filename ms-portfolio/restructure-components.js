import fs from 'fs';
import path from 'path';

export async function restructureComponents(baseDir) {
  const processDirectory = async (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
        continue;
      }

      if (!entry.name.endsWith('.jsx') || entry.name === 'index.jsx') {
        continue;
      }

      const dirName = path.dirname(fullPath);
      const componentName = path.basename(entry.name, '.jsx');
      const indexPath = path.join(dirName, 'index.jsx');

      if (!fs.existsSync(indexPath)) {
        const scssPath = fullPath.replace('.jsx', '.scss');
        const newScssPath = path.join(dirName, 'index.scss');
        if (fs.existsSync(scssPath)) {
          fs.renameSync(scssPath, newScssPath);
        }

        fs.renameSync(fullPath, indexPath);
        continue;
      }

      const barrelContent = fs.readFileSync(indexPath, 'utf8');
      
      const componentExportRegex = new RegExp(`export .* from '\\.\\/${componentName}'`);
      if (componentExportRegex.test(barrelContent)) {
        const updatedContent = barrelContent.replace(
          new RegExp(`from '\\.\\/${componentName}'`),
          `from './${componentName.toLowerCase()}/index'`
        );
        fs.writeFileSync(indexPath, updatedContent);

        const componentDir = path.join(dirName, componentName.toLowerCase());
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir);
        }

        const scssPath = fullPath.replace('.jsx', '.scss');
        const newScssPath = path.join(componentDir, 'index.scss');
        if (fs.existsSync(scssPath)) {
          fs.renameSync(scssPath, newScssPath);
        }

        fs.renameSync(fullPath, path.join(componentDir, 'index.jsx'));
      }
    }
  };

  await processDirectory(baseDir);
}