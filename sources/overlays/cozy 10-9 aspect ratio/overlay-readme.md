# Cozy 10:9 GameBoy Overlay - Documentation

This document explains how to use and customize the Cozy 10:9 GameBoy overlay for your retro gaming streams.

## Overview

A charming GameBoy-inspired frame with leaf decorations, perfect for retro games. This overlay is designed to work with classic Game Boy games and emulators that use the 10:9 aspect ratio.

![Cozy 10:9 GameBoy Overlay](../../../docs/screenshots/cozy-10-9-gameboy.png)

## Features

- GameBoy-inspired retro frame with subtle texture.
- Decorative leaf elements for a cozy aesthetic.
- Dedicated webcam viewing area.
- Screen labels with customizable text.
- Optimized for 10:9 aspect ratio retro games.

## Adding to OBS Studio

1. **Add as Browser Source**:
   - In OBS Studio, click the "+" button in the Sources panel.
   - Select "Browser" from the menu.
   - Name your source (e.g., "GameBoy Overlay").
   - Check "Local file" and click "Browse".
   - Locate and select the overlay.html file.
   - Set Width to 1920 and Height to 1080 (or your stream resolution).
   - Click "OK" to add the source.

2. **Position Your Game Capture**:
   - Add your game capture source.
   - Resize and position it to fit within the GameBoy frame.
   - Make sure the game source is below the overlay in the sources list.

3. **Position Your Webcam**:
   - Add your webcam source.
   - Resize and position it to fit within the designated webcam area.
   - Ensure the webcam is below the overlay in the sources list.

## Customization Options

The overlay can be customized by editing the HTML file in any text editor:

### Changing Text Labels

Find the label sections in the HTML:

```html
<div class="screen-label">YOUR GAME TITLE</div>
<div class="webcam-label">WEBCAM</div>
```

Change the text between the div tags to your preferred labels.

### Adjusting Colors

Find the CSS variables in the style section:

```css
:root {
    --gameboy-color: #8bac0f;
    --gameboy-dark: #0f380f;
    --gameboy-light: #9bbc0f;
    --frame-color: #e0e0e0;
    --accent-color: #9bbc0f;
}
```

Modify these hex color codes to change the color scheme. For example:
- For a blue GameBoy theme: `--gameboy-color: #0f3b8c;`
- For a pink GameBoy theme: `--gameboy-color: #ff9bbc;`

### Changing Leaf Decorations

The leaf decorations are defined in the SVG elements. You can:
1. Change their colors by adjusting the `fill` attributes.
2. Modify their positions by changing the `transform` attributes.
3. Remove them by deleting the corresponding SVG elements.
4. Add more by duplicating and adjusting the existing leaf elements.

### Layout Adjustments

The main layout dimensions are defined in these classes:

```css
.gameboy-frame {
    width: 780px;
    height: 680px;
    /* other properties */
}

.webcam-container {
    width: 320px;
    height: 240px;
    /* other properties */
}
```

Adjust the width and height values to change the size of these elements.

## Customizing for Different Game Systems

While this overlay is optimized for GameBoy games, you can adapt it for other retro systems:

### For Game Boy Color:
- Adjust the `--gameboy-color` variable to match Game Boy Color palette.
- Update the screen labels to reflect Game Boy Color games.

### For Game Boy Advance:
- Modify the frame proportions for GBA's wider 3:2 aspect ratio.
- Adjust colors to match the GBA's purple aesthetic.

## Advanced Customization

For more advanced changes:

1. **Font Customization**: Replace the Google Font import with your preferred font.
2. **Animation Effects**: Add CSS animations to bring elements to life.
3. **Adding Images**: Insert additional background images or decorative elements.

## Compatibility

This overlay is designed for:
- Original Game Boy games (10:9 aspect ratio).
- Game Boy Color games.
- Game Boy emulators.
- Any retro game that looks good in a 10:9 frame.

## Troubleshooting

If elements don't align properly:
1. Verify your OBS canvas is set to 1920x1080.
2. Check that your game source is properly sized.
3. Ensure the overlay is positioned at the top layer.
4. Try refreshing the browser source.

## Questions or Issues?

If you have any questions about customizing this overlay or encounter any issues, please open an issue in the GitHub repository.
