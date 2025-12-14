# Simple Deployment Guide (No Database Version)

This is a simplified version of the website that doesn't require a database. Perfect for quick deployment!

## What's Different?

✅ **No Database Required** - Everything is configured via simple config files
✅ **Google Drive for Images** - Store images in Google Drive and link them
✅ **UPI/Bank Details** - Simple payment information display (no Razorpay integration)
✅ **Simple Contact Forms** - Email/WhatsApp links instead of database storage
✅ **Easy to Deploy** - Can be deployed to Vercel, Netlify, or any static hosting

## Quick Setup

### 1. Update Configuration

Edit `lib/config.ts` with your details:

```typescript
export const donationConfig = {
  upi: {
    id: 'your-upi-id@paytm', // Your UPI ID
    qrCode: 'YOUR_GOOGLE_DRIVE_QR_CODE_IMAGE_ID', // Google Drive image ID
  },
  bank: {
    accountName: 'Bhumitr Foundation Trust',
    accountNumber: '1234567890',
    ifsc: 'BANK0001234',
    bankName: 'Your Bank Name',
    branch: 'Branch Name',
  },
  contact: {
    email: 'info@bhumitrfoundation.org',
    phone: '+91 1234567890',
    whatsapp: '+91 1234567890', // Optional
  },
}
```

### 2. Set Up Google Drive Images

#### Option A: Individual Images
1. Upload images to Google Drive
2. Right-click image → Share → Get link
3. Make sure link sharing is enabled
4. Copy the file ID from the URL: `https://drive.google.com/file/d/FILE_ID_HERE/view`
5. Add to `googleDriveConfig.galleryImages` in `lib/config.ts`

#### Option B: Folder Sharing
1. Create a folder in Google Drive
2. Upload all images to that folder
3. Share folder → Get link → Extract folder ID
4. Update `googleDriveConfig.folderId` in `lib/config.ts`

**Important:** Make sure sharing is set to "Anyone with the link can view"

### 3. Get UPI QR Code

1. Generate QR code from your UPI app or online tool
2. Upload QR code image to Google Drive
3. Get the file ID and add to `donationConfig.upi.qrCode`

### 4. Update Upcoming Drives

Edit `upcomingDrives` array in `lib/config.ts`:

```typescript
export const upcomingDrives = [
  {
    id: '1',
    title: 'Your Drive Title',
    description: 'Description here',
    date: '2024-12-20', // YYYY-MM-DD format
    location: 'Location',
    category: 'FOOD', // or CLOTHING, EDUCATION, etc.
  },
]
```

## Deployment

### Option 1: Vercel (Recommended - Free)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bhumitr-foundation.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (no environment variables needed!)

3. **Add Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS records as instructed

### Option 2: Netlify (Free)

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "New site from Git"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

### Option 3: GitHub Pages

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Follow GitHub Pages deployment instructions
   ```

## Environment Variables (Optional)

Only needed if you want to customize:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Updating Content

### To Update Images:
1. Edit `lib/config.ts`
2. Update `googleDriveConfig.galleryImages` array
3. Push changes to GitHub
4. Vercel/Netlify will auto-deploy

### To Update Drives:
1. Edit `lib/config.ts`
2. Update `upcomingDrives` array
3. Push changes

### To Update Contact Info:
1. Edit `lib/config.ts`
2. Update `donationConfig.contact`
3. Push changes

## No Database = No Admin Panel

Since there's no database, the admin panel is not available in this version. All content is managed through the `lib/config.ts` file.

## Testing Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## What's Not Included (For Future Versions)

- ❌ Database storage (volunteers, donations)
- ❌ Razorpay payment integration
- ❌ Admin dashboard
- ❌ Dynamic content management

These will be added in Version 2 when you're ready for a database.

## Troubleshooting

**Images not loading?**
- Check Google Drive sharing settings (must be "Anyone with link")
- Verify file IDs are correct
- Try using direct image URLs instead

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run lint`
- Clear cache: `rm -rf .next node_modules && npm install`

## Next Steps

Once you're ready for more features:
1. Set up PostgreSQL database
2. Add Razorpay integration
3. Implement admin dashboard
4. See `PRODUCTION.md` for full version

---

**That's it! Your simple website is ready to deploy! 🚀**

