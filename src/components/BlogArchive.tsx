"use client";

import { useState } from "react";
import styles from "./BlogArchive.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: "1",
    title: "A Complete Guide to Enterprise Application Development",
    excerpt: "Enterprise Application Development is a strategic approach for designing, developing, deploying,...",
    date: "Sep 22, 2023",
    author: "Stratvals",
    image: "/images/blog1.webp",
    link: "/blog/a-complete-guide-to-enterprise-application-development"
  }
];

export default function BlogArchive() {
  const [activeTab, setActiveTab] = useState("recent");

  const filteredBlogs = activeTab === "all" || activeTab === "recent" ? blogs : [];

  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.blogTopLinks}>
          <ul className={styles.blogTopUl}>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "all" ? styles.active : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Blogs
              </button>
            </li>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "recent" ? styles.active : ""}`}
                onClick={() => setActiveTab("recent")}
              >
                Recently Uploaded
              </button>
            </li>
          </ul>
        </div>
        
        <div className={styles.blogContainer}>
          {filteredBlogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={blog.link}>
                <div className={styles.blogCardImg}>
                  <img src={blog.image} alt={blog.title} width={898} height={473} />
                </div>
                <div className={styles.blogContent}>
                  <span>{blog.date}</span>
                  <h2 className={styles.h5}>{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className={styles.blogBottomBtn} style={{ display: "none" }}>
          <a href="#" className={styles.blogLoadMore}>Load more</a>
        </div>
      </div>
    </section>
  );
}
