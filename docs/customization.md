# Customization Guide

This guide explains how to customize the browser overlays to match your stream's aesthetic.

## Basic Customization

Most overlays can be customized by editing the HTML and CSS files. Here's how to get started:

1. Open the overlay's HTML file in a text editor
2. Look for the `<style>` section or the linked CSS file
3. Make your changes
4. Save the file and refresh your browser source in your streaming software

## Changing Colors

Colors in the overlays are defined using hex codes (e.g., `#FFFFFF` for white) or rgba values.

To change a color:
1. Find the CSS property you want to modify (e.g., `background-color`, `color`, `border-color`)
2. Replace the color value with your preferred color
3. Save the file and refresh your browser source

### Example

Original code:
```css
.webcam-border {
    background-color: #B89F7A;
}
```

Modified code:
```css
.webcam-border {
    background-color: #6A8D73; /* Changed to a soft green */
}
```

## Modifying Sizes and Positions

You can adjust the size and position of elements by modifying their CSS properties:

- `width` and `height`: Change the dimensions of an element
- `top`, `right`, `bottom`, `left`: Adjust the position of elements
- `transform`: Scale, rotate, or reposition elements

### Example

Original code:
```css
.webcam-container {
    position: absolute;
    right: 150px;
    top: 80px;
    width: 300px;
    height: 300px;
}
```

Modified code:
```css
.webcam-container {
    position: absolute;
    right: 200px; /* Moved further right */
    top: 100px; /* Moved down slightly */
    width: 350px; /* Made larger */
    height: 350px; /* Made larger */
}
```

## Changing Fonts

To change fonts:
1. Find the `font-family` property in the CSS
2. Replace it with your preferred font
3. Ensure the font is installed on your computer or add a web font import

### Adding Web Fonts

Add this to the `<head>` section of the HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

Then update the CSS:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## Adding or Removing Elements

You can add or remove HTML elements to customize the overlay further:

- To remove an element: Delete or comment out the corresponding HTML and CSS
- To add an element: Add new HTML and the corresponding CSS styles

## Advanced Customization

For more advanced customization:

1. **SVG Graphics**: Many decorative elements use inline SVG. You can modify these or create your own using tools like Inkscape or Adobe Illustrator.

2. **Animations**: CSS animations can be modified by changing the `@keyframes` rules and animation properties.

3. **Responsive Design**: Adjust media queries if you need the overlay to respond differently to various stream dimensions.

## Testing Your Changes

Always test your customized overlay before using it on a live stream:

1. Save your changes
2. Refresh the browser source in your streaming software
3. Check how it looks with your game and webcam
4. Make adjustments as needed

## Reverting Changes

If you're unhappy with your customizations:

1. Keep a backup of the original files before making changes
2. Revert to the backup if needed
3. Or re-download the original overlay from the repository

## Need Help?

If you need assistance with customization:
- Check the README.md in the overlay's folder for specific customization options
- Open an issue on GitHub with your question
- Consider contributing your customized version back to the repository for others to use