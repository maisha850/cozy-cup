"use client";
import { motion } from "framer-motion";
import { CheckCircle, Coffee, LucideSmile, Smile } from "lucide-react";

import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-24   px-6 md:px-20 text-white relative overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-title">
            WHY CHOOSE US
          </p>

          <h2 className="text-subTitle">
            WE WANT YOU TO ENJOY <br /> OUR COFFEE TO THE FULLEST
          </h2>

          <p className="text-gray-300 ">
            Vertical is a family owned and operated coffee shop which provides a 
            small town experience with big city appeal. It’s warm and friendly 
            environment provides an excellent atmosphere to enjoy a great cup of 
            coffee or sandwich, hang with friends.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
              <span>Imported coffee and quality control</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
              <span>Cozy space to enjoy and relax</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
              <span>Make sure the coffee taste doesn’t change</span>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE STATS + IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:relative"
        >
          {/* Stats Card */}
          <div className="bg-white md:absolute text-black rounded-3xl p-10 shadow-lg  md:w-60 md:top-50 md:-left-10 left-0  w-full mb-8 md:mb-0 z-10">
            
            <div className="text-center mb-8 ">
              <span className="text-4xl "><Coffee size={30} className="block mx-auto text-secondary"></Coffee></span>
              <h3 className="text-3xl font-bold mt-2">450+</h3>
              <p className="text-sm text-gray-500">Cup coffee every day</p>
            </div>

            <hr className="my-6" />

            <div className="text-center">
              <span className="text-4xl"><LucideSmile size={30}  className="block mx-auto text-secondary"></LucideSmile></span>
              <h3 className="text-3xl font-bold mt-2">98%</h3>
              <p className="text-sm text-gray-500">Customer satisfaction</p>
            </div>
          </div>

          {/* Background Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=" rounded-3xl  shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1521161908453-1cacd0215437?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D"
              alt="Coffee cup"
              width={540}
              height={350}
              className="md:ml-12 ml-0 rounded-2xl"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
