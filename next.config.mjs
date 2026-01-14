/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "images.unsplash.com" ,
    'https://media.istockphoto.com'
    ],
  },
};

export default nextConfig;
