"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  CreditCard,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  // Mock Instagram feed data
  const instagramFeed = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <motion.label
                  initial={false}
                  animate={{
                    top: isEmailFocused || email ? "-0.5rem" : "0.75rem",
                    scale: isEmailFocused || email ? 0.8 : 1,
                    color: isEmailFocused ? "#fff" : "#9CA3AF",
                  }}
                  className="absolute left-4 pointer-events-none origin-left"
                >
                  Subscribe to our newsletter
                </motion.label>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-6 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-primary transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              {[
                "About Us",
                "Collections",
                "Bookings",
                "FAQs",
                "Privacy Policy",
              ].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block relative overflow-hidden group"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative z-10">{link}</span>
                  <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              {[
                { Icon: Phone, text: "+1 (234) 567-8900" },
                { Icon: Mail, text: "info@jewelryhub.com" },
                { Icon: MapPin, text: "123 Jewelry Lane, Gem City, GC 12345" },
              ].map(({ Icon, text }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                >
                  <Icon size={20} className="text-primary" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Instagram Feed */}
            <div className="space-y-4">
              <h4 className="font-semibold">Latest from Instagram</h4>
              <div className="grid grid-cols-3 gap-2">
                {instagramFeed.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square overflow-hidden rounded-lg"
                  >
                    <img
                      src={`${image}?w=150&h=150&fit=crop`}
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 JewelryHub_Gele. All rights reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-4">
              {Array(4)
                .fill(CreditCard)
                .map((Icon, index) => (
                  <Icon key={index} size={24} className="text-gray-400" />
                ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
