'use client'

import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTAButtons() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Your support helps us serve more meals, support students, and run impactful drives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Become a Volunteer</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

