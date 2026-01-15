"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Regular Customer",
    quote:
      "Cozy Cup is more than just a coffee shop. From the warm ambiance to the rich aroma of freshly brewed coffee, every visit feels calming and personal. It’s my favorite place to unwind after a long day.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=60",
  },
  {
    name: "Tanvir Hasan",
    role: "Remote Worker",
    quote:
      "I spend hours working from Cozy Cup, and it never disappoints. The coffee is consistently excellent, the environment is peaceful, and the staff always make you feel welcome.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60",
  },
  {
    name: "Nusrat Jahan",
    role: "Food Blogger",
    quote:
      "As someone who reviews cafés regularly, I can confidently say Cozy Cup stands out. The attention to detail, quality of ingredients, and presentation of every cup are simply outstanding.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60",
  },
  {
    name: "Fahim Chowdhury",
    role: "Coffee Enthusiast",
    quote:
      "The espresso at Cozy Cup is perfectly balanced, bold yet smooth. You can truly taste the passion behind every brew. This is where real coffee lovers belong.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&auto=format&fit=crop&q=60",
  },
  {
    name: "Samia Islam",
    role: "Student",
    quote:
      "Whether I’m studying or catching up with friends, Cozy Cup always feels like the right place. Great coffee, relaxing vibes, and a cozy atmosphere make it special.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=60",
  },
  {
    name: "Rafi Ahmed",
    role: "Entrepreneur",
    quote:
      "Meetings feel more productive at Cozy Cup. The calm setting combined with premium-quality coffee creates the perfect environment for creative discussions.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&auto=format&fit=crop&q=60",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl px-6 text-center text-white"
      >
        <h3 className="text-title">Testimonials</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-16 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-400 mb-6 shadow-lg">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-6">
                “{testimonials[index].quote}”
              </p>

              <h4 className="text-xl font-semibold text-orange-400">
                {testimonials[index].name}
              </h4>
              <span className="text-sm text-gray-300">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-16 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
