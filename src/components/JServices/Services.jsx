"use client";
import styles from "./Services.module.css";
import { services } from "@/helpers/dataStore";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FaArrowCircleRight } from "react-icons/fa";

const Services = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <section className={styles.services}>
      <h2
        className={`mb-2 ${styles.name}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </h2>

      <motion.div
        className={styles.grid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {services.slice(0, 4).map((service) => (
          <motion.div
            key={service.id}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            onClick={() => handleCardClick(service.path)}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.description}>{service.description}</p>
          </motion.div>
        ))}
        {/* <div className="d-flex justify-content-center align-items-center mt-3">
          <span className="me-2 text-primary">See More</span>
          <FaArrowCircleRight size={50} className="text-primary" />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Services;
