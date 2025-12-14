# 🚀 Quick Start Guide

Get your NGO website connected to GitHub and deployed in 10 minutes!

## 📋 Prerequisites

- Node.js 18+ installed
- GitHub account
- (Optional) Vercel/Netlify account for deployment

## ⚡ Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Initialize Git (if not done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `bhumitr-foundation-trust`
3. **Don't** initialize with README
4. Click "Create repository"

### 4. Connect to GitHub

**Windows (PowerShell):**
```powershell
.\scripts\setup-github.ps1
```

**Or manually:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation-trust.git
git branch -M main
git push -u origin main
```

### 5. Deploy to Vercel (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js)
5. Add environment variables (see `env.example`)
6. Done! Your site is live 🎉

## 🔧 Configuration

### Update Organization Details

Edit `lib/config.ts`:
- UPI ID and QR code
- Bank account details
- Contact information
- WhatsApp group link
- Google Drive image IDs

### Environment Variables

For production, set these in your deployment platform:

**Required:**
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- `ADMIN_EMAIL` - Admin email
- `ADMIN_PASSWORD` - Strong password

**For Payments:**
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`

See `env.example` for all options.

## 📚 Next Steps

- Read `GITHUB_SETUP.md` for detailed GitHub setup
- Read `DEPLOYMENT.md` for comprehensive deployment guide
- Read `PRODUCTION.md` for production best practices

## ✅ Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Git initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Environment variables set
- [ ] Database configured (if using)
- [ ] Payment gateway configured (if using)
- [ ] Custom domain set up (optional)

---

**That's it! Your NGO website is now live! 🎉**

