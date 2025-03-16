# Retro Sakura Overlay

A sophisticated overlay with cherry blossom aesthetics featuring soft purples, pinks, and spring greens. **Optimized for Game Boy Advance (GBA) 3:2 aspect ratio by default**, perfect for retro handheld gaming streams while creating a cozy, slice-of-life atmosphere inspired by sakura season.

![Retro Sakura Overlay Preview](../../../docs/screenshots/retro-sakura.png)

## Features

- Clean, minimalist frames with elegant cherry blossom-inspired color scheme
- **Game Boy Advance (3:2) aspect ratio window** (1500x1000px) optimized for 1920x1080 streams
- Circular webcam frame with subtle animation effects
- Highly customizable dimensions to support other aspect ratios
- Transparent design that doesn't distract from gameplay

## Aspect Ratio Information

- **Default: Game Boy Advance (3:2)** - Perfect for GBA, Game Boy Color, and similar retro handhelds
- **Fully Adjustable** - The `--game-width` and `--game-height` variables can be modified to support:
  - 4:3 (NES, SNES, Genesis)
  - 16:9 (Modern games)
  - 10:9 (Game Boy Player on GameCube)
  - Any custom aspect ratio needed

## Adding to OBS Studio

1. **Add as Browser Source**:
   - In OBS Studio, add a "Browser" source
   - Check "Local file" and browse to select the HTML file
   - Set Width to 1920 and Height to 1080

2. **Position Your Game Capture**:
   - Add your game capture source beneath the overlay
   - Resize to fit within the frame (default 1500x1000px for GBA games)

3. **Position Your Webcam**:
   - Add your webcam source beneath the overlay
   - Resize to fill the circular frame

## Customization Options

The overlay is easily customizable through CSS variables:

```css
:root {
    /* COLORS */
    --primary-color: #9370DB;      /* Medium purple */
    --secondary-color: #FFB7C5;    /* Cherry blossom pink */
    --accent-color: #98FB98;       /* Light spring green */
    
    /* SIZES AND POSITIONS */
    --game-width: 1500px;          /* Width of game window (3:2 ratio for GBA) */
    --game-height: 1000px;         /* Height of game window */
    --cam-size: 320px;             /* Size of camera frame */
    --cam-bottom: 30px;            /* Distance from bottom */
    --cam-right: 30px;             /* Distance from right */
}
```

### Aspect Ratio Adjustments

To change from the default GBA aspect ratio (3:2) to other common retro formats:

- **NES/SNES (4:3)**: Set `--game-width: 1333px; --game-height: 1000px;`
- **Modern (16:9)**: Set `--game-width: 1778px; --game-height: 1000px;`
- **Game Boy Player (10:9)**: Set `--game-width: 1111px; --game-height: 1000px;`

## Compatibility

This overlay is designed for:
- Game Boy Advance games (default 3:2 aspect ratio)
- Easily adaptable to other retro and modern gaming formats through customization
