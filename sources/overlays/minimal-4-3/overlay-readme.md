# Minimal 4:3 Overlay

A clean, minimal overlay for 4:3 aspect ratio gameplay (classic consoles, arcade games, and retro PCs) with transparent background and simple black borders.

## Features

- Clean design with minimal elements
- Transparent background for use with any background images
- Black borders for game and webcam frames
- Optimized 4:3 game window (1420×1065 pixels) for 1920×1080 displays
- Circular webcam container with black background (customizable)
- Ability to hide webcam container entirely via CSS variable
- Fully customizable layout via CSS variables

## Customization

All customization options are available through CSS variables in the `:root` section. This makes it easy to adjust the overlay without having to modify multiple CSS properties.

```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    --shadow-color: rgba(0, 0, 0, 0.4);
    
    /* Game window position and size - for 1920x1080 resolution */
    --game-width: 1420px;        /* Fixed width for 4:3 game window */
    --game-height: 1065px;       /* Fixed height for 4:3 ratio (1420 * 3/4) */
    --game-left-position: 45%;   /* Left position of game window */
    
    /* Webcam position and size */
    --webcam-size: 300px;        /* Width and height of webcam container */
    --webcam-bottom: 40%;        /* Distance from bottom - centers vertically */
    --webcam-right: 3%;          /* Distance from right */
    --webcam-visibility: block;  /* Set to "none" to hide webcam container */
    --webcam-bg-color: rgba(0, 0, 0, 1); /* Background color behind webcam - solid black */
}
```

### Border Colors

Change the `--border-color` and `--shadow-color` values to your preferred colors using hex codes, RGB, or RGBA values.

### Game Window Positioning

The game window is positioned to the left (at 45% by default) to leave more room for the webcam on the right. The window has fixed dimensions optimized for 1920×1080 displays. You can adjust:

- `--game-width`: The width of the game window in pixels (default 1420px)
- `--game-height`: The height of the game window in pixels (default 1065px)
- `--game-left-position`: The horizontal position of the game window (percentage from left)

If you want to center the game window exactly, set `--game-left-position` to 50%.

### Webcam Position and Size

The webcam is positioned vertically centered on the right side by default to minimize overlap with the game window:

- `--webcam-size`: The diameter of the circular webcam container
- `--webcam-bottom`: Distance from the bottom of the screen (default 40% centers it vertically)
- `--webcam-right`: Distance from the right edge of the screen
- `--webcam-visibility`: Controls whether the webcam container is visible (set to `none` to hide)
- `--webcam-bg-color`: Background color behind the webcam (default is solid black)

You can move the webcam to another corner by changing these values or adding new ones like `--webcam-top` and `--webcam-left` instead. To make the webcam background transparent, set `--webcam-bg-color: transparent`.

## Usage in OBS

1. Add a new "Browser" source in OBS
2. Check "Local file" and browse to the overlay.html file
3. Set the width and height to match your canvas size (typically 1920x1080)
4. Add your game capture and webcam sources beneath this browser source
5. Position your game capture to align with the game window frame
6. Position your webcam to fit within the circular container

## Combining with Background Themes

This minimal overlay is designed to work with any background theme in the repository:

1. First add a background layer from the `/sources/backgrounds/` directory
2. Then add this overlay as a layer above it
3. Adjust your game and webcam sources accordingly