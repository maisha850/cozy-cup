"use client";
import React, { useEffect, useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cart, setCart] = useState({});
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  }, []);

  const syncCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantity = (id, delta) => {
    const updatedCart = { ...cart };
    if (updatedCart[id]) {
      const currentQty = updatedCart[id].quantity || 1;
      const newQty = Math.max(1, currentQty + delta);
      updatedCart[id] = { ...updatedCart[id], quantity: newQty };
      syncCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    syncCart(updatedCart);
  };

  const itemKeys = Object.keys(cart);
  const subtotal = itemKeys.reduce(
    (acc, id) => acc + cart[id].price * cart[id].quantity,
    0
  );
  const deliveryFee = itemKeys.length > 0 ? 100 : 0;
  const vat = subtotal * 0.05;
  const total = subtotal + deliveryFee + vat;

  const handleSubmit = () => {
    toast.success("Order Placed!");
    router.push("/menu");
  };

  return (
    <section>
      {/* HEADER */}
      <section className="relative w-full h-[40vh] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600&auto=format&fit=crop&q=60')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="text-center px-4">
          <h3 className="md:text-7xl text-4xl mt-30 font-bold text-orange-300 uppercase z-10 relative">
            Your Cart
          </h3>
          <p className="text-white relative z-10 mt-3 text-sm md:text-base">
            Check your delicious picks and get ready to feast.
          </p>
        </div>
      </section>

      {/* MAIN CART SECTION */}
      <div className="py-16 relative w-full flex items-center justify-center md:px-20 px-4">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1709486688594-438596b68fc8?q=80&w=1331&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-7xl z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* LEFT ITEMS LIST */}
          <div className="space-y-1 md:col-span-2">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-t-xl flex justify-between items-center border-b border-white/5">
              <span className="text-sm text-gray-300">
                {itemKeys.length} selected
              </span>
            </div>

            {/* Empty cart */}
            {itemKeys.length === 0 ? (
              <div className="bg-white/10 backdrop-blur-md p-8 text-center rounded-b-xl text-gray-200">
                Your cart is empty.
              </div>
            ) : (
              itemKeys.map((id) => {
                const item = cart[id];

                return (
                  <div
                    key={id}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/10 backdrop-blur-md p-4 md:p-6 border-b border-white/5"
                  >
                    {/* LEFT ITEM DETAILS */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <Image
                        width={80}
                        height={80}
                        src={item.image}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/10"
                        alt={item.name}
                      />

                      <div className="flex flex-col">
                        <h3 className="text-lg md:text-2xl font-bold text-white">
                          {item.name}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          ৳ {item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT PRICE + QUANTITY */}
                    <div className="flex items-center justify-between w-full md:w-auto gap-3">
                      <div className="text-base md:text-2xl font-bold text-white">
                        ৳ {(item.price * item.quantity).toFixed(2)}
                      </div>

                      <div className="flex items-center bg-gradient-to-r from-[#f9b115] to-[#f48024] rounded-lg px-2 py-1">
                        <button
                          onClick={() => handleQuantity(id, -1)}
                          className="hover:scale-110 transition"
                        >
                          <Minus size={18} className="text-black" />
                        </button>
                        <span className="text-black font-bold text-lg px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantity(id, 1)}
                          className="hover:scale-110 transition"
                        >
                          <Plus size={18} className="text-black" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(id)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT SUMMARY BOX */}
          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl h-fit border border-white/10 md:sticky md:top-10">
            <h2 className="text-2xl font-bold mb-6 text-white">Order Summary</h2>

            <hr className="border-white/10 mb-6" />

            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal ({itemKeys.length} items)</span>
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

            <hr className="border-white/10 my-6" />

            <div className="flex justify-between text-2xl font-bold text-white">
              <span>Total</span>
              <span>৳ {total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 btn-primary"
            >
              Order Placed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
