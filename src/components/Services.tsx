"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Product Road Mapping & Engineering",
    description:
      "Need help with packaging the next big technology idea or transforming the traditional software development processes. We at Strategy Value Solutions can help with creating a product roadmap for strategic growth and industry positioning, cloud migration or the introduction of the latest SecDevOps or CI/CD processes.",
    link: "/service/product-road-mapping-engineering/",
    svgClass: styles.blueSvg,
  },
  {
    title: "Strategic Program Management",
    description:
      "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources in order to understand the implications of every choice our clients can make. Get in touch to learn more about how this service can help you.",
    link: "/service/strategic-program-management/",
    svgClass: styles.orangeSvg,
  },
  {
    title: "Technology Transformation",
    description:
      "Looking for digital transformation for your business but not sure where to turn? Need help in technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions.",
    link: "/service/technology-transformation/",
    svgClass: styles.blueSvg,
  },
];

export default function Services() {
  return (
    <section className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Strategic Value Solutions Services</h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={service.link} className={styles.card}>
                <div className={`${styles.svgBackground} ${service.svgClass}`}></div>
                <div className={styles.cardHeader}>
                  <h3>{service.title}</h3>
                  <div className={styles.iconBox}>
                    <ArrowUpRight size={24} color="#fff" />
                  </div>
                </div>
                <p className={styles.description}>{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
