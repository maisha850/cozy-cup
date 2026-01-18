// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const SignatureCard = ({ item, reverse }) => {
//   return (
//     <div
//       className={`relative flex items-center gap-6 my-20 ${
//         reverse ? "flex-row-reverse" : "flex-row"
//       }`}
//     >
      
//       {/* Decorative curved line */}
//       <div
//         className={`absolute top-1/2 w-full h-[2px] ${
//           reverse ? "-left-10" : "-right-10"
//         } border-t border-yellow-500/30 rounded-full`}
//       ></div>

//       {/* Image Wrapper with Golden Rings */}
//       <div className="relative md:w-[230px] md:h-[230px] w-[150px] h-[150px] flex-shrink-0">
//         <div className="absolute inset-0 rounded-full border-[2px] border-yellow-500/60"></div>
//         <div className="absolute -inset-3 rounded-full border-[1px] border-yellow-500/30"></div>

//         <Image
//           src={item.image}
//           alt={item.name}
//           width={300}
//           height={300}
//           className="rounded-full w-full h-full object-cover shadow-2xl"
//         />
//       </div>

//       {/* Content Card */}
//       <div className="bg-[#131313]/90 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-md border border-orange-500/10">
//         <h3 className="md:text-2xl font-bold text-orange-300 uppercase tracking-wide">
//           {item.name}
//         </h3>

//         <p className="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-1">
//           {item.description}
//         </p>

//         <p className="text-orange-300 font-bold text-lg mt-3">TK {item.price}</p>

//         {/* Order Now Button */}
//       <div className="flex justify-end">
//           <Link
//           href={`/menu/${item.id}`}
//           className="inline-block mt-4 bg-orange-300 text-primary md:text-[16px] text-sm font-semibold px-2 py-1 md:px-5 md:py-2 rounded-full 
//           shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
//           transition-all duration-300"
//         >
//           Order Now →
//         </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default SignatureCard;
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignatureCard = ({ item, reverse }) => {
  return (
    <div
      className={`
        relative flex items-center gap-6 my-20
        ${reverse ? "flex-row-reverse" : "flex-row"}
      `}
    >
      {/* Decorative curved line */}
      <div
        className={`
          absolute top-1/2 w-full h-[2px]
          ${reverse ? "-left-10" : "-right-10"}
          border-t border-yellow-500/30 rounded-full
        `}
      ></div>

      {/* Image Wrapper */}
      <div className="
        relative 
        md:w-[230px] md:h-[230px] 
        sm:w-[180px] sm:h-[180px] 
        w-[150px] h-[150px]
        flex-shrink-0
      ">
        <div className="absolute inset-0 rounded-full border-[2px] border-yellow-500/60"></div>
        <div className="absolute -inset-3 rounded-full border-[1px] border-yellow-500/30"></div>

        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          className="rounded-full w-full h-full object-cover shadow-2xl"
        />
      </div>

      {/* Content Card */}
      <div className="
        bg-[#131313]/90 backdrop-blur-md 
        p-4 sm:p-5 md:p-6 
        rounded-xl shadow-xl 
        max-w-md border border-orange-500/10
      ">
        <h3 className="text-orange-300 uppercase tracking-wide font-bold 
          md:text-2xl sm:text-xl text-lg
        ">
          {item.name}
        </h3>

        <p className="text-gray-300 mt-2 leading-relaxed 
          text-sm sm:text-[15px] line-clamp-1
        ">
          {item.description}
        </p>

        <p className="text-orange-300 font-bold mt-3 
          text-lg sm:text-xl
        ">
          TK {item.price}
        </p>

        <div className="flex justify-end">
          <Link
            href={`/menu/${item.id}`}
            className="
              inline-block mt-4 bg-orange-300 text-primary 
              md:text-[16px] text-sm font-semibold 
              px-3 py-1 md:px-5 md:py-2 rounded-full
              shadow-[0_0_15px_2px_rgba(255,199,0,0.4)]
              hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)]
              transition-all duration-300
            "
          >
            Order Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignatureCard;
