"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignatureCard = ({ item, reverse }) => {
  return (
    <div
      className={`relative flex items-center gap-6 my-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Decorative curved line */}
      <div
        className={`absolute top-1/2 w-full h-[2px] ${
          reverse ? "-left-10" : "-right-10"
        } border-t border-yellow-500/30 rounded-full`}
      ></div>

      {/* Image Wrapper with Golden Rings */}
      <div className="relative w-[230px] h-[230px] flex-shrink-0">
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
      <div className="bg-[#131313]/90 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-md border border-orange-500/10">
        <h3 className="text-2xl font-bold text-orange-300 uppercase tracking-wide">
          {item.name}
        </h3>

        <p className="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-1">
          {item.description}
        </p>

        <p className="text-orange-300 font-bold text-lg mt-3">TK {item.price}</p>

        {/* Order Now Button */}
      <div className="flex justify-end">
          <Link
          href={`/menu/${item.id}`}
          className="inline-block mt-4 bg-orange-300 text-primary font-semibold px-5 py-2 rounded-full 
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

export default SignatureCard;
