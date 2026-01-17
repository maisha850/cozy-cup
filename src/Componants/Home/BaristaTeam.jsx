"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const baristas = [
  {
    id: 1,
    name: "Sophia Bennett",
    role: "Brew Master",
    image:
      "https://images.unsplash.com/photo-1661832020047-0ca7c64c4ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    name: "Elena Rossi",
    role: "Latte Art Specialist",
    image:
      "https://images.unsplash.com/photo-1538665052915-fb59bda28cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    name: "Marco Alvarez",
    role: "Coffee Roasting Expert",
    image:
      "https://images.unsplash.com/photo-1757688341335-365e7f608344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoZWYlMjB3aXRoJTIwY29mZmVlfGVufDB8fDB8fHww",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between children
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

const BaristaTeam = () => {
  return (
    <section className="py-20 my-24 px-8 bg-[#2c1f17] relative overflow-hidden">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-title text-center"
      >
        Meet Our Baristas
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-center text-subTitle mb-5"
      >
        The soul of our cafe.
      </motion.p>

      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1  md:grid-cols-3 gap-10 max-w-7xl mx-auto justify-center relative z-10"
      >
        {baristas.map((barista) => (
          <motion.div
            key={barista.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white/10  backdrop-blur-md p-4 md:w-full w-88 h-100 md:h-full rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl"
          >
            {/* Image */}
            <div className="w-full md:h-100 h-70 overflow-hidden rounded-3xl shadow-md">
              <Image
                src={barista.image}
                alt={barista.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Name + Role */}
            <h3 className="text-xl font-semibold text-orange-300 mt-4 text-center">
              {barista.name}
            </h3>
            <p className="text-gray-200 text-center text-sm">{barista.role}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Coffee Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
};

export default BaristaTeam;
