"use client";

import { motion, Variants } from "framer-motion";
import styles from "./HeroBanner.module.css";
import Link from "next/link";

const TICKER_ITEMS = [
  "STRATEGIC VALUE SOLUTIONS",
  "EXCELLENCE DELIVERED",
  "TECHNOLOGY TRANSFORMATION",
  "PRODUCT ROAD MAPPING",
  "STRATEGIC PROGRAM MANAGEMENT",
  "GLOBAL CONSULTING PARTNER",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroBanner() {
  const headlineText = "Navigating the Tech Frontier: Crafting Custom Solutions for Strategic Transformation";

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.92,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* Eyebrow Subtitle */}
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fueling Success with Futuristic Solutions. We help executive leaders shape digital transformation.
        </motion.p>

        {/* Main Headline with Staggered Word Blur Animation */}
        <motion.h1
          className={styles.heading}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={styles.wordSpan}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* CTA Row */}
        <motion.div
          className={styles.ctaRow}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href="/contact-us" className={styles.ctaBtn}>
              <span>Book strategy call</span>
              <span className={styles.handWave}>👋</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Arrow Button */}
        <motion.div
          className={styles.scrollArrowWrapper}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className={styles.scrollArrow}
            onClick={scrollToContent}
            aria-label="Scroll down"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 3V15M9 15L4 10M9 15L14 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Pinned Bottom Black Ticker Marquee */}
      <motion.div
        className={styles.ticker}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className={styles.tickerTrack}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerSlash}>/</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
