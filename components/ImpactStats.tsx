'use client'

import { Users, Utensils, Shirt, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Utensils,
    value: '10,000+',
    label: 'Meals Served',
    color: 'text-orange-500',
  },
  {
    icon: Shirt,
    value: '5,000+',
    label: 'Clothes Distributed',
    color: 'text-blue-500',
  },
  {
    icon: BookOpen,
    value: '2,500+',
    label: 'Students Helped',
    color: 'text-green-500',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Drives Completed',
    color: 'text-purple-500',
  },
]

export default function ImpactStats() {
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
            Impact at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers, real impact. Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

