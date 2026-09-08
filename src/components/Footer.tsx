"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useTheme } from "../context/ThemeContext";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Client Testimonials", href: "/client-and-testimonials" },
  { label: "Partners", href: "/our-partners" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Product Road Mapping", href: "/service/product-road-mapping-engineering" },
  { label: "Enterprise Architecture", href: "/service/enterprise-architecture" },
  { label: "Cloud & SecDevOps", href: "/service/cloud-secdevops" },
  { label: "Strategic Program Management", href: "/service/strategic-program-management" },
  { label: "Technology Transformation", href: "/service/technology-transformation" },
];

const resourceLinks = [
  { label: "Enterprise Blog", href: "/blog" },
  { label: "Press & News", href: "/news-events" },
  { label: "Strategic Alliances", href: "/our-partners" },
];

export default function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className={styles.grid}>
          {/* Col 1: Company */}
          <div className={styles.col}>
            <h4 className={styles.colHeader}>Company:</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className={styles.col}>
            <h4 className={styles.colHeader}>Services:</h4>
            <ul className={styles.linkList}>
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className={styles.col}>
            <h4 className={styles.colHeader}>Resources:</h4>
            <ul className={styles.linkList}>
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Subscribe & Socials */}
          <div className={styles.colSubscribe}>
            <h4 className={styles.colHeaderTitle}>Subscribe to our news and updates</h4>

            {/* Email Subscribe Form */}
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder={subscribed ? "Thank you for subscribing!" : "Your email here"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.subscribeInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn} aria-label="Subscribe">
                  →
                </button>
              </div>
            </form>

            <p className={styles.disclaimer}>
              By signing up, you agree to our <Link href="/contact-us">Privacy Policy</Link>. We respect your data. Unsubscribe anytime.
            </p>

            {/* Follow Us On */}
            <div className={styles.socialsBlock}>
              <h5 className={styles.socialHeader}>Follow us on:</h5>
              <div className={styles.socialRow}>
                <a
                  href="https://www.linkedin.com/company/stratvals-llc"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCircle}
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCircle}
                  title="X / Twitter"
                >
                  X
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCircle}
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCircle}
                  title="Instagram"
                >
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.brandInfo}>
            <img
              src={theme === "light" ? "/icon-light.png" : "/images/logo.svg"}
              alt="SVS"
              className={styles.logoMark}
            />
            <span className={styles.logoText}>Strategic Value Solutions</span>
          </div>

          <div className={styles.copyrightText}>
            <a href="mailto:contact@stratvals.com" style={{ color: "inherit", textDecoration: "none" }}>contact@stratvals.com</a>
            {" "}&bull;{" "}
            <a href="tel:+12157201710" style={{ color: "inherit", textDecoration: "none" }}>+1 (215) 720-1710</a>
          </div>

          <div className={styles.copyrightText}>
            &copy; 2024 StratVals LLC &bull;{" "}
            <Link href="/contact-us" className={styles.privacyLink}>
              Privacy Policy
            </Link>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Scroll to top">
            &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
