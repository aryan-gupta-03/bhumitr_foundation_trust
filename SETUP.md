# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/bhumitr_foundation?schema=public"
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
ADMIN_EMAIL=admin@bhumitrfoundation.org
ADMIN_PASSWORD=change_this_password
```

## Step 3: Set Up Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

## Step 4: Create Admin User

Run the admin creation script:

```bash
npx ts-node scripts/create-admin.ts
```

Or manually create an admin user using Prisma Studio or a database client.

## Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 6: Access Admin Dashboard

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Login with the admin credentials you created

## Notes

- Make sure PostgreSQL is running
- For Razorpay, use test credentials during development
- The website is mobile-responsive by default
- All forms include validation

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists

### Razorpay Payment Issues
- Use test mode credentials
- Check Razorpay dashboard for webhook configuration

### TypeScript Errors
- Run `npm install` to ensure all dependencies are installed
- Run `npx prisma generate` if Prisma client is missing

