"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Coffee & Creativity",
    desc: "A perfect corner to work, relax, and sip handcrafted coffee.",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    title: "Cozy Moments",
    desc: "Enjoy peaceful moments with every warm cup.",
    span: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Freshly Brewed",
    desc: "Where aroma meets perfection.",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1625242662341-5e92c5101338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Morning Rituals",
    desc: "Start your day the right way.",
    span: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1698126216581-e8005a69f0db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
    title: "Barista Art",
    desc: "Crafted with passion and precision.",
    span: "md:col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1617086903048-65e5d76dd467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Pour Over Love",
    desc: "Slow brewing for bold flavors.",
    span: "md:col-span-6",
  },
  {
    src: "https://images.unsplash.com/photo-1565788049436-bc97046eff42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D",
    title: "Barista Art",
    desc: "Crafted with passion and precision.",
    span: "md:col-span-3",
  },
];

export default function GalleryAmbience() {
  return (
    <section className="w-full py-24 
">
      <div className=" ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 "
        >
          <h2 className="text-title text-center">
            Gallery & Ambience
          </h2>
          <p className="text-subTitle text-center">
       Where Flavor Meets Art
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] ">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden  group ${item.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
