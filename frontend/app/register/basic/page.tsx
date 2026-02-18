"use client";
import Link from "next/link";

export default function BasicPlanPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-x-hidden bg-[#f5d9ae]">
      {/* Celestial Accents */}
      <span className="material-icons-round absolute text-9xl top-10 -left-10 transform -rotate-12 pointer-events-none opacity-10 text-[#563171]">dark_mode</span>
      <span className="material-icons-round absolute text-8xl bottom-20 -right-5 transform rotate-45 pointer-events-none opacity-10 text-[#563171]">flare</span>
      <span className="material-icons-round absolute text-6xl top-1/4 right-10 pointer-events-none opacity-10 text-[#563171]">auto_awesome</span>

      {/* Form Container */}
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-md rounded-[32px] shadow-2xl overflow-hidden border border-white/40 relative z-10">
        {/* Progress Bar */}
        <div className="pt-8 px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#563171]/60">Step 1 of 1: Registration</span>
            <span className="text-xs font-bold text-[#563171]">100%</span>
          </div>
          <div className="h-1.5 w-full bg-[#563171]/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#563171] rounded-full w-full"></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#563171] text-white mb-4">
              <span className="material-icons-round text-3xl">brightness_2</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-[#361e50] mb-2">Basic Guidance</h1>
            <p className="text-[#563171]/70 font-medium">Daily simple emotional &amp; zodiac-level guidance • ₹99</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-[#361e50] mb-2" htmlFor="full_name">Full Name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#563171] focus:ring-[#563171] bg-white/50" 
                id="full_name" 
                name="full_name" 
                placeholder="Aarav Sharma" 
                required 
                type="text"
              />
            </div>

            {/* Gender & DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#361e50] mb-2" htmlFor="gender">Gender (Optional)</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#563171] focus:ring-[#563171] bg-white/50" 
                  id="gender" 
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#361e50] mb-2" htmlFor="dob">Date of Birth</label>
                <input 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#563171] focus:ring-[#563171] bg-white/50" 
                  id="dob" 
                  name="dob" 
                  required 
                  type="date"
                />
              </div>
            </div>

            {/* Language & Message Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#361e50] mb-2" htmlFor="language">Preferred Language</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#563171] focus:ring-[#563171] bg-white/50" 
                  id="language" 
                  name="language" 
                  required
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="marathi">Marathi</option>
                  <option value="bengali">Bengali</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#361e50] mb-2">Preferred Message Time</label>
                <div className="flex gap-2">
                  <label className="flex-1">
                    <input defaultChecked className="hidden peer" name="timing" type="radio" value="morning"/>
                    <div className="text-center py-2.5 rounded-xl border border-gray-200 peer-checked:bg-[#563171] peer-checked:text-white peer-checked:border-[#563171] cursor-pointer transition-all text-sm font-medium">
                      Morning
                    </div>
                  </label>
                  <label className="flex-1">
                    <input className="hidden peer" name="timing" type="radio" value="evening"/>
                    <div className="text-center py-2.5 rounded-xl border border-gray-200 peer-checked:bg-[#563171] peer-checked:text-white peer-checked:border-[#563171] cursor-pointer transition-all text-sm font-medium">
                      Evening
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-semibold text-[#361e50] mb-2" htmlFor="whatsapp">WhatsApp Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
                <input 
                  className="w-full pl-14 pr-4 py-3 rounded-xl border-gray-200 focus:border-[#563171] focus:ring-[#563171] bg-white/50" 
                  id="whatsapp" 
                  name="whatsapp" 
                  placeholder="9876543210" 
                  required 
                  type="tel"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full bg-[#563171] text-white font-bold py-4 rounded-2xl hover:bg-[#361e50] transition-all shadow-lg shadow-[#563171]/20 text-lg flex items-center justify-center gap-2 group" 
              type="submit"
            >
              Get Started
              <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <p className="text-center text-xs text-[#563171]/50">
              Starts your 30-day journey immediately after payment.
            </p>
          </form>
        </div>
      </div>

      {/* Cancel Link */}
      <div className="mt-8 text-center text-[#361e50]/40 text-sm">
        <Link className="hover:text-[#361e50] transition-colors" href="/#plans">Cancel and return to plans</Link>
      </div>
    </div>
  );
}

