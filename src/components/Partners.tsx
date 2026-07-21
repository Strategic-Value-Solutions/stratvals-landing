"use client";

import { motion } from "framer-motion";
import styles from "./Partners.module.css";
import Image from "next/image";

const partners = [
  { name: "Husqvarna", image: "/images/husqvarna.webp" },
  { name: "Scrubs and Beyond", image: "/images/scrubs.webp" },
  { name: "Fancode", image: "/images/fancode.webp" },
];

const testimonials = [
  {
    name: "Bessie Cooper",
    text: `"I've made several purchases from this website, and I've never been disappointed. The variety of products is impressive, and the prices are competitive.”`,
    image: "/images/bessie.webp",
  },
  {
    name: "Cameron Williamson",
    text: `"I couldn't be happier with my experience. The product quality exceeded my expectations, and the customer service was exceptional. I highly recommend this company!"`,
    image: "/images/cameron.webp",
  },
  {
    name: "Jenny Wilson",
    text: `"The website was easy to navigate, and I found exactly what I was looking for. The delivery was quick, and the item arrived in perfect condition. I'll definitely be shopping here again."`,
    image: "/images/jenny.webp",
  },
  {
    name: "Jenny Wilson",
    text: `"The website was easy to navigate, and I found exactly what I was looking for. The delivery was quick, and the item arrived in perfect condition. I'll definitely be shopping here again."`,
    image: "/images/jenny.webp",
  },
];

interface PartnersProps {
  title?: string;
}

export default function Partners({ title = "Our Esteemed Partners" }: PartnersProps) {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </div>

        <div className={styles.content}>
          <div className={styles.logosColumn}>
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className={styles.logoItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <img src={partner.image} alt={partner.name} className={styles.partnerLogo} />
              </motion.div>
            ))}
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Randomly apply blue or orange svg background for visual interest */}
                <div className={`${styles.svgBackground} ${index % 2 === 0 ? styles.blueSvg : styles.orangeSvg}`}></div>
                <p className={styles.quote}>{test.text}</p>
                <div className={styles.author}>
                  <h4>{test.name}</h4>
                  <img src={test.image} alt={test.name} className={styles.avatar} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
