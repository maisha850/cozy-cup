"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="w-full py-24 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-title">
            Our Story
          </span>

          <h2 className="text-subTitle">
            Where Every Cup Tells a Story
          </h2>

          <p className="mt-6 text-white leading-relaxed">
     Cozy Cup began with a simple idea — to create a place where
            people could slow down, connect, and enjoy coffee made with
            intention. What started as a small passion project has grown into
            a warm café where every detail matters.
          </p>

          <p className="mt-4 text-white leading-relaxed">
            From carefully sourced beans to freshly baked treats, we believe
            great coffee is not just a drink — it’s an experience. A moment of
            comfort, creativity, and community shared over every cup.
          </p>

          <p className="mt-4 mb-6 text-white leading-relaxed">
            Whether you’re here to work, relax, or catch up with friends, 
           Cozy Cup is your everyday escape — brewed with love.
          </p>
       <span className="">
           <Link href={'/'} className="inline-block  bg-orange-300 text-primary font-semibold px-5 py-2 rounded-full 
          shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
          transition-all duration-300  ">Read More</Link>
       </span>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Image 1 */}
          <div className="relative w-72 h-96 rounded-r-3xl border border-r-orange-300 border-r-2 border-l-0 overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1655917080884-538d83e1de11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="Cafe interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute -bottom-10 left-10 w-64 h-80  border border-l-orange-300 border-l-2 border-r-0  rounded-l-3xl overflow-hidden shadow-2xl ">
            <Image
              src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Coffee brewing"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
