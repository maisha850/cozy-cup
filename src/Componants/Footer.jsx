"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";



export default function Footer() {
    const onSubmit=(e)=>{
e.preventDefault()
toast.success('Subscribed')
    }
  return (
    <footer
      className="relative  bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589111502533-e78e1fae673e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
            <Logo></Logo>
            <p className="text-sm text-gray-300">Welcome to Cozy Cup. It is a well-known cafe in this town which focus on customer satisfaction by providing authentic and tasty coffee and others bakery and cake items  </p>
        </div>
         <div className="md:ml-10 ml-0">
              <h3 className="text-lg font-bold mb-6 uppercase">Information</h3>
        <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>About us</Link></li>

            <li><Link href={'/menu'}>Menu</Link></li>
            <li><Link href={'/reservation'}>Reservation</Link></li>
            </ul>
         </div>
        {/* Opening Hours */}
        <div className="md:mr-10 mr-0">
          <h3 className="text-lg font-bold mb-6 uppercase">Opening Hours</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between"><span>Monday</span><span>Closed</span></li>
            <li className="flex justify-between"><span>Tuesday</span><span>9:00 - 22:00</span></li>
            <li className="flex justify-between"><span>Wednesday</span><span>9:00 - 22:00</span></li>
            <li className="flex justify-between"><span>Thursday</span><span>9:00 - 22:00</span></li>
            <li className="flex justify-between"><span>Friday *</span><span>9:00 - 1:00</span></li>
            <li className="flex justify-between"><span>Saturday *</span><span>12:00 - 1:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>9:00 - 22:00</span></li>
          </ul>
        </div>

       

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="text-orange-400">cozycup@gmail.com</li>
            <li>01788888889</li>
            <li>Dhanmondi, Dhaka</li>
          </ul>

          <h4 className="mt-8 mb-4 font-bold uppercase">The Last Standard Post</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your E-Mail"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 text-sm outline-none"
            />
            <button onClick={onSubmit} className="px-4 bg-orange-300 text-primary flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-300 text-center">@2026 cozycup, all rights reserved</p>
<ToastContainer></ToastContainer>
      </div>

     
    </footer>
  );
}
