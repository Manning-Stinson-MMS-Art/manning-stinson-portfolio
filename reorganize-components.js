import { execSync } from 'child_process';
import { createInterface } from 'readline';
import path from 'path';
import fs from 'fs';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runGitCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' });
  } catch (error) {
    console.error(`Error executing git command: ${command}`);
    console.error(error.message);
    throw error;
  }
}

async function reorganizeComponents() {
  try {
    // Setup directories
    const currentDir = process.cwd();
    const projectDir = path.join(currentDir, 'ms-portfolio');
    const componentsDir = path.join(projectDir, 'src', 'components');

    if (!fs.existsSync(componentsDir)) {
      console.error(`Components directory not found at: ${componentsDir}`);
      process.exit(1);
    }

    console.log(`Looking for components in: ${componentsDir}`);
    
    // 1. Check for clean working directory
    const status = await runGitCommand('git status --porcelain');
    if (status.length > 0) {
      console.error('Error: Working directory is not clean. Please commit or stash changes first.');
      process.exit(1);
    }

    // 2. Get current branch name
    const currentBranch = (await runGitCommand('git rev-parse --abbrev-ref HEAD')).trim();
    console.log(`Current branch: ${currentBranch}`);

    // 3. Create and checkout new branch
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const newBranchName = `refactor/component-restructure-${timestamp}`;
    
    console.log(`\nCreating new branch: ${newBranchName}`);
    await runGitCommand(`git checkout -b ${newBranchName}`);

    // 4. Reorganize components
    const issues = {
      movedComponents: [],
      updatedImports: [],
      removedDuplicates: []
    };

    // Helper function to read file content safely
    const readFileContent = async (filePath) => {
      try {
        return await fs.promises.readFile(filePath, 'utf8');
      } catch (error) {
        return null;
      }
    };

    // Helper to identify if a directory is a sub-component
    const isSubComponent = (dirName, parentName) => {
      const baseName = path.basename(dirName).toLowerCase();
      return baseName.includes(parentName.toLowerCase().replace('-', ''));
    };

    // Function to update import paths in a file
    const updateImportPaths = async (filePath) => {
      const content = await readFileContent(filePath);
      if (!content) return;

      let updatedContent = content;

      // Update component imports to use index files
      updatedContent = updatedContent.replace(
        /from ['"]@components\/([^/]+)\/[^/'"]+['"]/g,
        "from '@components/$1'"
      );

      // Update relative imports
      updatedContent = updatedContent.replace(
        /from ['"]\.\.?\/(.*?)\/[^/'"]+['"]/g,
        "from '../$1'"
      );

      if (content !== updatedContent) {
        await fs.promises.writeFile(filePath, updatedContent);
        issues.updatedImports.push(filePath);
      }
    };

    // Main function to process directories
    const processDirectory = async (dir) => {
      const entries = await fs.promises.readdir(dir, { withFileTypes: true });
      const mainComponents = new Set();
      const subComponents = new Set();

      // First pass: categorize directories
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const fullPath = path.join(dir, entry.name);
        const parentName = path.basename(path.dirname(fullPath));

        // Special handling for layout components
        if (entry.name === 'page-wrapper' && parentName === 'components') {
          const layoutDir = path.join(dir, 'layout');
          const newPageWrapperDir = path.join(layoutDir, 'page-wrapper');
          
          if (!fs.existsSync(layoutDir)) {
            fs.mkdirSync(layoutDir, { recursive: true });
          }
          
          if (!fs.existsSync(newPageWrapperDir)) {
            fs.mkdirSync(newPageWrapperDir, { recursive: true });
            await moveAndRenameComponent(fullPath, newPageWrapperDir);
            issues.movedComponents.push(`Moved page-wrapper to layout directory`);
          }
          continue;
        }

        // Special handling for contact-form component
        if (entry.name === 'contact-form' && parentName === 'components') {
          const formsDir = path.join(dir, 'forms');
          const newContactFormDir = path.join(formsDir, 'contact-form');
          
          if (!fs.existsSync(formsDir)) {
            fs.mkdirSync(formsDir, { recursive: true });
          }
          
          if (!fs.existsSync(newContactFormDir)) {
            fs.mkdirSync(newContactFormDir, { recursive: true });
            await moveAndRenameComponent(fullPath, newContactFormDir);
            issues.movedComponents.push(`Moved contact-form to forms directory`);
          }
          continue;
        }

        // Delete the homepage-hero component
        if (entry.name === 'homepage-hero') {
          console.log(`Deleting homepage-hero component`);
          await fs.promises.rm(fullPath, { recursive: true });
          issues.removedDuplicates.push(fullPath);
          continue;
        }

        if (isSubComponent(entry.name, parentName)) {
          subComponents.add(fullPath);
        } else {
          mainComponents.add(fullPath);
        }
      }

      // Function to move and rename component files
      const moveAndRenameComponent = async (sourcePath, targetPath) => {
        const files = await fs.promises.readdir(sourcePath);
        
        for (const file of files) {
          const sourceFilePath = path.join(sourcePath, file);
          const newFileName = file.replace(/[A-Z][a-z]+/, 'index');
          const targetFilePath = path.join(targetPath, newFileName);
          
          if (!fs.existsSync(targetFilePath)) {
            await fs.promises.rename(sourceFilePath, targetFilePath);
          }
        }
      };

      // Second pass: reorganize directories
      for (const subCompPath of subComponents) {
        const subCompName = path.basename(subCompPath);
        const baseComponentName = path.basename(path.dirname(subCompPath));
        
        // Find the main component directory
        const mainCompPath = Array.from(mainComponents)
          .find(mainPath => path.basename(mainPath).toLowerCase() === baseComponentName.toLowerCase());

        if (mainCompPath && subCompPath !== mainCompPath) {
          const targetPath = path.join(mainCompPath, subCompName);
          
          if (subCompPath !== targetPath) {
            if (!fs.existsSync(targetPath)) {
              fs.mkdirSync(targetPath, { recursive: true });
              await moveAndRenameComponent(subCompPath, targetPath);
              issues.movedComponents.push(`Moved ${subCompName} under ${baseComponentName}`);
            }

            // Update imports in the moved files
            const indexPath = path.join(targetPath, 'index.jsx');
            if (fs.existsSync(indexPath)) {
              await updateImportPaths(indexPath);
            }

            // Clean up empty original directory
            try {
              await fs.promises.rmdir(subCompPath, { recursive: true });
              issues.removedDuplicates.push(subCompPath);
            } catch (error) {
              console.error(`Error removing directory ${subCompPath}:`, error);
            }
          }
        }
      }

      // Process subdirectories recursively
      for (const mainPath of mainComponents) {
        await processDirectory(mainPath);
      }
    };

    // Start processing
    console.log('\nStarting component reorganization...');
    await processDirectory(componentsDir);

    // 5. Stage changes
    console.log('\nStaging changes...');
    await runGitCommand('git add .');

    // 6. Show diff for review
    console.log('\nChanges to be committed:');
    const diff = await runGitCommand('git diff --cached');
    console.log(diff);

    // 7. Ask for confirmation
    const shouldCommit = await question('\nWould you like to commit these changes? (yes/no): ');
    
    if (shouldCommit.toLowerCase() === 'yes') {
      const commitMessage = `refactor: Restructure component files

- Move page-wrapper into layout
- Move contact-form into forms directory
- Delete homepage-hero component
- Standardize component file naming to index.jsx
- Update nested component structure
- Fix import paths
- Reorganize SCSS files
- Clean up directory structure`;

      await runGitCommand(`git commit -m "${commitMessage}"`);
      console.log('\nChanges committed successfully!');
      
      // Ask about pushing
      const shouldPush = await question('\nWould you like to push this branch? (yes/no): ');
      if (shouldPush.toLowerCase() === 'yes') {
        await runGitCommand(`git push -u origin ${newBranchName}`);
        console.log('\nBranch pushed successfully!');
      }
    } else {
      // Offer to reset if they don't want to commit
      const shouldReset = await question('\nWould you like to reset the changes? (yes/no): ');
      if (shouldReset.toLowerCase() === 'yes') {
        await runGitCommand('git reset --hard');
        await runGitCommand(`git checkout ${currentBranch}`);
        await runGitCommand(`git branch -D ${newBranchName}`);
        console.log('\nAll changes have been reset and the branch has been deleted.');
      }
    }

    console.log('\nNext steps:');
    console.log('1. Review the changes in your code editor');
    console.log('2. Test the application thoroughly');
    console.log('3. Create a pull request if everything looks good');
    console.log(`4. To rollback, use: git checkout ${currentBranch} && git branch -D ${newBranchName}`);

  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
reorganizeComponents().catch(console.error);