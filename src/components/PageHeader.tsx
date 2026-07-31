"use client";

import { motion } from "framer-motion";
import styles from "./PageHeader.module.css";
import React from "react";

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  email?: string;
}

export default function PageHeader({ label = "Strategic Value Solutions", title, subtitle, email }: PageHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <div className={`container ${styles.content}`}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.dot} />
          {label}
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        {email && (
          <motion.a
            href={`mailto:${email}`}
            className={styles.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {email}
          </motion.a>
        )}
      </div>
    </section>
  );
}
