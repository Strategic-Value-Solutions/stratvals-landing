"use client";

import { motion } from "framer-motion";
import styles from "./HeroBanner.module.css";
import { useEffect, useState } from "react";

const TYPED_TEXT = "Crafting Custom Solutions for Strategic Transformation";

export default function HeroBanner() {
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTypedText(TYPED_TEXT.slice(0, i));
      i++;
      if (i > TYPED_TEXT.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.blurTopLeft}></div>
      <div className={styles.blurBottomRight}></div>
      
      <div className={`container ${styles.content}`}>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fueling Success with Futuristic Solutions.
        </motion.p>
        
        <div className={styles.titleBox}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Navigating the Tech Frontier: <br />
            <span className="gradient-text">{typedText}</span>
            <span className={styles.cursor}>|</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
