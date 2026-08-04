"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SelectedWork.module.css";
import Link from "next/link";

const allWorks = [
  {
    id: "fells-point-water-restoration",
    category: "program-management",
    label: "Environmental Tech, US",
    badge: "Program Management",
    title: "Fells Point Water Restoration",
    description:
      "A cloud-native IoT monitoring platform tracking real-time water quality across hundreds of sensors deployed along Baltimore's waterfront - turning manual field work into automated, always-on environmental intelligence.",
    metrics: [
      { value: "85%", label: "Manual Effort Saved" },
      { value: "10×", label: "Faster Alert Detection" },
      { value: "<30s", label: "Sensor Data Latency" },
    ],
    image: "/images/casestudy-water.jpg",
    imageBg: "#e3f2fd",
    link: "/case-studies/fells-point-water-restoration",
  },
  {
    id: "abandoned-mine-reclamation",
    category: "program-management",
    label: "GovTech, US",
    badge: "Program Management",
    title: "Abandoned Mine Reclamation",
    description:
      "A GIS-powered platform for the Pennsylvania State Environmental Agency to track, score, and prioritize remediation of 3,000+ abandoned mine sites - replacing fragmented spreadsheets with a live decision-support system.",
    metrics: [
      { value: "3,000+", label: "Sites Tracked" },
      { value: "60%", label: "Field Efficiency Gained" },
      { value: "12mo", label: "Delivery Timeline" },
    ],
    image: "/images/casestudy-mine.jpg",
    imageBg: "#111827",
    link: "/case-studies/abandoned-mine-reclamation",
  },
  {
    id: "clark-county-public-schools-clean",
    category: "it-transformation",
    label: "EdTech, US",
    badge: "IT Transformation",
    title: "Clark County Public Schools",
    description:
      "A unified district management platform consolidating 7 disconnected legacy systems into a single source of truth for 300,000+ students across 350+ schools - with real-time enrollment and predictive maintenance.",
    metrics: [
      { value: "7→1", label: "Systems Consolidated" },
      { value: "−70%", label: "Reporting Time" },
      { value: "94%", label: "User Satisfaction" },
    ],
    image: "/images/casestudy-schools.jpg",
    imageBg: "#fef3c7",
    link: "/case-studies/clark-county-public-schools-clean",
  },
  {
    id: "blackbelt-broadband-application",
    category: "it-transformation",
    label: "Telecom, US",
    badge: "IT Transformation",
    title: "Blackbelt Broadband Application",
    description:
      "A full self-service mobile and web platform for a rural broadband provider - giving customers real-time usage dashboards, one-tap outage reporting, and live network health maps.",
    metrics: [
      { value: "−52%", label: "Support Call Volume" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "78%", label: "Self-Service Adoption" },
    ],
    image: "/images/casestudy-broadband.jpg",
    imageBg: "#0f172a",
    link: "/case-studies/blackbelt-broadband-application",
  },
  {
    id: "enft-nft-marketplace",
    category: "product-road-mapping",
    label: "Web3, US",
    badge: "Product Road Mapping",
    title: "eNFT : NFT Marketplace",
    description:
      "A full-stack NFT marketplace platform enabling artists, collectors, and brands to mint, buy, sell, and auction digital assets on Ethereum - built with gasless lazy minting and seamless onboarding.",
    metrics: [
      { value: "10k+", label: "NFTs Minted" },
      { value: "$2M+", label: "Trading Volume" },
      { value: "<2min", label: "User Onboarding" },
    ],
    image: "/images/casestudy-nft.jpg",
    imageBg: "#fae8ff",
    link: "/case-studies/enft-nft-marketplace",
  },
  {
    id: "dms-granthalaya",
    category: "product-road-mapping",
    label: "Enterprise SaaS, US",
    badge: "Product Road Mapping",
    title: "DMS: Granthalaya",
    description:
      "A comprehensive Document Management System built for enterprise clients to manage, version-control, classify, and collaborate on thousands of documents with automated ML classification and audit trails.",
    metrics: [
      { value: "100k+", label: "Docs Managed" },
      { value: "−80%", label: "Search Time" },
      { value: "100%", label: "Compliance Score" },
    ],
    image: "/images/casestudy-dms.jpg",
    imageBg: "#f1f5f9",
    link: "/case-studies/dms-granthalaya",
  },
  {
    id: "dapper-email-management-dashboard",
    category: "it-transformation",
    label: "Productivity SaaS, US",
    badge: "IT Transformation",
    title: "Dapper: Email Management Dashboard",
    description:
      "An intelligent email analytics and workflow automation dashboard connecting Gmail and Outlook APIs for enterprise sales teams to track response latency, customer sentiment, and deal health.",
    metrics: [
      { value: "3.5×", label: "Response Speed" },
      { value: "+42%", label: "Deal Velocity" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    image: "/images/casestudy-email.jpg",
    imageBg: "#e0f2fe",
    link: "/case-studies/dapper-email-management-dashboard",
  },
];

const tabs = [
  { id: "all", label: "Selected Work" },
  { id: "program-management", label: "Program Management" },
  { id: "it-transformation", label: "IT Transformation" },
  { id: "product-road-mapping", label: "Product Road Mapping" },
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
              Companies that closed the perception gap and what changed.
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

                {/* Image side */}
                <div
                  className={styles.imageSide}
                  style={{ background: work.imageBg }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className={styles.workImage}
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
