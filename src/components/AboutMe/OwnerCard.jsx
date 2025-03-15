"use client";
import { motion } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";
import styles from "./AboutMe.module.css";
import Image from "next/image";

import { ownerImage } from "@/helpers/dataStore";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image Section */}
        <motion.div
          className={styles.imageContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={ownerImage}
            alt="Certified Gele Artist"
            className={styles.image}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.heading}>
            Meet Your Certified Gele & Auto-Gele Artist
          </h2>
          <p className={styles.text}>
            I am a passionate and certified Gele & Auto-Gele artist with years
            of experience creating <span className={styles.txt}>stunning</span>{" "}
            and <span className={styles.txt}>unique</span> headwraps for brides,
            special occasions, and everyday elegance.
          </p>

          {/* List of Features */}
          <ul className={styles.list}>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className={styles.icon} /> Expert in Bridal
              & Auto-Gele Styling
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className={styles.icon} /> Professional
              Gele Training Classes
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className={styles.icon} /> Over 5+ Years of
              Experience
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={20} className={styles.icon} /> Personalized &
              Custom Designs
            </motion.li>
          </ul>

          {/* Call to Action */}
          <Link href="/booking">
            <motion.p
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Session
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
