import fs from 'fs';
import path from 'path';

// Define the project root directory
const projectRoot = '/workspaces/manning-stinson-portfolio/ms-portfolio';

// Function to fix import paths
function fixImportPaths() {
  const componentsDir = 'src/components';
  const pagesDir = 'src/pages';

  // Fix imports in App.jsx
  const appJSXPath = path.join(projectRoot, 'src', 'App.jsx');
  let appJSXContent = fs.readFileSync(appJSXPath, 'utf8');
  appJSXContent = appJSXContent.replace(/@pages\/home/g, `${pagesDir}/home`);
  appJSXContent = appJSXContent.replace(/@pages\/contact/g, `${pagesDir}/contact`);
  appJSXContent = appJSXContent.replace(/@pages\/portfolio/g, `${pagesDir}/portfolio`);
  appJSXContent = appJSXContent.replace(/@pages\/blog/g, `${pagesDir}/blog`);
  appJSXContent = appJSXContent.replace(/@pages\/about/g, `${pagesDir}/about`);
  appJSXContent = appJSXContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/header/g, `${componentsDir}/header`);
  appJSXContent = appJSXContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/footer/g, `${componentsDir}/footer`);
  appJSXContent = appJSXContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/layout\/page-wrapper/g, `${componentsDir}/layout/page-wrapper`);
  fs.writeFileSync(appJSXPath, appJSXContent, 'utf8');

  // Fix imports in layout/Index.jsx
  const layoutIndexPath = path.join(projectRoot, 'src', 'components', 'layout', 'Index.jsx');
  let layoutIndexContent = fs.readFileSync(layoutIndexPath, 'utf8');
  layoutIndexContent = layoutIndexContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/header/g, `${componentsDir}/header`);
  layoutIndexContent = layoutIndexContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/footer/g, `${componentsDir}/footer`);
  layoutIndexContent = layoutIndexContent.replace(/\/workspaces\/manning-stinson-portfolio\/ms-portfolio\/src\/components\/layout\/page-wrapper/g, `${componentsDir}/layout/page-wrapper`);
  fs.writeFileSync(layoutIndexPath, layoutIndexContent, 'utf8');
}

// Function to fix SCSS parsing errors
function fixSCSSErrors() {
  const stylesDir = path.join(projectRoot, 'src', 'styles');

  // Fix SCSS files
  fs.readdir(stylesDir, (err, files) => {
    if (err) {
      console.error('Error reading styles directory:', err);
      return;
    }

    files.forEach((file) => {
      if (file.endsWith('.scss')) {
        const filePath = path.join(stylesDir, file);
        let fileContent = fs.readFileSync(filePath, 'utf8');

        // Remove any leading '@' characters from SCSS files
        fileContent = fileContent.replace(/^@/g, '');

        // Remove any invalid characters or syntax
        fileContent = fileContent.replace(/[^a-zA-Z0-9\-_\.\s{}\:,]/g, '');

        fs.writeFileSync(filePath, fileContent, 'utf8');
      }
    });
  });
}

// Run the fix functions
fixImportPaths();
fixSCSSErrors();

console.log('Script execution complete. Please check the project for any remaining issues.');