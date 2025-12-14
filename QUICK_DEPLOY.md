# 🚀 Quick Deployment Guide - Get Live in 10 Minutes!

Follow these steps to get your website live on the internet.

---

## ⚡ Step 1: Update Configuration (5 minutes)

Edit `lib/config.ts` and update these values:

### 1.1 Contact Information
```typescript
contact: {
  email: 'info@bhumitrfoundation.org', // Your email
  phone: '+91 1234567890', // Your phone
  whatsapp: '+91 1234567890', // Your WhatsApp
},
```

### 1.2 WhatsApp Group (Important!)
```typescript
volunteer: {
  whatsappGroup: 'https://chat.whatsapp.com/YOUR_LINK', // Get from WhatsApp group
}
```

**To get WhatsApp group link:**
1. Open your WhatsApp group
2. Tap group name → Group info
3. Scroll down → "Invite via link"
4. Copy the link

### 1.3 Donation Details
```typescript
upi: {
  id: 'your-upi@paytm', // Your UPI ID
  qrCode: 'YOUR_GOOGLE_DRIVE_IMAGE_ID', // Optional - QR code image
},
bank: {
  accountName: 'Bhumitr Foundation Trust',
  accountNumber: '1234567890',
  ifsc: 'BANK0001234',
  bankName: 'Your Bank',
  branch: 'Branch Name',
},
```

### 1.4 Images (Can do later)
For now, you can leave image IDs as placeholders. Update them later after deployment.

---

## 📦 Step 2: Install Dependencies (1 minute)

Open terminal in the project folder and run:

```bash
npm install
```

---

## ✅ Step 3: Test Locally (Optional - 2 minutes)

Make sure everything works:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. Check if the site loads correctly.

Press `Ctrl+C` to stop the server.

---

## 🚀 Step 4: Deploy to Vercel (5 minutes)

### Option A: Using Vercel Website (Easiest)

1. **Push to GitHub:**
   ```bash
   # If you don't have git initialized
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub to sign in)
   - Click "Add New Project"
   - Click "Import Git Repository"
   - Select your repository
   - Click "Deploy" (don't change any settings!)
   - Wait 2-3 minutes
   - **Done!** Your site is live! 🎉

3. **Get Your Live URL:**
   - Vercel will give you a URL like: `bhumitr-foundation.vercel.app`
   - Share this URL!

### Option B: Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? bhumitr-foundation
# - Directory? ./
# - Override settings? No

# Your site will be live in 2 minutes!
```

---

## 🌐 Step 5: Add Custom Domain (Optional - Later)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `bhumitrfoundation.org`)
3. Follow DNS instructions
4. Wait for DNS propagation (5-30 minutes)

---

## 📝 Step 6: Update Content After Going Live

After deployment, you can update content anytime:

1. Edit `lib/config.ts`
2. Commit and push to GitHub:
   ```bash
   git add lib/config.ts
   git commit -m "Update content"
   git push
   ```
3. Vercel will automatically redeploy (takes 1-2 minutes)

---

## 🖼️ Step 7: Add Images Later (When Ready)

### For Gallery Images:

1. **Upload to Google Drive:**
   - Create a folder or upload individual images
   - Right-click image → Share → "Anyone with the link"
   - Copy the link

2. **Get Image ID:**
   - From link: `https://drive.google.com/file/d/IMAGE_ID_HERE/view`
   - Copy the `IMAGE_ID_HERE` part

3. **Update Config:**
   - Edit `lib/config.ts`
   - Add image IDs to `googleDriveConfig.galleryImages` or `recentActivities`
   - Push to GitHub

### For UPI QR Code:

1. Generate QR code (from your UPI app or online tool)
2. Upload to Google Drive
3. Get the file ID
4. Add to `donationConfig.upi.qrCode`

---

## ✅ Quick Checklist

Before deploying, make sure:

- [ ] Updated contact email/phone in `lib/config.ts`
- [ ] Added WhatsApp group link
- [ ] Updated bank/UPI details
- [ ] Tested locally (`npm run dev`)
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel

---

## 🆘 Troubleshooting

### Build Fails?
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Showing?
- Check Google Drive sharing: Must be "Anyone with link"
- Verify image IDs are correct
- Images can be added later - site will work without them

### Can't Push to GitHub?
- Make sure you have a GitHub account
- Create a new repository on GitHub first
- Then follow the git commands

---

## 🎉 You're Live!

Once deployed, your website will be accessible at:
- `https://your-project-name.vercel.app`

Share this URL with volunteers, donors, and supporters!

---

## 📱 Next Steps After Going Live

1. ✅ Share the website URL on Instagram
2. ✅ Add it to your WhatsApp group description
3. ✅ Update images when ready
4. ✅ Monitor traffic and feedback
5. ✅ Plan Phase 2 features (see `ROADMAP.md`)

---

**Need Help?** Check `SIMPLE_DEPLOYMENT.md` for more details.

**Ready for more features?** See `ROADMAP.md` for Phase 2-6 plans.

