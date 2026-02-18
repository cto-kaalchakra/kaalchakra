"use client";
import Link from "next/link";

export default function StandardPlanPage() {
  return (
    <div className="bg-[#1a0f26] font-sans text-gray-100 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-[#361e50]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-icons-round text-[#eca345] text-3xl">auto_awesome</span>
            <span className="font-display text-xl font-bold tracking-tight text-white">Kaalchakra</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white/60">Standard Personalised Plan</span>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <span className="text-[#eca345] font-bold">₹299</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row pt-16">
        {/* Left Sidebar - Why We Need This */}
        <section className="lg:w-2/5 celestial-bg relative p-8 lg:p-16 flex flex-col justify-center border-r border-white/10 overflow-hidden">
          <div className="star-field"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#bc6231]/20 text-[#bc6231] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="material-icons-round text-sm">info</span>
              <span>Why we need this</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Your path to <br/><span className="italic text-[#eca345]">Absolute Clarity</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-icons-round text-[#eca345]">auto_fix_high</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Generating Real Kundli</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Unlike generic horoscopes, your exact time and place of birth allow us to map the precise cosmic alignment at your birth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-icons-round text-[#eca345]">psychology</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Relevant Daily Advice</h4>
                  <p className="text-white/60 text-sm leading-relaxed">By knowing your current focus area, our guidance shifts from general to deeply actionable for your specific life phase.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-icons-round text-[#eca345]">forum</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Life Situation Context</h4>
                  <p className="text-white/60 text-sm leading-relaxed">We speak about your actual life situations, not just generic zodiac traits. Real value begins with real data.</p>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#361e50] bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#361e50] bg-gray-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#361e50] bg-gray-600"></div>
                </div>
                <p className="text-xs text-white/40">Joined by 12,000+ seekers this month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Form Section */}
        <section className="lg:w-3/5 bg-white dark:bg-[#1a0f26] p-8 lg:p-20 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#bc6231] font-bold text-sm tracking-widest uppercase">Step 2 of 2</span>
                <span className="text-gray-400 text-sm">Deep Personalisation</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#bc6231] w-full h-full"></div>
              </div>
            </div>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Complete your celestial profile</h1>
              <p className="text-gray-500 dark:text-gray-400">To provide real birth-chart-based daily guidance, we need a few more precise details about your journey.</p>
            </header>

            {/* Form */}
            <form className="space-y-8">
              {/* Time of Birth & Marital Status */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Exact Time of Birth</label>
                  <input 
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#bc6231] focus:border-[#bc6231] outline-none transition-all" 
                    step="60" 
                    type="time"
                  />
                  <p className="text-[11px] text-gray-400 italic">Needed for accurate Ascendant (Lagna) calculation</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Marital Status</label>
                  <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#bc6231] focus:border-[#bc6231] outline-none transition-all">
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="relationship">In a Relationship</option>
                    <option value="complicated">It's Complicated</option>
                  </select>
                </div>
              </div>

              {/* Place of Birth */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Place of Birth (City, Country)</label>
                <div className="relative">
                  <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">location_on</span>
                  <input
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl pl-12 pr-4 py-3 text-gray-900 dark:text-white focus:ring-[#bc6231] focus:border-[#bc6231] outline-none transition-all"
                    placeholder="e.g. Mumbai, India"
                    type="text"
                  />
                </div>
              </div>

              {/* Current Focus Area */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Current Focus Area</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="career"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">work</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Career</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="studies"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">school</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Studies</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="love"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">favorite</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Love</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="family"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">family_restroom</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Family</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="health"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">medical_services</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Health</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer hidden" name="focus" type="radio" value="finance"/>
                    <div className="p-4 border border-gray-200 dark:border-white/10 rounded-xl text-center peer-checked:border-[#bc6231] peer-checked:bg-[#bc6231]/5 peer-checked:text-[#bc6231] transition-all hover:border-[#bc6231]/50">
                      <span className="material-icons-round block mb-2">payments</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Finance</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Biggest Current Concern */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Biggest Current Concern</label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#bc6231] focus:border-[#bc6231] outline-none transition-all h-24 resize-none"
                  placeholder="Briefly describe what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  className="w-full bg-[#bc6231] hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#bc6231]/20 transition-all flex items-center justify-center space-x-2"
                  type="submit"
                >
                  <span>Proceed to Payment</span>
                  <span className="material-icons-round">arrow_forward</span>
                </button>
                <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center space-x-2">
                  <span className="material-icons-round text-sm">lock</span>
                  <span>Your data is encrypted and used only for your guidance</span>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#361e50] py-4 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] uppercase tracking-widest font-medium">
          <div className="mb-2 md:mb-0">© 2024 Kaalchakra Personalised Astrology</div>
          <div className="flex space-x-6">
            <Link className="hover:text-[#eca345] transition-colors" href="/privacy">Privacy</Link>
            <Link className="hover:text-[#eca345] transition-colors" href="/privacy">Terms</Link>
            <Link className="hover:text-[#eca345] transition-colors" href="/contact">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

