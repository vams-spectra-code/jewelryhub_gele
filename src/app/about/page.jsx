"use client";

import { imagesArr } from "@/helpers/dataStore";
import { motion } from "motion/react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About JewelryHub Gele
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to JewelryHub Gele, your one-stop destination for premium gele
          styling, exquisite autogeles, and professional makeup artistry. We are
          dedicated to enhancing your beauty and confidence for every special
          occasion.
        </motion.p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-700">
            At JewelryHub Gele, we believe every woman deserves to shine. Our
            mission is to provide expertly crafted gele styles, autogele
            designs, and makeup services that complement your natural beauty and
            elevate your elegance.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900">
            Why Choose Us?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Professional gele stylists with years of experience.</li>
            <li>Handcrafted autogeles for a perfect fit.</li>
            <li>Makeup artist collaborations for a complete transformation.</li>
            <li>Luxury accessories to complement your style.</li>
            <li>Personalized service tailored to your event needs.</li>
          </ul>
        </motion.div>

        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={imagesArr[5]}
            alt="Gele styling"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
