'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import Script from 'next/script'

const donationSchema = z.object({
  donorName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  amount: z.number().min(100, 'Minimum donation is ₹100'),
})

type DonationFormData = z.infer<typeof donationSchema>

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
  })

  const quickAmounts = [500, 1000, 2000, 5000]

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create order on backend
      const response = await axios.post('/api/donations/create', {
        amount: data.amount * 100, // Convert to paise
        donorName: data.donorName,
        email: data.email,
        phone: data.phone,
      })

      const { orderId, amount, key } = response.data

      // Initialize Razorpay
      const options = {
        key: key,
        amount: amount,
        currency: 'INR',
        name: 'Bhumitr Foundation Trust',
        description: 'Donation',
        order_id: orderId,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyResponse = await axios.post('/api/donations/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })

            if (verifyResponse.data.success) {
              setSubmitStatus('success')
              reset()
            } else {
              setSubmitStatus('error')
            }
          } catch (error) {
            console.error('Payment verification error:', error)
            setSubmitStatus('error')
          }
        },
        prefill: {
          name: data.donorName,
          email: data.email,
          contact: data.phone || '',
        },
        theme: {
          color: '#f9921a',
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      console.error('Error creating donation:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="donorName"
            {...register('donorName')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
          {errors.donorName && (
            <p className="mt-1 text-sm text-red-600">{errors.donorName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="+91 1234567890"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Donation Amount (₹) *
          </label>
          <input
            type="number"
            id="amount"
            {...register('amount', { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter amount (minimum ₹100)"
            min="100"
          />
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setValue('amount', amount)}
                className="px-4 py-2 text-sm border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
              >
                ₹{amount}
              </button>
            ))}
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you for your generous donation! Your contribution makes a real difference.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            Something went wrong. Please try again later or contact us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </form>
    </>
  )
}

