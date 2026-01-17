// "use client";

// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full h-[100vh] flex items-center justify-center"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl px-6 text-center text-white">
//         <p className="text-title">
//           Welcome to Cozy Cup
//         </p>

//         <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
//           Sip Comfort. <br className="hidden sm:block" />
//           Taste the Perfect Brew.
//         </h1>

//         <p className="text-base md:text-lg text-gray-200 mb-8">
//           At Cozy Cup, we serve freshly brewed coffee crafted with passion,
//           warmth, and the finest beans—because every cup should feel like home.
//         </p>

//         <div className="flex  gap-4 justify-center">
//           <Link
//             href="/menu"
//             className="inline-block  bg-orange-300 text-primary font-semibold px-8 py-4 rounded-full 
//           shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
//           transition-all duration-300"
//           >
//             View Menu
//           </Link>

//           <Link
//             href="/reservation"
//             className="px-8 py-4  border rounded-full font-semibold border-white/70 hover:bg-white hover:text-black transition "
//           >
//            Book a table
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 text-center text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <motion.p
          className="text-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Welcome to Cozy Cup
        </motion.p>

        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sip Comfort.
          <br className="hidden sm:block" />
          Taste the Perfect Brew.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          At Cozy Cup, we serve freshly brewed coffee crafted with passion,
          warmth, and the finest beans—because every cup should feel like home.
        </motion.p>

        {/* Buttons with Stagger Animation */}
        <motion.div
          className="flex gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="/menu"
              className="inline-block bg-orange-300 text-primary font-semibold px-8 py-4 rounded-full 
                shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
                transition-all duration-300"
            >
              View Menu
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="/reservation"
              className="inline-block border border-orange-300  font-semibold px-8 py-4 rounded-full 
                shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
                transition-all duration-300 text-orange-300"
            >
              Book a table
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
