export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)] font-sans dark:bg-[var(--color-bg-dark-primary)] px-4">
      <div className="w-full max-w-3xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-2">About Astro Guru</h1>
          <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)]">Your trusted companion for Vedic astrology</p>
        </div>

        <div className="bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-dark-secondary)] border-2 border-[var(--color-border)] dark:border-[var(--color-border-dark)] rounded-lg p-8 shadow-xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4">Our Mission</h2>
            <p className="text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-6">
              Astro Guru is dedicated to bringing the ancient wisdom of Vedic astrology to the modern world. 
              We provide personalized, accurate Panchang-based predictions to help you navigate your daily life 
              with cosmic guidance.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-6 space-y-2">
              <li>Personalized daily Panchang predictions based on your birth chart</li>
              <li>Accurate Rahu Kalam, Yamagandam, and Gulika Kalam timings</li>
              <li>Auspicious Abhijit Muhurat for important activities</li>
              <li>Your personalized lucky time based on planetary positions</li>
              <li>Convenient WhatsApp delivery of daily predictions</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4">Our Technology</h2>
            <p className="text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-6">
              We use PySwissEph, the industry-standard astronomical calculation library based on NASA JPL 
              ephemerides, to ensure the highest accuracy in our predictions. Our calculations are based on 
              traditional Vedic astrology formulas combined with modern computational precision.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-6 space-y-2">
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
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:transform hover:-translate-y-0.5"
            >
              Create Your Profile
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <nav className="flex justify-center gap-4 text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)]">
            <a href="/" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Home</a>
            <a href="/contact" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Contact</a>
            <a href="/privacy" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Privacy</a>
            <a href="/terms" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Terms</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

