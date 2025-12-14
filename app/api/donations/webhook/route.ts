import { NextRequest, NextResponse } from 'next/server'
// Payment webhook disabled for quick deployment
// Can be enabled when payment integration is added

export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      error: 'Payment webhook is not enabled yet.',
      message: 'Webhook will be enabled when payment integration is added.'
    },
    { status: 501 }
  )
}

/* Original code - enable when adding payment integration
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-razorpay-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || ''
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const event = JSON.parse(body)

    // Handle payment events
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity

      // Update donation status
      await prisma.donation.updateMany({
        where: {
          paymentId: payment.id,
        },
        data: {
          status: 'SUCCESS',
        },
      })

      // TODO: Send confirmation email to donor
    } else if (event.event === 'payment.failed') {
      const payment = event.payload.payment.entity

      // Update donation status
      await prisma.donation.updateMany({
        where: {
          paymentId: payment.id,
        },
        data: {
          status: 'FAILED',
        },
      })
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error.message },
      { status: 500 }
    )
  }
}
*/