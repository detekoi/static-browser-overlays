# Customization Guide

This guide explains how to customize the browser overlays to match your stream's aesthetic.

## Overlay-Specific Documentation

Each overlay has its own detailed customization instructions. Please refer to the specific documentation:

### Minimal Overlays
- [Minimal 16:9 Documentation](../sources/overlays/minimal-16-9/overlay-readme.md#customization)
- [Minimal 10:9 Documentation](../sources/overlays/minimal-10-9/overlay-readme.md#customization)
- [Minimal 4:3 Documentation](../sources/overlays/minimal-4-3/overlay-readme.md#customization)

### Cozy Overlays
- [Cozy 16:9 Documentation](../sources/overlays/cozy%2016-9%20aspect%20ratio/overlay-readme.md#customization)
- [Cozy 10:9 Documentation](../sources/overlays/cozy%2010-9%20aspect%20ratio/overlay-readme.md#customization)
- [Cozy 4:3 Documentation](../sources/overlays/cozy-4-3-aspect-ratio/overlay-readme.md#customization)

### Backgrounds
- [Arctic Background Documentation](../sources/backgrounds/arctic-background/arctic-background-readme.md#customization)
- [Stars Background Documentation](../sources/backgrounds/stars-background/stars-background-readme.md#customization)

## Basic Customization Methods

### CSS Variables (Minimal Overlays)

Minimal overlays use CSS variables for easy customization:

1. Open the overlay's HTML file in a text editor
2. Find the `:root` section containing variables:
```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    
    /* Game window settings */
    --game-width: 1760px;
    --game-left-position: 47%;
    
    /* Webcam settings */
    --webcam-size: 250px;
    --webcam-visibility: block;
}
```
3. Change the values to customize your overlay
4. Save and refresh your browser source

Common customizations include:
- Change `--border-color` for different colored borders
- Adjust `--webcam-size` to change webcam container size
- Set `--webcam-visibility: none` to hide the webcam container
- Modify positioning values to reposition elements

### Direct CSS Editing (All Overlays)

For more advanced customization:

1. Open the overlay's HTML file in a text editor
2. Look for the `<style>` section
3. Modify CSS properties like colors, sizes, and positions
4. Save and refresh your browser source

## Testing Your Changes

Always test your modifications before streaming:
1. Save all changes
2. Refresh the browser source in your streaming software
3. Check how it looks with your game and webcam
4. Make adjustments as needed

## Backup Your Changes

Before customizing:
1. Make a backup copy of the original files
2. If needed, you can always re-download the overlay from the repository

## Need Help?

- Check the individual overlay-readme.md files for detailed instructions
- Look for comments in the HTML files that explain customization options
- Open an issue on GitHub with your question