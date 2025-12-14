import { NextRequest, NextResponse } from 'next/server'

// Payment integration disabled for quick deployment
// Only UPI ID and QR code are shown on the donation page
// Payment integration can be added later in Phase 4

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Online payment is not enabled yet. Please use UPI ID or bank transfer shown on the donation page.',
      message: 'For now, please use the UPI ID or bank details displayed on the donation page to make your contribution.'
    },
    { status: 501 }
  )
}

