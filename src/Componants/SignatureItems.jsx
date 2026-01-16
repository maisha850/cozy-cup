// // "use client";
// // import React from "react";
// // import { allSignatureItems } from "..";
// // import SignatureCard from "./Card/SingnatureCard";


// // const SignatureItems = () => {
// //   return (
// //     <div className="  relative px-6 py-16">
// //         {/* Background */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{
// //           backgroundImage:
// //             "url('https://images.unsplash.com/photo-1587513862502-66c2b7e9eaf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8')",
// //         }}
// //       />
// //       <div className="absolute inset-0 bg-black/80" />
// //        {allSignatureItems.map((item, index) => (
// //         <SignatureCard
// //           key={item.id}
// //           item={item}
// //           reverse={index % 2 !== 0} // Even/odd alternating
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default SignatureItems;
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { allSignatureItems } from "..";
// import SignatureCard from "./Card/SingnatureCard";

// const SignatureItems = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < allSignatureItems.length - 2) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="relative px-6 py-20 overflow-hidden">

//       {/* Background Image */}
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
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
//       >
//         ❮
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
//       >
//         ❯
//       </button>

//       {/* Cards Container */}
//       <div className="relative z-10 flex justify-center gap-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -80 }}
//             transition={{ duration: 0.5 }}
//             className="flex gap-10"
//           >
//             {/* Show exactly 2 cards */}
//             {allSignatureItems.slice(index, index + 2).map((item, i) => (
//               <SignatureCard
//                 key={item.id}
//                 item={item}
//                 reverse={i % 2 !== 0} // alternate inside the slider
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
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
    <div className="relative px-6 py-35  overflow-hidden">

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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20  text-orange-300 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20  text-orange-300 p-4 rounded-full shadow-lg hover:opacity-90 transition"
      >
        ❯
      </button>

      {/* Cards in special odd/even layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5 }}
          className="md:relative h-[550px] mx-auto max-w-4xl"
        >
          <h3 className="text-title text-center">Featured Items</h3>
<h3 className=" text-4xl md:text-5xl text-white font-bold leading-tight  text-center z-20">Our Signature Items</h3>
<p className="text-center text-gray-100 ">Focuses on customer favorites.</p>
          {/* ODD card (Top-left) */}
          <div className="md:absolute top-0 mt-20 -left-40 w-[100%]">
            
            <SignatureCard
              item={allSignatureItems[index]}
              reverse={false}
            />
          </div>

          {/* EVEN card (Bottom-right) */}
          {allSignatureItems[index + 1] && (
            <div className="md:absolute top-70 mt-10  bottom-0 -right-40 w-[100%]">
              <SignatureCard
                item={allSignatureItems[index + 1]}
                reverse={true}
              />
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SignatureItems;

