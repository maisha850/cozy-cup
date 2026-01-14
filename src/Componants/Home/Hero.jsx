"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <p className="mb-4 text-sm md:text-base uppercase tracking-widest text-orange-300">
          Welcome to Cozy Cup
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Sip Comfort. <br className="hidden sm:block" />
          Taste the Perfect Brew.
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          At Cozy Cup, we serve freshly brewed coffee crafted with passion,
          warmth, and the finest beans—because every cup should feel like home.
        </p>

        <div className="flex  gap-4 justify-center">
          <Link
            href="/menu"
            className="btn-primary"
          >
            View Menu
          </Link>

          <Link
            href="/about"
            className="px-8 py-4  border rounded-full font-semibold border-white/70 hover:bg-white hover:text-black transition "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
