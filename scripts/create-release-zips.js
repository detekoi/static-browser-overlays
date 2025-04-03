/**
 * Create Release ZIP Files
 * 
 * This script creates ZIP files for each overlay and background
 * and places them in the releases directory
 * 
 * Usage:
 * - node scripts/create-release-zips.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Make sure releases directory exists
const releasesDir = path.join(__dirname, '..', 'releases');
if (!fs.existsSync(releasesDir)) {
  fs.mkdirSync(releasesDir, { recursive: true });
}

// Function to discover all overlays and backgrounds
function discoverSources() {
  const sourcesDir = path.join(__dirname, '..', 'sources');
  const categories = ['overlays', 'backgrounds'];
  const discoveredSources = [];
  
  for (const category of categories) {
    const categoryPath = path.join(sourcesDir, category);
    if (!fs.existsSync(categoryPath)) continue;
    
    const sourceFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const folder of sourceFolders) {
      const folderPath = path.join(categoryPath, folder);
      const files = fs.readdirSync(folderPath);
      
      // Look for HTML files
      const htmlFile = files.find(file => 
        file.endsWith('.html') || file.endsWith('.htm')
      );
      
      if (htmlFile) {
        // Format the name from folder for output filename
        // Convert spaces to dashes and keep lowercase
        const folderNameClean = folder.toLowerCase().replace(/\s+/g, '-');
        
        discoveredSources.push({
          name: folderNameClean,
          folderPath,
          categoryType: category
        });
      }
    }
  }
  
  return discoveredSources;
}

// Create ZIP files
async function createZipFiles() {
  const sources = discoverSources();
  
  if (sources.length === 0) {
    return;
  }
  
  // Track if any zips need to be created or updated
  let updatesNeeded = false;
  let updatedCount = 0;
  
  for (const source of sources) {
    const zipFilePath = path.join(releasesDir, `${source.name}.zip`);
    
    // Check if zip already exists - only create if it doesn't exist
    let shouldZip = !fs.existsSync(zipFilePath);
    
    if (shouldZip) {
      updatesNeeded = true;
      updatedCount++;
      
      // Only log when we're actually creating a new zip
      console.log(`Creating zip for ${source.name}...`);
      
      // Create the ZIP file using the system's zip command
      await new Promise((resolve, reject) => {
        // Navigate to the source directory before zipping to maintain clean structure
        const sourceDir = path.dirname(source.folderPath);
        const folderName = path.basename(source.folderPath);
        
        // Use zip command with -r (recursive) option
        const command = `cd "${sourceDir}" && zip -r "${zipFilePath}" "${folderName}"`;
        
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error creating zip for ${source.name}: ${error.message}`);
            reject(error);
            return;
          }
          resolve();
        });
      });
    }
  }
  
  // Only show summary if we actually did something
  if (updatesNeeded) {
    console.log(`Updated ${updatedCount} zip file(s).`);
  }
}

// Run the script
createZipFiles().catch(error => {
  console.error('Error creating release zips:', error);
  process.exit(1);
});