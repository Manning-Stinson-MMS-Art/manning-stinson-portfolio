// scripts/create-original-dirs.js
import { 
  S3Client,
  ListObjectsCommand
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import dotenv from 'dotenv';
import winston from 'winston';

// Initialize dotenv
const result = dotenv.config();

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Validate environment variables
function validateEnv() {
  logger.info('Validating environment variables...');
  
  const required = ['SPACES_KEY', 'SPACES_SECRET'];
  const missing = [];

  required.forEach(variable => {
    if (!process.env[variable]) {
      missing.push(variable);
    }
  });

  if (missing.length > 0) {
    logger.error(`Missing required environment variables: ${missing.join(', ')}`);
    logger.error('Please create a .env file with the following variables:');
    logger.error(`
SPACES_KEY=your_spaces_access_key
SPACES_SECRET=your_spaces_secret_key
    `);
    process.exit(1);
  }

  if (result.error) {
    logger.error('Error loading .env file:', result.error);
    process.exit(1);
  }

  logger.info('Environment variables validated successfully');
  logger.info(`Using Digital Ocean Space: ${process.env.SPACES_KEY ? '✓ Key found' : '✗ Key missing'}`);
}

const s3Client = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
});

async function verifyS3Connection() {
  try {
    logger.info('Verifying S3 connection...');
    await s3Client.send(new ListObjectsCommand({ 
      Bucket: bucketName,
      MaxKeys: 1
    }));
    logger.info('Successfully connected to Digital Ocean Spaces');
    return true;
  } catch (error) {
    logger.error('Failed to connect to Digital Ocean Spaces:', error);
    return false;
  }
}

async function verifyDirectory(bucketName, dirPath) {
  try {
    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: dirPath,
      MaxKeys: 1
    });
    
    const response = await s3Client.send(command);
    return response.Contents && response.Contents.length > 0;
  } catch (error) {
    logger.error(`Error verifying directory ${dirPath}: ${error}`);
    return false;
  }
}

async function validateDirectoryStructure(bucketName, dirPath) {
  const requiredDirs = ['avif', 'webp'];
  let isValid = true;

  for (const dir of requiredDirs) {
    const exists = await verifyDirectory(bucketName, `${dirPath}${dir}/`);
    if (!exists) {
      logger.warn(`${dir}/ directory missing in ${dirPath}`);
      isValid = false;
    }
  }

  return isValid;
}

async function addOriginalDirectories(bucketName) {
  try {
    logger.info('Starting directory verification and creation process...');

    const listCommand = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: 'art-works/',
      Delimiter: '/'
    });

    const { CommonPrefixes } = await s3Client.send(listCommand);
    
    if (!CommonPrefixes) {
      logger.error('No directories found in art-works/');
      return;
    }

    const results = {
      processed: 0,
      skipped: 0,
      errors: 0,
      created: 0
    };

    for (const prefix of CommonPrefixes) {
      const dirPath = prefix.Prefix;
      const baseName = dirPath.split('/')[1];
      
      logger.info(`Processing directory: ${baseName}`);

      const isValid = await validateDirectoryStructure(bucketName, dirPath);
      if (!isValid) {
        logger.warn(`Skipping ${baseName} - Invalid directory structure`);
        results.skipped++;
        continue;
      }

      const originalExists = await verifyDirectory(bucketName, `${dirPath}original/`);
      
      if (originalExists) {
        logger.info(`Original directory already exists in ${baseName}/`);
        results.skipped++;
        continue;
      }

      try {
        const originalDirKey = `${dirPath}original/.keep`;
        
        // Create a buffer for empty file
        const emptyBuffer = Buffer.from('');
        
        const upload = new Upload({
          client: s3Client,
          params: {
            Bucket: bucketName,
            Key: originalDirKey,
            Body: emptyBuffer,
            ACL: 'public-read',
            Metadata: {
              'created-by': 'directory-setup-script',
              'created-date': new Date().toISOString()
            }
          }
        });

        await upload.done();
        
        const wasCreated = await verifyDirectory(bucketName, `${dirPath}original/`);
        if (wasCreated) {
          logger.info(`Created original directory in ${baseName}/`);
          results.created++;
        } else {
          logger.error(`Failed to verify creation of original directory in ${baseName}/`);
          results.errors++;
        }

      } catch (error) {
        logger.error(`Error creating original directory in ${baseName}: ${error}`);
        results.errors++;
      }

      results.processed++;
    }

    logger.info('=== Summary ===');
    logger.info(`Directories processed: ${results.processed}`);
    logger.info(`Directories created: ${results.created}`);
    logger.info(`Directories skipped: ${results.skipped}`);
    logger.info(`Errors encountered: ${results.errors}`);

  } catch (error) {
    logger.error(`Fatal Error: ${error}`);
  }
}

async function main() {
  try {
    // First validate environment variables
    validateEnv();

    // Then verify S3 connection
    const isConnected = await verifyS3Connection();
    if (!isConnected) {
      logger.error('Unable to proceed due to connection issues');
      process.exit(1);
    }

    // Then proceed with creating directories
    await addOriginalDirectories(bucketName);
  } catch (error) {
    logger.error('Fatal error:', error);
    process.exit(1);
  }
}

// Execute
const bucketName = '202411-portfolio-image-bucket';
main();