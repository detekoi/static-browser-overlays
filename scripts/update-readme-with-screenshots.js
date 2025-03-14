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

// Before processing, clean up any duplicate sections that might exist
const gettingStartedPosition = readmeContent.indexOf('## Getting Started');
if (gettingStartedPosition !== -1) {
  // Remove any duplicate entries that might exist between existing sections
  // This helps clean up any messed up sections from previous runs
  const availableOverlaysPosition = readmeContent.indexOf('## Available Overlays');
  const availableBackgroundsPosition = readmeContent.indexOf('## Available Backgrounds');
  
  if (availableOverlaysPosition !== -1 && availableBackgroundsPosition !== -1) {
    // Extract the clean sections
    const beforeOverlays = readmeContent.substring(0, availableOverlaysPosition);
    const overlaysSection = readmeContent.substring(availableOverlaysPosition, availableBackgroundsPosition);
    const backgroundsSection = readmeContent.substring(availableBackgroundsPosition, gettingStartedPosition);
    const afterBackgrounds = readmeContent.substring(gettingStartedPosition);
    
    // Reconstruct the README with clean sections
    readmeContent = beforeOverlays + overlaysSection + backgroundsSection + afterBackgrounds;
  }
}

// Check for missing screenshots in README
for (const screenshot of overlayScreenshots) {
  const screenshotPath = `docs/screenshots/${screenshot.file}`;
  // Also check for section header to avoid duplicates
  const sectionHeader = `### ${screenshot.readableName}`;
  if (!readmeContent.includes(screenshotPath) && !readmeContent.includes(sectionHeader)) {
    console.log(`Adding ${screenshot.readableName} to README...`);
    
    // Determine if this is a background or overlay
    const isBackground = screenshot.overlayId.includes('background');
    
    // Find overlay directory path
    let overlayDirPath;
    if (isBackground) {
      overlayDirPath = path.join(__dirname, '..', 'sources', 'backgrounds', screenshot.overlayId);
    } else {
      // For overlays, find the closest matching directory name
      const overlaysDir = path.join(__dirname, '..', 'sources', 'overlays');
      const overlayDirs = fs.readdirSync(overlaysDir);
      const matchingDir = overlayDirs.find(dir => 
        dir.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(screenshot.overlayId.toLowerCase())
      );
      
      overlayDirPath = matchingDir ? path.join(overlaysDir, matchingDir) : null;
    }
    
    // Try to find a readme file in the overlay directory
    let readmePath = null;
    if (overlayDirPath && fs.existsSync(overlayDirPath)) {
      const files = fs.readdirSync(overlayDirPath);
      readmePath = files.find(file => file.toLowerCase().includes('readme') && file.endsWith('.md'));
      if (readmePath) {
        // Create a relative path from project root to the readme file
        // Make sure we're using the correct sources path
        const sourcesPath = overlayDirPath.substring(overlayDirPath.indexOf('sources'));
        // Remove any reference to the repo directory path
        const cleanPath = sourcesPath.replace(/game-overlays-repo\//, '');
        readmePath = path.join(cleanPath, readmePath);
      }
    }
    
    // Create description (placeholder if no readme found)
    let description = `A stylish overlay for ${screenshot.readableName} streams.`;
    
    // Create documentation link if readme exists
    const docLink = readmePath ? `[📄 Documentation](${readmePath}) | ` : '';
    
    // Create a new section template for the missing overlay
    const newSection = `
### ${screenshot.readableName}

${description}

![${screenshot.readableName} Overlay](docs/screenshots/${screenshot.file})

${docLink}[⬇️ Download ZIP](releases/${screenshot.overlayId}.zip?raw=true)
`;
    
    if (isBackground) {
      // Add the new background to the Available Backgrounds section
      const availableBackgroundsPosition = readmeContent.indexOf('## Available Backgrounds');
      const nextSectionPosition = readmeContent.indexOf('##', availableBackgroundsPosition + 1);
      if (availableBackgroundsPosition !== -1 && nextSectionPosition !== -1) {
        readmeContent = 
          readmeContent.slice(0, nextSectionPosition) + 
          newSection + 
          readmeContent.slice(nextSectionPosition);
      } else {
        // Fallback if section markers not found - add before Getting Started
        const gettingStartedPosition = readmeContent.indexOf('## Getting Started');
        readmeContent = 
          readmeContent.slice(0, gettingStartedPosition) + 
          newSection + 
          readmeContent.slice(gettingStartedPosition);
      }
    } else {
      // Add the new overlay to the Available Overlays section
      const availableOverlaysPosition = readmeContent.indexOf('## Available Overlays');
      const nextSectionPosition = readmeContent.indexOf('## Available Backgrounds');
      if (availableOverlaysPosition !== -1 && nextSectionPosition !== -1) {
        readmeContent = 
          readmeContent.slice(0, nextSectionPosition) + 
          newSection + 
          readmeContent.slice(nextSectionPosition);
      } else {
        // Fallback if section markers not found - add before Getting Started
        const gettingStartedPosition = readmeContent.indexOf('## Getting Started');
        readmeContent = 
          readmeContent.slice(0, gettingStartedPosition) + 
          newSection + 
          readmeContent.slice(gettingStartedPosition);
      }
    }
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