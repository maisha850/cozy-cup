
// "use client";

// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Card = ({ coffee }) => {
//   return (
//     <div className="flex w-full max-w-xl bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300">

//       {/* Left Image Section */}
//       <div className="w-[160px] h-[160px] flex-shrink-0 m-4 rounded-full overflow-hidden shadow-lg border border-gray-200">
//         <Image
//           src={coffee.image}
//           alt={coffee.name}
//           width={200}
//           height={200}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Right Content Section */}
//       <div className="flex flex-col justify-between p-4 pr-6 w-full">
        
//         {/* Name + Price */}
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-gray-900">
//             {coffee.name}
//           </h3>
//           <span className="text-md font-bold text-orange-600">
//             TK {coffee.price}
//           </span>
//         </div>

//         {/* Line Divider */}
//         <div className="border-b border-dotted border-gray-400 my-2"></div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 line-clamp-2">
//           {coffee.description}
//         </p>

//         {/* View Details Link */}
//         <Link
//           href={`/menu/${coffee._id}`}
//           className="flex items-center gap-1 mt-3 text-orange-600 font-medium hover:text-orange-700 transition"
//         >
//           View details
//           <ArrowRight size={18} />
//         </Link>

//       </div>

//     </div>
//   );
// };

// export default Card;
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ coffee }) => {
  return (
    <div className="flex  bg-white/10  backdrop-blur-md p-4 rounded-xl shadow-xl max-w-2xl border border-orange-500/10">

      {/* Left Image */}
      <div className="w-[160px] h-[160px] flex-shrink-0 m-4 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg">
        <Image
          src={coffee.image}
          alt={coffee.name}
          width={240}
          height={240}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between p-4  w-full">

        {/* Name + Price */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold uppercase text-orange-300 tracking-wide">
            {coffee.name}
          </h3>
          <span className="text-lg font-bold text-orange-300">
            TK {coffee.price}
          </span>
        </div>

        {/* Divider */}
        <div className="border-b border-dotted border-orange-300 "></div>

        {/* Description */}
        <p className="text-sm text-gray-100 leading-relaxed line-clamp-1">
          {coffee.description}
        </p>

        {/* View Details */}
      <div className="flex justify-end">
           <Link
          href={`/menu/${coffee._id}`}
          className="inline-block mt-4 bg-orange-300 text-primary md:text-[16px] text-sm font-semibold px-3 py-1 md:px-5 md:py-2  rounded-full 
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
