export default function TermsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      <div className="w-full max-w-3xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: February 16, 2026</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white rounded-lg p-8 shadow-lg">
          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By accessing and using Astro Guru's services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">2. Service Description</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Astro Guru provides personalized Vedic astrology predictions based on Panchang calculations. 
                Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li>Daily Panchang timings (Rahu Kalam, Yamagandam, Gulika Kalam)</li>
                <li>Auspicious timings (Abhijit Muhurat, personalized lucky time)</li>
                <li>WhatsApp delivery of daily predictions</li>
                <li>Birth chart calculations based on provided birth details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">3. User Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                <li>Provide accurate birth information for precise calculations</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Use the service for personal, non-commercial purposes only</li>
                <li>Not misuse or abuse the WhatsApp notification service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">4. Accuracy and Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300">
                While we use industry-standard astronomical calculations (PySwissEph based on NASA JPL ephemerides) 
                and traditional Vedic astrology formulas, we make no guarantees about the accuracy or applicability 
                of predictions to your specific circumstances.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Important:</strong> Astrological predictions are for guidance and entertainment purposes only. 
                They should not be used as a substitute for professional advice in matters of health, finance, legal 
                issues, or other important life decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">5. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300">
                All content, features, and functionality of Astro Guru, including but not limited to text, graphics, 
                logos, and software, are the exclusive property of Astro Guru and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">6. WhatsApp Notifications</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By providing your phone number, you consent to receive daily astrology predictions via WhatsApp. 
                You can opt-out at any time by contacting our support team or replying "STOP" to any message.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Standard messaging rates may apply based on your mobile carrier's plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Astro Guru and its operators shall not be liable for any direct, indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to use the service, 
                or from any decisions made based on the astrological predictions provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">8. Service Modifications</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify, suspend, or discontinue any part of our service at any time 
                without prior notice. We will not be liable to you or any third party for any modification, 
                suspension, or discontinuation of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">9. Account Termination</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to terminate or suspend your account and access to our services at our 
                sole discretion, without notice, for conduct that we believe violates these Terms of Service 
                or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">10. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">11. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to update or modify these Terms of Service at any time. Your continued 
                use of the service after any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">12. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For questions about these Terms of Service, please contact us at{" "}
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
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

