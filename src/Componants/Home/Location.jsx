import React from 'react';
import Image from 'next/image';
import { Coffee, CoffeeIcon, LucideCoffee } from 'lucide-react';

const Location = () => {
  return (
    <section className="bg-[#FDF6E8] min-h-[600px] flex flex-col md:flex-row items-stretch">
      {/* Left Side: Image with Overlay Text */}
      <div className="relative w-full md:w-1/2 min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D" // Replace with your image path
          alt="Barista at Cozy Cup"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <h2 className="text-white text-6xl md:text-8xl font-serif italic leading-none drop-shadow-lg">
            Coffee <br />
            <span className="ml-8">Time</span>
          </h2>
        </div>
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
        {/* Subtitle with Icons */}
        <div className="flex items-center gap-2 mb-4">
        
          <span className="text-title">
           Location
          </span>
        
        </div>

        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tight">
          How to find us?
        </h3>

        {/* Contact Info */}
        <div className="space-y-8 max-w-md">
          <div>
            <p className="uppercase tracking-widest text-xs font-bold text-gray-900 mb-2">
              Call us book a table & delivery:
            </p>
            <p className="text-[#C2A383] text-3xl md:text-4xl font-bold">
              (734) 665-1852
            </p>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs font-bold text-gray-900 mb-4">
              Information Cozy Cup:
            </p>
            <address className="not-italic text-gray-600 space-y-1 text-sm md:text-base">
              <p>4517 Washington Ave. Manchester, Kentucky 39495, USA</p>
              <p className="text-gray-800 font-medium">cozycup@gmail.com</p>
              <p>Mon - Fri : 9.00am – 22.00pm, Holidays : Close</p>
            </address>
          </div>

          {/* Button */}
          <button className="mt-4 px-10 py-4 bg-[#C2A383] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#b08f6d] transition-colors duration-300">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;