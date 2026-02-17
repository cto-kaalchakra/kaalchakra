"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#1a0f26] text-gray-800 dark:text-gray-100 font-sans min-h-screen transition-colors duration-300">
      {/* Navigation - Same as Homepage */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-[#1a0f26]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="material-icons-round text-[#eca345] text-3xl">auto_awesome</span>
            <span className="font-display text-2xl font-bold tracking-tight">Kaalchakra</span>
          </Link>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link className="hover:text-[#eca345] transition-colors" href="/">Home</Link>
            <Link className="hover:text-[#eca345] transition-colors" href="/#about">About</Link>
            <Link className="hover:text-[#eca345] transition-colors" href="/#plans">Plans</Link>
            <Link className="text-[#eca345] border-b-2 border-[#eca345]" href="/contact">Contact</Link>
          </div>
          <Link href="/register">
            <button className="bg-[#eca345] hover:bg-[#f4b55d] text-[#361e50] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-[#eca345]/20">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[#361e50] dark:text-[#eca345]">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto italic">
            "I am trying to understand you deeply to guide you. Every conversation is a step toward clarity."
          </p>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#eca345]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#eca345]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Sidebar - Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#f5d9ae]/20 dark:bg-[#361e50]/20 border border-[#eca345]/10">
              <h2 className="font-display text-3xl font-bold mb-8 text-[#361e50] dark:text-[#eca345]">Connect with Us</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <span className="material-icons-round">chat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">Available for quick queries</p>
                    <a className="text-[#eca345] font-semibold hover:underline" href="https://wa.me/919876543210">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#eca345]/10 flex items-center justify-center text-[#eca345] group-hover:scale-110 transition-transform">
                    <span className="material-icons-round">alternate_email</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">For detailed consultations</p>
                    <a className="text-[#eca345] font-semibold hover:underline" href="mailto:guidance@kaalchakra.com">guidance@kaalchakra.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <span className="material-icons-round">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Divine Studio</h3>
                    <p className="text-gray-600 dark:text-gray-400">Vedic Square, 4th Floor<br/>Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-[#eca345]/10">
                <p className="font-medium mb-4 text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs">Follow the Stars</p>
                <div className="flex space-x-4">
                  <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-[#eca345] hover:text-white transition-all" href="#">
                    <span className="material-icons-round text-sm">public</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-[#eca345] hover:text-white transition-all" href="#">
                    <span className="material-icons-round text-sm">photo_camera</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-[#eca345] hover:text-white transition-all" href="#">
                    <span className="material-icons-round text-sm">play_circle</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 border-l-4 border-[#eca345] bg-gray-50 dark:bg-white/5 rounded-r-2xl">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Your path is written in the stars, but your steps are guided by the soul. We are here to help you walk with confidence."
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#eca345] flex items-center justify-center">
                  <span className="material-icons-round text-white text-sm">person</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Aatmiyaguru Guidance</p>
                  <p className="text-xs text-gray-400">Chief Consultant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/10">
              <div className="mb-10">
                <span className="px-4 py-1.5 rounded-full bg-[#eca345]/10 text-[#eca345] text-sm font-bold uppercase tracking-wider">Direct Message</span>
                <h2 className="text-3xl font-bold mt-4">Tell us your story...</h2>
                <p className="text-gray-500 mt-2">Our typical response time is under 4 hours.</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">Your Full Name</label>
                    <input className="w-full bg-gray-50 dark:bg-gray-900 border-transparent focus:border-[#eca345] focus:ring-0 rounded-2xl p-4 transition-all" placeholder="e.g. Rahul Sharma" required type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">WhatsApp Number</label>
                    <input className="w-full bg-gray-50 dark:bg-gray-900 border-transparent focus:border-[#eca345] focus:ring-0 rounded-2xl p-4 transition-all" placeholder="+91 00000 00000" required type="tel"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">Current Focus Area</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="cursor-pointer">
                      <input className="hidden peer" name="focus" type="radio"/>
                      <div className="text-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:bg-[#eca345] peer-checked:text-white peer-checked:border-[#eca345] transition-all text-sm font-medium">Career</div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" name="focus" type="radio"/>
                      <div className="text-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:bg-[#eca345] peer-checked:text-white peer-checked:border-[#eca345] transition-all text-sm font-medium">Love</div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" name="focus" type="radio"/>
                      <div className="text-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:bg-[#eca345] peer-checked:text-white peer-checked:border-[#eca345] transition-all text-sm font-medium">Health</div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" name="focus" type="radio"/>
                      <div className="text-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:bg-[#eca345] peer-checked:text-white peer-checked:border-[#eca345] transition-all text-sm font-medium">Family</div>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">Share your biggest concern (Keep it brief)</label>
                  <textarea className="w-full bg-gray-50 dark:bg-gray-900 border-transparent focus:border-[#eca345] focus:ring-0 rounded-2xl p-4 transition-all" placeholder="I'm feeling a bit lost with my current project and need some spiritual direction..." rows={4}></textarea>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-[#eca345] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-[#eca345]/30 transition-all flex items-center justify-center space-x-2" type="submit">
                    <span>Send Guidance Request</span>
                    <span className="material-icons-round">send</span>
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">By clicking, you agree to our spiritual ethics and privacy policy.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a0f26] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="material-icons-round text-[#eca345]">auto_awesome</span>
            <span className="font-display font-bold text-xl text-[#361e50] dark:text-[#eca345]">Kaalchakra</span>
          </Link>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 Kaalchakra Astrology. All cosmic rights reserved.
          </div>
          <div className="flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link className="hover:text-[#eca345]" href="/privacy">Privacy</Link>
            <Link className="hover:text-[#eca345]" href="/privacy">Terms</Link>
            <a className="hover:text-[#eca345]" href="#">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

