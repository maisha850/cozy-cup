
// "use client";

// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Card = ({ coffee }) => {
//   return (
//     <div className="flex  bg-white/10  backdrop-blur-md p-4 rounded-xl shadow-xl max-w-2xl border border-orange-500/10">

//       {/* Left Image */}
//       <div className="w-[160px] h-[160px] flex-shrink-0 m-4 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg">
//         <Image
//           src={coffee.image}
//           alt={coffee.name}
//           width={240}
//           height={240}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Right Content */}
//       <div className="flex flex-col justify-between p-4  w-full">

//         {/* Name + Price */}
//         <div className="flex items-center justify-between">
//           <h3 className="text-2xl font-semibold uppercase text-orange-300 tracking-wide">
//             {coffee.name}
//           </h3>
//           <span className="text-lg font-bold text-orange-300">
//             TK {coffee.price}
//           </span>
//         </div>

//         {/* Divider */}
//         <div className="border-b border-dotted border-orange-300 "></div>

//         {/* Description */}
//         <p className="text-sm text-gray-100 leading-relaxed line-clamp-1">
//           {coffee.description}
//         </p>

//         {/* View Details */}
//       <div className="flex justify-end">
//            <Link
//           href={`/menu/${coffee._id}`}
//           className="inline-block mt-4 bg-orange-300 text-primary md:text-[16px] text-sm font-semibold px-3 py-1 md:px-5 md:py-2  rounded-full 
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

// export default Card;
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ coffee }) => {
  return (
    <div className="flex bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl max-w-2xl border border-orange-500/10 mx-auto gap-3 md:gap-4">

      {/* Left Image */}
      <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-4 border-orange-300 shadow-lg flex-shrink-0">
        <Image
          src={coffee.image}
          alt={coffee.name}
          width={240}
          height={240}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full">

        {/* Name + Price */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-2xl font-semibold uppercase text-orange-300 tracking-wide">
            {coffee.name}
          </h3>
          <span className="text-base md:text-xl font-bold text-orange-300">
            TK {coffee.price}
          </span>
        </div>

        {/* Divider */}
        <div className="border-b border-dotted border-orange-300 my-1 md:my-2"></div>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-100 leading-relaxed line-clamp-2">
          {coffee.description}
        </p>

        {/* View Details */}
        <div className="flex justify-end">
          <Link
            href={`/menu/${coffee._id}`}
            className="inline-block mt-2 md:mt-4 bg-orange-300 text-primary text-xs md:text-[16px] font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full 
            shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
            transition-all duration-300"
          >
            Order Now →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Card;

