"use client";
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const Cart = ({ item }) => {
  
    const router = useRouter();

 
  const handleSubmit = () => {
    
    // 1. Get current object from localStorage
        const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
        
        // 2. Use the ID as the key to either update quantity or add new entry
        if (existingCart[item._id]) {
            existingCart[item._id].quantity += 1;
        } else {
            existingCart[item._id] = { ...item, quantity: 1 };
        }

        // 3. Save back as an object
        localStorage.setItem("cart", JSON.stringify(existingCart));

    toast.success('Added to Cart');
    router.push('/cart'); // Redirect to cart page
  };
console.log(item);
    return (
        <button 
            onClick={handleSubmit} 
            className="inline-block bg-orange-300 text-black mt-5 font-semibold px-5 py-3 rounded-full 
            shadow-[0_0_15px_2px_rgba(255,199,0,0.4)] hover:shadow-[0_0_25px_5px_rgba(255,199,0,0.7)] 
            transition-all duration-300"
        >
            Add to Cart
        </button> 
    );
};

export default Cart;