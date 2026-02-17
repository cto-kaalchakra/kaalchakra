"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const dateOfBirth = formData.get("date_of_birth") as string;
    const timeOfBirth = formData.get("time_of_birth") as string;
    const placeOfBirth = formData.get("place_of_birth") as string;
    const currentLocation = formData.get("current_location") as string;

    // Validation
    if (!name || !phone || !dateOfBirth || !timeOfBirth || !placeOfBirth) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^\d{10,15}$/.test(phone)) {
      toast.error("Please enter a valid phone number (10-15 digits)");
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await axios.post(`${apiUrl}/customers`, {
        name: name.trim(),
        phone: phone.trim(),
        date_of_birth: dateOfBirth,
        time_of_birth: timeOfBirth,
        place_of_birth: placeOfBirth.trim(),
        current_location: currentLocation ? currentLocation.trim() : null
      });

      console.log("Customer created:", res.data);
      toast.success(`Welcome ${name}! Your personalized astrology profile has been created.`);

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error("Error creating customer:", error);

      if (error.response?.status === 400) {
        toast.error(error.response.data.detail || "Customer with this phone number already exists");
      } else if (error.response?.status === 500) {
        toast.error("Server error. Please try again later.");
      } else if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Please ensure the backend is running.");
      } else {
        toast.error("Failed to create profile. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)] font-sans dark:bg-[var(--color-bg-dark-primary)]">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] mb-2">🌙 Astro Guru</h1>
          <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)]">Get your daily astrology predictions</p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-2 border-[var(--color-border)] dark:border-[var(--color-border-dark)] p-6 rounded-lg bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-dark-secondary)] shadow-xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Full Name
            </label>
            <input 
              id="name"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200" 
              type="text" 
              name="name" 
              placeholder="Enter your name"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Phone Number (with country code)
            </label>
            <input 
              id="phone"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200" 
              type="tel" 
              name="phone" 
              placeholder="e.g., +919876543210"
              disabled={isLoading}
              required
            />
            <p className="text-xs text-[var(--color-text-tertiary)] dark:text-[var(--color-text-dark-tertiary)] mt-1">
              Include country code (e.g., +91 for India)
            </p>
          </div>

          <div>
            <label htmlFor="date_of_birth" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Date of Birth *
            </label>
            <input
              id="date_of_birth"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200"
              type="date"
              name="date_of_birth"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="time_of_birth" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Time of Birth *
            </label>
            <input
              id="time_of_birth"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200"
              type="time"
              name="time_of_birth"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="place_of_birth" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Place of Birth *
            </label>
            <input
              id="place_of_birth"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200"
              type="text"
              name="place_of_birth"
              placeholder="e.g., Mumbai, India"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="current_location" className="block text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)] mb-1">
              Current Location (Optional)
            </label>
            <input
              id="current_location"
              className="w-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-accent)] bg-[var(--color-bg-tertiary)] dark:bg-[var(--color-bg-dark-tertiary)] text-[var(--color-text-primary)] dark:text-[var(--color-text-dark-primary)] transition-all duration-200"
              type="text"
              name="current_location"
              placeholder="e.g., Delhi, India"
              disabled={isLoading}
            />
            <p className="text-xs text-[var(--color-text-tertiary)] dark:text-[var(--color-text-dark-tertiary)] mt-1">
              Leave empty to use birth location for predictions
            </p>
          </div>

          <button
            type="submit"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] text-white px-4 py-3 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:transform hover:-translate-y-0.5 disabled:bg-[var(--color-text-tertiary)] disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Creating Profile..." : "Create Astrology Profile"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)]">
          <p>✨ Get personalized Panchang predictions</p>
          <p className="mt-1">📱 Receive daily timings via WhatsApp</p>
          <p className="mt-1">🌟 Rahu Kalam, Yamagandam, Gulika, Abhijit Muhurat & Lucky Time</p>
        </div>

        <div className="mt-6 text-center">
          <nav className="flex justify-center gap-4 text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-dark-secondary)]">
            <Link href="/about" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">About Us</Link>
            <Link href="/contact" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Contact</Link>
            <Link href="/privacy" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-colors duration-150">Terms</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}


