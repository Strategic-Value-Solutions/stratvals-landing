"use client";

import { motion } from "framer-motion";
import styles from "./ClientsSection.module.css";

const clients = [
  { name: "Husqvarna", image: "/images/husqvarna.webp" },
  { name: "Scrubs and Beyond", image: "/images/scrubs.webp" },
  { name: "Fancode", image: "/images/fancode.webp" },
  { name: "Penn State", text: "Penn State" },
  { name: "Bytes Technolab", text: "Bytes Technolab" },
  { name: "Blackbelt Broadband", text: "Blackbelt" },
  { name: "Clark County SD", text: "Clark County SD" },
];

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Strategic Partner",
    text: "“I couldn't be happier with the engagement. The team's strategic depth exceeded expectations, and every deliverable arrived on time. Their consulting approach is genuinely different from anyone we've worked with.”",
    avatar: "/images/cameron.webp",
  },
  {
    name: "Jenny Wilson",
    role: "Executive Client",
    text: "“The experience was easy to navigate from day one. The work was delivered quickly, and every milestone arrived in perfect condition. I'll definitely be partnering with Strategic Value Solutions again.”",
    avatar: "/images/jenny.webp",
  },
  {
    name: "Bessie Cooper",
    role: "Enterprise Client",
    text: "“I've engaged Strategic Value Solutions on several initiatives and have never been disappointed. Their strategic expertise and quality execution are exceptional. A firm you can genuinely trust.”",
    avatar: "/images/bessie.webp",
  },
];

export default function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Top header */}
          <div className={styles.top}>
            <p className={styles.label}>
              <span className={styles.dot} />
              Who we work with
            </p>
            <h2 className={styles.statement}>
              Our Esteemed Clients
            </h2>
          </div>

          {/* Testimonials 3-column Grid */}
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.quoteMark}>“</div>
                <p className={styles.quoteText}>{t.text}</p>
                <div className={styles.authorRow}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={styles.avatar}
                  />
                  <div>
                    <h4 className={styles.authorName}>{t.name}</h4>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logo marquee */}
          <div className={styles.marqueeWrapper}>
            <p className={styles.marqueeLabel}>OUR TRUSTED PARTNERS & CLIENTS</p>
            <div className={styles.marquee}>
              <div className={styles.marqueeTrack}>
                {doubled.map((c, i) => (
                  <span key={i} className={styles.clientItem}>
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.name}
                        className={styles.clientLogo}
                      />
                    ) : (
                      <span className={styles.clientText}>{c.text}</span>
                    )}
                    <span className={styles.bullet}>•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
