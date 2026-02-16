export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      <div className="w-full max-w-3xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: February 16, 2026</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white rounded-lg p-8 shadow-lg">
          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">1. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We collect the following information when you create an astrology profile:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li>Full name</li>
                <li>Phone number (for WhatsApp notifications)</li>
                <li>Date and time of birth</li>
                <li>Place of birth and current location</li>
                <li>Calculated astrological data (zodiac sign, moon sign, nakshatra)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Your information is used solely for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li>Calculating personalized Panchang predictions</li>
                <li>Sending daily astrology updates via WhatsApp</li>
                <li>Improving our service quality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">3. Data Storage and Security</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your data is stored securely in our MongoDB database with industry-standard encryption. 
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">4. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li><strong>Twilio:</strong> For WhatsApp message delivery</li>
                <li><strong>Geopy/Nominatim:</strong> For geocoding location data</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">5. Data Sharing</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We do not sell, trade, or rent your personal information to third parties. Your astrological 
                data is private and will never be shared without your explicit consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of WhatsApp notifications</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:support@astroguru.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@astroguru.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">7. Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our website does not use cookies for tracking. We only use essential session data 
                required for the website to function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">8. Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">9. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@astroguru.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@astroguru.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <nav className="flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

