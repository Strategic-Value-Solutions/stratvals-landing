"use client";

import { motion, Variants } from "framer-motion";
import styles from "./AboutSection.module.css";
import Link from "next/link";

const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pillarContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const pillarItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const trustPillars = [
  {
    title: "Quality in our DNA",
    desc: "We always deliver what we promise in terms of delivering projects with quality within the given time frame.",
  },
  {
    title: "Human-Touch Approach",
    desc: "Brands trust us because of our greater attention to detail and human-touch approach to build business solutions.",
  },
  {
    title: "24/7 Integrity",
    desc: "Our clients always are aware of what we do. We maintain 24×7 integrity in communicating, working, and reporting.",
  },
  {
    title: "Global Flexibility",
    desc: "Our team's flexibility in adapting to project demands helps us enhance support services to clients worldwide.",
  },
];

export default function AboutSection() {
  const headingText = "We are an executives' consulting and professional services firm driving measurable business outcomes.";

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.p className={styles.label} variants={childVariants}>
            <span className={styles.dot} />
            Who we are - Strategic Value Solutions
          </motion.p>

          <div className={styles.grid}>
            {/* Left - media showcase */}
            <motion.div className={styles.mediaCol} variants={childVariants}>
              <div className={styles.videoCard}>
                <div className={styles.videoThumb}>
                  <img
                    src="/images/svs-overview.jpg"
                    alt="Strategic Value Solutions Corporate Overview"
                    className={styles.thumbImg}
                  />
                </div>
                <div className={styles.videoMeta}>
                  <span className={styles.videoTitle}>SVS Corporate Overview</span>
                </div>
              </div>
            </motion.div>

            {/* Right - text content */}
            <motion.div className={styles.textCol} variants={childVariants}>
              <motion.h2
                className={styles.heading}
                variants={headingContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {headingText.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={styles.wordSpan}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p className={styles.body} variants={childVariants}>
                Strategic Value Solutions supports corporate leaders across e-Commerce, Logistics (3PL/4PL), and Healthcare in achieving strategic objectives and building future-proof technology foundations.
              </motion.p>
              <motion.p className={styles.body} variants={childVariants}>
                We examine what market leaders are doing to stay relevant and competitive in today&apos;s fast-paced world. We then strategize using smart tools and global resources to understand the implications of every decision, closing the gap between internal capability and external market success.
              </motion.p>

              {/* Trust Pillars 2x2 Grid with Staggered Entrance */}
              <motion.div
                className={styles.pillarsGrid}
                variants={pillarContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trustPillars.map((p) => (
                  <motion.div
                    key={p.title}
                    className={styles.pillarItem}
                    variants={pillarItemVariants}
                    whileHover={{ y: -3 }}
                  >
                    <h4 className={styles.pillarTitle}>{p.title}</h4>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/services" className={styles.cta}>
                  Explore Our Services <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
