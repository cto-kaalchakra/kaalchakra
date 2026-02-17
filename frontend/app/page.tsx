"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#1a0f26] font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-icons-round text-[#eca345] text-3xl">auto_awesome</span>
            <span className="font-display text-2xl font-bold tracking-tight text-white">Kaalchakra</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-white/80">
            <a className="hover:text-[#eca345] transition-colors" href="#home">Home</a>
            <a className="hover:text-[#eca345] transition-colors" href="#about">About</a>
            <a className="hover:text-[#eca345] transition-colors" href="#plans">Plans</a>
            <a className="hover:text-[#eca345] transition-colors" href="#contact">Contact</a>
          </div>
          <Link href="/register">
            <button className="bg-[#eca345] hover:bg-opacity-90 text-[#361e50] font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen celestial-bg flex items-center justify-center overflow-hidden pt-20" id="home">
        <div className="star-field"></div>

        <span className="material-icons-round absolute top-1/4 left-10 text-white/10 text-9xl floating" style={{animationDelay: '0s'}}>dark_mode</span>
        <span className="material-icons-round absolute bottom-1/4 right-10 text-white/5 text-8xl floating" style={{animationDelay: '2s'}}>flare</span>
        <span className="material-icons-round absolute top-1/3 right-1/4 text-white/10 text-6xl floating" style={{animationDelay: '4s'}}>star</span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white mb-8 leading-tight">
            Align Your Spirit with <br/>
            <span className="italic text-[#eca345]">The Universe</span>
          </h1>
          <div className="inline-block relative p-10 mt-12 mb-16">
            <div className="absolute inset-0 border border-[#eca345]/30 rounded-xl"></div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#361e50] px-4 text-[#eca345]">
              <span className="material-icons-round">ac_unit</span>
            </div>
            <p className="font-display text-2xl md:text-3xl italic text-white/90 max-w-2xl leading-relaxed">
              "Someone truly understands my life and walks with me daily."
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#361e50] px-4 text-[#eca345]">
              <span className="material-icons-round">ac_unit</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a className="group flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer" href="#plans">
              <span>Explore your path</span>
              <span className="material-icons-round animate-bounce">expand_more</span>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-6 bg-white dark:bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#eca345] font-medium tracking-[0.3em] uppercase block mb-4">The Real Product</span>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900 dark:text-gray-900">More than just Astrology</h2>
            <div className="h-1 w-20 bg-[#eca345] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-600 leading-relaxed">
                At Kaalchakra, we believe that true guidance isn't just about reading the stars; it's about <span className="text-[#eca345] font-semibold">emotional reassurance</span> and finding daily clarity in a chaotic world.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="material-icons-round text-[#eca345]">check_circle</span>
                  <span className="text-gray-800 dark:text-gray-800">A feeling of protection and safety</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="material-icons-round text-[#eca345]">check_circle</span>
                  <span className="text-gray-800 dark:text-gray-800">Someone who genuinely cares for your path</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="material-icons-round text-[#eca345]">check_circle</span>
                  <span className="text-gray-800 dark:text-gray-800">Conversational, human-centric guidance</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#eca345]/20 rounded-2xl blur-xl group-hover:bg-[#eca345]/30 transition-all"></div>
              <div className="relative bg-white dark:bg-white p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <span className="material-icons-round">forum</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-gray-900">Conversational UX</span>
                </div>
                <p className="italic text-gray-500 dark:text-gray-500">"I am trying to understand you deeply to guide you."</p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-300 text-sm text-gray-400 dark:text-gray-500">
                  Our unique WhatsApp-style approach increases connection and resonance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 px-6 bg-white dark:bg-white" id="plans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl mb-4 text-gray-900 dark:text-gray-900">Choose Your Path</h2>
            <p className="text-gray-500 dark:text-gray-500">Tailored spiritual guidance delivered straight to your WhatsApp</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="group bg-white dark:bg-white rounded-3xl p-8 border border-gray-100 dark:border-gray-300 hover:border-[#bc6231] transition-all hover:shadow-2xl duration-300 relative flex flex-col h-full">
              <div className="mb-8">
                <span className="material-icons-round text-[#bc6231] text-4xl mb-4">brightness_2</span>
                <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-gray-900">Basic Guidance</h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">Daily simple emotional + zodiac-level guidance</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-900">₹99</span>
                  <span className="text-gray-400 dark:text-gray-400 ml-2">/ month</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <p className="font-semibold text-sm uppercase tracking-wider text-[#bc6231]">Features:</p>
                <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-800">
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#bc6231] text-lg">bolt</span>
                    <span>Minimal form (under 30 seconds)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#bc6231] text-lg">check</span>
                    <span>Moon sign & Zodiac guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#bc6231] text-lg">check</span>
                    <span>Preferred message timing</span>
                  </li>
                </ul>
              </div>
              <Link href="/register">
                <button className="w-full py-4 rounded-xl border-2 border-[#bc6231] text-[#bc6231] font-bold hover:bg-[#bc6231] hover:text-white transition-all">
                  Start Basic
                </button>
              </Link>
            </div>

            {/* Standard Plan - Most Popular */}
            <div className="group bg-white dark:bg-white rounded-3xl p-8 border-2 border-[#eca345] shadow-2xl scale-105 relative z-10 flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#eca345] text-[#361e50] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-8">
                <span className="material-icons-round text-[#eca345] text-4xl mb-4">brightness_5</span>
                <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-gray-900">Standard Personalised</h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">Real birth-chart-based daily guidance</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-900">₹299</span>
                  <span className="text-gray-400 dark:text-gray-400 ml-2">/ month</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <p className="font-semibold text-sm uppercase tracking-wider text-[#eca345]">Everything in Basic, plus:</p>
                <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-800">
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#eca345] text-lg">auto_fix_high</span>
                    <span>Generate real Kundli</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#eca345] text-lg">psychology</span>
                    <span>Focus area tracking (Career, Love, Health)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#eca345] text-lg">map</span>
                    <span>Personalized life situation advice</span>
                  </li>
                </ul>
              </div>
              <Link href="/register">
                <button className="w-full py-4 rounded-xl bg-[#eca345] text-[#361e50] font-bold hover:shadow-lg transition-all">
                  Upgrade to Standard
                </button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="group bg-white dark:bg-white rounded-3xl p-8 border border-gray-100 dark:border-gray-300 hover:border-[#f5d9ae] transition-all hover:shadow-2xl duration-300 relative flex flex-col h-full">
              <div className="mb-8">
                <span className="material-icons-round text-[#f5d9ae] text-4xl mb-4">stars</span>
                <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-gray-900">Premium Aatmiyaguru</h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">Deep emotional profile & soulful bonding</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-900">₹599</span>
                  <span className="text-gray-400 dark:text-gray-400 ml-2">/ month</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <p className="font-semibold text-sm uppercase tracking-wider text-[#f5d9ae]">Everything in Standard, plus:</p>
                <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-800">
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#f5d9ae] text-lg">favorite</span>
                    <span>Deep emotional profile matching</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#f5d9ae] text-lg">mic</span>
                    <span>Optional voice note sharing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="material-icons-round text-[#f5d9ae] text-lg">self_improvement</span>
                    <span>Personal remedies & rituals</span>
                  </li>
                </ul>
              </div>
              <Link href="/register">
                <button className="w-full py-4 rounded-xl border-2 border-[#f5d9ae] text-gray-700 dark:text-gray-700 font-bold hover:bg-[#f5d9ae] hover:text-[#361e50] transition-all">
                  Choose Premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 celestial-bg relative overflow-hidden">
        <div className="star-field"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Ready to begin your journey?</h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Step away from generic horoscopes. Connect with a guide who truly understands your life situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <button className="bg-[#eca345] text-[#361e50] font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform w-full sm:w-auto">
                Get Started Now
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full text-lg transition-all w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 dark:bg-[#1a0f26] border-t border-gray-100 dark:border-gray-800" id="contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="material-icons-round text-[#eca345] text-2xl">auto_awesome</span>
              <span className="font-display text-xl font-bold tracking-tight">Kaalchakra</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Modern spiritual guidance for a meaningful life. Personalized insights delivered with care via WhatsApp.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#eca345] hover:text-white transition-colors" href="#">
                <span className="material-icons-round text-sm">facebook</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#eca345] hover:text-white transition-colors" href="#">
                <span className="material-icons-round text-sm">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-[#eca345]" href="#home">Home</a></li>
              <li><a className="hover:text-[#eca345]" href="#about">Our Strategy</a></li>
              <li><a className="hover:text-[#eca345]" href="#plans">Pricing Plans</a></li>
              <li><Link className="hover:text-[#eca345]" href="/register">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><Link className="hover:text-[#eca345]" href="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-[#eca345]" href="/privacy">Terms of Service</Link></li>
              <li><Link className="hover:text-[#eca345]" href="/privacy">Privacy Policy</Link></li>
              <li><a className="hover:text-[#eca345]" href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-400 text-sm">
          © 2026 Kaalchakra Guidance Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

