"use client";
import React, { useEffect, useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cart, setCart] = useState({}); // Initialized as an object
  const router = useRouter()

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  }, []);

  // Update object in state and localStorage
  const syncCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // OBJECT FUNCTIONALITY: Update by Key
  const handleQuantity = (id, delta) => {
    const updatedCart = { ...cart };
    if (updatedCart[id]) {
      const currentQty = updatedCart[id].quantity || 1;
      const newQty = Math.max(1, currentQty + delta);
      
      // Direct object property update
      updatedCart[id] = { ...updatedCart[id], quantity: newQty };
      syncCart(updatedCart);
    }
  };

  // OBJECT FUNCTIONALITY: Remove by Key
  const removeItem = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id]; // Pure object deletion
    syncCart(updatedCart);
  };

  // Calculations using Object keys/values
  const itemKeys = Object.keys(cart);
  const subtotal = itemKeys.reduce((acc, id) => acc + (cart[id].price * cart[id].quantity), 0);
  const deliveryFee = itemKeys.length > 0 ? 100 : 0;
  const vat = subtotal * 0.05;
  const total = subtotal + deliveryFee + vat;

  const handleSubmit=()=>{
          toast.success('Order Placed!')
          router.push('/menu')
      }
  return (
     <section>
                <section className="relative  w-full h-[40vh] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
     <div className='text-center'>
         <h3 className="md:text-7xl text-5xl mt-30  font-bold text-orange-300 uppercase relative z-10">
    Your Cart

        </h3>
        <p className='text-white relative z-10 mt-3 px-4'>Check your delicious picks and get ready to feast..</p>
     </div>
      </section>
<div className=" py-16 relative w-full  flex items-center justify-center md:px-20 px-4 ">
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
    

      <div className="max-w-7xl z-10 mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-8 ">
        
        {/* Left Column: Items */}
        <div className="space-y-1 md:col-span-2 md:w-full w-100 ">
       
          <div className="bg-white/20  backdrop-blur-md p-4 rounded-t-xl flex justify-between items-center border-b border-white/5">
           
            <span className="text-sm text-gray-400">{itemKeys.length} selected</span>
          </div>

          {itemKeys.length === 0 ? (
            <div className="bg-[#1e293b]/40 p-10 text-center rounded-b-xl">Your cart is empty.</div>
          ) : (
            itemKeys.map((id) => {
              const item = cart[id]; // Accessing data via object key
              return (
                <div key={id} className="flex items-center justify-between md:gap-6 gap-2 bg-white/10  backdrop-blur-md md:p-6 p-4 border-b border-white/5 last:rounded-b-xl">
             
              <div className="flex gap-2 md:gap-4">
                    <Image width={50} height={50} src={item.image} className="md:w-24 md:h-24 w-20 h-20 object-cover rounded-xl border border-white/10" alt={item.name} />
                  
                  <div className="md:flex-1">
                    <h3 className="md:text-2xl  font-bold">{item.name}</h3>
                    <p className="text-gray-400 text-sm ">৳ {item.price.toFixed(2)}</p>
                  </div>
              </div>

                

                  {/* Quantity UI */}
               <div className="flex items-center gap-2 md:gap-3">
                  <div className="md:text-2xl text-sm font-bold  ">
                    ৳ {(item.price * item.quantity).toFixed(2)}
                  </div>
                   <div className="flex items-center md:gap-4 gap-1 bg-gradient-to-r from-[#f9b115] to-[#f48024] rounded-lg md:p-1 md:px-2 px-1">
                    <button onClick={() => handleQuantity(id, -1)} className="hover:scale-110 transition">
                      <Minus size={20} className="text-black font-extrabold"/>
                    </button>
                    <span className="text-black font-bold text-lg">{item.quantity}</span>
                    <button onClick={() => handleQuantity(id, 1)} className="hover:scale-110 transition">
                      <Plus size={20} className="text-black font-extrabold"/>
                    </button>
                  </div>

                  <button onClick={() => removeItem(id)} className="text-gray-500 hover:text-red-500 md:ml-4">
                    <Trash2 size={24} />
                  </button>
               </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Summary */}
        <div className="bg-white/10  backdrop-blur-md p-8 w-100 rounded-2xl h-fit sticky top-8 border border-white/5">
          <h2 className="text-2xl font-bold mb-6 text-white/90">Order Summary</h2>
          <hr className="border-white/10 mb-8" />
          
          <div className="space-y-5 text-lg text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal ({itemKeys.length} item)</span>
              <span>৳ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>৳ {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (5%)</span>
              <span>৳ {vat.toFixed(2)}</span>
            </div>
          </div>

          <hr className="border-white/10 my-8" />
          
          <div className="flex justify-between items-center text-2xl font-bold">
            <span>TOTAL</span>
            <span>৳ {total.toFixed(2)}</span>
          </div>
           <button onClick={handleSubmit} className="btn-primary w-full mt-5">Order Placed</button>
        </div>
       
      </div>
    </div>
     </section>
  );
};

export default CartPage;