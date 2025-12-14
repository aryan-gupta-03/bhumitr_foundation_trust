'use client'

import { Calendar, MapPin, Users, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { recentActivities } from '@/lib/config'

// Helper to get Google Drive image URL
const getDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}

export default function RecentActivities() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what we've been up to! Real stories from our recent drives and initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              {activity.driveId ? (
                <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 relative">
                  <img
                    src={getDriveImageUrl(activity.driveId)}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.currentTarget
                      target.style.display = 'none'
                    }}
                  />
                  {!activity.driveId && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="h-12 w-12 text-primary-600" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary-600" />
                </div>
              )}

              {/* Category Badge */}
              <div className="mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  {activity.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {activity.title}
              </h3>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(new Date(activity.date), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {activity.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  {activity.participants} volunteers
                </div>
              </div>

              {/* Impact */}
              <div className="bg-primary-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-primary-900">
                  Impact: <span className="text-primary-700">{activity.impact}</span>
                </p>
              </div>

              {/* View More Link */}
              <Link
                href="/gallery"
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center"
              >
                View Photos →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/programs"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  )
}

