"use client";

import { useState } from "react";
import styles from "./CaseStudyArchive.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "1",
    title: "Fells Point Water Restoration",
    category: "program-management",
    badge: "Program Management",
    image: "/images/casestudy-water.jpg",
    link: "/case-studies/fells-point-water-restoration"
  },
  {
    id: "2",
    title: "Abandoned Mine Reclamation",
    category: "program-management",
    badge: "Program Management",
    image: "/images/casestudy-mine.jpg",
    link: "/case-studies/abandoned-mine-reclamation"
  },
  {
    id: "3",
    title: "Clark County Public Schools Clean",
    category: "it-transformation",
    badge: "IT Transformation",
    image: "/images/casestudy-schools.jpg",
    link: "/case-studies/clark-county-public-schools-clean"
  },
  {
    id: "4",
    title: "Blackbelt Broadband Application",
    category: "it-transformation",
    badge: "IT Transformation",
    image: "/images/casestudy-broadband.jpg",
    link: "/case-studies/blackbelt-broadband-application"
  },
  {
    id: "5",
    title: "eNFT : NFT Marketplace",
    category: "product-road-mapping",
    badge: "Product Road Mapping",
    image: "/images/casestudy-nft.jpg",
    link: "/case-studies/enft-nft-marketplace"
  },
  {
    id: "6",
    title: "DMS – Granthalaya",
    category: "product-road-mapping",
    badge: "Product Road Mapping",
    image: "/images/casestudy-dms.jpg",
    link: "/case-studies/dms-granthalaya"
  },
  {
    id: "7",
    title: "Dapper: Email Management Dashboard",
    category: "it-transformation",
    badge: "IT Transformation",
    image: "/images/casestudy-email.jpg",
    link: "/case-studies/dapper-email-management-dashboard"
  }
];

export default function CaseStudyArchive() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudies = caseStudies.filter(study => activeTab === "all" || study.category === activeTab);

  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.casestudyLinking}>
          <ul className={styles.casestudyTopUl}>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "all" ? styles.active : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Casestudies
              </button>
            </li>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "program-management" ? styles.active : ""}`}
                onClick={() => setActiveTab("program-management")}
              >
                Program Management
              </button>
            </li>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "it-transformation" ? styles.active : ""}`}
                onClick={() => setActiveTab("it-transformation")}
              >
                IT Transformation
              </button>
            </li>
            <li>
              <button 
                className={`${styles.tabBtn} ${activeTab === "product-road-mapping" ? styles.active : ""}`}
                onClick={() => setActiveTab("product-road-mapping")}
              >
                Product Road Mapping
              </button>
            </li>
          </ul>
        </div>
        
        <div className={styles.casestudyGrid}>
          {filteredStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className={styles.casestudyCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={study.link}>
                <div className={styles.casestudyImg}>
                  <div className={styles.casestudyBadge}>
                    <span>{study.badge}</span>
                  </div>
                  <img src={study.image} alt={study.title} />
                  <div className={styles.casestudyListBtn}></div>
                </div>
                <h3 className={styles.h3}>{study.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
