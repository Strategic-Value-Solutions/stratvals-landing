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
      "Enterprise Application Development is a strategic approach for designing, developing, deploying, and maintaining software tailored to complex corporate needs.",
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
      "Discover how global enterprises decouple legacy monoliths into cloud-native microservices, reducing operational overhead while accelerating feature releases.",
    date: "Oct 14, 2023",
    readTime: "6 Min Read",
    category: "Digital Modernization",
    author: "Stratvals Team",
    image: "/images/dashboard.webp",
    link: "/blog/from-legacy-systems-to-digital-excellence-the-tech-transformation-journey",
  },
  {
    id: "3",
    title: "Maximizing ROI with Agile Program Governance & Executive Advisory",
    excerpt:
      "Learn how C-suite leaders establish risk mitigation frameworks, sprint cadences, and automated status reporting to keep high-stakes initiatives on schedule.",
    date: "Nov 05, 2023",
    readTime: "7 Min Read",
    category: "Executive Advisory",
    author: "Stratvals Team",
    image: "/images/casestudy-dms.jpg",
    link: "/blog/maximizing-roi-with-agile-program-governance",
  },
  {
    id: "4",
    title: "Building Scalable Cloud Architecture on AWS & Azure for Global Scale",
    excerpt:
      "A deep dive into multi-region deployment strategies, Kubernetes container orchestration, and zero-trust security pipelines for mission-critical apps.",
    date: "Dec 01, 2023",
    readTime: "9 Min Read",
    category: "Cloud & SecDevOps",
    author: "Stratvals Team",
    image: "/images/casestudy-broadband.jpg",
    link: "/blog/building-scalable-cloud-architecture-on-aws-and-azure",
  },
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
            <button
              className={`${styles.tabBtn} ${activeTab === "all" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Articles
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "engineering" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("engineering")}
            >
              Engineering Strategy
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "digital" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("digital")}
            >
              Digital Modernization
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "executive" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("executive")}
            >
              Executive Advisory
            </button>
          </div>

          {/* Blog Cards Grid */}
          <div className={styles.grid}>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={blog.link} className={styles.blogCard}>
                  <div className={styles.imageBox}>
                    <span className={styles.badge}>{blog.category}</span>
                    <img src={blog.image} alt={blog.title} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.metaRow}>
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.excerpt}>{blog.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Full Article <span>→</span>
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
