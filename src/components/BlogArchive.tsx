"use client";

import { useState } from "react";
import styles from "./BlogArchive.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: "1",
    title: "A Complete Guide to Enterprise Application Development",
    excerpt:
      "Enterprise Application Development is a strategic discipline for designing, building, and maintaining software that addresses the complex operational and regulatory needs of large organizations. Unlike consumer apps, enterprise software must handle thousands of concurrent users, integrate with legacy systems, enforce role-based access, and remain auditable. This guide covers the full lifecycle.",
    date: "Sep 22, 2023",
    readTime: "8 Min Read",
    category: "Engineering Strategy",
    author: "Stratvals Team",
    image: "/images/blog1.webp",
    link: "/blog/a-complete-guide-to-enterprise-application-development",
  },
  {
    id: "2",
    title: "From Legacy Systems to Digital Excellence: The Tech Transformation Journey",
    excerpt:
      "Most enterprise IT landscapes are burdened by decades of accumulated technical debt. Monolithic codebases, outdated databases, and brittle integrations slow down every new initiative. This article outlines how leading organizations are decoupling legacy monoliths into cloud-native microservices without disrupting day-to-day operations, and what the realistic roadmap looks like.",
    date: "Oct 14, 2023",
    readTime: "6 Min Read",
    category: "Digital Modernization",
    author: "Stratvals Team",
    image: "/images/dashboard.webp",
    link: "/blog/from-legacy-systems-to-digital-excellence-the-tech-transformation-journey",
  },
  {
    id: "3",
    title: "Maximizing ROI with Agile Program Governance and Executive Advisory",
    excerpt:
      "Large-scale software programs routinely fail to deliver on their original business case. The root cause is almost never technical: it is governance. C-suite leaders who establish clear ownership models, RAID frameworks, and data-driven steering cadences from day one consistently see better outcomes. This article explains what good program governance actually looks like at the execution level.",
    date: "Nov 05, 2023",
    readTime: "7 Min Read",
    category: "Executive Advisory",
    author: "Stratvals Team",
    image: "/images/casestudy-dms.jpg",
    link: "/blog/maximizing-roi-with-agile-program-governance",
  },
  {
    id: "4",
    title: "Building Scalable Cloud Architecture on AWS and Azure for Global Scale",
    excerpt:
      "Multi-region cloud architecture is no longer optional for enterprise platforms serving global users. This deep dive covers how to design high-availability deployments across AWS and Azure, implement zero-trust security with Kubernetes network policies, set up automated failover, and maintain cost efficiency as scale grows. Includes real configurations from production engagements.",
    date: "Dec 01, 2023",
    readTime: "9 Min Read",
    category: "Cloud & SecDevOps",
    author: "Stratvals Team",
    image: "/images/casestudy-broadband.jpg",
    link: "/blog/building-scalable-cloud-architecture-on-aws-and-azure",
  },
  {
    id: "5",
    title: "What C-Suite Leaders Get Wrong About Digital Transformation",
    excerpt:
      "Digital transformation initiatives have a well-documented failure rate. Most fail not because the technology is wrong, but because the executive vision is disconnected from the operational reality of implementation. This article identifies the five most common strategic mistakes we see at the leadership level and what a more disciplined approach looks like.",
    date: "Jan 18, 2024",
    readTime: "6 Min Read",
    category: "Executive Advisory",
    author: "Stratvals Team",
    image: "/images/casestudy-schools.jpg",
    link: "/blog/what-c-suite-leaders-get-wrong-about-digital-transformation",
  },
  {
    id: "6",
    title: "Product Road Mapping in Complex Regulated Industries",
    excerpt:
      "Building a product roadmap in healthcare, financial services, or government requires a different approach than typical SaaS products. Compliance constraints, procurement cycles, and stakeholder approval chains reshape prioritization in ways that standard agile frameworks do not account for. This guide covers how to structure a roadmap that survives contact with enterprise reality.",
    date: "Feb 09, 2024",
    readTime: "7 Min Read",
    category: "Engineering Strategy",
    author: "Stratvals Team",
    image: "/images/casestudy-water.jpg",
    link: "/blog/product-road-mapping-in-complex-regulated-industries",
  },
];

const tabs = [
  { id: "all", label: "All Articles" },
  { id: "engineering", label: "Engineering Strategy" },
  { id: "digital", label: "Digital Modernization" },
  { id: "executive", label: "Executive Advisory" },
  { id: "cloud", label: "Cloud & SecDevOps" },
];

export default function BlogArchive() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBlogs =
    activeTab === "all"
      ? blogs
      : blogs.filter((b) => b.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Filter Pills */}
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

          {/* Blog Cards Grid */}
          <div className={styles.grid}>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={blog.link} className={styles.blogCard}>
                  <div className={styles.imageBox}>
                    <span className={styles.badge}>{blog.category}</span>
                    <img src={blog.image} alt={blog.title} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.metaRow}>
                      <span>{blog.date}</span>
                      <span>&bull;</span>
                      <span>{blog.readTime}</span>
                      <span>&bull;</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.excerpt}>{blog.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Full Article <span>&#8594;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
