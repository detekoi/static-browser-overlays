# Installation Guide

This guide will help you add browser overlays to your streaming setup.

## Quick Start

There are two ways to use these overlays:

### Option 1: Download and Use Locally (Recommended)
1. Download the ZIP file for your chosen overlay or background from the README page
2. Extract the ZIP file to a location on your computer
3. Follow the platform-specific instructions below using the extracted HTML file

### Option 2: Use Direct Live Demo Links
1. Copy the Live Demo URL from the README page for your chosen overlay
2. Use this URL directly in your streaming software's browser source
3. **Important limitations**:
   - Customization will not be possible with this method
   - The overlays may change if the repository is updated
   - Requires internet connection while streaming

## For OBS Studio

### Using Local Files (Recommended)
1. In OBS, click the "+" button under Sources and select "Browser"
2. Create a new source and give it a name
3. Check "Local file" and click "Browse"
4. Navigate to the overlay's HTML file and select it
5. Set the width and height to match your stream resolution (typically 1920×1080)
6. Click "OK" to add the overlay

### Using Live Demo URLs
1. In OBS, click the "+" button under Sources and select "Browser"
2. Create a new source and give it a name
3. **Leave "Local file" unchecked**
4. Paste the Live Demo URL from the README into the URL field
5. Set the width and height to match your stream resolution (typically 1920×1080)
6. Click "OK" to add the overlay

### Important OBS Settings

- **Width/Height**: Match your stream's output resolution
- **FPS**: 30 or 60 (matching your stream settings)
- **Custom CSS**: Leave empty unless you want to override styles
- **Refresh browser when scene becomes active**: Recommended

## For Streamlabs OBS

### Using Local Files (Recommended)
1. In Streamlabs OBS, click the "+" button in the Sources panel
2. Select "Browser Source"
3. Create a new source and name it
4. Check "Local file" and click "Browse"
5. Navigate to the overlay's HTML file and select it
6. Configure the width and height to match your stream resolution
7. Click "Done" to add the overlay

### Using Live Demo URLs
1. In Streamlabs OBS, click the "+" button in the Sources panel
2. Select "Browser Source"
3. Create a new source and name it
4. **Leave "Local file" unchecked**
5. Paste the Live Demo URL from the README into the URL field
6. Configure the width and height to match your stream resolution
7. Click "Done" to add the overlay

## For Other Streaming Software

Most streaming applications that support browser sources follow a similar process:

### Using Local Files (Recommended)
1. Add a browser source
2. Select the option to use a local file
3. Point it to the extracted HTML file
4. Set the dimensions to match your stream resolution

### Using Live Demo URLs
1. Add a browser source
2. Use the URL option (rather than local file)
3. Paste the Live Demo URL from the README
4. Set the dimensions to match your stream resolution

## Positioning Your Overlay

After adding the overlay:
1. Use the transform controls in your streaming software to position the overlay
2. Ensure it doesn't cover important game elements or webcam
3. Preview your stream to check how it looks before going live

## Troubleshooting

**Overlay not showing up (local file):**
- Verify the file path is correct
- Try refreshing the browser source
- Check if your browser source dimensions match the overlay design

**Overlay not showing up (URL version):**
- Check your internet connection
- Make sure the URL is entered correctly
- Some streaming platforms may require HTTPS URLs
- Try refreshing the browser source

**Wrong size or aspect ratio:**
- Make sure you're using the correct overlay for your stream aspect ratio
- Adjust the browser source dimensions in your streaming software

**Performance issues:**
- Some overlays may use animations that impact performance
- Try a different overlay with fewer animated elements
- Local files typically perform better than URL versions

**Changes to URL versions:**
- If a URL version suddenly looks different, the repository was likely updated
- For a stable version, download the ZIP file instead

## Next Steps

### For Local Installations
Once you have your overlay installed from the ZIP file, check out the [customization guide](customization.md) to learn how to modify colors, text, and other elements to match your stream's branding.

### For URL Installations
URL installations cannot be customized, as you're directly using the hosted version. If you want to customize your overlay, please download the ZIP file and follow the local installation instructions.