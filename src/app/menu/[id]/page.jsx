import Image from "next/image";
import { getSingleItems } from "@/actions/server/items";
import React from "react";

const ItemDetails = async ({ params }) => {
  const { id } = await params;
  const item = await getSingleItems(id);

  if (!item) {
    return <p className="text-center mt-10 text-gray-600">Item not found</p>;
  }

  const { name, price, description, category, image } = item;

  return (
<div>
        <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* Page Title */}
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">

        {/* Left Image Section */}
        <div className="w-full h-[350px] md:h-[420px] overflow-hidden rounded-3xl shadow-lg border border-gray-200 bg-white">
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Right Info Section */}
        <div className="space-y-6">

          {/* Category Tag */}
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          <h3 className="text-5xl font-bold">{name}</h3>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>

          {/* Price */}
          <p className="text-3xl font-bold text-orange-600">
            TK {price}
          </p>

          {/* Dotted Divider */}
          <div className="border-b border-dotted border-gray-400 my-4"></div>

          {/* Add to Cart */}
          <button className="btn-primary hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-md transition-all w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="mt-14 bg-gray-50 rounded-3xl p-8 shadow-inner border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">More About This Item</h2>
        <p className="text-gray-600 leading-relaxed">
          Crafted carefully with premium ingredients, this {category.toLowerCase()} item offers an exceptional taste and delightful experience. Perfect with your choice of hot or cold beverage.
        </p>
      </div>
    </div>
</div>
  );
};

export default ItemDetails;
