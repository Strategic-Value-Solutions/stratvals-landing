"use client";

import { useState } from "react";
import styles from "./CaseStudyArchive.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: "1",
    title: "Fells Point Water Restoration",
    category: "program-management",
    badge: "Program Management",
    desc: "Cloud-native IoT monitoring platform tracking real-time water quality along Baltimore's waterfront.",
    image: "/images/casestudy-water.jpg",
    link: "/case-studies/fells-point-water-restoration",
  },
  {
    id: "2",
    title: "Abandoned Mine Reclamation",
    category: "program-management",
    badge: "Program Management",
    desc: "GIS-powered platform for tracking, scoring, and prioritizing 3,000+ mine site remediations.",
    image: "/images/casestudy-mine.jpg",
    link: "/case-studies/abandoned-mine-reclamation",
  },
  {
    id: "3",
    title: "Clark County Public Schools",
    category: "it-transformation",
    badge: "IT Transformation",
    desc: "Unified district management platform consolidating 7 legacy systems for 300,000+ students.",
    image: "/images/casestudy-schools.jpg",
    link: "/case-studies/clark-county-public-schools-clean",
  },
  {
    id: "4",
    title: "Blackbelt Broadband Application",
    category: "it-transformation",
    badge: "IT Transformation",
    desc: "Full self-service mobile and web customer dashboard platform for rural broadband.",
    image: "/images/casestudy-broadband.jpg",
    link: "/case-studies/blackbelt-broadband-application",
  },
  {
    id: "5",
    title: "eNFT : NFT Marketplace",
    category: "product-road-mapping",
    badge: "Product Road Mapping",
    desc: "Full-stack NFT marketplace platform enabling gasless minting and instant user onboarding.",
    image: "/images/casestudy-nft.jpg",
    link: "/case-studies/enft-nft-marketplace",
  },
  {
    id: "6",
    title: "DMS – Granthalaya",
    category: "product-road-mapping",
    badge: "Product Road Mapping",
    desc: "Enterprise Document Management System with ML auto-classification and audit trails.",
    image: "/images/casestudy-dms.jpg",
    link: "/case-studies/dms-granthalaya",
  },
  {
    id: "7",
    title: "Dapper: Email Management Dashboard",
    category: "it-transformation",
    badge: "IT Transformation",
    desc: "Intelligent email analytics and workflow automation dashboard connecting Gmail and Outlook APIs.",
    image: "/images/casestudy-email.jpg",
    link: "/case-studies/dapper-email-management-dashboard",
  },
];

const tabs = [
  { id: "all", label: "All Case Studies" },
  { id: "program-management", label: "Program Management" },
  { id: "it-transformation", label: "IT Transformation" },
  { id: "product-road-mapping", label: "Product Road Mapping" },
];

export default function CaseStudyArchive() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudies = caseStudies.filter(
    (study) => activeTab === "all" || study.category === activeTab
  );

  return (
    <section className={styles.wrapper}>
      <div className="container">
        {/* Main White Card Container */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Filter Pills */}
          <div className={styles.tabsRow}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`${styles.tabBtn} ${
                  activeTab === t.id ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Grid of Case Study Cards */}
          <motion.div className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={study.link} className={styles.studyCard}>
                    <div className={styles.imageBox}>
                      <span className={styles.badge}>{study.badge}</span>
                      <img src={study.image} alt={study.title} className={styles.image} />
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>{study.title}</h3>
                      <p className={styles.desc}>{study.desc}</p>
                      <span className={styles.linkText}>
                        Read Case Study <span>→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
