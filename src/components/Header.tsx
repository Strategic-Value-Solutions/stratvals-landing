"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img src="/images/logo.svg" alt="SVS Logo" className={styles.logoImage} />
            <div>
              <h2>Strategic Value Solutions</h2>
              <p>Excellence Delivered</p>
            </div>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/case-studies" onClick={() => setIsOpen(false)}>Case Study</Link></li>
            <li><Link href="/client-and-testimonials" onClick={() => setIsOpen(false)}>Client & Testimonials</Link></li>
            <li><Link href="/our-partners" onClick={() => setIsOpen(false)}>Partners</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/news-events" onClick={() => setIsOpen(false)}>News & Events</Link></li>
            <li><Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li>
              <a 
                // href="http://localhost:8017/intranet-login" 
                href = "https://uat-intranet.stratvals.com/intranet-login"
                className={styles.loginBtn}
                onClick={() => setIsOpen(false)}
              >
                Login to Intranet
              </a>
            </li>
          </ul>
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

