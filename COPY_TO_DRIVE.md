# 📁 Instructions for Copying to Google Drive

Follow these steps to safely copy your project to Google Drive and work from another laptop.

## ✅ Pre-Copy Checklist

Before copying, make sure:

1. ✅ All sensitive data is in `.gitignore`
2. ✅ No `.env` files with real credentials
3. ✅ `lib/config.ts` has placeholder values (not real data)
4. ✅ No node_modules folder (will be regenerated)

## 📋 Step-by-Step Instructions

### Step 1: Clean Up Before Copying

```bash
# Remove node_modules (will be regenerated on other laptop)
rm -rf node_modules

# Remove build files
rm -rf .next
rm -rf out

# Remove any .env files (if you have real ones)
rm -f .env .env.local .env.production.local

# Check what will be copied (optional)
ls -la
```

### Step 2: Copy to Google Drive

1. **Select the entire project folder** (`ngo` folder)
2. **Copy it** (Ctrl+C / Cmd+C)
3. **Paste into Google Drive** folder
4. Wait for upload to complete

### Step 3: Download on Other Laptop

1. Open Google Drive on the other laptop
2. Download the `ngo` folder
3. Extract if it's zipped

### Step 4: Setup on Other Laptop

```bash
# Navigate to the project folder
cd ngo

# Install dependencies
npm install

# Update configuration
# Edit lib/config.ts with your actual details

# Test locally
npm run dev
```

## 🔒 Security Notes

### Files Already in .gitignore (Safe to Copy):

- ✅ `node_modules/` - Will be regenerated
- ✅ `.next/` - Build files, not needed
- ✅ `.env` files - Local environment variables
- ✅ `.DS_Store` - Mac system files
- ✅ IDE files (`.vscode/`, `.idea/`)

### Files to Check Before Copying:

⚠️ **Make sure these don't have real data:**
- `lib/config.ts` - Should have placeholder values
- Any `.env` files - Should be deleted or have placeholders

### Recommended: Use Placeholder Values

In `lib/config.ts`, use placeholders like:
```typescript
contact: {
  email: 'info@bhumitrfoundation.org', // ✅ OK - public email
  phone: '+91 XXXXX XXXXX', // ✅ Placeholder
  whatsapp: '+91 XXXXX XXXXX', // ✅ Placeholder
},
```

## 📝 What to Update After Downloading

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update `lib/config.ts`:**
   - Add real contact information
   - Add WhatsApp group link
   - Add UPI/bank details
   - Add Google Drive image IDs

3. **Test the site:**
   ```bash
   npm run dev
   ```

4. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation.git
   git push -u origin main
   ```

## 🚫 What NOT to Copy (Already Ignored)

These are automatically excluded:
- `node_modules/` - Too large, regenerated with `npm install`
- `.next/` - Build output, regenerated
- `.env` files - Local secrets
- System files (`.DS_Store`, `Thumbs.db`)

## ✅ Verification

After copying, verify:

```bash
# Check if node_modules exists (should NOT)
ls node_modules  # Should say "No such file or directory"

# Check if .env exists (should NOT have real one)
ls .env*  # Should only show .env.example if exists

# Check git status (if git initialized)
git status  # Should not show node_modules or .env
```

## 🔄 Working from Multiple Locations

### Best Practice:

1. **Keep code in GitHub** (primary source)
2. **Use Google Drive as backup** (not primary)
3. **Always pull from GitHub** before making changes
4. **Push to GitHub** after making changes

### Workflow:

```bash
# On any laptop:
git clone https://github.com/YOUR_USERNAME/bhumitr-foundation.git
cd bhumitr-foundation
npm install
# Make changes
git add .
git commit -m "Your changes"
git push
```

## 📦 File Size Considerations

- **With node_modules:** ~200-300 MB
- **Without node_modules:** ~5-10 MB
- **Google Drive free:** 15 GB

**Recommendation:** Copy without `node_modules` (it's in `.gitignore`)

## 🆘 Troubleshooting

### "Module not found" after copying?
```bash
npm install
```

### "Build failed"?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### "Git not initialized"?
```bash
git init
git add .
git commit -m "Initial commit"
```

---

**Ready to copy!** The `.gitignore` file ensures only necessary files are included.

