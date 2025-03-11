# Cozy 16:9 Widescreen Overlay - Documentation

This document explains how to use and customize the Cozy 16:9 Widescreen overlay for your modern gaming streams.

## Overview

A modern 16:9 transparent overlay with minimalist borders and arctic-themed elements, perfect for contemporary games and content. Features subtle animated effects including aurora borealis and gentle snowfall.

![Cozy 16:9 Widescreen Overlay](../../../docs/screenshots/cozy-16-9-widescreen.png)

## Features

- Clean, minimalist frame design with subtle borders.
- Animated aurora borealis effects in the background.
- Gentle falling snowflakes animation.
- Decorative icicles along the top edge.
- Designated spaces for webcam and chat.
- Fully optimized for 16:9 widescreen games.

## Adding to OBS Studio

1. **Add as Browser Source**:
   - In OBS Studio, click the "+" button in the Sources panel.
   - Select "Browser" from the menu.
   - Name your source (e.g., "Arctic Overlay").
   - Check "Local file" and click "Browse".
   - Locate and select the overlay.htm file.
   - Set Width to 1920 and Height to 1080 (or your stream resolution).
   - Click "OK" to add the source.

2. **Position Your Game Capture**:
   - Add your game capture source.
   - Resize and position it to fit within the frame.
   - Make sure the game source is below the overlay in the sources list.

3. **Position Your Webcam**:
   - Add your webcam source.
   - Resize and position it to fit within the circular webcam area.
   - Ensure the webcam is below the overlay in the sources list.

## Customization Options

### Changing Colors

Find the CSS variables in the style section:

```css
:root {
    --aurora-color-1: rgba(86, 207, 225, 0.2);
    --aurora-color-2: rgba(137, 255, 177, 0.2);
    --aurora-color-3: rgba(126, 206, 244, 0.2);
    --background-color: #e8f4f8;
    --border-color: rgba(255, 255, 255, 0.5);
    --snow-color: #ffffff;
    --text-color: #2a3b4c;
}
```

Modify these variables to change the color scheme:
- `--aurora-color-*`: The colors of the aurora borealis effect.
- `--background-color`: The main background color.
- `--border-color`: The color of frame borders.
- `--snow-color`: The color of snowflakes.
- `--text-color`: The color of any text elements.

### Adjusting Animations

The animations can be customized by modifying their properties:

#### Aurora Effect:
```css
.aurora {
    animation: aurora-wave 20s ease-in-out infinite alternate;
}

.aurora-2 {
    animation: aurora-wave 15s ease-in-out infinite alternate-reverse;
}
```

Change the duration (20s and 15s) to speed up or slow down the animation.

#### Snowfall:
```css
.snowflake {
    animation: snowfall var(--fall-duration) linear infinite;
}
```

Adjust the `--fall-duration` values for individual snowflakes to change their falling speed.

### Layout Modifications

The main frame and elements are positioned using percentages, making them adaptable to different resolutions:

```css
.game-frame {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 70%;
    border: 2px solid var(--border-color);
    /* other properties */
}

.webcam-container {
    position: absolute;
    bottom: 15%;
    right: 5%;
    width: 18%;
    height: 0;
    padding-bottom: 18%;
    /* other properties */
}
```

Modify these percentage values to resize or reposition elements.

## Theme Customization

This overlay is designed with an arctic theme, but can be adapted to other aesthetics:

### For a Cozy Autumn Theme:
- Change aurora colors to warm oranges and yellows.
- Replace snowflakes with falling leaves.
- Adjust the background to a warmer tone.

### For a Space Theme:
- Change aurora colors to purples and blues.
- Replace snowflakes with twinkling stars.
- Adjust the background to a dark color.

## Advanced Customization

For more advanced changes:

1. **Adding Text Elements**: Insert custom text fields for stream info.
2. **Widget Integration**: Leave space for subscriber alerts and other widgets.
3. **Custom Graphics**: Add your own SVG or PNG elements to personalize the overlay.

## Compatibility

This overlay is designed for:
- Modern console games (PS5, Xbox Series, Nintendo Switch).
- PC games at 16:9 aspect ratio.
- Any content that benefits from a widescreen display.

## Troubleshooting

If animations appear choppy:
1. Check that your OBS is not exceeding CPU/GPU limits.
2. Try setting the browser source to 30fps instead of 60fps.
3. Disable hardware acceleration in the browser source settings.
4. Remove some snowflake elements to reduce animation complexity.

## Questions or Issues?

If you have any questions about customizing this overlay or encounter any issues, please open an issue in the GitHub repository.
