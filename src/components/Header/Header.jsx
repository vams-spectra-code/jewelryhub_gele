"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "../Button/Button";

function Header({ hideNav = false, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push("/login");
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <nav className={`${styles.container} ${hideNav ? styles.hideNav : ""}`}>
      <div className={styles.navContainer}>
        <h1 className={styles.title}>
          Jewelryhub<span className={styles.subtitle}>Gele</span>
        </h1>

        {!hideNav && (
          <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
            <li>
              <Link href="/">Book</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        )}
        <div className={styles.navRight}>
          {currentPage === "login" ? (
            <Button variant="primary" onClick={handleSignupClick}>
              Signup
            </Button>
          ) : currentPage === "signup" ? (
            <Button variant="primary" onClick={handleLoginClick}>
              Login
            </Button>
          ) : (
            <Button variant="primary" onClick={handleLogoutClick}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
