"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-full max-w-4xl h-[900px] lg:h-[500px] flex overflow-hidden shadow-lg rounded-lg flex-col lg:flex-row">
          {/* Sign In */}
          <div
            className={`w-full h-1/2 p-8 transition-all duration-500 lg:w-1/2 lg:h-full ${
              isSignUp
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Sign In
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition">
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up */}
          <div
            className={`w-full p-8 transition-all duration-500 lg:w-1/2 ${
              isSignUp
                ? "pointer-events-none opacity-0"
                : "pointer-events-auto opacity-100"
            }`}
          >
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Sign Up
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="customer">Customer</option>
                <option value="makeup-artist">Make-up Artist</option>
                <option value="student">Student</option>
              </select>
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition">
                Sign Up
              </button>
            </form>
          </div>

          {/* Overlay Panel */}
          <motion.div
            initial={{ x: "0%" }}
            animate={
              isLargeScreen
                ? { x: isSignUp ? "100%" : "0%" }
                : { y: isSignUp ? "100%" : "0%" }
            }
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-1/2 lg:w-1/2 lg:h-full bg-primary-500 text-white flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            <h2 className="text-2xl font-bold">
              {isSignUp ? "Already have an account?" : "Create an account"}
            </h2>
            <p className="mt-2">
              {isSignUp ? "Sign in to your account" : "Sign up to get started"}
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-primary-500 font-semibold rounded-lg">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </motion.div>
        </div>
      </div>
      <Link href="/">
        <p className="text-center p-4 hover:text-primary-500">
          {" "}
          Not now? Continue as Guest
        </p>
      </Link>
    </>
  );
};

export default AuthPage;
