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

### `create-release-zips.js`
A Node.js script that creates ZIP files for each overlay and background and places them in the releases directory. The script only creates new ZIP files if they don't already exist or if source files have been modified.

#### Requirements:
- Node.js installed
- zip command-line utility (pre-installed on most macOS and Linux systems)

#### Usage:
```
node scripts/create-release-zips.js
```

### `validate-html.sh`
A shell script that validates all HTML files in the sources directory using the W3C Nu HTML Checker via a curl request.

#### Requirements:
- curl installed (pre-installed on most macOS and Linux systems)
- Internet connection (to access the W3C validator service)

#### Usage:
```
# Make sure the script is executable
chmod +x scripts/validate-html.sh

# Run the script from the scripts directory
cd scripts
./validate-html.sh
```

## Adding New Scripts

When adding new scripts to this directory:

1. Give scripts descriptive names
2. Add appropriate documentation in this README
3. Include usage instructions and requirements
4. Make sure shell scripts are executable (`chmod +x script-name.sh`)