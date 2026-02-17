"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    // Highlight active sidebar link on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('aside nav a');
      let current = '';

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 120) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-[#eca345]', 'border-[#eca345]', 'font-medium');
        if (link.getAttribute('href')?.includes(current) && current) {
          link.classList.add('text-[#eca345]', 'border-[#eca345]', 'font-medium');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-[#1a0f26] text-gray-800 dark:text-gray-100 font-sans leading-relaxed min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-[#1a0f26]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-icons-round text-[#eca345] text-3xl">auto_awesome</span>
            <span className="font-display text-2xl font-bold tracking-tight">Kaalchakra</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link className="hover:text-[#eca345] transition-colors" href="/">Home</Link>
            <Link className="hover:text-[#eca345] transition-colors" href="/#plans">Guidance Plans</Link>
            <Link className="text-[#eca345]" href="/privacy">Legal</Link>
          </nav>
          <Link href="/register">
            <button className="bg-[#eca345] hover:bg-[#f4b55d] text-[#361e50] px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#eca345]/20">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 px-3">On this page</h3>
                <nav className="flex flex-col gap-1 border-l border-gray-200 dark:border-gray-800">
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#introduction">Introduction</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#info-collection">Information We Collect</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#how-we-use">How We Use Data</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#data-security">Data Security</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#terms">Terms of Service</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#disclaimer">Legal Disclaimer</a>
                  <a className="px-4 py-2 text-sm border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all" href="#contact">Contact Us</a>
                </nav>
              </div>
              <div className="p-6 bg-[#eca345]/5 rounded-2xl border border-[#eca345]/10">
                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                  "The stars guide, but the law protects. We are committed to your privacy as much as your journey."
                </p>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="flex-1 max-w-3xl">
            <header className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy &amp; Terms of Service</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">Last updated: February 17, 2026</p>
            </header>

            <div className="bg-[#f5d9ae]/30 dark:bg-[#f5d9ae]/10 border border-[#f5d9ae] rounded-2xl p-6 mb-12 flex gap-4">
              <span className="material-icons-round text-[#bc6231] dark:text-[#f5d9ae] shrink-0">info</span>
              <p className="m-0 text-[#785936] dark:text-[#f5d9ae] font-medium text-sm leading-relaxed">
                At Kaalchakra, your trust is our highest priority. We collect only what is necessary to provide deep, personalized spiritual guidance. We never sell your data to third parties.
              </p>
            </div>

            <section id="introduction" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Welcome to Kaalchakra. This document outlines how we handle your personal information and the terms under which our guidance services are provided. By using our platform, you agree to the practices described here.
              </p>
            </section>

            <section id="info-collection" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                To provide accurate astrological and emotional guidance, we collect information across three tiers of service:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold text-[#eca345] mb-2">Basic</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400 list-disc pl-4">
                    <li>Full Name</li>
                    <li>Date of Birth</li>
                    <li>WhatsApp Number</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold text-[#eca345] mb-2">Standard</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400 list-disc pl-4">
                    <li>Time &amp; Place of Birth</li>
                    <li>Marital Status</li>
                    <li>Current Focus Area</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold text-[#eca345] mb-2">Premium</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400 list-disc pl-4">
                    <li>Occupational Details</li>
                    <li>Stress &amp; Spiritual Profile</li>
                    <li>Voice Notes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our data collection is designed to feel like a conversation with a mentor, not a registration form. We use this data to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-2">
                <li>Generate personalized birth charts (Kundli).</li>
                <li>Deliver daily guidance via WhatsApp at your preferred time.</li>
                <li>Understand your emotional state to provide relevant reassurance.</li>
                <li>Maintain a continuous "spiritual bond" for long-term guidance.</li>
              </ul>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We implement industry-standard encryption to protect your sensitive personal details. Access to your emotional profile is strictly limited to your designated spiritual guide and necessary system processes.
              </p>
            </section>

            <section id="terms" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">Terms of Service</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The "Kaalchakra" experience is designed for emotional wellness and personal growth. By engaging with our services, you understand that:
              </p>
              <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-2">
                <li>Our guidance is based on traditional astrological calculations and psychological insights.</li>
                <li>Subscriptions are billed monthly/annually based on your chosen plan.</li>
                <li>You may opt-out or request data deletion at any time via WhatsApp.</li>
              </ol>
            </section>

            <section id="disclaimer" className="bg-[#f5d9ae]/20 dark:bg-gray-800/80 border-l-4 border-[#f5d9ae] p-8 my-12 italic rounded-r-xl">
              <h3 className="not-italic text-[#bc6231] dark:text-[#f5d9ae] font-display text-xl font-bold mb-4">Important Disclaimer</h3>
              <p className="mb-0 text-gray-700 dark:text-gray-300">
                The guidance provided by Kaalchakra is intended for motivational and spiritual purposes only. It does not substitute professional medical, legal, or financial advice. We do not guarantee specific outcomes or future events based on our interpretations.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you have questions about your privacy or our terms, please reach out to our support team:
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Email: <a className="text-[#eca345] no-underline hover:underline" href="mailto:support@kaalchakra.ai">support@kaalchakra.ai</a><br/>
                WhatsApp: +91 99XXXXXXX
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 transition-opacity">
            <span className="material-icons-round text-2xl">auto_awesome</span>
            <span className="font-display text-xl font-bold">Kaalchakra</span>
          </Link>
          <p className="text-sm text-gray-500">
            © 2026 Kaalchakra Spiritual Guidance Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-gray-400 hover:text-[#eca345] transition-colors" href="#"><span className="material-icons-round">facebook</span></a>
            <a className="text-gray-400 hover:text-[#eca345] transition-colors" href="#"><span className="material-icons-round">alternate_email</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

