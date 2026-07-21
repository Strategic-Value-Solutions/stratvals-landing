"use client";

import styles from "./NewsList.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: "1",
    date: "Sep 22, 2023",
    title: "Strategic Value Solutions Announces Strategic Partnership with Pennsylvania State University, Great Valley",
    excerpt: "",
    image: "/images/news-partnership.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley"
  },
  {
    id: "2",
    date: "Sep 22, 2023",
    title: "Strategic Value Solutions Announces Strategic Partnership with Bytes Technolab",
    excerpt: "The collaboration between Strategic Value Solutions and Bytes Technolab comes as a response to the growing demand for comprehensive, innovative, and technology-driven solutions in today's business landscape. Both companies bring a wealth of experience and expertise to the table, and this partnership aims to leverage their combined strengths to deliver exceptional value to clients worldwide.",
    image: "/images/news-bytes.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab"
  }
];

export default function NewsList() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.newslistWrapper}>
          {newsItems.map((news, index) => (
            <motion.div 
              key={news.id}
              className={styles.newslistContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.newslistBox}>
                <Link href={news.link}>
                  <div className={styles.newslistImage}>
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className={styles.newslistContent}>
                    <span>{news.date}</span>
                    <h2 className={styles.h3}>{news.title}</h2>
                    <p>{news.excerpt}</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
