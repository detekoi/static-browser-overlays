# Screenshots

This directory contains screenshots of the overlays for documentation and preview purposes.

## Current Screenshots

- **cozy-10-9-gameboy.png**: The GameBoy-inspired overlay with 10:9 aspect ratio and leaf decorations.
- **cozy-16-9-widescreen.png**: The widescreen overlay with 16:9 aspect ratio and minimal design elements.

## Guidelines for Screenshots

When adding screenshots of overlays:

1. Capture at 1920x1080 resolution.
2. Show the overlay with empty spaces to highlight the frame design.
3. Include variations with different customization options if available.
4. Use descriptive kebab-case filenames (e.g., `cozy-10-9-dark-theme.png`).

## Creating Screenshots

Screenshots can be automatically generated using:

```
node scripts/take-screenshots.js
```

This script uses Puppeteer to capture the overlays at exactly 1920x1080 resolution.

## Adding Your Own

If you've customized an overlay and want to share screenshots, please:

1. Follow the naming convention.
2. Optimize images for web (PNG or JPEG format, reasonable file size).
3. Include a brief description in a pull request.
