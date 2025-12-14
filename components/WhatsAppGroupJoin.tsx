'use client'

import { MessageCircle, Users, CheckCircle } from 'lucide-react'
import { donationConfig } from '@/lib/config'

export default function WhatsAppGroupJoin() {
  const hasGroup = donationConfig.volunteer?.whatsappGroup

  if (!hasGroup) {
    return null
  }

  return (
    <div className="card bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Join Our Volunteer Community
          </h3>
          <p className="text-gray-700 mb-4">
            Connect with fellow volunteers, get updates on upcoming drives, and be part of our active community on WhatsApp!
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Get instant updates on new drives</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Coordinate with other volunteers</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Share photos and stories</span>
            </div>
          </div>

          <a
            href={donationConfig.volunteer.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join WhatsApp Group</span>
          </a>
        </div>
      </div>
    </div>
  )
}

