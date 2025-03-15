"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav className={`${styles.container} ${hideNav ? styles.hideNav : ""}`}>
      <div className={styles.navContainer}>
        <h1 className={styles.title}>
          Jewelryhub<span className={styles.subtitle}>Gele</span>
        </h1>

        {!hideNav && (
          <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
            <li className={pathname === "/" ? styles.activeLink : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === "/booking" ? styles.activeLink : ""}>
              <Link href="/booking">Book</Link>
            </li>
            <li
              className={pathname === "/ourservices" ? styles.activeLink : ""}
            >
              <Link href="/ourservices">Services</Link>
            </li>
            <li className={pathname === "/about" ? styles.activeLink : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === "/contact" ? styles.activeLink : ""}>
              <Link href="/contact">Contact Us</Link>
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
