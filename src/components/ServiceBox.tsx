"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./ServiceBox.module.css";
import { useInView, motion } from "framer-motion";

interface ServiceItemProps {
  title: string;
  description: string;
  list: string[];
  image: string;
  link: string;
  index: number;
  setActiveImage: (idx: number) => void;
}

function ServiceItem({ title, description, list, link, index, setActiveImage }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveImage(index);
    }
  }, [isInView, index, setActiveImage]);

  return (
    <div ref={ref} className={styles.serviceItem}>
      <motion.h2 
        className={styles.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </motion.ul>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={styles.serviceBtn}
      >
        <a href={link} className={styles.btn}>Take me there</a>
      </motion.div>
    </div>
  );
}

const servicesData = [
  {
    title: "Product Road Mapping & Engineering",
    description: "Need help with packaging the next big technology idea or transforming the traditional software development processes. We at Strategy Value Solutions can help with creating a product roadmap for strategic growth and industry positioning, cloud migration or the introduction of the latest SecDevOps or CI/CD processes.",
    list: [],
    image: "/images/svs-overview.jpg",
    link: "/service/product-road-mapping-engineering"
  },
  {
    title: "Strategic Program Management",
    description: "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources in order to understand the implications of every choice our clients can make. Get in touch to learn more about how this service can help you.",
    list: [],
    image: "/images/svs-overview.jpg",
    link: "/service/strategic-program-management"
  },
  {
    title: "Technology Transformation",
    description: "Looking for digital transformation for your business but not sure where to turn? Need help in technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions. Looking for digital transformation for your business but not sure where to turn? Need help in technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes.",
    list: [],
    image: "/images/svs-overview.jpg",
    link: "/service/technology-transformation"
  }
];

export default function ServiceBox() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className={`section-spacing ${styles.serviceBoxSection}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.leftContent}>
            {servicesData.map((service, index) => (
              <ServiceItem 
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                list={service.list}
                image={service.image}
                link={service.link}
                setActiveImage={setActiveImage}
              />
            ))}
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.imageSticky}>
              {servicesData.map((service, index) => (
                <img 
                  key={index}
                  src={service.image} 
                  alt={service.title} 
                  className={`${styles.serviceImg} ${activeImage === index ? styles.active : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
