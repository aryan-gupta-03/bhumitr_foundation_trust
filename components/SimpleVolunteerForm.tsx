'use client'

import { Mail, Phone, MessageCircle } from 'lucide-react'
import { donationConfig } from '@/lib/config'
import WhatsAppGroupJoin from './WhatsAppGroupJoin'

export default function SimpleVolunteerForm() {
  return (
    <div className="space-y-6">
      {/* WhatsApp Group Join */}
      <WhatsAppGroupJoin />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Ready to Volunteer?
        </h3>
        <p className="text-gray-700 mb-4">
          We'd love to have you join our team! Get in touch with us through any of the following ways:
        </p>
        
        <div className="space-y-3">
          <a
            href={`mailto:${donationConfig.contact.email}?subject=Volunteer Registration&body=Hi, I would like to volunteer with Bhumitr Foundation Trust.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ACity:%0D%0ASkills/Interests:%0D%0AAvailability:`}
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Send us an Email</div>
              <div className="text-sm text-gray-600">{donationConfig.contact.email}</div>
            </div>
          </a>

          {donationConfig.contact.whatsapp && (
            <a
              href={`https://wa.me/${donationConfig.contact.whatsapp.replace(/\D/g, '')}?text=Hi, I would like to volunteer with Bhumitr Foundation Trust.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Message us on WhatsApp</div>
                <div className="text-sm text-gray-600">{donationConfig.contact.whatsapp}</div>
              </div>
            </a>
          )}

          <a
            href={`tel:${donationConfig.contact.phone.replace(/\D/g, '')}`}
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Call us</div>
              <div className="text-sm text-gray-600">{donationConfig.contact.phone}</div>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">What to Include in Your Message:</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Your full name</li>
          <li>Contact number</li>
          <li>City/Location</li>
          <li>Skills or interests</li>
          <li>Availability (weekends, evenings, etc.)</li>
        </ul>
      </div>
    </div>
  )
}

