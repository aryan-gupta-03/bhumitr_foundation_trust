#!/bin/bash

# GitHub Setup Script for Bhumitr Foundation Trust
# This script helps you connect your project to GitHub

echo "🚀 GitHub Setup Script"
echo "========================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists."
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub repository URL: " repo_url
        git remote set-url origin "$repo_url"
    fi
else
    read -p "Enter your GitHub repository URL: " repo_url
    git remote add origin "$repo_url"
fi

# Add all files
echo ""
echo "📦 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "No changes to commit."
else
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Initial commit: Bhumitr Foundation Trust website"
    fi
    git commit -m "$commit_msg"
fi

# Set main branch
git branch -M main

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
read -p "Do you want to push to GitHub now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push -u origin main
    echo ""
    echo "✅ Successfully pushed to GitHub!"
else
    echo ""
    echo "To push later, run:"
    echo "  git push -u origin main"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Follow DEPLOYMENT.md for deployment instructions"
echo "3. Set up environment variables in your deployment platform"

