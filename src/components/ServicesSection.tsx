"use client";

import { motion, Variants } from "framer-motion";
import styles from "./ServicesSection.module.css";
import Link from "next/link";

const services = [
  {
    slug: "product-road-mapping-engineering",
    title: "Product Road Mapping & Engineering",
    description:
      "Need help packaging the next big technology idea or transforming traditional software development processes? We create strategic product roadmaps for growth, market positioning, cloud migration, and SecDevOps/CI/CD pipelines.",
    features: [
      "Strategic Product Architecture",
      "Cloud Migration & Infrastructure",
      "SecDevOps & CI/CD Processes",
      "Agile Software Process Transformation",
    ],
    link: "/service/product-road-mapping-engineering",
  },
  {
    slug: "strategic-program-management",
    title: "Strategic Program Management",
    description:
      "We examine what market leaders are doing to stay relevant and competitive. We then strategize using smart tools and global governance resources to understand the implications of every executive choice.",
    features: [
      "Executive Portfolio & Program Governance",
      "Smart Tools & Resource Strategy",
      "Operational Risk & Quality Assurance",
      "Global Team Alignment & KPI Tracking",
    ],
    link: "/service/strategic-program-management",
  },
  {
    slug: "technology-transformation",
    title: "Technology Transformation",
    description:
      "Looking for digital transformation, tech selection, or cloud migration? Incremental changes aren't enough - building for the future means taking bold, insightful decisions guided by experienced advisors.",
    features: [
      "Digital Transformation Strategy",
      "Technology Selection & Evaluation",
      "Legacy Systems Modernization",
      "Enterprise Scale Architecture",
    ],
    link: "/service/technology-transformation",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ServicesSection() {
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
          {/* Header */}
          <div className={styles.top}>
            <p className={styles.label}>
              <span className={styles.dot} />
              What we do
            </p>
            <h2 className={styles.statement}>
              Fueling corporate success with futuristic solutions and strategy-led execution.
            </h2>
          </div>

          {/* Services Grid */}
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={styles.serviceItem}
              >
                <div className={styles.itemNumber}>0{index + 1}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>

                <ul className={styles.featureList}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link href={service.link} className={styles.serviceLink}>
                  <span>Explore service</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={styles.arrow}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
