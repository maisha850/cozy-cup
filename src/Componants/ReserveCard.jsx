"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const ReserveCard = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your Table is reserved!");

    // Reset form
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="py-16 relative w-full min-h-screen flex items-center justify-center md:px-20 px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1709486688594-438596b68fc8?q=80&w=1331&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto rounded-xl relative z-10 bg-white/10 backdrop-blur-md p-6 md:p-8 text-white
                   shadow-xl transition-all duration-500 transform hover:scale-[1.01]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="01234 567890"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Number of Guests</label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 2"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Reservation Date</label>
            <input
              type="date"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Preferred Time</label>
            <input
              type="time"
              className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
        </div>

        {/* Seating Preference */}
        <div className="mt-5 flex flex-col">
          <label className="text-sm font-semibold mb-1">Seating Preference</label>
          <select
            className="p-2 md:p-3 rounded-md text-gray-400 bg-white/10 border border-white/20
                       focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <option>Select Seating</option>
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
        </div>

        {/* Special Requests */}
        <div className="mt-5 flex flex-col">
          <label className="text-sm font-semibold mb-1">Special Requests (optional)</label>
          <textarea
            rows="4"
            placeholder="Any special occasion or dietary requests"
            className="p-2 md:p-3 rounded-md bg-white/10 border border-white/20 
                       focus:outline-none focus:ring-2 focus:ring-orange-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-block bg-orange-300 text-primary w-full mt-6 font-semibold 
                     px-5 py-3 rounded-full shadow-[0_0_15px_2px_rgba(255,199,0,0.4)]
                     hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] transition-all duration-300"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReserveCard;
