"use client";

import { motion, Variants } from "framer-motion";
import styles from "./ServicesSection.module.css";
import Link from "next/link";

const services = [
  {
    slug: "product-road-mapping-engineering",
    title: "Product Road Mapping & Engineering",
    description:
      "Need help with packaging the next big technology idea or transforming traditional software development processes? We help create a product roadmap for strategic growth and industry positioning, guide your cloud migration, and introduce the latest SecDevOps and CI/CD processes. We give your team the structure to build faster and ship smarter.",
    features: [
      "Strategic Product Architecture",
      "Cloud & DevOps Infrastructure",
      "SecDevOps & CI/CD Processes",
      "Agile Software Transformation",
    ],
    link: "/service/product-road-mapping-engineering",
  },
  {
    slug: "strategic-program-management",
    title: "Strategic Program Management",
    description:
      "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources to understand the implications of every choice our clients can make, so decisions are made with confidence, not guesswork.",
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
      "Looking for digital transformation but not sure where to turn? Need help with technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today's rapidly evolving environment means taking bold chances and making insightful decisions.",
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
              Strategic Value Solutions Services
            </p>
            <h2 className={styles.statement}>
              Your #1 business-specific software development experts across e-Commerce, Logistics, Healthcare, Construction Technology (ConTech), Smart Manufacturing, and Real Estate.
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
