# Production Deployment Guide

This guide covers all steps required to productionize the Bhumitr Foundation Trust website.

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a production `.env.production` file with all required variables:

```env
# Database (Production)
DATABASE_URL="postgresql://user:password@production-host:5432/bhumitr_foundation?schema=public&sslmode=require"

# Razorpay (Production Keys)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_production_secret_key

# JWT Secret (Generate a strong random string)
JWT_SECRET=your_very_strong_random_secret_key_min_32_chars

# Admin Credentials
ADMIN_EMAIL=admin@bhumitrfoundation.org
ADMIN_PASSWORD=strong_secure_password_here

# Optional: Instagram API
INSTAGRAM_ACCESS_TOKEN=your_instagram_token

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Email Service (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 2. Database Setup (Production)

#### Option A: Vercel Postgres (Recommended for Vercel deployment)
```bash
# In Vercel dashboard:
# 1. Go to Storage → Create Database → Postgres
# 2. Copy the connection string
# 3. Add to environment variables
```

#### Option B: Supabase (Free tier available)
```bash
# 1. Create account at supabase.com
# 2. Create new project
# 3. Get connection string from Settings → Database
# 4. Run migrations:
npx prisma db push
```

#### Option C: Railway / AWS RDS / Other
```bash
# 1. Create PostgreSQL database
# 2. Get connection string
# 3. Update DATABASE_URL
# 4. Run migrations:
npx prisma generate
npx prisma db push
```

### 3. Security Hardening

#### A. Generate Strong JWT Secret
```bash
# Generate a secure random string
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### B. Update Admin Password
```bash
# Run the admin creation script with production credentials
ADMIN_EMAIL=admin@bhumitrfoundation.org \
ADMIN_PASSWORD=your_strong_password \
npx ts-node scripts/create-admin.ts
```

#### C. Enable HTTPS
- Ensure SSL certificate is configured (automatic on Vercel)
- Force HTTPS redirects in production

#### D. Environment Variable Security
- Never commit `.env` files
- Use environment variables in hosting platform
- Rotate secrets regularly

### 4. Razorpay Production Setup

1. **Create Production Account**
   - Sign up at razorpay.com
   - Complete KYC verification
   - Get production API keys

2. **Configure Webhooks** (Important!)
   - Go to Razorpay Dashboard → Settings → Webhooks
   - Add webhook URL: `https://yourdomain.com/api/donations/webhook`
   - Select events: `payment.captured`, `payment.failed`
   - Save webhook secret

3. **Update Environment Variables**
   ```env
   RAZORPAY_KEY_ID=rzp_live_xxxxx
   RAZORPAY_KEY_SECRET=your_production_secret
   RAZORPAY_WEBHOOK_SECRET=webhook_secret_from_dashboard
   ```

4. **Test Payment Flow**
   - Use Razorpay test mode first
   - Test with real payment (small amount)
   - Verify webhook receives events

### 5. Performance Optimization

#### A. Image Optimization
- Use Next.js Image component (already implemented)
- Optimize images before upload
- Consider using Cloudinary or similar CDN

#### B. Database Indexing
Add indexes to frequently queried fields:

```prisma
// Add to schema.prisma
model Volunteer {
  // ... existing fields
  @@index([email])
  @@index([status])
}

model Donation {
  // ... existing fields
  @@index([status])
  @@index([createdAt])
}

model Drive {
  // ... existing fields
  @@index([status])
  @@index([date])
}
```

#### C. Enable Caching
- Use Next.js caching strategies
- Implement API route caching where appropriate
- Use CDN for static assets

### 6. SEO Optimization

#### A. Update Metadata
Check and update `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Bhumitr Foundation Trust | Serving Humanity in Jammu',
  description: '...',
  keywords: '...',
  openGraph: {
    title: 'Bhumitr Foundation Trust',
    description: '...',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhumitr Foundation Trust',
    description: '...',
  },
}
```

#### B. Create sitemap.xml
Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all pages
  ]
}
```

#### C. Create robots.txt
Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### 7. Monitoring & Analytics

#### A. Google Analytics
1. Create GA4 property
2. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

// In RootLayout component:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

#### B. Error Monitoring
Consider adding Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### 8. Email Notifications (Optional)

Set up email notifications for:
- Volunteer registrations
- Donation confirmations
- Admin alerts

Use services like:
- SendGrid
- Resend
- AWS SES
- Nodemailer with SMTP

### 9. Deployment Steps

#### Option A: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bhumitr-foundation.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Import GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add all environment variables
   - Deploy

3. **Configure Domain**
   - Add custom domain in Vercel dashboard
   - Update DNS records
   - SSL certificate auto-configured

#### Option B: Other Platforms

**Railway:**
```bash
railway login
railway init
railway up
```

**AWS Amplify:**
- Connect GitHub repo
- Configure build settings
- Add environment variables

**Docker (Self-hosted):**
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build
CMD ["npm", "start"]
```

### 10. Post-Deployment Tasks

#### A. Verify Functionality
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Payment flow works
- [ ] Admin login works
- [ ] Mobile responsiveness
- [ ] Images load properly

#### B. Database Seeding (Optional)
Create initial data:
- Impact statistics
- Sample drives
- Gallery images

#### C. Backup Strategy
- Set up automated database backups
- Document backup restoration process
- Test backup restoration

#### D. Documentation
- Update README with production URLs
- Document admin workflows
- Create user guide for volunteers

### 11. Maintenance Plan

#### Weekly
- Monitor error logs
- Check donation records
- Review volunteer registrations

#### Monthly
- Update dependencies
- Review and optimize performance
- Backup database
- Update content (drives, gallery)

#### Quarterly
- Security audit
- Performance review
- Update dependencies
- Review analytics

### 12. Security Checklist

- [ ] All environment variables set
- [ ] Strong JWT secret configured
- [ ] Admin password changed from default
- [ ] HTTPS enforced
- [ ] Database credentials secure
- [ ] Razorpay webhooks configured
- [ ] API routes have proper authentication
- [ ] Input validation on all forms
- [ ] Rate limiting implemented (consider adding)
- [ ] CORS configured properly
- [ ] No sensitive data in logs

### 13. Testing Before Launch

```bash
# Run build locally
npm run build

# Test production build
npm start

# Check for TypeScript errors
npm run lint

# Test database connection
npx prisma studio
```

### 14. Go-Live Checklist

- [ ] Domain configured and SSL active
- [ ] All environment variables set
- [ ] Database migrated and seeded
- [ ] Admin account created
- [ ] Payment gateway tested
- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] Analytics configured
- [ ] Error monitoring set up
- [ ] Backup strategy in place
- [ ] Documentation updated

## 🚀 Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with production values

# 3. Generate Prisma client
npx prisma generate

# 4. Push database schema
npx prisma db push

# 5. Create admin user
npx ts-node scripts/create-admin.ts

# 6. Build for production
npm run build

# 7. Test production build
npm start

# 8. Deploy (Vercel example)
vercel --prod
```

## 📞 Support & Troubleshooting

### Common Issues

**Database Connection Errors:**
- Verify DATABASE_URL format
- Check firewall rules
- Ensure SSL mode if required

**Payment Gateway Issues:**
- Verify Razorpay keys are production keys
- Check webhook configuration
- Test in Razorpay dashboard

**Build Errors:**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

### Getting Help

- Check Next.js documentation
- Prisma documentation
- Razorpay API documentation
- Vercel deployment docs

---

**Ready for Production! 🎉**

