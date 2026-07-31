"use client";

import { motion } from "framer-motion";
import styles from "./BlogSection.module.css";
import Link from "next/link";

const blogs = [
  {
    date: "Sep 22, 2023",
    title: "A Complete Guide to Enterprise Application Development",
    excerpt:
      "Enterprise Application Development is a strategic approach for designing, developing, deploying, and maintaining software tailored to complex corporate needs.",
    category: "Engineering Strategy",
    readTime: "6 min read",
    image: "/images/blog1.webp",
    link: "/blog/a-complete-guide-to-enterprise-application-development",
  },
];

export default function BlogSection() {
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
              Latest Insights
            </p>
            <h2 className={styles.statement}>
              Perspectives on technology strategy, enterprise engineering, and digital growth.
            </h2>
          </div>

          {/* Blogs Grid */}
          <div className={styles.grid}>
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.link}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={blog.link} className={styles.blogItem}>
                  <div className={styles.imageBox}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.blogImage}
                    />
                    <span className={styles.categoryBadge}>{blog.category}</span>
                  </div>

                  <div className={styles.contentBox}>
                    <div className={styles.metaRow}>
                      <span className={styles.date}>{blog.date}</span>
                      <span className={styles.dotSeparator}>•</span>
                      <span className={styles.readTime}>{blog.readTime}</span>
                    </div>

                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.excerpt}>{blog.excerpt}</p>

                    <span className={styles.readMore}>
                      Read full article <span>→</span>
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
