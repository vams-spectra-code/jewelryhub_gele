"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We would love to hear from you! Whether you have inquiries about our
          gele styling, autogele designs, or partnerships, feel free to reach
          out. Our team is here to assist you with any questions you may have.
        </motion.p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaPhone className="text-primary-500 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-700">+234 800 123 4567</p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaEnvelope className="text-primary-500 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-700">support@jewelryhubgele.com</p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <FaMapMarkerAlt className="text-primary-500 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-gray-700">123 Elegance Street, Lagos, Nigeria</p>
        </motion.div>
      </div>
      {/* Feedback Form */}
      <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Share Your Feedback
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Message</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows="4"
              placeholder="Write your feedback..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
