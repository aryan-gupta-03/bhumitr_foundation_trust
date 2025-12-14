'use client'

import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { upcomingDrives } from '@/lib/config'

export default function UpcomingDrives() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Drives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our upcoming initiatives and make a real difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {upcomingDrives.map((drive, index) => (
            <motion.div
              key={drive.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{drive.title}</h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  {drive.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{drive.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(new Date(drive.date), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {drive.location}
                </div>
              </div>
              <Link
                href="/volunteer"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                <span>Join as Volunteer</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/programs" className="text-primary-600 font-semibold hover:text-primary-700">
            View All Drives →
          </Link>
        </div>
      </div>
    </section>
  )
}

