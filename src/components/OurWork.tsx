"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./OurWork.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    id: "program-management",
    title: "Program Management",
    image: "/images/casestudy-water.jpg",
    link: "/case-studies",
  },
  {
    id: "it-transformation",
    title: "IT Transformation",
    image: "/images/casestudy-broadband.jpg",
    link: "/case-studies",
  },
  {
    id: "product-road-mapping",
    title: "Product Road Mapping",
    image: "/images/casestudy-nft.jpg",
    link: "/case-studies",
  },
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      if (activeTab !== 0) setActiveTab(0);
    } else if (latest < 0.66) {
      if (activeTab !== 1) setActiveTab(1);
    } else {
      if (activeTab !== 2) setActiveTab(2);
    }
  });

  return (
    <div className={styles.scrollContainer} ref={containerRef}>
      <section className={styles.stickyContent}>
        <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Our Work</h2>
          </motion.div>
          
          <ul className={styles.dotList}>
            {works.map((work, index) => (
              <li key={work.id}>
                <button
                  className={`${styles.tabBtn} ${activeTab === index ? styles.active : ""}`}
                >
                  {work.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={styles.imageBox}
            >
              <img src={works[activeTab].image} alt={works[activeTab].title} className={styles.workImage} />
              
              <Link href={works[activeTab].link} className={`circular-btn ${styles.caseStudyBtn}`}>
                <div className={styles.circleTextWrapper}>
                   <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="12">
                      <textPath href="#circle">
                        View Casestudy • View Casestudy •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className={styles.arrowIcon}>
                  <ArrowUpRight size={24} color="#fff" />
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </section>
    </div>
  );
}
