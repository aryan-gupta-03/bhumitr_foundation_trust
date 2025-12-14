#!/bin/bash

# Script to clean project before copying to Google Drive
# This removes unnecessary files that can be regenerated

echo "🧹 Cleaning project for Google Drive copy..."
echo ""

# Remove node_modules
if [ -d "node_modules" ]; then
    echo "Removing node_modules/ (will be regenerated with npm install)..."
    rm -rf node_modules
    echo "✅ Removed node_modules"
else
    echo "✅ node_modules/ not found (already clean)"
fi

# Remove build files
if [ -d ".next" ]; then
    echo "Removing .next/ (build files)..."
    rm -rf .next
    echo "✅ Removed .next"
fi

if [ -d "out" ]; then
    echo "Removing out/ (build output)..."
    rm -rf out
    echo "✅ Removed out"
fi

# Remove .env files (keep .env.example if exists)
if [ -f ".env" ]; then
    echo "⚠️  Found .env file - removing (update lib/config.ts instead)..."
    rm -f .env
    echo "✅ Removed .env"
fi

if [ -f ".env.local" ]; then
    echo "Removing .env.local..."
    rm -f .env.local
    echo "✅ Removed .env.local"
fi

# Remove OS files
if [ -f ".DS_Store" ]; then
    echo "Removing .DS_Store..."
    rm -f .DS_Store
    echo "✅ Removed .DS_Store"
fi

# Remove logs
echo "Removing log files..."
rm -f npm-debug.log* yarn-debug.log* yarn-error.log* 2>/dev/null
echo "✅ Removed log files"

# Remove cache
if [ -d ".cache" ]; then
    echo "Removing .cache/..."
    rm -rf .cache
    echo "✅ Removed .cache"
fi

echo ""
echo "✨ Cleanup complete!"
echo ""
echo "📦 Current folder size:"
du -sh . 2>/dev/null | head -1
echo ""
echo "✅ Ready to copy to Google Drive!"
echo ""
echo "📝 Next steps:"
echo "1. Copy the 'ngo' folder to Google Drive"
echo "2. On other laptop: Download from Drive"
echo "3. Run: npm install"
echo "4. Update lib/config.ts with your details"
echo "5. Run: npm run dev"

