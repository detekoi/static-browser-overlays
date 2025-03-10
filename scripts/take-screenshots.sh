#!/bin/bash
# Script to take screenshots of overlays using Chrome headless mode
# Run this script from the repository root directory

# Create screenshots directory if it doesn't exist
mkdir -p docs/screenshots

# Path to Chrome or Chromium (adjust if needed)
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux
  CHROME=$(which google-chrome || which google-chrome-stable || which chromium-browser || which chromium)
else
  # Windows (using WSL)
  CHROME="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
fi

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at $CHROME. Please install Chrome or update the path in this script."
  exit 1
fi

echo "Using Chrome at: $CHROME"

# Take screenshots
echo "Taking screenshot of Cozy 10:9 GameBoy overlay..."
"$CHROME" --headless=new --screenshot="docs/screenshots/cozy-10-9-gameboy.png" \
  --window-size=1920,1080 --default-background-color="#FFFFFF" \
  "file://$PWD/sources/overlays/cozy 10-9 aspect ratio/overlay.html"

echo "Taking screenshot of Cozy 16:9 Widescreen overlay..."
"$CHROME" --headless=new --screenshot="docs/screenshots/cozy-16-9-widescreen.png" \
  --window-size=1920,1080 --default-background-color="#FFFFFF" \
  "file://$PWD/sources/overlays/cozy 16-9 aspect ratio/overlay.htm"

echo "Screenshots captured successfully in docs/screenshots/ directory"
echo "You can now update the README.md to reference these images"