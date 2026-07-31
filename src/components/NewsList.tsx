"use client";

import styles from "./NewsList.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: "1",
    date: "Sep 22, 2023",
    category: "Academic Partnership",
    title: "Strategic Value Solutions Announces Strategic Partnership with Pennsylvania State University, Great Valley",
    excerpt: "The collaboration will foster a culture of innovation, enabling both companies to stay at the forefront of emerging technologies, research, and corporate talent development.",
    image: "/images/news-partnership.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley",
  },
  {
    id: "2",
    date: "Sep 22, 2023",
    category: "Technology Partnership",
    title: "Strategic Value Solutions Announces Strategic Partnership with Bytes Technolab",
    excerpt: "The collaboration between Strategic Value Solutions and Bytes Technolab comes as a response to growing demand for comprehensive, technology-driven solutions in today's business landscape.",
    image: "/images/news-bytes.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab",
  },
];

export default function NewsList() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.grid}>
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={news.link} className={styles.newsCard}>
                  <div className={styles.imageBox}>
                    <span className={styles.badge}>{news.category}</span>
                    <img src={news.image} alt={news.title} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.date}>{news.date}</div>
                    <h3 className={styles.title}>{news.title}</h3>
                    <p className={styles.excerpt}>{news.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Press Release <span>→</span>
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
