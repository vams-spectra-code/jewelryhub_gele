"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { imagesArr } from "@/helpers/dataStore";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Discover the Elegance of <span>Jewelry & Gele</span>
        </h1>
        <p className={styles.subtitle}>
          Elevate your style with our exquisite collection of jewelry and
          handcrafted gele.
        </p>
        <a href="#shop" className={styles.cta}>
          Book Now
        </a>
      </div>

      {/* <div className={styles.heroImage}>
        <Image
          src={heroImg}
          alt="Jewelry and Gele"
          width={500}
          height={550}
          className={styles.image}
        />
      </div> */}
      <div className={styles.heroImageWrapper}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className={styles.heroImage}
          >
            <Image
              src={imagesArr[currentIndex]}
              alt="Gele Style"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
