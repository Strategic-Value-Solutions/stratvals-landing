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
    excerpt:
      "Strategic Value Solutions has formalized a collaborative partnership with Penn State University Great Valley to advance joint research in enterprise technology management, AI engineering frameworks, and executive STEM education. The collaboration will foster a culture of innovation, enabling both organizations to stay at the forefront of emerging technologies and corporate talent development.",
    image: "/images/news-partnership.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley",
  },
  {
    id: "2",
    date: "Sep 22, 2023",
    category: "Technology Partnership",
    title: "Strategic Value Solutions Announces Strategic Partnership with Bytes Technolab",
    excerpt:
      "Strategic Value Solutions and Bytes Technolab have entered a formal co-development partnership to meet growing enterprise demand for comprehensive, technology-driven solutions. The collaboration combines Stratvals' executive advisory expertise with Bytes Technolab's global engineering capacity, enabling rapid mobilization of full-stack engineering teams for complex client engagements.",
    image: "/images/news-bytes.jpg",
    link: "/news-events/strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab",
  },
  {
    id: "3",
    date: "Nov 10, 2023",
    category: "Platform Launch",
    title: "Stratvals Completes Successful Launch of eNFT Marketplace Platform on Ethereum Mainnet",
    excerpt:
      "Strategic Value Solutions has successfully delivered and launched the eNFT marketplace platform on Ethereum mainnet. The platform features gasless lazy minting, email-based custodial onboarding, and a high-speed blockchain indexing backend. Over 1,000 NFTs were minted within the first 48 hours of public availability, validating the team's approach to reducing crypto onboarding friction.",
    image: "/images/casestudy-nft.jpg",
    link: "/news-events/stratvals-completes-successful-launch-of-enft-marketplace",
  },
  {
    id: "4",
    date: "Jan 15, 2024",
    category: "Corporate Milestone",
    title: "Strategic Value Solutions Expands Executive Advisory Practice to Serve Healthcare and Manufacturing Sectors",
    excerpt:
      "Following a series of successful engagements in logistics and e-Commerce, Strategic Value Solutions is formally expanding its executive advisory practice to serve clients in the Healthcare and Manufacturing sectors. The expansion reflects growing demand for technology strategy advisory from executives navigating regulatory compliance, ERP modernization, and digital supply chain transformation.",
    image: "/images/casestudy-schools.jpg",
    link: "/news-events/stratvals-expands-executive-advisory-practice",
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
                      Read Press Release <span>&#8594;</span>
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
