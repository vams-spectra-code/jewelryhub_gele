"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import styles from "./Login.module.css";
import Header from "@/components/Header/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Header hideNav currentPage="login" />
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome Back
      </motion.h2>

      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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

        {/* Login Button */}
        <motion.button
          type="submit"
          className={styles.loginBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
        >
          <LogIn size={18} /> Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Login;
