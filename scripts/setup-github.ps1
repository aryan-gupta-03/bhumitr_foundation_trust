# GitHub Setup Script for Bhumitr Foundation Trust (PowerShell)
# This script helps you connect your project to GitHub

Write-Host "🚀 GitHub Setup Script" -ForegroundColor Cyan
Write-Host "========================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Check if remote already exists
$remoteExists = git remote | Select-String -Pattern "origin" -Quiet

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists." -ForegroundColor Yellow
    $update = Read-Host "Do you want to update it? (y/n)"
    if ($update -eq "y" -or $update -eq "Y") {
        $repoUrl = Read-Host "Enter your GitHub repository URL"
        git remote set-url origin $repoUrl
    }
} else {
    $repoUrl = Read-Host "Enter your GitHub repository URL"
    git remote add origin $repoUrl
}

# Add all files
Write-Host ""
Write-Host "📦 Adding files to git..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    $commitMsg = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMsg)) {
        $commitMsg = "Initial commit: Bhumitr Foundation Trust website"
    }
    git commit -m $commitMsg
} else {
    Write-Host "No changes to commit." -ForegroundColor Green
}

# Set main branch
git branch -M main

# Push to GitHub
Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
$push = Read-Host "Do you want to push to GitHub now? (y/n)"
if ($push -eq "y" -or $push -eq "Y") {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "To push later, run:" -ForegroundColor Cyan
    Write-Host "  git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "🎉 Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to your GitHub repository"
Write-Host "2. Follow DEPLOYMENT.md for deployment instructions"
Write-Host "3. Set up environment variables in your deployment platform"

