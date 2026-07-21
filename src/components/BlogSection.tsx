"use client";

import { motion } from "framer-motion";
import styles from "./BlogSection.module.css";
import Link from "next/link";

const blogs = [
  {
    date: "Sep 22, 2023",
    title: "A Complete Guide to Enterprise Application Development",
    excerpt: "Enterprise Application Development is a strategic approach for designing, developing, deploying,...",
    image: "/images/blog1.webp",
    link: "/blog/a-complete-guide-to-enterprise-application-development",
  },
];

export default function BlogSection() {
  return (
    <section className="section-spacing">
      <div className="container">
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blogs
        </motion.h2>

        <div className={styles.grid}>
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={blog.link} className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                </div>
                <div className={styles.content}>
                  <span className={styles.date}>{blog.date}</span>
                  <h3 className={styles.title}>{blog.title}</h3>
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
