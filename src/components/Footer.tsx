"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerBanner}>
          <div className={styles.bannerBox}>
            <h2 className={styles.bannerTitle}>SAY HI!</h2>
            <Link href="/contact-us" className={`circular-btn ${styles.footerBtn}`}>
              <div className={styles.circleTextWrapper}>
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circle-footer" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="11" letterSpacing="1">
                    <textPath href="#circle-footer">
                      LET'S MEET • BUY ME A COFFEE •
                    </textPath>
                  </text>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.contactInfo}>
            <a href="mailto:contact@stratvals.com">contact@stratvals.com</a>
            <a href="tel:+1(215)7201710">+1 (215) 720 1710</a>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/company/stratvals-llc" target="_blank" rel="noreferrer">
               <div className={styles.socialIcon}>in</div>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
               <div className={styles.socialIcon}>f</div>
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
               <div className={styles.socialIcon}>X</div>
            </a>
            <a href="https://www.instagram.com/accounts/login" target="_blank" rel="noreferrer">
               <div className={styles.socialIcon}>ig</div>
            </a>
          </div>

          <div className={styles.copyright}>
            <p>© 2024 StratValsllc - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
