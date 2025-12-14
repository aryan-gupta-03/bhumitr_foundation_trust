import { Heart, CreditCard, Package, Building2 } from 'lucide-react'
import DonationDetails from '@/components/DonationDetails'

export default function DonatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donate</h1>
            <p className="text-xl text-primary-100">
              Your support helps us serve more meals, support students, and run impactful drives!
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Ways to Contribute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monetary Donations</h3>
              <p className="text-gray-700 text-sm">
                Support our programs with a financial contribution. Every rupee makes a difference.
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Kind Contributions</h3>
              <p className="text-gray-700 text-sm">
                Donate clothes, books, stationery, or non-perishable food items.
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate CSR</h3>
              <p className="text-gray-700 text-sm">
                Partner with us for corporate social responsibility initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Make a Donation
              </h2>
              <p className="text-gray-600">
                Your contribution directly supports our programs and helps us reach more people.
              </p>
            </div>
            <DonationDetails />
          </div>
        </div>
      </section>

      {/* Impact Message */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Donation Makes a Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹500</div>
                <p className="text-sm text-gray-700">Feeds 10 people</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹1,000</div>
                <p className="text-sm text-gray-700">Supports 5 students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹5,000</div>
                <p className="text-sm text-gray-700">Runs a full drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

