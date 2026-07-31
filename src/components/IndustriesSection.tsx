"use client";

import styles from "./IndustriesSection.module.css";
import { motion } from "framer-motion";

const industries = [
  {
    id: "ecommerce",
    title: "e-Commerce & Retail Tech",
    tagline: "High-Scale Commerce Engines & Omnichannel Architecture",
    description:
      "We design and build bespoke commerce platforms, Magento Hyva Theme migrations, and Shopify Plus ecosystems capable of processing tens of thousands of transactions per minute with sub-second response times.",
    icon: "🛒",
    metrics: "4.2x Conversion Boost",
  },
  {
    id: "logistics",
    title: "3PL & 4PL Logistics",
    tagline: "Real-Time Fleet Tracking & Warehouse Management",
    description: "Automating end-to-end supply chain visibility with IoT tracking sensors, route optimization algorithms, and automated warehouse management system (WMS) integrations.",
    icon: "🚛",
    metrics: "35% Fuel Savings",
  },
  {
    id: "healthcare",
    title: "Healthcare & Digital Health",
    tagline: "HIPAA-Compliant Platforms & Patient Intelligence",
    description: "Developing secure EHR/EMR integrations, telemedicine SPA platforms, and predictive patient analytics engines adhering to strict HIPAA and HL7/FHIR data compliance.",
    icon: "🏥",
    metrics: "100% HIPAA Compliant",
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    tagline: "Site Operations & Resource Planning Systems",
    description: "Digitizing job-site reporting, safety compliance tracking, heavy equipment telemetry, and contractor billing into a single cloud dashboard.",
    icon: "🏗️",
    metrics: "60% Faster Reporting",
  },
  {
    id: "manufacturing",
    title: "Smart Manufacturing & Industry 4.0",
    tagline: "Predictive Maintenance & Factory Automation",
    description: "Integrating Industrial IoT sensors with edge data processing to predict machine component failures before downtime impacts assembly line throughput.",
    icon: "🏭",
    metrics: "99.8% Line Availability",
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    tagline: "Property Portfolio Analytics & Tenant Portals",
    description: "Custom PropTech software for asset managers, lease abstraction AI, automated maintenance ticketing, and immersive virtual property walkthroughs.",
    icon: "🏢",
    metrics: "85% Lease Ops Efficiency",
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className={styles.header}>
            <div className={styles.label}>
              <span className={styles.dot} />
              <span>Industry Focus</span>
            </div>
            <h2 className={styles.heading}>
              Tailored Engineering for High-Stakes Industries
            </h2>
            <p className={styles.subheading}>
              We bring deep domain expertise across 6 core sectors, transforming complex operational requirements into scalable digital advantages.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className={styles.grid}>
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                className={styles.industryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{ind.icon}</span>
                  <span className={styles.metricBadge}>{ind.metrics}</span>
                </div>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <div className={styles.tagline}>{ind.tagline}</div>
                <p className={styles.description}>{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
