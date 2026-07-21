"use client";

import styles from "./OurPartnerBox.module.css";
import { motion } from "framer-motion";

const partnerList = [
  {
    name: "Husqvarna",
    desc: "Husqvarna Group is a Swedish manufacturer of outdoor power products including chainsaws, trimmers, brushcutters, cultivators, garden tractors, and mowers.",
    image: "/images/husqvarna.webp"
  },
  {
    name: "Scrubs and Beyond",
    desc: "Scrubs & Beyond is the largest retailer of healthcare apparel and accessories in the country.",
    image: "/images/scrubs.webp"
  },
  {
    name: "Fancode",
    desc: "FanCode is India's premier digital sports destination committed to giving fans a highly personalized experience across different sports.",
    image: "/images/fancode.webp"
  }
];

export default function OurPartnerBox() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.ourPartnerContainer}>
          <motion.div 
            className={styles.ourPartnerDesc}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.h3}>
              Our partners come from diverse industries, each bringing their unique strengths to the table. Whether it's technology, finance, healthcare, or any other field, our network of partners spans far and wide. This diversity enriches our capabilities and fuels our ability to adapt and thrive in an ever-changing landscape.
            </h2>
          </motion.div>
          
          <motion.div 
            className={styles.ourPartnerImages}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/husqvarna.webp" alt="Husqvarna" />
            <img src="/images/scrubs.webp" alt="Scrubs and Beyond" />
            <img src="/images/fancode.webp" alt="Fancode" />
          </motion.div>
        </div>
      </div>
      
      <div className={styles.ourPartnerListing}>
        <div className="container">
          {partnerList.map((partner, index) => (
            <motion.div 
              key={index}
              className={styles.ourPartnerList}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.ourPartnerListDesc}>
                <h3 className={styles.h3}>{partner.name}</h3>
                <p>{partner.desc}</p>
              </div>
              <div className={styles.ourPartnerListImg}>
                <img src={partner.image} alt={partner.name} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
