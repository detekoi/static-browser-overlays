/**
 * Screenshot Generator for Browser Overlays
 * 
 * This script uses Puppeteer (headless Chrome) to capture screenshots 
 * of each overlay at exactly 1920x1080 resolution.
 * 
 * Requirements:
 * - Node.js installed
 * - Run 'npm install puppeteer' before running this script
 * 
 * Usage:
 * - node take-screenshots.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Make sure screenshots directory exists
const screenshotsDir = path.join(__dirname, '..', 'docs', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Function to dynamically discover all overlays and backgrounds
function discoverOverlays() {
  const sourcesDir = path.join(__dirname, '..', 'sources');
  const categories = ['overlays', 'backgrounds'];
  const discoveredOverlays = [];
  
  for (const category of categories) {
    const categoryPath = path.join(sourcesDir, category);
    if (!fs.existsSync(categoryPath)) continue;
    
    const overlayFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const folder of overlayFolders) {
      const folderPath = path.join(categoryPath, folder);
      const files = fs.readdirSync(folderPath);
    
      // Hierarchical fallback approach for finding HTML files
      let overlayFile = null;
      
      // First priority: look for specific named files
      const priorityFiles = [
        'overlay.html', 'overlay.htm',
        'background.html', 'background.htm',
        'index.html', 'index.htm',
        'default.html', 'default.htm'
      ];
      
      overlayFile = files.find(file => priorityFiles.includes(file));
      
      // Second priority: look for files ending with "overlay.html", "overlay.htm", 
      // "background.html", or "background.htm"
      if (!overlayFile) {
        overlayFile = files.find(file => 
          file.endsWith('overlay.html') || 
          file.endsWith('overlay.htm') || 
          file.endsWith('background.html') || 
          file.endsWith('background.htm')
        );
      }
      
      // Final fallback: any HTML file
      if (!overlayFile) {
        overlayFile = files.find(file => 
          file.endsWith('.html') || file.endsWith('.htm')
        );
      }
      
      if (overlayFile) {
        // Format the name from folder for output filename
        // Convert spaces to dashes and keep lowercase
        const folderNameClean = folder.toLowerCase().replace(/\s+/g, '-');
        
        discoveredOverlays.push({
          name: folderNameClean,
          path: path.join(folderPath, overlayFile),
          outputFile: path.join(screenshotsDir, `${folderNameClean}.png`)
        });
      }
    }
  }
  
  return discoveredOverlays;
}

// Discover all overlays
const overlays = discoverOverlays();

async function takeScreenshots() {
  // Check if we need to take any screenshots
  const screenshotsNeeded = overlays.filter(overlay => !fs.existsSync(overlay.outputFile));
  
  if (screenshotsNeeded.length === 0) {
    console.log('All screenshots already exist. No new screenshots needed.');
    return;
  }
  
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const overlay of overlays) {
    const screenshotExists = fs.existsSync(overlay.outputFile);
    
    if (screenshotExists) {
      // Skip if screenshot already exists
      continue;
    }
    
    console.log(`Taking screenshot of ${overlay.name}...`);
    const page = await browser.newPage();
    
    // Set viewport to exactly 1920x1080
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });

    // Convert to file URL
    const fileUrl = `file://${overlay.path}`;
    
    // Navigate to the overlay
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Take screenshot
    await page.screenshot({
      path: overlay.outputFile,
      fullPage: true,
      type: 'png'
    });
    
    console.log(`Screenshot saved to ${overlay.outputFile}`);
    await page.close();
  }

  await browser.close();
  console.log('All screenshots completed!');
}

takeScreenshots().catch(error => {
  console.error('Error taking screenshots:', error);
  process.exit(1);
});