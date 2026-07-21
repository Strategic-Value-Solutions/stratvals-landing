import Link from "next/link";
import styles from "./Header.module.css";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.svg" alt="SVS Logo" className={styles.logoImage} />
            <div>
              <h2>Strategic Value Solutions</h2>
              <p>Excellence Delivered</p>
            </div>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Study</Link></li>
            <li><Link href="/client-and-testimonials">Client & Testimonials</Link></li>
            <li><Link href="/our-partners">Partners</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/news-events">News & Events</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
          <button className={styles.menuToggle} aria-label="Toggle menu">
            <Menu color="#fff" />
          </button>
        </nav>
      </div>
    </header>
  );
}
