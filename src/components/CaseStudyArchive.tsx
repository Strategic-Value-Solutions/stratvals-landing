"use client";

import { useState } from "react";
import styles from "./CaseStudyArchive.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyCoverCard from "./CaseStudyCoverCard";

const caseStudies = [
  {
    id: "1",
    num: "01",
    code: "STRATVALS-2026-01",
    number: "CS-2026-01",
    title: "Legal Services Marketplace",
    subtitle: "DIGITAL TRANSFORMATION · LEGALTECH",
    category: "digital-platforms",
    badge: "LegalTech",
    accent: "#8b5cf6",
    type: "legal" as const,
    desc: "Fragmented intake, provider onboarding and document handling converted into one secure, self-service legal marketplace.",
    link: "/case-studies/legal-services-marketplace",
  },
  {
    id: "2",
    num: "02",
    code: "STRATVALS-2026-02",
    number: "CS-2026-02",
    title: "Robotic Automation for Food Manufacturing",
    subtitle: "FOOD MANUFACTURING · ENGINEERING LEADERSHIP",
    category: "automation-industry",
    badge: "Robotics & Automation",
    accent: "#ff6a39",
    type: "robotics" as const,
    desc: "Strategic planning and program leadership taking a robotic automation vision from business case to manufacturing-ready MVP.",
    link: "/case-studies/robotic-automation-food-manufacturing",
  },
  {
    id: "3",
    num: "03",
    code: "STRATVALS-2026-03",
    number: "CS-2026-03",
    title: "Norrbrook Apparel Co.",
    subtitle: "COMMERCE · MULESOFT · AI DEMAND & SHIPPING",
    category: "commerce-ai",
    badge: "Commerce · AI",
    accent: "#10b981",
    type: "commerce" as const,
    desc: "A peak-proof apparel business: custom storefront, MuleSoft ERP-to-warehouse integration and AI demand and shipping engines.",
    link: "/case-studies/norrbrook-apparel-ecommerce",
  },
];

const tabs = [
  { id: "all", label: "All Work" },
  { id: "digital-platforms", label: "LegalTech & Platforms" },
  { id: "automation-industry", label: "Automation & Industry" },
  { id: "commerce-ai", label: "Commerce & AI" },
];

export default function CaseStudyArchive() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudies = caseStudies.filter(
    (study) => activeTab === "all" || study.category === activeTab
  );

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.tabsRow}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`${styles.tabBtn} ${activeTab === t.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

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
                      <CaseStudyCoverCard
                        number={study.num}
                        code={study.code}
                        title={study.title}
                        subtitle={study.subtitle}
                        accent={study.accent}
                        type={study.type}
                        compact
                      />
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