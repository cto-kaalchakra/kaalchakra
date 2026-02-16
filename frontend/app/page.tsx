"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {
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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">🌙 Astro Guru</h1>
          <p className="text-gray-600 dark:text-gray-400">Get your daily astrology predictions</p>
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4 border border-gray-300 dark:border-white p-6 rounded-lg bg-white dark:bg-zinc-900 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input 
              id="name"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white" 
              type="text" 
              name="name" 
              placeholder="Enter your name"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input 
              id="phone"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white" 
              type="tel" 
              name="phone" 
              placeholder="10-15 digits"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date of Birth *
            </label>
            <input
              id="date_of_birth"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
              type="date"
              name="date_of_birth"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="time_of_birth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Time of Birth *
            </label>
            <input
              id="time_of_birth"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
              type="time"
              name="time_of_birth"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="place_of_birth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Place of Birth *
            </label>
            <input
              id="place_of_birth"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
              type="text"
              name="place_of_birth"
              placeholder="e.g., Mumbai, India"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label htmlFor="current_location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Current Location (Optional)
            </label>
            <input
              id="current_location"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
              type="text"
              name="current_location"
              placeholder="e.g., Delhi, India"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Leave empty to use birth location for predictions
            </p>
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Creating Profile..." : "Create Astrology Profile"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>✨ Get personalized Panchang predictions</p>
          <p className="mt-1">📱 Receive daily timings via WhatsApp</p>
          <p className="mt-1">🌟 Rahu Kalam, Yamagandam, Gulika, Abhijit Muhurat & Lucky Time</p>
        </div>

        <div className="mt-6 text-center">
          <nav className="flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
