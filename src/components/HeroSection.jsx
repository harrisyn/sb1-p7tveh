import { useState } from 'react';

function HeroSection() {
  const [donationAmount, setDonationAmount] = useState('100');

  return (
    <div className="relative min-h-[90vh] bg-primary-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://nyahomedical.com/wp-content/uploads/2021/07/Nyaho-Tamaklo.jpg"
          alt="Nyaho Dove Foundation Healthcare"
        />
        <div className="absolute inset-0 bg-primary-600/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 flex justify-start">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md">
          <h1 className="font-display text-3xl font-semibold text-gray-900 mb-4">
            Enhancing Access to Quality Healthcare
          </h1>
          <p className="text-gray-600 mb-8">
            Join us in our mission to provide the best medical care and build
            capacity of health professionals in Ghana. Together, we can bridge
            the healthcare quality divide.
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select your contribution amount
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['100', '500', '1000'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    donationAmount === amount
                      ? 'bg-accent-400 text-gray-900 shadow-lg'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  GH₵{amount}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-accent-400 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-accent-500 transition-colors shadow-lg">
            Support Healthcare Access
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
            Your contribution supports healthcare access for deprived
            communities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
