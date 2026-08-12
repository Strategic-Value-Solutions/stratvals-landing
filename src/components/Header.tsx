"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { id: "home", label: "Home", href: "/", hasDropdown: false },
  { id: "about", label: "About", href: "/about", hasDropdown: true },
  { id: "works", label: "Works", href: "/case-studies", hasDropdown: true },
  { id: "services", label: "Services", href: "/services", hasDropdown: true },
  { id: "startups", label: "For Startups", href: "/services", hasDropdown: false },
  { id: "resources", label: "Resources", href: "/blog", hasDropdown: true },
];

/* Services Dropdown - Tech Consultancy Focus */
const servicesDropdown = {
  column1: {
    badge: "Core Engineering",
    badgeBg: "#e0f2fe",
    badgeColor: "#0284c7",
    link: "/services",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
        title: "Product Road Mapping",
        desc: "Strategic roadmaps & tech positioning",
        href: "/service/product-road-mapping-engineering",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
        title: "Enterprise Architecture",
        desc: "Cloud microservices & systems",
        href: "/service/product-road-mapping-engineering",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
          </svg>
        ),
        title: "Cloud & SecDevOps",
        desc: "AWS, Azure & CI/CD automation",
        href: "/service/product-road-mapping-engineering",
      },
    ],
  },
  column2: {
    badge: "Executive Advisory",
    badgeBg: "#ede9fe",
    badgeColor: "#6d28d9",
    link: "/services",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        title: "Strategic Program Management",
        desc: "Portfolio, risk & team leadership",
        href: "/service/strategic-program-management",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67" />
          </svg>
        ),
        title: "Technology Transformation",
        desc: "Legacy modernization & AI scale",
        href: "/service/technology-transformation",
      },
    ],
  },
};

/* Works Dropdown */
const worksDropdown = {
  column1: {
    badge: "LegalTech & Platforms",
    badgeBg: "#ede9fe",
    badgeColor: "#6d28d9",
    link: "/case-studies",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
        title: "Legal Services Marketplace",
        desc: "LegalTech Digital Transformation",
        href: "/case-studies/legal-services-marketplace",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1" />
          </svg>
        ),
        title: "Robotic Automation",
        desc: "Food Manufacturing · Engineering Leadership",
        href: "/case-studies/robotic-automation-food-manufacturing",
      },
    ],
  },
  column2: {
    badge: "Commerce & AI",
    badgeBg: "#dcfce7",
    badgeColor: "#15803d",
    link: "/case-studies",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        ),
        title: "Norrbrook Apparel Co.",
        desc: "eCommerce · MuleSoft · AI Demand & Shipping",
        href: "/case-studies/norrbrook-apparel-ecommerce",
      },
    ],
  },
};

/* About & Resources Dropdown */
const aboutDropdown = {
  column1: {
    badge: "About Us",
    badgeBg: "#e0f2fe",
    badgeColor: "#0284c7",
    link: "/about",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
          </svg>
        ),
        title: "Executive Capabilities",
        desc: "Consulting & Tech Leadership",
        href: "/about",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          </svg>
        ),
        title: "Strategic Partners",
        desc: "PSU Great Valley & Bytes Technolab",
        href: "/our-partners",
      },
    ],
  },
  column2: {
    badge: "Client Success",
    badgeBg: "#ede9fe",
    badgeColor: "#6d28d9",
    link: "/client-and-testimonials",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        title: "Client Testimonials",
        desc: "Executive stories & trust pillars",
        href: "/client-and-testimonials",
      },
    ],
  },
};

const resourcesDropdown = {
  column1: {
    badge: "Tech Insights",
    badgeBg: "#e0f2fe",
    badgeColor: "#0284c7",
    link: "/blog",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        ),
        title: "Enterprise Technology Blog",
        desc: "Cloud, AI & engineering guides",
        href: "/blog",
      },
    ],
  },
  column2: {
    badge: "Press & Events",
    badgeBg: "#ede9fe",
    badgeColor: "#6d28d9",
    link: "/news-events",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1" />
          </svg>
        ),
        title: "Press Releases",
        desc: "Company milestones & announcements",
        href: "/news-events",
      },
    ],
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (id: string, hasDropdown: boolean) => {
    if (!hasDropdown) {
      setActiveDropdown(null);
      return;
    }
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const getDropdownData = () => {
    switch (activeDropdown) {
      case "services":
        return servicesDropdown;
      case "works":
        return worksDropdown;
      case "about":
        return aboutDropdown;
      case "resources":
        return resourcesDropdown;
      default:
        return null;
    }
  };

  const activeData = getDropdownData();

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setActiveDropdown(null)}>
          <img
            src={theme === "light" ? "/icon-light.png" : "/images/logo.svg"}
            alt="SVS"
            className={styles.logoMark}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isOpen = activeDropdown === link.id;

              return (
                <li key={link.id} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isOpen ? styles.activeNavLink : ""}`}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        toggleDropdown(link.id, true);
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    onMouseEnter={() => {
                      if (link.hasDropdown) setActiveDropdown(link.id);
                    }}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <span className={styles.arrow}>{isOpen ? "↑" : "↓"}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Controls */}
        <div className={styles.actions}>
          <a
            href="https://uat-intranet.stratvals.com/intranet-login"
            className={styles.loginBtn}
          >
            Login to Intranet
          </a>

          {/* Theme Switcher Toggle Pill (Desktop Only) */}
          <motion.button
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>

          {/* Let's chat pill button */}
          <Link href="/contact-us" className={styles.ctaBtn} onClick={() => setActiveDropdown(null)}>
            <span>Let&apos;s chat</span>
            <span className={styles.emoji}>👋</span>
          </Link>

          {/* Hamburger Icon (Mobile/Tablet Only - Far Right) */}
          <button
            className={styles.menuBtn}
            aria-label="Toggle menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setActiveDropdown(null);
            }}
          >
            <span className={styles.hamburgerIcon}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Fixed Center Mega Dropdown Modal */}
      <AnimatePresence>
        {activeData && (
          <div className={styles.dropdownWrapper}>
            <motion.div
              className={styles.dropdownModal}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={styles.dropdownCard}>
                {/* Column 1 */}
                <div className={styles.dropdownCol}>
                  <Link
                    href={activeData.column1.link}
                    className={styles.columnBadge}
                    style={{
                      background: activeData.column1.badgeBg,
                      color: activeData.column1.badgeColor,
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{activeData.column1.badge}</span>
                    <span className={styles.badgeArrow}>→</span>
                  </Link>

                  <div className={styles.itemList}>
                    {activeData.column1.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={styles.dropdownItem}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={styles.itemIcon}>{item.icon}</div>
                        <div>
                          <h4 className={styles.itemTitle}>{item.title}</h4>
                          <p className={styles.itemDesc}>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                <div className={styles.dropdownCol}>
                  <Link
                    href={activeData.column2.link}
                    className={styles.columnBadge}
                    style={{
                      background: activeData.column2.badgeBg,
                      color: activeData.column2.badgeColor,
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{activeData.column2.badge}</span>
                    <span className={styles.badgeArrow}>→</span>
                  </Link>

                  <div className={styles.itemList}>
                    {activeData.column2.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={styles.dropdownItem}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={styles.itemIcon}>{item.icon}</div>
                        <div>
                          <h4 className={styles.itemTitle}>{item.title}</h4>
                          <p className={styles.itemDesc}>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Compact Popover / Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenuWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className={styles.mobileMenuList}>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className={styles.mobileMenuLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className={styles.mobileMenuArrow}>→</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://uat-intranet.stratvals.com/intranet-login"
                    className={styles.mobileMenuLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Login to Intranet</span>
                    <span className={styles.mobileMenuArrow}>→</span>
                  </a>
                </li>
              </ul>
              <div className={styles.mobileDivider} />
              <button
                className={styles.mobileThemeToggle}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                <span>Theme Mode</span>
                <span className={styles.mobileThemeBadge}>
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </span>
              </button>
              <div className={styles.mobileDivider} />
              <Link
                href="/contact-us"
                className={styles.mobileCta}
                onClick={() => setMenuOpen(false)}
              >
                <span>Let&apos;s chat</span>
                <span style={{ fontSize: "0.9rem" }}>👋</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
