
"use client";

import { useState } from "react";
import Card from "./Card/Card";


const MenuClient = ({ hotCoffee, coldCoffee, cakeBakery }) => {
  const [active, setActive] = useState("hot");

  // Helper function to render items in a premium layout
  const renderItems = (items) => (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((coffee) => (
        <div
          key={coffee._id}
          className=" "
        >
          <Card coffee={coffee} />
        </div>
      ))}
    </div>
  );

  return (
    <div className=" py-16 relative w-full min-h-screen flex items-center justify-center md:px-20 px-6 ">
         {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1709486688594-438596b68fc8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 ">
 {/* Navigation Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {["hot", "cold", "cake"].map((type) => {
          const label =
            type === "hot"
              ? "Hot Beverages"
              : type === "cold"
              ? "Cold Beverages"
              : "Cake & Bakery";
          return (
            <button
              key={type}
              onClick={() => setActive(type)}
              className={`m:px-6 px-4 py-2  md:text-lg text-sm  font-semibold rounded-full transition ${
                active === type
                  ? "bg-orange-300 text-primary shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Render Items */}
      {active === "hot" && renderItems(hotCoffee)}
      {active === "cold" && renderItems(coldCoffee)}
      {active === "cake" && renderItems(cakeBakery)}
    </div>
    </div>

     
  );
};

export default MenuClient;
