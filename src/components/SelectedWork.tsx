"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SelectedWork.module.css";
import Link from "next/link";
import CaseStudyCoverCard from "./CaseStudyCoverCard";

const allWorks = [
  {
    id: "legal-services-marketplace",
    category: "digital-platforms",
    label: "LegalTech",
    badge: "Digital Transformation",
    num: "01",
    code: "STRATVALS-2026-01",
    subtitle: "DIGITAL TRANSFORMATION · LEGALTECH",
    accent: "#8b5cf6",
    type: "legal" as const,
    title: "Legal Services Marketplace",
    description:
      "Fragmented legal intake, provider onboarding and document handling converted into one secure, self-service marketplace: customers create cases and buy services; smaller firms and pro-bono lawyers discover and accept eligible matters.",
    metrics: [
      { value: "Self-Service", label: "Case creation & purchasing" },
      { value: "Live Registry", label: "Provider onboarding & pickup" },
      { value: "Audit-Ready Records", label: "Secure, searchable legal records" },
    ],
    image: "/images/case-legal-marketplace.svg",
    imageBg: "#141127",
    link: "/case-studies/legal-services-marketplace",
  },
  {
    id: "robotic-automation-food-manufacturing",
    category: "automation-industry",
    label: "Food Manufacturing",
    badge: "Robotic Automation",
    num: "02",
    code: "STRATVALS-2026-02",
    subtitle: "FOOD MANUFACTURING · ENGINEERING LEADERSHIP",
    accent: "#ff6a39",
    type: "robotics" as const,
    title: "From Automation Vision to Manufacturing-Ready Robot",
    description:
      "Strategic planning, engineering orchestration and program leadership for robotic automation: connecting business intent with engineering execution to deliver a manufacturing-ready MVP, on time and within budget.",
    metrics: [
      { value: "MVP", label: "Manufacturing-ready, on time" },
      { value: "On Budget", label: "Single program direction" },
      { value: "Scale", label: "Operationalization & multi-site" },
    ],
    image: "/images/case-robotic-automation.svg",
    imageBg: "#241807",
    link: "/case-studies/robotic-automation-food-manufacturing",
  },
  {
    id: "norrbrook-apparel-ecommerce",
    category: "commerce-ai",
    label: "Apparel & Fashion",
    badge: "Commerce · MuleSoft · AI",
    num: "03",
    code: "STRATVALS-2026-03",
    subtitle: "COMMERCE · MULESOFT · AI DEMAND & SHIPPING",
    accent: "#10b981",
    type: "commerce" as const,
    title: "Leading Apparel Brand",
    description:
      "A peak-proof apparel business. Custom storefront with variant-level availability, MuleSoft ERP-to-warehouse integration cutting sync from 48 hours to seconds, and AI demand and shipping engines that turn End-of-Season Sale week into a routine.",
    metrics: [
      { value: "96.4%", label: "DIFOT, including peak weeks" },
      { value: "3.1×", label: "Peak throughput, same headcount" },
      { value: "−42%", label: "Peak stockout rate" },
    ],
    image: "/images/case-ecommerce-apparel.svg",
    imageBg: "#0a1f1a",
    link: "/case-studies/norrbrook-apparel-ecommerce",
  },
];

const tabs = [
  { id: "all", label: "Selected Work" },
  { id: "digital-platforms", label: "LegalTech & Platforms" },
  { id: "automation-industry", label: "Automation & Industry" },
  { id: "commerce-ai", label: "Commerce & AI" },
];

export default function SelectedWork() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredWorks =
    activeTab === "all"
      ? allWorks
      : allWorks.filter((w) => w.category === activeTab);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        {/* Header with Title and Filter Tabs */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleArea}>
            <p className={styles.label}>
              <span className={styles.dot} />
              Selected Work
            </p>
            <h2 className={styles.sectionHeading}>
              Companies that closed the gap between strategy and execution.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className={styles.tabs}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`${styles.tabBtn} ${
                  activeTab === t.id ? styles.activeTab : ""
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Cards Grid with Animation */}
        <motion.div className={styles.cards} layout>
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`${styles.card} ${i % 2 !== 0 ? styles.flip : ""}`}
              >
                {/* Text side */}
                <div className={styles.textSide}>
                  <div className={styles.cardHeaderMeta}>
                    <span className={styles.cardLabel}>
                      <span className={styles.dot} />
                      {work.label}
                    </span>
                    <span className={styles.badge}>{work.badge}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{work.title}</h3>
                  <p className={styles.cardDesc}>{work.description}</p>

                  {/* Metrics */}
                  <div className={styles.metrics}>
                    {work.metrics.map((m) => (
                      <div key={m.label} className={styles.metric}>
                        <span className={styles.metricValue}>{m.value}</span>
                        <span className={styles.metricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={work.link} className={styles.exploreBtn}>
                    <span>Explore case study</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={styles.arrowIcon}
                    >
                      <path
                        d="M3.333 8h9.334M8.667 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Dynamic Pure React Cover Side */}
                <div className={styles.imageSide}>
                  <CaseStudyCoverCard
                    number={work.num}
                    code={work.code}
                    title={work.title}
                    subtitle={work.subtitle}
                    accent={work.accent}
                    type={work.type}
                    compact
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}