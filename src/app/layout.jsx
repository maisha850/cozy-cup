import { Crimson_Text, Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/Componants/Home/Navbar";
import Footer from "@/Componants/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const raleway = Raleway({
  subsets: ["latin"],
    weight: ["400","600","700","800"]
}
)

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cozy cup",
  description: "best cafe in the town ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className}`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
