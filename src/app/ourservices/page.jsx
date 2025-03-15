"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Ourservices.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/helpers/dataStore";

export default function ServicesPage() {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className={`container ${styles.pageWrapper}`}>
      <div className={styles.cardContainer}>
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center text-muted mb-5 fs-3">
          Discover our range of premium gele styling, makeup, and fashion
          services.
        </p>

        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-md-4 mb-4"
              onClick={() => handleCardClick(service.path)}
              style={{ cursor: "pointer" }}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`card p-4 text-center ${styles.serviceCard}`}
              >
                <div className={styles.icon}>{service.icon}</div>
                <h4 className="mt-3">{service.name}</h4>
                <p className="text-muted">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
