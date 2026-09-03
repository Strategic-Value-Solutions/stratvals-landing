"use client";

import styles from "./ServiceDevelopment.module.css";
import { motion } from "framer-motion";

export default function ServiceDevelopment() {
  return (
    <section className={`section-spacing ${styles.serviceDevelopment}`}>
      <div className="container">
        <div className={styles.containerFlex}>
          <motion.div 
            className={styles.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Your <span>#1</span> Business-specific Software Development Experts</h2>
          </motion.div>
          
          <motion.div 
            className={styles.desc}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              We are an executives' consulting and professional services firm with experience in e-Commerce, Logistics (3PL/4PL), Healthcare, Construction Technology (ConTech), Smart Manufacturing, and Real Estate. We support executives in achieving strategic objectives and driving business outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
