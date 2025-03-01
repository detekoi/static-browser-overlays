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

// Overlays to screenshot
const overlays = [
  {
    name: 'cozy-10-9-gameboy',
    path: path.join(__dirname, '..', 'overlays', 'cozy 10-9 aspect ratio', 'overlay.html'),
    outputFile: path.join(screenshotsDir, 'cozy-10-9-gameboy.png')
  },
  {
    name: 'cozy-16-9-widescreen',
    path: path.join(__dirname, '..', 'overlays', 'cozy 16-9 aspect ratio', 'overlay.htm'),
    outputFile: path.join(screenshotsDir, 'cozy-16-9-widescreen.png')
  }
];

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