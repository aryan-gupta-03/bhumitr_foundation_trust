'use client'

import { useState } from 'react'
import { Copy, Check, QrCode, CreditCard, Building2, Phone, Mail } from 'lucide-react'
import { donationConfig } from '@/lib/config'

export default function DonationDetails() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  // Convert Google Drive image ID to direct view URL
  const getDriveImageUrl = (fileIdOrUrl: string) => {
    // If it's already a full URL, extract the ID
    if (fileIdOrUrl.includes('drive.google.com')) {
      const match = fileIdOrUrl.match(/[\/=]([a-zA-Z0-9_-]{25,})/)
      if (match) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`
      }
    }
    // If it's just an ID, use it directly
    return `https://drive.google.com/uc?export=view&id=${fileIdOrUrl}`
  }

  return (
    <div className="space-y-8">
      {/* UPI Payment */}
      <div className="card">
        <div className="flex items-center mb-4">
          <QrCode className="h-6 w-6 text-primary-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">UPI Payment</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Scan the QR code or use the UPI ID below to make a quick payment.
        </p>
        
        {/* QR Code */}
        {donationConfig.upi.qrCode && (
          <div className="mb-4 flex justify-center">
            <img
              src={getDriveImageUrl(donationConfig.upi.qrCode)}
              alt="UPI QR Code"
              className="w-64 h-64 border-2 border-gray-200 rounded-lg object-contain bg-white"
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.currentTarget
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = '<div class="w-64 h-64 border-2 border-gray-200 rounded-lg flex items-center justify-center text-gray-400"><span>QR Code image not found. Please check Google Drive link.</span></div>'
                }
              }}
            />
          </div>
        )}

        {/* UPI ID */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            UPI ID
          </label>
          <div className="flex items-center justify-between">
            <code className="text-lg font-mono text-gray-900">
              {donationConfig.upi.id}
            </code>
            <button
              onClick={() => copyToClipboard(donationConfig.upi.id, 'upi')}
              className="ml-4 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              title="Copy UPI ID"
            >
              {copied === 'upi' ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* UPI Payment Instructions */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>How to pay via UPI:</strong>
          </p>
          <ol className="list-decimal list-inside mt-2 text-sm text-blue-700 space-y-1">
            <li>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
            <li>Scan the QR code or enter the UPI ID</li>
            <li>Enter the amount and complete the payment</li>
            <li>Share the payment screenshot with us for confirmation</li>
          </ol>
        </div>
      </div>

      {/* Bank Transfer */}
      <div className="card">
        <div className="flex items-center mb-4">
          <Building2 className="h-6 w-6 text-primary-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Transfer directly to our bank account using the details below.
        </p>

        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <div className="flex items-center justify-between">
              <span className="text-gray-900">{donationConfig.bank.accountName}</span>
              <button
                onClick={() => copyToClipboard(donationConfig.bank.accountName, 'accountName')}
                className="ml-4 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                {copied === 'accountName' ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <div className="flex items-center justify-between">
              <code className="text-lg font-mono text-gray-900">
                {donationConfig.bank.accountNumber}
              </code>
              <button
                onClick={() => copyToClipboard(donationConfig.bank.accountNumber, 'accountNumber')}
                className="ml-4 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                {copied === 'accountNumber' ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              IFSC Code
            </label>
            <div className="flex items-center justify-between">
              <code className="text-lg font-mono text-gray-900">
                {donationConfig.bank.ifsc}
              </code>
              <button
                onClick={() => copyToClipboard(donationConfig.bank.ifsc, 'ifsc')}
                className="ml-4 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                {copied === 'ifsc' ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name & Branch
            </label>
            <span className="text-gray-900">
              {donationConfig.bank.bankName}, {donationConfig.bank.branch}
            </span>
          </div>
        </div>
      </div>

      {/* Contact for Confirmation */}
      <div className="card bg-primary-50">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          After Making Payment
        </h3>
        <p className="text-gray-700 mb-4">
          Please share the payment screenshot or transaction details with us for confirmation:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${donationConfig.contact.email}?subject=Donation Confirmation&body=Hi, I have made a donation. Please find the payment details attached.`}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Us
          </a>
          {donationConfig.contact.whatsapp && (
            <a
              href={`https://wa.me/${donationConfig.contact.whatsapp.replace(/\D/g, '')}?text=Hi, I have made a donation. Please confirm.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

