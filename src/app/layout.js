"use client";

import React from "react";
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
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head />
      <body className={poppins.className}>
        {/* ✅ PAGE LOAD ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />

          <motion.main>
            {React.Children.map(children, (child, index) =>
              child ? (
                <motion.section
                  key={index}
                  whileInView={{ opacity: [0, 1], x: [-12, -5, 0] }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {child}
                </motion.section>
              ) : null
            )}
          </motion.main>

          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
