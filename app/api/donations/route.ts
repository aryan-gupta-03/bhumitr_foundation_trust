import { NextRequest, NextResponse } from 'next/server'
import { prisma, isDatabaseAvailable } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Auth is optional for quick deployment
    try {
      requireAuth(request) // Only admins can view donations
    } catch {
      // Auth not available - return empty for quick deployment
      return NextResponse.json({ donations: [] })
    }

    // Database is optional
    if (!isDatabaseAvailable() || !prisma) {
      return NextResponse.json({ donations: [] })
    }

    const donations = await prisma.donation.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ donations })
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.error('Error fetching donations:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

