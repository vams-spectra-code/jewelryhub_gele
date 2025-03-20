"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  // hello

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white drop-shadow-sm z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* <nav className=""> */}
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl text-accent-500 font-light">
          Jewelryhub<span className="text-primary-500 font-semibold">Gele</span>
        </h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 shadow-md md:shadow-none transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {isAuth
            ? []
            : ["Home", "Book", "Services", "About", "Contact Us"].map(
                (text, index) => {
                  const href =
                    text === "Home"
                      ? "/"
                      : `/${text.toLowerCase().replace(" ", "-")}`;
                  return (
                    <li key={index}>
                      <Link
                        href={href}
                        className={`block px-4 py-2 rounded-md ${
                          pathname === href
                            ? "text-primary-500 font-semibold border-b-4 border-light-500"
                            : "text-gray-700"
                        } hover:text-primary-500`}
                      >
                        {text}
                      </Link>
                    </li>
                  );
                }
              )}
        </ul>

        {/* Right Side Button */}
        {isAuth ? (
          <motion.h1
            className="text-xl font-bold bg-gradient-to-r from-primary-500 via-light-500 to-primary-600 bg-[length:200%_100%] bg-clip-text text-transparent"
            initial={{ backgroundPosition: "200% 0%" }}
            animate={{ backgroundPosition: "0% 0%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            Join us & sparkle in style!
          </motion.h1>
        ) : (
          <div className="hidden md:block">
            <Button title={"Sign In"} href={"/auth"} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
