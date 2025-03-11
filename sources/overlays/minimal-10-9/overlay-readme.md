# Minimal 10:9 Overlay

A clean, minimal overlay for 10:9 aspect ratio gameplay (common for Game Boy Advance and other handhelds) with transparent background and **highly customizable** styling options.

## Features

- Clean design with minimal elements.
- Transparent background for use with any background images.
- **Customizable borders** - change color, transparency, thickness, and corner roundness.
- Optimized 10:9 game window (1180×1062 pixels) for 1920×1080 displays.
- **Adjustable webcam container** - modify size, position, shape, and background color.
- Ability to hide webcam container entirely via CSS variable.
- **Easy customization** through simple CSS variables - no coding knowledge required.

## Customization

All customization options are available through CSS variables in the `:root` section. This makes it easy to adjust the overlay without having to modify multiple CSS properties.

```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    --shadow-color: rgba(0, 0, 0, 0.4);
    
    /* Game window position and size - for 1920x1080 resolution */
    --game-width: 1180px;        /* Fixed width for 10:9 game window */
    --game-height: 1062px;        /* Fixed height (1180 * 9/10 = 1062) */
    --game-left-position: 45%;   /* Left position of game window */
    
    /* Webcam position and size */
    --webcam-size: 300px;        /* Width and height of webcam container */
    --webcam-bottom: 35%;        /* Distance from bottom - centers vertically */
    --webcam-right: 5.5%;        /* Distance from right - centered in space between game and edge */
    --webcam-visibility: block;  /* Set to "none" to hide webcam container */
    --webcam-bg-color: rgba(0, 0, 0, 1); /* Background color behind webcam - solid black */
}
```

### Border Customization

The overlay borders are fully customizable:

- **Color**: Change `--border-color` to any color using hex codes, RGB, or RGBA values.
- **Transparency**: Adjust the alpha channel in `--border-color` (the last number in rgba).
- **Shadow**: Modify `--shadow-color` for a subtle depth effect.
- **Thickness**: Edit the border width in the CSS to create thinner or thicker borders.
- **Corner Roundness**: Adjust the border-radius in the CSS for more squared or rounded corners.

### Game Window Positioning

The game window is positioned to the left (at 45% by default) to leave more room for the webcam on the right. The window has fixed dimensions optimized for 1920×1080 displays. You can adjust:

- `--game-width`: The width of the game window in pixels (default 1180px).
- `--game-height`: The height of the game window in pixels (default 1062px).
- `--game-left-position`: The horizontal position of the game window (percentage from left).

If you want to center the game window exactly, set `--game-left-position` to 50%.

### Webcam Customization

The webcam container offers extensive customization options:

- **Size**: Adjust `--webcam-size` for larger or smaller webcam display.
- **Position**: Change position using:
  - `--webcam-bottom` and `--webcam-right` (default setup).
  - Or use `--webcam-top` and `--webcam-left` to position in other corners.
- **Visibility**: Set `--webcam-visibility: none` to completely hide the webcam container.
- **Background Color**: 
  - Change `--webcam-bg-color` to any color (hex, RGB, or RGBA).
  - Use transparency by adjusting the alpha channel (e.g., `rgba(0, 0, 0, 0.5)` for semi-transparent black).
  - Set to `transparent` for no background.
- **Shape**: Modify the border-radius in the CSS for a square, rounded square, or oval webcam container instead of circular.

## Usage in OBS

1. Add a new "Browser" source in OBS.
2. Check "Local file" and browse to the overlay.html file.
3. Set the width and height to match your canvas size (typically 1920x1080).
4. Add your game capture and webcam sources beneath this browser source.
5. Position your game capture to align with the game window frame.
6. Position your webcam to fit within the circular container.

## Combining with Background Themes

This minimal overlay is designed to work with any background theme in the repository:

1. First add a background layer from the `/sources/backgrounds/` directory.
2. Then add this overlay as a layer above it.
3. Adjust your game and webcam sources accordingly.
