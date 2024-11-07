import fs from 'fs';
import path from 'path';

export async function cleanupComponents(baseDir) {
  const issues = {
    emptyDirs: [],
    duplicateIndexFiles: [],
    inconsistentImports: [],
    unusedScssFiles: [],
    unnecessaryBarrels: []
  };

  async function isDirectoryEmpty(dir) {
    const files = await fs.promises.readdir(dir);
    return files.length === 0;
  }

  async function removeEmptyDirectories(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      
      const fullPath = path.join(dir, entry.name);
      await removeEmptyDirectories(fullPath);
      
      if (await isDirectoryEmpty(fullPath)) {
        issues.emptyDirs.push(fullPath);
        await fs.promises.rmdir(fullPath);
      }
    }
  }

  async function standardizeImports(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await standardizeImports(fullPath);
        continue;
      }

      if (entry.name.endsWith('.jsx')) {
        let content = await fs.promises.readFile(fullPath, 'utf8');
        let modified = false;

        const importRegex = /from\s+['"]\.\.?\/(.*?)['"]/g;
        content = content.replace(importRegex, (match, importPath) => {
          modified = true;
          const cleanPath = importPath.replace(/\/index$/, '');
          return `from '../${cleanPath}'`;
        });

        content = content.replace(/\/\//g, '/');

        if (modified) {
          issues.inconsistentImports.push(fullPath);
          await fs.promises.writeFile(fullPath, content);
        }
      }
    }
  }

  await removeEmptyDirectories(baseDir);
  await standardizeImports(baseDir);

  // Generate report
  console.log('\nCleanup Report:');
  console.log('---------------');
  
  if (issues.emptyDirs.length) {
    console.log('\nRemoved empty directories:');
    issues.emptyDirs.forEach(dir => console.log(`- ${dir}`));
  }

  if (issues.inconsistentImports.length) {
    console.log('\nFixed import statements in:');
    issues.inconsistentImports.forEach(file => console.log(`- ${file}`));
  }
}