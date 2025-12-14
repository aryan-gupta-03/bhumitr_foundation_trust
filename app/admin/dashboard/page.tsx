'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Users, DollarSign, Calendar, Image, LogOut, Plus } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    volunteers: 0,
    donations: 0,
    totalAmount: 0,
    drives: 0,
  })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin')
      return
    }

    fetchStats()
  }, [router])

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const [volunteersRes, donationsRes, drivesRes] = await Promise.all([
        axios.get('/api/volunteers', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get('/api/donations', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get('/api/drives', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ])

      const donations = donationsRes.data.donations || []
      const totalAmount = donations
        .filter((d: any) => d.status === 'SUCCESS')
        .reduce((sum: number, d: any) => sum + Number(d.amount), 0)

      setStats({
        volunteers: volunteersRes.data.volunteers?.length || 0,
        donations: donations.length,
        totalAmount,
        drives: drivesRes.data.drives?.length || 0,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Volunteers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.volunteers}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Drives</p>
                <p className="text-2xl font-bold text-gray-900">{stats.drives}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Gallery Items</p>
                <p className="text-2xl font-bold text-gray-900">-</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/volunteers"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Volunteers</h3>
                <p className="text-sm text-gray-600 mt-1">View and manage volunteer registrations</p>
              </div>
              <Users className="h-8 w-8 text-primary-600" />
            </div>
          </Link>

          <Link
            href="/admin/drives"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Drives</h3>
                <p className="text-sm text-gray-600 mt-1">Create and manage upcoming drives</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </Link>

          <Link
            href="/admin/donations"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">View Donations</h3>
                <p className="text-sm text-gray-600 mt-1">Track all donations and payments</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

