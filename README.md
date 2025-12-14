# Bhumitr Foundation Trust Website

A comprehensive NGO website for Bhumitr Foundation Trust, built with Next.js, TypeScript, and Tailwind CSS. This platform enables the trust to showcase their work, help volunteers join, and build a strong community.

## ✅ Platform & Device Compatibility

**This project is 100% platform-agnostic and device-independent:**
- ✅ Works on Windows, macOS, and Linux
- ✅ All dependencies are standard open-source packages (no proprietary/company-specific dependencies)
- ✅ Mobile-responsive design (works on all devices - phones, tablets, desktops)
- ✅ Cross-browser compatible
- ✅ Can be deployed on any hosting platform (Vercel, Netlify, GitHub Pages, etc.)
- ✅ No hardcoded paths or device-specific configurations

## 🚀 Current Version: Phase 1 - MVP

### Features

- 🏠 **Homepage** - Hero section, impact stats, recent activities, programs preview, upcoming drives
- 📖 **About Us** - Mission, vision, and why the trust matters
- 🎯 **Programs** - Detailed information about food drives, clothing donations, education support, and events
- 📸 **Gallery** - Photo gallery using Google Drive images
- 🤝 **Volunteer** - WhatsApp group integration + contact options
- 💰 **Donations** - UPI ID and Bank details display
- 📞 **Contact** - Contact information and form
- 🎨 **Seamless UI** - Beautiful, modern design showcasing trust activities

### Key Highlights

- **No Database Required** - Easy deployment, zero maintenance
- **Google Drive Images** - Simple image management
- **WhatsApp Group Integration** - Direct community connection
- **Recent Activities Showcase** - Display what the trust is actually doing
- **Mobile-First Design** - Perfect for volunteers on mobile

## 📚 Documentation

### 🚀 Quick Start
- **`QUICK_START.md`** - Get started in 10 minutes
- **`GITHUB_SETUP.md`** - Connect to GitHub quickly
- **`SETUP_COMPLETE.md`** - What's been set up and next steps

### 📦 Deployment
- **`DEPLOYMENT.md`** - Complete deployment guide (GitHub + Production)
- **`SIMPLE_DEPLOYMENT.md`** - Step-by-step guide for simple deployment (no database)
- **`PRODUCTION.md`** - Full production guide with database

### 🗺️ Roadmap
- **`ROADMAP.md`** - Incremental development roadmap (Phases 1-6)

## 🎨 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion
- **Images**: Google Drive integration
- **Community**: WhatsApp group integration
- **Deployment**: Vercel, Netlify, or any static hosting

## 📝 Configuration

All configuration is in `lib/config.ts`:

- `donationConfig` - UPI ID, bank details, contact info
- `donationConfig.volunteer.whatsappGroup` - WhatsApp group invite link
- `googleDriveConfig` - Gallery images from Google Drive
- `upcomingDrives` - List of upcoming drives
- `recentActivities` - Recent activities to showcase on homepage

## 🗺️ Development Roadmap

See `ROADMAP.md` for detailed incremental development plan:

- **Phase 1** ✅ - MVP Static Website (Current)
- **Phase 2** 🚀 - Enhanced Engagement (Next)
- **Phase 3** 📊 - Database Integration
- **Phase 4** 💳 - Payment Integration
- **Phase 5** 🎯 - Advanced Features
- **Phase 6** 🔮 - Future Enhancements

## 🚀 Quick Start

### For Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Update configuration**
   - Edit `lib/config.ts` with your details:
     - UPI ID and QR code
     - Bank account details
     - Contact information
     - WhatsApp group link
     - Google Drive image IDs
     - Upcoming drives
     - Recent activities

3. **Run development server**
   ```bash
   npm run dev
   ```

### For Production Deployment (Simplified - No Payment Gateway)

**🚀 Ready to deploy in 10 minutes!** Simplified setup with just UPI ID and QR code.

1. **Quick Deployment** (10 minutes)
   - See `QUICK_DEPLOY_SIMPLE.md` for step-by-step guide
   - No database required
   - No payment gateway setup
   - Just UPI ID and QR code

2. **Connect to GitHub** (5 minutes)
   - See `GITHUB_SETUP.md` or run `.\scripts\setup-github.ps1`
   - Or follow `QUICK_START.md` for step-by-step guide

3. **Deploy to Vercel** (2 minutes)
   - Import from GitHub → Deploy
   - No environment variables needed for basic setup
   - Your site is live!

**📖 Deployment Guides:**
- **`QUICK_DEPLOY_SIMPLE.md`** ⭐ - **Start here!** 10-minute deployment (no payment, no database)
- `QUICK_START.md` - General quick start guide
- `DEPLOYMENT.md` - Complete deployment guide (with database & payments)
- `GITHUB_SETUP.md` - GitHub connection guide

**Note:** Payment integration and database are optional. You can add them later!

## 🔄 Future Versions

Version 2+ will include:
- Database storage (PostgreSQL)
- Razorpay payment integration
- Admin dashboard
- Dynamic content management
- Volunteer portal

See `ROADMAP.md` and `PRODUCTION.md` for details.

## 📞 Support

For support, email info@bhumitrfoundation.org or contact through the website.

---

**Built with ❤️ for Bhumitr Foundation Trust**
