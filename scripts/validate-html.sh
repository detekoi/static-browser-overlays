#!/bin/bash

# Simple HTML validation script
# Uses the W3C Nu HTML Checker via curl

echo "Validating HTML files..."

# Find all HTML files in the sources directory
find ../sources -name "*.html" -o -name "*.htm" | while read file; do
  echo "Checking $file"
  # Use curl to send the file to the W3C validator 
  # This is a simplified version and doesn't handle all edge cases
  if [ -f "$file" ]; then
    result=$(curl -s -H "Content-Type: text/html; charset=utf-8" --data-binary @"$file" https://validator.w3.org/nu/?out=text)
    
    # Check if there are any errors or warnings
    if echo "$result" | grep -q "Error:"; then
      echo "Validation errors found in $file:"
      echo "$result" | grep -A 2 "Error:"
      echo ""
    elif echo "$result" | grep -q "Warning:"; then
      echo "Validation warnings found in $file:"
      echo "$result" | grep -A 2 "Warning:"
      echo ""
    else
      echo "✓ $file passed validation"
    fi
  fi
done

echo "HTML validation complete"