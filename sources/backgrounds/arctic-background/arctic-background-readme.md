# Arctic Background Overlay - Documentation

This document explains how to use and customize the animated arctic background for your streaming overlay.

##Overview

A winter-themed animated background with aurora borealis effects, falling snowflakes, and a snowy landscape. This background is designed to be used as a base layer beneath other transparent overlays for a complete winter streaming aesthetic.

![Arctic Background Preview](../../../docs/screenshots/arctic-background.png)

## Features

- Animated aurora borealis effect
- Falling snowflakes with varied animation patterns
- Decorative icicles with subtle shimmer effects
- Snow-covered ground
- Distant polar bear silhouettes
- Soft color palette with soothing blue gradients

## Customization Guide

### Changing Colors

To modify the color scheme of the background:

1. **Sky/Background Color**: Find the `.arctic-background` CSS class and modify the `background` property:
   ```css
   .arctic-background {
       /* Change these gradient colors for a different sky effect */
       background: linear-gradient(180deg, #a8d8e8 0%, #e8f4f8 100%);
   }
   ```

2. **Aurora Colors**: Find the `.aurora` and `.aurora-2` classes and adjust their background gradients:
   ```css
   .aurora {
       /* Modify these colors for different aurora effects */
       background: linear-gradient(180deg, 
           rgba(86, 207, 225, 0) 0%, 
           rgba(86, 207, 225, 0.1) 20%, 
           rgba(137, 255, 177, 0.2) 40%, 
           rgba(126, 206, 244, 0.1) 60%, 
           rgba(86, 207, 225, 0) 100%);
   }
   ```

3. **Snow Ground**: Adjust the `.snow-ground` class to change the ground appearance:
   ```css
   .snow-ground {
       /* Change these colors for different ground effects */
       background: linear-gradient(180deg, #e8f4f8 0%, #ffffff 100%);
   }
   ```

### Adjusting Animations

1. **Aurora Wave Speed**: Find the `@keyframes aurora-wave` and the animation property in `.aurora`:
   ```css
   .aurora {
       /* Change the '20s' value to adjust speed (smaller = faster) */
       animation: aurora-wave 20s ease-in-out infinite alternate;
   }
   
   .aurora-2 {
       /* Change the '15s' value to adjust speed */
       animation: aurora-wave 15s ease-in-out infinite alternate-reverse;
   }
   ```

2. **Snowfall Speed**: Modify the animation durations for individual snowflakes:
   ```css
   /* Change these duration values (smaller = faster snowfall) */
   .snowflake:nth-child(1) { animation-duration: 18s; }
   .snowflake:nth-child(2) { animation-duration: 15s; }
   /* and so on... */
   ```

### Adding or Removing Elements

1. **Snowflakes**: Add or remove snowflake elements in the HTML. Each snowflake is defined as:
   ```html
   <div class="snowflake" style="top: -5%; left: 5%;"></div>
   ```
   Adjust the `top` and `left` values to change starting positions.

2. **Icicles**: Add or remove icicle elements:
   ```html
   <div class="icicle" style="left: 2%; height: 35px;"></div>
   ```
   Adjust the `left` and `height` values to change positioning and size.

3. **Polar Bears**: Add or remove polar bear silhouettes:
   ```html
   <div class="distant-bear" style="bottom: 15%; left: 10%;"></div>
   ```
   Adjust the `bottom` and `left` values to change positions.

### Integrating with Other Overlays

This background is designed to work as a base layer. To use it with other overlays:

1. Add this background as a browser source in your streaming software
2. Add your game capture or other content source above it
3. Add transparent foreground overlays on top

For best results, use with other overlays from this collection that have transparent backgrounds.

## Advanced Customization

For more advanced customization, you can:

1. Adjust the opacity values in various elements to make them more or less prominent
2. Modify the animation keyframes for completely different movement patterns
3. Add new decorative elements by creating additional CSS classes and HTML elements

## Questions or Issues?

If you have any questions about customizing this overlay or encounter any issues, please open an issue in the GitHub repository. 