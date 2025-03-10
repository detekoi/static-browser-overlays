# Installation Guide

This guide will help you add browser overlays to your streaming setup.

## Quick Start

1. Download the repository or clone it using git
2. Choose the overlay you want to use from the `sources/overlays` folder or a background from the `sources/backgrounds` folder
3. Follow the platform-specific instructions below

## For OBS Studio

1. In OBS, click the "+" button under Sources and select "Browser"
2. Create a new source and give it a name
3. Check "Local file" and click "Browse"
4. Navigate to the overlay's HTML file and select it
5. Set the width and height to match your stream resolution (typically 1920×1080)
6. Click "OK" to add the overlay

### Important OBS Settings

- **Width/Height**: Match your stream's output resolution
- **FPS**: 30 or 60 (matching your stream settings)
- **Custom CSS**: Leave empty unless you want to override styles
- **Refresh browser when scene becomes active**: Recommended

## For Streamlabs OBS

1. In Streamlabs OBS, click the "+" button in the Sources panel
2. Select "Browser Source"
3. Create a new source and name it
4. Check "Local file" and click "Browse"
5. Navigate to the overlay's HTML file and select it
6. Configure the width and height to match your stream resolution
7. Click "Done" to add the overlay

## For Other Streaming Software

Most streaming applications that support browser sources follow a similar process:
1. Add a browser source
2. Point it to the local HTML file
3. Set the dimensions to match your stream resolution

## Positioning Your Overlay

After adding the overlay:
1. Use the transform controls in your streaming software to position the overlay
2. Ensure it doesn't cover important game elements or webcam
3. Preview your stream to check how it looks before going live

## Troubleshooting

**Overlay not showing up:**
- Verify the file path is correct
- Try refreshing the browser source
- Check if your browser source dimensions match the overlay design

**Wrong size or aspect ratio:**
- Make sure you're using the correct overlay for your stream aspect ratio
- Adjust the browser source dimensions in your streaming software

**Performance issues:**
- Some overlays may use animations that impact performance
- Try a different overlay with fewer animated elements

## Next Steps

Once you have your overlay installed, check out the [customization guide](customization.md) to learn how to modify colors, text, and other elements to match your stream's branding.