import { NextRequest, NextResponse } from 'next/server'
// Payment verification disabled for quick deployment
// Can be enabled when payment integration is added

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Payment verification is not enabled yet.',
      message: 'Please use UPI ID or bank transfer shown on the donation page.'
    },
    { status: 501 }
  )
}

/* Original code - enable when adding payment integration
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(text)
      .digest('hex')

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Get order details to retrieve donor info
    const orderResponse = await fetch(
      `https://api.razorpay.com/v1/orders/${razorpay_order_id}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
          ).toString('base64')}`,
        },
      }
    )

    const orderData = await orderResponse.json()

    // Save donation to database
    const donation = await prisma.donation.create({
      data: {
        donorName: orderData.notes?.donorName || 'Anonymous',
        email: orderData.notes?.email || '',
        phone: orderData.notes?.phone || null,
        amount: orderData.amount / 100, // Convert from paise to rupees
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        status: 'SUCCESS',
      },
    })

    return NextResponse.json({
      success: true,
      donation,
      message: 'Payment verified and donation recorded',
    })
  } catch (error: any) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { success: false, error: 'Payment verification failed', details: error.message },
      { status: 500 }
    )
  }
}
*/