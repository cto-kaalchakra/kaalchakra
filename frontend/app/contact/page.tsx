export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      <div className="w-full max-w-2xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400">We'd love to hear from you</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white rounded-lg p-8 shadow-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Have questions about our services? Need help with your astrology profile? 
                We're here to assist you!
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-black dark:text-white">Email</p>
                    <a 
                      href="mailto:support@astroguru.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      support@astroguru.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium text-black dark:text-white">WhatsApp</p>
                    <a 
                      href="https://wa.me/14155238886" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +1 (415) 523-8886
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-medium text-black dark:text-white">Support Hours</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-black dark:text-white">How do I receive my daily predictions?</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    After creating your profile, you'll receive daily predictions via WhatsApp at the phone 
                    number you provided during registration.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-black dark:text-white">Can I update my birth details?</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Yes! Please contact our support team with your registered phone number and the details 
                    you'd like to update.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-black dark:text-white">Is my data secure?</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Absolutely. We take data privacy seriously. Please read our{" "}
                    <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </div>
            </div>
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
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

