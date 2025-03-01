/**
 * Update README with Screenshots
 * 
 * This script replaces the placeholder images in the README.md
 * with links to the actual screenshots.
 * 
 * Usage:
 * - Run after taking screenshots with take-screenshots.js or take-screenshots.sh
 * - node update-readme-with-screenshots.js
 */

const fs = require('fs');
const path = require('path');

// Path to README file
const readmePath = path.join(__dirname, '..', 'README.md');

// Check if screenshots exist
const screenshots = {
  cozy109: path.join(__dirname, '..', 'docs', 'screenshots', 'cozy-10-9-gameboy.png'),
  cozy169: path.join(__dirname, '..', 'docs', 'screenshots', 'cozy-16-9-widescreen.png')
};

let missingScreenshots = [];
for (const [key, screenshotPath] of Object.entries(screenshots)) {
  if (!fs.existsSync(screenshotPath)) {
    missingScreenshots.push(key);
  }
}

if (missingScreenshots.length > 0) {
  console.error(`Error: Screenshots missing: ${missingScreenshots.join(', ')}`);
  console.error('Please run the screenshot script first.');
  process.exit(1);
}

// Read README content
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Replace placeholder images with actual screenshot links
readmeContent = readmeContent.replace(
  /<div style="background-color: #B89F7A; height: 100px; border-radius: 8px; margin: 10px 0; display: flex; align-items: center; justify-content: center; color: white;">Preview Image<\/div>/g,
  '<img src="docs/screenshots/cozy-10-9-gameboy.png" alt="Cozy 10:9 GameBoy Overlay" style="width: 100%; border-radius: 8px; margin: 10px 0;">'
);

readmeContent = readmeContent.replace(
  /<div style="background-color: #5f9ea0; height: 100px; border-radius: 8px; margin: 10px 0; display: flex; align-items: center; justify-content: center; color: white;">Preview Image<\/div>/g,
  '<img src="docs/screenshots/cozy-16-9-widescreen.png" alt="Cozy 16:9 Widescreen Overlay" style="width: 100%; border-radius: 8px; margin: 10px 0;">'
);

// Write updated README
fs.writeFileSync(readmePath, readmeContent);

console.log('README.md updated with screenshot images!');