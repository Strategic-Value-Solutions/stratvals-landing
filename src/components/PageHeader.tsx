"use client";

import { motion } from "framer-motion";
import styles from "./PageHeader.module.css";
import React from "react";

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  email?: string;
}

export default function PageHeader({ title, subtitle, email }: PageHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <div className={styles.blurTopLeft}></div>
      <div className={styles.blurBottomRight}></div>
      
      <div className={`container ${styles.content}`}>
        {subtitle && (
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {email && (
          <motion.a
            href={`mailto:${email}`}
            className={styles.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {email}
          </motion.a>
        )}
      </div>
    </section>
  );
}
