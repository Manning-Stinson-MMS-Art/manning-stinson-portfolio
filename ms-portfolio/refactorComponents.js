import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import fsExtra from 'fs-extra';

// Function to execute shell commands
const runCommand = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
};

// Step 1: Create a new Git branch
runCommand('git checkout -b refactor-components-structure');

// Step 2: Create the forms directory and move the contact-form component
const createFormsDirectory = () => {
  const formsPath = path.join(process.cwd(), 'src', 'components', 'forms');
  if (!fs.existsSync(formsPath)) {
    fs.mkdirSync(formsPath, { recursive: true });
    console.log(`Created: ${formsPath}`);
  }

  const contactFormPath = path.join(process.cwd(), 'src', 'components', 'contact-form');
  const newContactFormPath = path.join(formsPath, 'contact-form');

  // Use fs-extra to move the directory and overwrite if it exists
  fsExtra.moveSync(contactFormPath, newContactFormPath, { overwrite: true });
  console.log(`Moved: ${contactFormPath} -> ${newContactFormPath}`);
};

// Step 3: Delete the homepage-hero component
const deleteHomepageHero = () => {
  const heroPath = path.join(process.cwd(), 'src', 'components', 'homepage-hero');
  if (fs.existsSync(heroPath)) {
    fs.rmSync(heroPath, { recursive: true, force: true });
    console.log(`Deleted: ${heroPath}`);
  } else {
    console.warn(`Directory not found: ${heroPath}`);
  }
};

// Step 4: Move page-wrapper to layout
const movePageWrapper = () => {
  const layoutPath = path.join(process.cwd(), 'src', 'components', 'layout');
  if (!fs.existsSync(layoutPath)) {
    fs.mkdirSync(layoutPath, { recursive: true });
    console.log(`Created: ${layoutPath}`);
  }

  const pageWrapperPath = path.join(process.cwd(), 'src', 'components', 'page-wrapper');
  const newPageWrapperPath = path.join(layoutPath, 'page-wrapper');

  // Use fs-extra to move the directory and overwrite if it exists
  fsExtra.moveSync(pageWrapperPath, newPageWrapperPath, { overwrite: true });
  console.log(`Moved: ${pageWrapperPath} -> ${newPageWrapperPath}`);
};

// Step 5: Rename .jsx and .scss files to index
const renameFilesToIndex = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isFile()) {
      const ext = path.extname(fullPath);
      const baseName = path.basename(fullPath, ext);

      if (baseName !== 'index') {
        const newFilePath = path.join(dir, `index${ext}`);
        fs.renameSync(fullPath, newFilePath);
        console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
      }
    } else if (fs.lstatSync(fullPath).isDirectory()) {
      renameFilesToIndex(fullPath); // Recursively rename in subdirectories
    }
  });
};

// Step 6: Create barrel exports for all directories
const createBarrelExports = (dir) => {
  const subdirs = fs.readdirSync(dir).filter((item) => {
    const itemPath = path.join(dir, item);
    return fs.lstatSync(itemPath).isDirectory();
  });

  subdirs.forEach((subdir) => {
    const subdirPath = path.join(dir, subdir);
    const indexPath = path.join(subdirPath, 'index.js');

    const components = fs.readdirSync(subdirPath).filter((file) => {
      const ext = path.extname(file);
      return ext === '.jsx' || ext === '.js';
    }).map((file) => path.basename(file, path.extname(file)));

    const exportStatements = components.map((component) => 
      `export { default as ${component} } from './${component}';`
    ).join('\n');

    fs.writeFileSync(indexPath, exportStatements);
    console.log(`Created barrel export: ${indexPath}`);
  });
};

// Run all steps
createFormsDirectory();
deleteHomepageHero();
movePageWrapper();
renameFilesToIndex(path.join(process.cwd(), 'src', 'components'));
createBarrelExports(path.join(process.cwd(), 'src', 'components'));

console.log("Components reorganization completed. Remember to update your import paths accordingly.");
