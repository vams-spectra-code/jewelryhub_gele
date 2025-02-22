"use client";
import React, { useState } from "react";

import styles from "./Header.module.css";
import Link from "next/link";
import {
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  MenuIcon,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.navContainer}>
        <h1 className={styles.title}>
          Jewelryhub<span className={styles.subtitle}>Gele</span>
        </h1>

        {/* <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon size={24} />
        </button> */}

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
            <Link href="/">Contacut Us</Link>
          </li>
        </ul>
        <div className={styles.bookIcon}>
          <CalendarClock size={24} color="#d4af37" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
