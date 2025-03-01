# Scripts Directory

This directory contains utility scripts for managing and maintaining the browser overlays repository.

## Available Scripts

### `setup.js`
A placeholder for a future setup utility that will help users customize overlays without directly editing HTML/CSS.

### `take-screenshots.js`
A Node.js script that uses Puppeteer (headless Chrome) to capture screenshots of each overlay at exactly 1920x1080 resolution.

#### Requirements:
- Node.js installed
- Puppeteer installed (`npm install puppeteer`)

#### Usage:
```
npm install puppeteer
node scripts/take-screenshots.js
```

### `take-screenshots.sh`
A shell script that uses Chrome in headless mode to capture screenshots of each overlay at exactly 1920x1080 resolution.

#### Requirements:
- Google Chrome installed

#### Usage:
```
# Make sure the script is executable
chmod +x scripts/take-screenshots.sh

# Run the script from the repository root
./scripts/take-screenshots.sh
```

## Adding New Scripts

When adding new scripts to this directory:

1. Give scripts descriptive names
2. Add appropriate documentation in this README
3. Include usage instructions and requirements
4. Make sure shell scripts are executable (`chmod +x script-name.sh`)