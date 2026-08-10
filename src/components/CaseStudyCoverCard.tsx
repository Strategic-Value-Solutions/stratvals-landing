"use client";

import styles from "./CaseStudyCoverCard.module.css";
import React from "react";

export type CoverCardProps = {
  number?: string;
  code?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  type?: "legal" | "robotics" | "commerce";
  compact?: boolean;
  className?: string;
};

export default function CaseStudyCoverCard({
  number = "01",
  code = "STRATVALS-2026-01",
  title,
  subtitle = "DIGITAL TRANSFORMATION",
  accent = "#8b5cf6",
  type = "legal",
  compact = false,
  className = "",
}: CoverCardProps) {
  // Custom CSS properties for accent colors
  const customStyles = {
    "--card-accent-color": accent,
    "--card-accent-glow": `${accent}33`,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.card} ${compact ? styles.compact : ""} ${className}`}
      style={customStyles}
    >
      {/* Background grid overlay */}
      <div className={styles.gridOverlay} />
      <div className={styles.glowEffect} />

      {/* Left Column: Metadata & Typography */}
      <div className={styles.leftCol}>
        <div>
          <div className={styles.headerMeta}>
            <span className={styles.eyebrow}>STRATVALS · CASE STUDY</span>
          </div>
          <div className={styles.watermarkNumber}>{number}</div>
          <div className={styles.titleArea}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
        </div>

        <div className={styles.bottomChip}>
          <span>CASE STUDY</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{code}</span>
        </div>
      </div>

      {/* Right Column: Visual Diagram */}
      <div className={styles.rightCol}>
        {type === "legal" && (
          <div className={styles.marketplaceDiagram}>
            <div className={styles.arrowLine}>
              <div className={styles.dotsLine} />
              <div className={styles.arrowHead} />
            </div>

            <div className={styles.nodesContainer}>
              <div className={styles.verticalLine} />

              <div className={styles.nodePill} style={{ "--node-border": "#8b5cf6", "--node-dot": "#a855f7" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>CUSTOMERS</span>
              </div>

              <div className={styles.nodePill} style={{ "--node-border": "#d946ef", "--node-dot": "#ec4899" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>MARKETPLACE</span>
              </div>

              <div className={styles.nodePill} style={{ "--node-border": "#6d28d9", "--node-dot": "#8b5cf6" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>PROVIDERS</span>
              </div>
            </div>
          </div>
        )}

        {type === "robotics" && (
          <div className={styles.roboticsDiagram}>
            <div className={styles.radarCircle}>
              <div className={styles.radarInner}>
                <div className={styles.radarCenterDot} />
              </div>
            </div>

            <div className={styles.badgeRow}>
              <div className={styles.badgeFilled}>MVP BUILT</div>
              <div className={styles.badgeOutline}>ON TIME · ON BUDGET</div>
            </div>
          </div>
        )}

        {type === "commerce" && (
          <div className={styles.roboticsDiagram}>
            <div className={styles.badgeRow} style={{ gap: 12 }}>
              <div className={styles.nodePill} style={{ "--node-border": "#10b981", "--node-dot": "#34d399" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>STOREFRONT</span>
              </div>
              <div className={styles.nodePill} style={{ "--node-border": "#059669", "--node-dot": "#10b981" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>MULESOFT</span>
              </div>
              <div className={styles.nodePill} style={{ "--node-border": "#047857", "--node-dot": "#059669" } as React.CSSProperties}>
                <span className={styles.nodeDot} />
                <span>WMS & AI</span>
              </div>
            </div>

            <div className={styles.badgeRow} style={{ marginTop: 8 }}>
              <div className={styles.badgeFilled} style={{ background: "#10b981", color: "#064e3b" }}>
                96.4% DIFOT
              </div>
              <div className={styles.badgeOutline} style={{ borderColor: "#10b981", color: "#6ee7b7" }}>
                3.1× THROUGHPUT
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
