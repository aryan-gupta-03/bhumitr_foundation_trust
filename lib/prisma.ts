// Optional Prisma client - only works if DATABASE_URL is set
// For quick deployment without database, this will be null
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only create Prisma client if DATABASE_URL is set
export const prisma = process.env.DATABASE_URL
  ? globalForPrisma.prisma ?? new PrismaClient()
  : (null as any)

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) {
  globalForPrisma.prisma = prisma
}

// Helper to check if database is available
export const isDatabaseAvailable = () => !!process.env.DATABASE_URL

