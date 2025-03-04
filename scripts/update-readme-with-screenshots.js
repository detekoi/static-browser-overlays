/**
 * Update README with Screenshots
 * 
 * This script ensures all screenshots are properly included in the README.md
 * It checks all screenshots in the docs/screenshots directory and makes sure they have
 * corresponding entries in the README
 * 
 * Usage:
 * - Run after taking screenshots with take-screenshots.js
 * - node update-readme-with-screenshots.js
 */

const fs = require('fs');
const path = require('path');

// Path to README file
const readmePath = path.join(__dirname, '..', 'README.md');
const screenshotsDir = path.join(__dirname, '..', 'docs', 'screenshots');

// Read README content
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Get all screenshot files
const screenshotFiles = fs.readdirSync(screenshotsDir)
  .filter(file => file.endsWith('.png') && !file.startsWith('README'));

// Map screenshot files to their overlay names
const overlayScreenshots = screenshotFiles.map(file => {
  const overlayId = path.basename(file, '.png');
  
  // Convert kebab-case to readable format (e.g., cozy-4-3-aspect-ratio -> Cozy 4:3 Aspect Ratio)
  let readableName = '';
  
  // Special handling for aspect ratio patterns like 4-3 or 16-9
  if (overlayId.match(/cozy-(\d+)-(\d+)-aspect-ratio/)) {
    const match = overlayId.match(/cozy-(\d+)-(\d+)-aspect-ratio/);
    readableName = `Cozy ${match[1]}:${match[2]} Aspect Ratio`;
  } else {
    // Generic formatting for other names
    readableName = overlayId
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
  
  return {
    file,
    overlayId,
    readableName
  };
});

// Check for missing screenshots in README
for (const screenshot of overlayScreenshots) {
  const screenshotPath = `docs/screenshots/${screenshot.file}`;
  if (!readmeContent.includes(screenshotPath)) {
    console.log(`Adding ${screenshot.readableName} to README...`);
    
    // Create a new section template for the missing overlay
    const newSection = `
### ${screenshot.readableName}

![${screenshot.readableName} Overlay](docs/screenshots/${screenshot.file})

[⬇️ Download ZIP](releases/${screenshot.overlayId}.zip?raw=true)
`;
    
    // Add the new section before the "Getting Started" section
    const gettingStartedPosition = readmeContent.indexOf('## Getting Started');
    readmeContent = 
      readmeContent.slice(0, gettingStartedPosition) + 
      newSection + 
      readmeContent.slice(gettingStartedPosition);
  }
}

// Replace any placeholder images
readmeContent = readmeContent.replace(
  /<div style="background-color: #[0-9A-F]+; height: 100px; border-radius: 8px; margin: 10px 0; display: flex; align-items: center; justify-content: center; color: white;">Preview Image<\/div>/g,
  match => {
    // Just in case there are any placeholders left, replace with the first screenshot
    if (overlayScreenshots.length > 0) {
      return `<img src="docs/screenshots/${overlayScreenshots[0].file}" alt="${overlayScreenshots[0].readableName} Overlay" style="width: 100%; border-radius: 8px; margin: 10px 0;">`;
    }
    return match;
  }
);

// Write updated README
fs.writeFileSync(readmePath, readmeContent);

console.log('README.md updated with screenshot images!');