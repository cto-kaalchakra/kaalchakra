export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      <div className="w-full max-w-3xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">About Astro Guru</h1>
          <p className="text-gray-600 dark:text-gray-400">Your trusted companion for Vedic astrology</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white rounded-lg p-8 shadow-lg">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Astro Guru is dedicated to bringing the ancient wisdom of Vedic astrology to the modern world. 
              We provide personalized, accurate Panchang-based predictions to help you navigate your daily life 
              with cosmic guidance.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>Personalized daily Panchang predictions based on your birth chart</li>
              <li>Accurate Rahu Kalam, Yamagandam, and Gulika Kalam timings</li>
              <li>Auspicious Abhijit Muhurat for important activities</li>
              <li>Your personalized lucky time based on planetary positions</li>
              <li>Convenient WhatsApp delivery of daily predictions</li>
            </ul>

            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Our Technology</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We use PySwissEph, the industry-standard astronomical calculation library based on NASA JPL 
              ephemerides, to ensure the highest accuracy in our predictions. Our calculations are based on 
              traditional Vedic astrology formulas combined with modern computational precision.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>100% personalized predictions based on your exact birth details</li>
              <li>Location-aware calculations for accurate sunrise/sunset timings</li>
              <li>Traditional Vedic astrology principles</li>
              <li>Modern, user-friendly interface</li>
              <li>Daily WhatsApp notifications</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Create Your Profile
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <nav className="flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

