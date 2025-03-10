"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Header from "@/components/Header/Header";
import styles from "./Signup.module.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Header hideNav currentPage="signup" />

      {/* Title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Jewelryhub Gele
      </motion.h2>

      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Full Name */}
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Full Name" required />
        </div>

        {/* Email Input */}
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" required />
        </div>

        {/* Password Input */}
        <div className={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        {/* Phone Number Input */}
        <div className={styles.inputGroup}>
          <input type="tel" placeholder="Phone Number" required />
        </div>

        {/* SignUp Button */}
        <motion.button
          type="submit"
          className={styles.signupBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSignupClick}
        >
          <UserPlus size={18} /> Sign Up
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Signup;
