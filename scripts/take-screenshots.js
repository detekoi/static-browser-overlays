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

// Function to dynamically discover all overlays
function discoverOverlays() {
  const overlaysDir = path.join(__dirname, '..', 'overlays');
  const overlayFolders = fs.readdirSync(overlaysDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const discoveredOverlays = [];
  
  for (const folder of overlayFolders) {
    const folderPath = path.join(overlaysDir, folder);
    const files = fs.readdirSync(folderPath);
    
    // Look for overlay.html or overlay.htm files
    const overlayFile = files.find(file => file === 'overlay.html' || file === 'overlay.htm');
    
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
  
  return discoveredOverlays;
}

// Discover all overlays
const overlays = discoverOverlays();

async function takeScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const overlay of overlays) {
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