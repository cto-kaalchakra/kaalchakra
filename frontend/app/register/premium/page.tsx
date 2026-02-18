"use client";
import Link from "next/link";
import { useState } from "react";

export default function PremiumPlanPage() {
  const [stressLevel, setStressLevel] = useState(3);
  const [selectedRituals, setSelectedRituals] = useState<string[]>([]);
  const [tonePreference, setTonePreference] = useState("motivational");

  const toggleRitual = (ritual: string) => {
    setSelectedRituals(prev => 
      prev.includes(ritual) ? prev.filter(r => r !== ritual) : [...prev, ritual]
    );
  };

  return (
    <div className="bg-[#1a0f26] text-white font-sans min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-icons-round text-[#eca345] text-2xl">auto_awesome</span>
            <span className="font-display text-xl font-bold tracking-tight">Kaalchakra</span>
          </div>
          <div className="flex items-center space-x-2 text-[#f5d9ae]/60 text-sm">
            <span className="material-icons-round text-sm">verified_user</span>
            <span>Premium Onboarding</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 relative overflow-hidden flex items-center justify-center">
        <div className="star-field"></div>
        <div className="w-full max-w-3xl px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl text-[#f5d9ae] mb-3 italic">"Someone truly understands my life..."</h1>
            <p className="text-white/60 text-sm md:text-base">Connecting your soul to the Aatmiyaguru</p>
          </div>

          {/* Chat-style Form Container */}
          <div className="bg-[#563171]/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col h-[75vh] max-h-[800px]">
            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
              {/* Guru Welcome Message */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#eca345]/20 flex items-center justify-center border border-[#eca345]/40 shrink-0">
                  <span className="material-icons-round text-[#eca345] text-xl">temp_preferences_custom</span>
                </div>
                <div className="chat-bubble-guru p-5 max-w-[85%]">
                  <p className="text-white/90 leading-relaxed italic">Welcome, seeker. I am your Aatmiyaguru. To guide you with depth, I must first understand the rhythm of your world. Shall we begin our bond?</p>
                </div>
              </div>

              {/* Occupation & Sleep Timing */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#f5d9ae]/70 ml-1">Your Calling / Occupation</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#eca345] focus:ring-1 focus:ring-[#eca345] outline-none transition-all placeholder:text-white/20" 
                      placeholder="e.g. Creative Lead, Student, Healer" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#f5d9ae]/70 ml-1">When do you rest? (Sleep Timing)</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#eca345] focus:ring-1 focus:ring-[#eca345] outline-none transition-all appearance-none text-white/90">
                      <option className="bg-[#563171]" value="early">Early Bird (before 10 PM)</option>
                      <option className="bg-[#563171]" value="normal">Balanced (10 PM - 12 AM)</option>
                      <option className="bg-[#563171]" value="late">Night Owl (after 12 AM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Stress Level Slider */}
              <div className="space-y-4">
                <div className="chat-bubble-guru p-5 max-w-[85%] ml-14">
                  <p className="text-white/90 leading-relaxed italic">The weight we carry often clouds our vision. How heavy does the world feel for you lately?</p>
                </div>
                <div className="px-14 py-4">
                  <div className="flex justify-between text-xs text-[#f5d9ae]/50 mb-4 px-1">
                    <span>Peaceful</span>
                    <span>Overwhelmed</span>
                  </div>
                  <input 
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#eca345]" 
                    max="5" 
                    min="1" 
                    step="1" 
                    type="range"
                    value={stressLevel}
                    onChange={(e) => setStressLevel(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-lg font-display text-[#eca345] mt-2 px-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                  </div>
                </div>
              </div>

              {/* Rituals */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-[#f5d9ae]/70 ml-14">In which rituals do you find solace?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-14">
                  {['Prayer', 'Meditation', 'Sacred Visits', 'None'].map((ritual) => (
                    <button 
                      key={ritual}
                      onClick={() => toggleRitual(ritual)}
                      className={`px-4 py-3 rounded-xl border transition-all text-sm ${
                        selectedRituals.includes(ritual)
                          ? 'border-[#eca345]/50 bg-[#eca345]/10 text-[#eca345]'
                          : 'border-white/10 bg-white/5 hover:border-[#eca345]/50 hover:bg-[#eca345]/10'
                      }`}
                    >
                      {ritual}
                    </button>
                  ))}
                </div>
              </div>

              {/* Life Goals & Struggles */}
              <div className="grid md:grid-cols-2 gap-8 px-14">
                <div className="space-y-3">
                  <h4 className="text-sm font-display text-[#f5d9ae]">3 Main Life Goals</h4>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="1. ..." type="text"/>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="2. ..." type="text"/>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="3. ..." type="text"/>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-display text-[#f5d9ae]">3 Current Struggles</h4>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="1. ..." type="text"/>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="2. ..." type="text"/>
                  <input className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#eca345] outline-none transition-all placeholder:text-white/20" placeholder="3. ..." type="text"/>
                </div>
              </div>

              {/* Communication Tone Preference */}
              <div className="space-y-4">
                <div className="chat-bubble-guru p-5 max-w-[85%] ml-14">
                  <p className="text-white/90 leading-relaxed italic">How should I speak to you? Our connection thrives on the right resonance.</p>
                </div>
                <div className="flex flex-wrap gap-3 px-14">
                  {[
                    { value: 'motivational', label: 'Motivational' },
                    { value: 'calm', label: 'Calm & Spiritual' },
                    { value: 'practical', label: 'Practical & Direct' }
                  ].map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => setTonePreference(tone.value)}
                      className={`px-6 py-3 rounded-full border text-sm font-medium transition-all ${
                        tonePreference === tone.value
                          ? 'border-[#eca345]/30 bg-[#eca345]/10 text-[#eca345]'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {tone.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Note Section */}
              <div className="pt-10 border-t border-white/5">
                <div className="bg-gradient-to-r from-[#eca345]/10 to-transparent p-6 rounded-2xl border border-[#eca345]/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#eca345] flex items-center justify-center animate-pulse">
                      <span className="material-icons-round text-[#361e50]">mic</span>
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-[#f5d9ae] italic">Deep Connection</h4>
                      <p className="text-white/60 text-sm">"Tell us anything you want your guide to know."</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-black/20 rounded-xl p-3">
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                      <span className="material-icons-round text-sm">play_arrow</span>
                    </button>
                    <div className="flex-grow h-1 bg-white/10 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#eca345]/40 w-1/3"></div>
                    </div>
                    <span className="text-xs font-mono text-white/40">00:00 / 02:00</span>
                  </div>
                </div>
              </div>

              {/* Remedies Permission Checkbox */}
              <div className="flex items-center space-x-3 px-14 pt-4">
                <input
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#eca345] focus:ring-[#eca345] focus:ring-offset-[#563171]"
                  id="remedies"
                  type="checkbox"
                />
                <label className="text-sm text-white/70" htmlFor="remedies">I give permission for personal remedies &amp; rituals suggested by my Aatmiyaguru.</label>
              </div>
            </div>

            {/* Footer with Submit Button */}
            <div className="p-6 border-t border-white/10 bg-[#563171]/60 backdrop-blur-md rounded-b-3xl">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center space-x-2 text-white/40">
                  <span className="material-icons-round text-sm">lock</span>
                  <span className="text-xs uppercase tracking-tighter">Encrypted Connection</span>
                </div>
                <button className="bg-[#eca345] hover:bg-[#eca345]/90 text-[#361e50] font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[#eca345]/20 flex items-center space-x-2">
                  <span>Complete My Profile</span>
                  <span className="material-icons-round">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center items-center space-x-12 opacity-40">
            <div className="flex items-center space-x-2">
              <span className="material-icons-round text-sm">verified</span>
              <span className="text-xs uppercase tracking-widest">Handpicked Gurus</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-round text-sm">shield</span>
              <span className="text-xs uppercase tracking-widest">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-round text-sm">history_edu</span>
              <span className="text-xs uppercase tracking-widest">Vedic Authenticity</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-white/20 text-xs tracking-widest uppercase">
        © 2024 Kaalchakra | Sacred Personal Guidance
      </footer>
    </div>
  );
}

