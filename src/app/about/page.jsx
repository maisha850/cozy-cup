"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-24 relative text-white">
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

      <div className="max-w-7xl z-10 mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center justify-center relative">
        {/* LEFT: IMAGES */}
        <div className="px-6 pb-10 relative w-full flex justify-center">
          <motion.div
            className="relative w-full flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Large Image */}
            <div className="md:w-72 md:h-96 w-52 h-64 rounded-2xl overflow-hidden shadow-xl border border-orange-300 relative">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80"
                alt="Coffee shop interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Smaller Overlay Image */}
            <div className="absolute -bottom-10 md:-right-10 right-0 md:w-52 md:h-72 w-36 h-48 rounded-2xl overflow-hidden shadow-xl border border-orange-300">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
                alt="Coffee brewing"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10 px-4 sm:px-0"
        >
          <p className="text-title text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            About Us
          </p>

          <h2 className="text-subTitle text-2xl sm:text-3xl md:text-4xl mb-6 font-bold">
            Brewing Passion Into Every Cup
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            At Cozy Cup, our journey began with a simple dream: to create a warm space where people can slow down, sip great coffee, and enjoy genuine moments of peace.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            We source the finest beans from sustainable farms, roast them with care, and brew each cup with precision and heart. From espresso to handcrafted beverages, every flavor tells a story.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
            Step inside and experience a blend of comfort, creativity, and community — where every visit feels like home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
