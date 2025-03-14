# Scripts Directory

This directory contains utility scripts for managing and maintaining the browser overlays repository.

## Workflow Order

When adding new overlays or backgrounds, run these scripts in the following order:

1. `validate-html.sh` - Validate HTML files for errors
2. `take-screenshots.js` - Generate screenshots of overlays and backgrounds
3. `update-readme-with-screenshots.js` - Update README with new screenshots
4. `create-release-zips.js` - Package overlays and backgrounds for distribution

## Available Scripts

### `setup.js`
A placeholder for a future setup utility that will help users customize overlays without directly editing HTML/CSS.

### `validate-html.sh`
A shell script that validates all HTML files in the sources directory using the W3C Nu HTML Checker via a curl request.

#### Requirements:
- curl installed (pre-installed on most macOS and Linux systems).
- Internet connection (to access the W3C validator service).

#### Usage:
```
# Make sure the script is executable
chmod +x scripts/validate-html.sh

# Run the script from the scripts directory
cd scripts
./validate-html.sh
```

### `take-screenshots.js`
A Node.js script that uses Puppeteer (headless Chrome) to capture screenshots of each overlay at exactly 1920x1080 resolution.

#### Requirements:
- Node.js installed.
- Puppeteer installed (`npm install puppeteer`).

#### Usage:
```
npm install puppeteer
node scripts/take-screenshots.js
```

### `update-readme-with-screenshots.js`
A Node.js script that updates the main README.md with screenshots of each overlay and background.

#### Requirements:
- Node.js installed.
- Screenshots generated (run `take-screenshots.js` first).

#### Usage:
```
node scripts/update-readme-with-screenshots.js
```

### `create-release-zips.js`
A Node.js script that creates ZIP files for each overlay and background and places them in the releases directory. The script only creates new ZIP files if they don't already exist or if source files have been modified.

#### Requirements:
- Node.js installed.
- zip command-line utility (pre-installed on most macOS and Linux systems).

#### Usage:
```
node scripts/create-release-zips.js
```

## Adding New Scripts

When adding new scripts to this directory:

1. Give scripts descriptive names.
2. Add appropriate documentation in this README.
3. Include usage instructions and requirements.
4. Make sure shell scripts are executable (`chmod +x script-name.sh`).
