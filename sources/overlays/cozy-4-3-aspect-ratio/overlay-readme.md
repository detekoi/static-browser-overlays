# Cozy 4:3 Classic Overlay - Documentation

This document explains how to use and customize the Cozy 4:3 Classic overlay for your retro gaming streams.

## Overview

A classic overlay designed for retro games and consoles that use the standard 4:3 aspect ratio. Features clean, transparent backgrounds with a vintage coffee cup decoration, perfect for streaming classic console games.

![Cozy 4:3 Classic Overlay](../../../docs/screenshots/cozy-4-3-aspect-ratio.png)

## Features

- Clean frame design optimized for 4:3 aspect ratio games
- Vintage coffee cup decoration for a cozy streaming atmosphere
- Semi-transparent borders that don't distract from gameplay
- Designated areas for game capture, webcam, and chat/information
- SVG-based design for crisp visuals at any resolution

## Adding to OBS Studio

1. **Add as Browser Source**:
   - In OBS Studio, click the "+" button in the Sources panel
   - Select "Browser" from the menu
   - Name your source (e.g., "Cozy 4:3 Overlay")
   - Check "Local file" and click "Browse"
   - Locate and select the overlay.html file
   - Set Width to 1920 and Height to 1080 (or your stream resolution)
   - Click "OK" to add the source

2. **Position Your Game Capture**:
   - Add your game capture source
   - Resize and position it to fit within the 4:3 frame area
   - Make sure the game source is below the overlay in the sources list

3. **Position Your Webcam**:
   - Add your webcam source
   - Resize and position it to fit within the designated webcam area
   - Ensure the webcam is below the overlay in the sources list

## Customization Options

### Modifying the SVG Elements

The overlay uses an SVG file embedded directly in the HTML. To customize it:

1. Open the HTML file in a text editor
2. Locate the SVG content between the `<svg>` tags
3. Edit the elements as needed:
   - Colors can be changed by modifying `fill` and `stroke` attributes
   - Element positions can be adjusted by changing coordinate values
   - Shapes can be modified by editing path data

### Changing the Coffee Cup

The coffee cup is a key decorative element. To customize it:

1. Find the coffee cup SVG group in the HTML
2. Modify colors by changing the fill values
3. You can replace it with a different icon by changing the path data
4. Adjust its position by modifying the transform attributes

### Color Scheme

The main colors are defined in the SVG elements. Look for these attributes to change them:

```xml
fill="#8B4513" <!-- Brown coffee cup -->
fill="#D2B48C" <!-- Tan accent color -->
fill="rgba(255,255,255,0.2)" <!-- Transparent white frames -->
```

Change these values to match your stream's color scheme.

### Layout Adjustments

The overlay layout is defined in the SVG viewBox and element positions. For major layout changes:

1. Modify the SVG viewBox attribute to change the overall dimensions
2. Adjust rect elements' x, y, width, and height attributes to resize frames
3. Update transform attributes to reposition decorative elements

## Special Configuration for Different Systems

### For NES/SNES Games:
- The default layout works perfectly for Nintendo 8-bit and 16-bit consoles
- No adjustments needed for standard NES/SNES emulators

### For PlayStation 1:
- Many PS1 games use 4:3 aspect ratio and work well with this overlay
- Some PS1 games use a slightly different resolution that may need minor tweaking

### For Classic PC Games:
- Works well with DOS games and early Windows games that use 4:3 resolution
- May need minor adjustments for games that use unusual aspect ratios

## Advanced Customization

For more extensive customization:

1. **Adding Text Elements**: Insert custom SVG text elements for stream info
2. **Custom Decorations**: Replace or add SVG decorative elements that match your brand
3. **Animation**: Add CSS animations to bring elements to life (subtle movements of the coffee cup, steam effects, etc.)

## Compatibility

This overlay is designed for:
- Classic console games (NES, SNES, Genesis, etc.)
- Retro PC games
- Arcade emulators
- Any content that uses the standard 4:3 aspect ratio

## Troubleshooting

If the overlay doesn't display correctly:
1. Verify that the SVG code is intact and properly formatted
2. Check that your OBS browser source is set to 1920x1080
3. Ensure the overlay is positioned at the top layer in your sources list
4. Try refreshing the browser source if elements are missing

## Questions or Issues?

If you have any questions about customizing this overlay or encounter any issues, please open an issue in the GitHub repository.