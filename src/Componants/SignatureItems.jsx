
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { allSignatureItems } from "..";
// import SignatureCard from "./Card/SingnatureCard";

// const SignatureItems = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < allSignatureItems.length - 2) {
//       setIndex(index + 2);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 2);
//     }
//   };

//   return (
//     <div className="relative px-8 py-35  overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1587513862502-66c2b7e9eaf0?w=600&auto=format&fit=crop&q=60')",
//         }}
//       />
//       <div className="absolute inset-0 bg-black/80" />

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 md:top-1/2 top-125 -translate-y-1/2 z-20 bg-white/20  text-orange-300 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
//       >
//         ❮
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-2 md:top-1/2 top-125 -translate-y-1/2 z-20 bg-white/20  text-orange-300 p-4 rounded-full shadow-lg hover:opacity-90 transition"
//       >
//         ❯
//       </button>

//       {/* Cards in special odd/even layout */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -80 }}
//           transition={{ duration: 0.5 }}
//           className="relative h-[550px] mx-auto max-w-4xl"
//         >
//           <h3 className="text-title text-center">Featured Items</h3>
// <h3 className=" text-4xl md:text-5xl text-white font-bold leading-tight  text-center z-20">Our Signature Items</h3>
// <p className="text-center text-gray-100 ">Focuses on customer favorites.</p>
//           {/* ODD card (Top-left) */}
//           <div className="absolute top-0 mt-20 md:-left-40 w-[100%]">
            
//             <SignatureCard
//               item={allSignatureItems[index]}
//               reverse={false}
//             />
//           </div>

//           {/* EVEN card (Bottom-right) */}
//           {allSignatureItems[index + 1] && (
//             <div className="absolute top-70 mt-10  bottom-0 md:-right-40 w-[100%]">
//               <SignatureCard
//                 item={allSignatureItems[index + 1]}
//                 reverse={true}
//               />
//             </div>
//           )}

//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SignatureItems;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allSignatureItems } from "..";
import SignatureCard from "./Card/SingnatureCard";

const SignatureItems = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < allSignatureItems.length - 2) {
      setIndex(index + 2);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 2);
    }
  };

  return (
    <div className="relative px-8 py-32 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587513862502-66c2b7e9eaf0?w=600&auto=format&fit=crop&q=60')",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:top-1/2 top-125 -translate-y-1/2 z-20 bg-white/20 text-orange-300 p-4 rounded-full shadow-lg hover:opacity-80 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:top-1/2 top-125 -translate-y-1/2 z-20 bg-white/20 text-orange-300 p-4 rounded-full shadow-lg hover:opacity-80 transition"
      >
        ❯
      </button>

      {/* Cards + Title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="relative h-[550px] mx-auto max-w-4xl"
        >
          {/* Titles */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-title text-center"
          >
            Featured Items
          </motion.h3>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl text-white font-bold leading-tight text-center z-20"
          >
            Our Signature Items
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-gray-100 mb-10"
          >
            Focuses on customer favorites.
          </motion.p>

          {/* ODD card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 mt-20 md:-left-40 w-[100%]"
          >
            <SignatureCard item={allSignatureItems[index]} reverse={false} />
          </motion.div>

          {/* EVEN card */}
          {allSignatureItems[index + 1] && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute top-70 mt-10 bottom-0 md:-right-40 w-[100%]"
            >
              <SignatureCard
                item={allSignatureItems[index + 1]}
                reverse={true}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SignatureItems;
