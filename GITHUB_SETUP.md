# 🚀 Quick GitHub Setup Guide

Follow these simple steps to connect your project to GitHub and deploy it.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `bhumitr-foundation-trust` (or your choice)
4. Choose **Private** or **Public**
5. **⚠️ IMPORTANT:** Do NOT check "Initialize with README" (we already have files)
6. Click **Create repository**

## Step 2: Connect Your Project

### Option A: Using PowerShell Script (Windows)

```powershell
# Run the setup script
.\scripts\setup-github.ps1
```

### Option B: Manual Commands

Open PowerShell or Terminal in your project folder and run:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Bhumitr Foundation Trust website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation-trust.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Authentication

If you get authentication errors:

**Option 1: Personal Access Token**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when pushing

**Option 2: SSH Keys**
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL: `git remote set-url origin git@github.com:YOUR_USERNAME/bhumitr-foundation-trust.git`

## Step 3: Deploy to Production

Now that your code is on GitHub, deploy it:

### 🚀 Vercel (Recommended - 5 minutes)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js - click **Deploy**
5. Add environment variables (see `env.example` file)
6. Your site is live! 🎉

### 🌐 Netlify

1. Go to [netlify.com](https://netlify.com)
2. **Add new site** → **Import an existing project**
3. Connect GitHub and select your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables
6. Deploy!

### 🚂 Railway

1. Go to [railway.app](https://railway.app)
2. **New Project** → **Deploy from GitHub repo**
3. Add PostgreSQL database
4. Add environment variables
5. Deploy!

## Step 4: Environment Variables

In your deployment platform, add these environment variables:

### Required (if using database):
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- `ADMIN_EMAIL` - Your admin email
- `ADMIN_PASSWORD` - Strong password

### Required (if using payments):
- `RAZORPAY_KEY_ID` - From Razorpay dashboard
- `RAZORPAY_KEY_SECRET` - From Razorpay dashboard
- `RAZORPAY_WEBHOOK_SECRET` - From Razorpay webhooks

See `env.example` for all available options.

## Step 5: Database Setup (if needed)

After deployment, set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Create admin user
npx ts-node scripts/create-admin.ts
```

## ✅ You're Done!

Your website is now:
- ✅ On GitHub
- ✅ Deployed to production
- ✅ Auto-deploying on every push
- ✅ Accessible worldwide

## 📚 Next Steps

- Read `DEPLOYMENT.md` for detailed deployment guide
- Read `PRODUCTION.md` for production best practices
- Update `lib/config.ts` with your organization details
- Configure Razorpay webhooks (if using payments)
- Set up custom domain (optional)

## 🆘 Need Help?

- Check `README.md` for project overview
- Check `DEPLOYMENT.md` for detailed deployment steps
- Check `PRODUCTION.md` for production configuration

---

**Happy Deploying! 🚀**

