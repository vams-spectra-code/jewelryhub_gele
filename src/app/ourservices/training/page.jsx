"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Training.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { flierImage } from "@/helpers/dataStore";
import { CiCircleCheck } from "react-icons/ci";
import { geleStyle } from "@/helpers/dataStore";

export default function TrainingPage() {
  const geleStyles = [
    { image: geleStyle.gele1, name: "Fan Gele" },
    { image: geleStyle.gele2, name: "Peacock Gele" },
    { image: geleStyle.gele3, name: "Infinity Pleat" },
    { image: geleStyle.gele4, name: "Flower Gele" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`container ${styles.pageWrapper}`}
    >
      {/* Page Title */}
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Jewelry Hub Academy - Gele & Makeup Training
      </motion.h2>

      {/* Benefits Section */}
      <motion.div
        className={`row ${styles.benefitsSection}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-6">
          <h3 className={styles.benefitsTitle}>
            Why Register with Jewelry Hub?
          </h3>
          <ul className={styles.benefitsList}>
            <li>
              <CiCircleCheck className={`me-2 ${styles.circleCheck}`} /> Learn
              from top professional gele stylists & makeup artists
            </li>
            <li>
              {" "}
              <CiCircleCheck className={`me-2 ${styles.circleCheck}`} />{" "}
              Hands-on practical training with real models
            </li>
            <li>
              <CiCircleCheck className={`me-2 ${styles.circleCheck}`} />{" "}
              Certification upon completion
            </li>
            <li>
              <CiCircleCheck className={`me-2 ${styles.circleCheck}`} /> Access
              to exclusive networking & job opportunities
            </li>
            <li>
              <CiCircleCheck className={`me-2 ${styles.circleCheck}`} />{" "}
              Discount on gele & makeup products
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <Image
            src={flierImage}
            alt="Jewelry Hub Training"
            width={500}
            height={300}
            className={`img-fluid shadow-sm ${styles.flierImage}`}
          />
        </div>
      </motion.div>

      {/* Styles Showcase */}
      <motion.h3
        className="text-center mt-5 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Styles You Will Learn
      </motion.h3>

      <motion.div
        className="row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {geleStyles.map((style, index) => (
          <div
            key={index}
            className="col-md-3 mb-4 col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <Image
              src={style.image}
              alt={style.name}
              width={250}
              height={250}
              className={`rounded shadow-sm ${styles.image}`}
            />
            <p className="mt-2 fw-bold text-center">{style.name}</p>
          </div>
        ))}
      </motion.div>

      <div>
        <motion.h3
          className="text-center mt-0 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          And more...
        </motion.h3>
      </div>

      {/* Registration Form */}
      <motion.h3
        className="text-center mt-5 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Register & Join the Academy
      </motion.h3>

      <motion.form
        className={`card p-4 shadow-sm ${styles.registrationForm}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${styles.input}`}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className={`form-control ${styles.input}`}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Training Session</label>
          <select className={`form-select ${styles.input}`} required>
            <option value="">Select a session</option>
            <option value="weekdays">Weekdays (Mon-Fri)</option>
            <option value="weekends">Weekends (Sat & Sun)</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select className={`form-select ${styles.input}`} required>
            <option value="">Select payment method</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="card">Debit/Credit Card</option>
            <option value="cash">Pay on Arrival</option>
          </select>
        </div>

        <button type="submit" className={`btn w-100 ${styles.btn}`}>
          Register Now
        </button>
      </motion.form>
    </motion.div>
  );
}
