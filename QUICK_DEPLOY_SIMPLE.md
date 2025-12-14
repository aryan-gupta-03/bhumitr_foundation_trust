# 🚀 Quick Deployment - Simplified (No Payment Integration)

Get your NGO website live in **10 minutes** with just UPI ID and QR code. No payment gateway setup needed!

## ✅ What's Included

- ✅ UPI ID and QR code display
- ✅ Bank transfer details
- ✅ Google Drive images (from config file)
- ✅ All pages (Home, About, Programs, Gallery, Volunteer, Contact, Donate)
- ✅ Mobile responsive design
- ✅ **No database required** (can add later)
- ✅ **No payment gateway** (can add later)

## 📋 Pre-Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] GitHub account
- [ ] Vercel account (free)

## ⚡ Step-by-Step Deployment

### Step 1: Update Configuration (3 minutes)

Edit `lib/config.ts` with your details:

```typescript
// 1. Contact Information
contact: {
  email: 'your-email@example.com',
  phone: '+91 xxxxxxxxxx',
  whatsapp: '+91 xxxxxxxxxx',
},

// 2. WhatsApp Group Link
volunteer: {
  whatsappGroup: 'https://chat.whatsapp.com/YOUR_LINK',
  // Get this from: WhatsApp Group → Group Info → Invite via Link
},

// 3. UPI Details
upi: {
  id: 'your-upi@paytm', // Your UPI ID
  qrCode: 'YOUR_GOOGLE_DRIVE_IMAGE_ID', // QR code image from Google Drive
},

// 4. Bank Details
bank: {
  accountName: 'Your Trust Name',
  accountNumber: '1234567890',
  ifsc: 'BANK0001234',
  bankName: 'Your Bank Name',
  branch: 'Branch Name',
},
```

**To get Google Drive image ID:**
1. Upload QR code to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy link: `https://drive.google.com/file/d/IMAGE_ID_HERE/view`
4. Use `IMAGE_ID_HERE` as the `qrCode` value

### Step 2: Install Dependencies (1 minute)

```bash
npm install
```

### Step 3: Test Locally (Optional - 2 minutes)

```bash
npm run dev
```

Open http://localhost:3000 and verify everything looks good.

### Step 4: Push to GitHub (3 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NGO website ready for deployment"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation.git
git branch -M main
git push -u origin main
```

**Need help with GitHub?** See `GITHUB_SETUP.md`

### Step 5: Deploy to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Click **"Deploy"** (don't change any settings!)
6. Wait 2-3 minutes
7. **Done!** Your site is live! 🎉

**Your live URL:** `https://your-project-name.vercel.app`

## 🎉 You're Live!

Your website is now accessible at the Vercel URL. Share it with volunteers and donors!

## 📝 After Deployment

### Update Images (When Ready)

1. Upload images to Google Drive
2. Share as "Anyone with the link"
3. Get image IDs from URLs
4. Update `lib/config.ts`:
   - `googleDriveConfig.galleryImages` - Gallery images
   - `recentActivities` - Homepage activities
5. Commit and push:
   ```bash
   git add lib/config.ts
   git commit -m "Update images"
   git push
   ```
6. Vercel auto-deploys in 1-2 minutes

### Add Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `bhumitrfoundation.org`)
3. Follow DNS instructions
4. Wait 5-30 minutes for DNS propagation

## 🔄 Future Enhancements

You can add these later without breaking the current site:

### Phase 2: Database for Images
- Store Google Drive images in database
- Admin panel to manage images
- See `ROADMAP.md` for details

### Phase 3: Payment Integration
- Razorpay integration
- Online donation form
- Automatic receipt generation
- See `ROADMAP.md` for details

## 🆘 Troubleshooting

### Build Fails?
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Showing?
- Check Google Drive sharing: Must be "Anyone with the link"
- Verify image IDs are correct
- Images can be added later - site works without them

### Can't Push to GitHub?
- Make sure you created repository on GitHub first
- Check your GitHub credentials
- See `GITHUB_SETUP.md` for detailed help

## ✅ Quick Checklist

Before deploying:
- [ ] Updated contact info in `lib/config.ts`
- [ ] Added WhatsApp group link
- [ ] Updated UPI ID
- [ ] Added QR code image (or can add later)
- [ ] Updated bank details
- [ ] Tested locally (`npm run dev`)
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel

## 📚 Next Steps

- **Add images:** Update `lib/config.ts` with Google Drive image IDs
- **Custom domain:** Add your domain in Vercel
- **Future features:** See `ROADMAP.md` for Phase 2-6 plans

---

**That's it! Your NGO website is live! 🎉**

**Need help?** Check `DEPLOYMENT.md` for detailed guide or `GITHUB_SETUP.md` for GitHub setup.

