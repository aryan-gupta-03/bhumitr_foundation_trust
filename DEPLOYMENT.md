# Production Deployment Guide

This guide will help you connect your project to GitHub and deploy it to production.

## 🚀 Quick Start: Connect to GitHub & Deploy

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `bhumitr-foundation-trust` (or your preferred name)
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

Run these commands in your project directory:

```bash
# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Bhumitr Foundation Trust website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bhumitr-foundation-trust.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Step 3: Choose Deployment Platform

#### Option A: Vercel (Recommended - Easiest)

1. **Sign up/Login** at [vercel.com](https://vercel.com)
2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
3. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`:
     - `DATABASE_URL`
     - `RAZORPAY_KEY_ID`
     - `RAZORPAY_KEY_SECRET`
     - `RAZORPAY_WEBHOOK_SECRET`
     - `JWT_SECRET`
     - `ADMIN_EMAIL`
     - `ADMIN_PASSWORD`
     - (and any optional ones you need)
4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your site will be live at `your-project.vercel.app`

5. **Set up Database** (if using database):
   - In Vercel Dashboard → Storage → Create Database → Postgres
   - Copy the connection string
   - Add it to Environment Variables as `DATABASE_URL`
   - Run migrations:
     ```bash
     npx prisma generate
     npx prisma db push
     ```

6. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

#### Option B: Netlify

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Import from GitHub**:
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Environment Variables**:
   - Site settings → Environment variables
   - Add all variables from `.env.example`
5. **Deploy**

#### Option C: Railway

1. **Sign up** at [railway.app](https://railway.app)
2. **New Project** → **Deploy from GitHub repo**
3. **Add PostgreSQL**:
   - New → Database → PostgreSQL
   - Copy connection string to `DATABASE_URL`
4. **Environment Variables**:
   - Variables tab → Add all from `.env.example`
5. **Deploy**

### Step 4: Post-Deployment Setup

#### A. Database Setup (if using database)

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Create admin user
npx ts-node scripts/create-admin.ts
```

#### B. Razorpay Webhook Configuration

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Settings → Webhooks
3. Add webhook URL: `https://yourdomain.com/api/donations/webhook`
4. Select events: `payment.captured`, `payment.failed`
5. Copy webhook secret and add to environment variables

#### C. Test Your Deployment

- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Forms submit successfully
- [ ] Payment flow works (test with small amount)
- Admin login works
- [ ] Mobile responsiveness verified
- [ ] Images load properly

## 📋 Environment Variables Checklist

Make sure these are set in your deployment platform:

### Required (if using database):
- ✅ `DATABASE_URL` - PostgreSQL connection string
- ✅ `JWT_SECRET` - Strong random string (32+ chars)
- ✅ `ADMIN_EMAIL` - Admin email address
- ✅ `ADMIN_PASSWORD` - Strong admin password

### Required (if using payments):
- ✅ `RAZORPAY_KEY_ID` - Production Razorpay key
- ✅ `RAZORPAY_KEY_SECRET` - Production Razorpay secret
- ✅ `RAZORPAY_WEBHOOK_SECRET` - Webhook secret from Razorpay

### Optional:
- `INSTAGRAM_ACCESS_TOKEN` - For Instagram feed
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `SMTP_*` - Email service configuration

## 🔒 Security Checklist

- [ ] All environment variables set (never commit `.env` files)
- [ ] Strong JWT secret (32+ characters, random)
- [ ] Admin password changed from default
- [ ] HTTPS enforced (automatic on Vercel/Netlify)
- [ ] Database credentials secure
- [ ] Razorpay webhooks configured
- [ ] API routes have proper authentication

## 🛠️ Maintenance

### Regular Updates

```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm update

# Test locally
npm run dev

# Build and test
npm run build
npm start

# Push to GitHub (auto-deploys on Vercel)
git add .
git commit -m "Update dependencies"
git push origin main
```

### Database Backups

Set up automated backups:
- **Vercel Postgres**: Automatic daily backups
- **Supabase**: Automatic backups (paid plans)
- **Railway**: Manual backups available

## 📞 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

- Verify `DATABASE_URL` format
- Check firewall rules
- Ensure SSL mode if required (`?sslmode=require`)

### Payment Gateway Issues

- Verify Razorpay keys are production keys (not test)
- Check webhook URL is correct
- Verify webhook secret matches

## 🎉 You're Live!

Your NGO website is now:
- ✅ Connected to GitHub
- ✅ Deployed to production
- ✅ Accessible worldwide
- ✅ Auto-deploying on every push

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
- [Razorpay Integration](https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/build-integration/)

---

**Need Help?** Check the main `README.md` or `PRODUCTION.md` for more details.

