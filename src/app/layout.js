"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";
import Head from "./Head";
import { motion } from "framer-motion";

const poppins = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current page path
  console.log("Current pathname:", pathname);

  return (
    <html lang="en">
      <Head />
      <body className={poppins.className}>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <Footer /> {/* Footer will always be visible */}
      </body>
    </html>
  );
}
