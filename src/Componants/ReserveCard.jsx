"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ReserveCard = () => {
    const handleSubmit=()=>{
        toast.success('Your Table is reserved')
    }
    return (
        <div className=' py-16 relative w-full min-h-screen flex items-center justify-center md:px-20 px-'>
                 {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1709486688594-438596b68fc8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
            <form class="max-w-2xl mx-auto rounded-xl relative z-10 bg-[#131313]/90 backdrop-blur-md  p-8 text-white">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
   
      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>
{/* 
      <!-- Email --> */}
      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>
{/* 
      <!-- Phone --> */}
      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="01234 567890"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>
      
      {/* <!-- Number of Guests --> */}
      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          placeholder="e.g. 2"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>


      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="date">Reservation Date</label>
        <input
          id="date"
          type="date"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>

      {/* <!-- Reservation Time --> */}
      <div class="flex flex-col">
        <label class="text-sm font-semibold mb-1" for="time">Preferred Time</label>
        <input
          id="time"
          type="time"
          class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>

    </div>

    
    <div class="mt-6 flex flex-col">
      <label class="text-sm font-semibold mb-1" for="seating">Seating Preference</label>
      <select
        id="seating"
        class="p-3 rounded-md text-gray-400 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <option value="">Select Seating</option>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
    </div>


    <div class="mt-6 flex flex-col">
      <label class="text-sm font-semibold mb-1" for="requests">Special Requests (optional)</label>
      <textarea
        id="requests"
        rows="4"
        placeholder="Any special occasion or dietary requests"
        class="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
      ></textarea>
    </div>

 
    <button
      type="submit" onClick={handleSubmit}
      className="inline-block  bg-orange-300 text-primary  w-full mt-5 font-semibold px-5 py-2 rounded-full 
          shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
          transition-all duration-300 "
    >
      Confirm Reservation
    </button>
  </form>
        </div>
    );
};

export default ReserveCard;