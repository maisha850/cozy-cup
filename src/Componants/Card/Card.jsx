
"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ coffee }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="w-20 h-20 overflow-hidden rounded-full border border-gray-200 shadow-md">
        <Image
          src={coffee.image}
          width={80}
          height={80}
          alt={coffee.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full">
          
          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900">{coffee.name}</h3>

          {/* Price */}
          <span className="text-md font-bold text-orange-600">
            TK {coffee.price}
          </span>
        </div>

        {/* Dotted Line */}
        <div className="border-b border-dotted border-gray-400 my-2"></div>

        {/* Optional description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {coffee.description}
        </p>
         <Link className="justify-end flex items-center mt-3 hover:text-secondary" href={`/menu/${coffee._id}`}>View details<ArrowRight size={20}></ArrowRight></Link>
      </div>
     
    </div>
  );
};

export default Card;
