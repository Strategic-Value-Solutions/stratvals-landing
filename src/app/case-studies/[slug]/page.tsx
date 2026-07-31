import PageHeader from "../../../components/PageHeader";
import Link from "next/link";

type Block = { type: "p" | "h3" | "ul" | "meta"; content: string | string[] };

type CaseStudyData = {
  title: string;
  badge: string;
  image: string;
  brand?: string;
  location?: string;
  technology?: string;
  timeline?: string;
  release?: string;
  overview: string;
  blocks: Block[];
  results: { label: string; value: string }[];
  prevSlug?: string;
  prevTitle?: string;
  nextSlug?: string;
  nextTitle?: string;
};

const caseStudies: Record<string, CaseStudyData> = {
  "fells-point-water-restoration": {
    title: "Fells Point Water Restoration",
    badge: "Environmental Tech",
    image: "/images/casestudy-water.jpg",
    brand: "Fells Point Waterfront Initiative",
    location: "Baltimore, MD, USA",
    technology: "IoT, AWS, React, LoRaWAN",
    timeline: "6 Months",
    release: "2023",
    overview:
      "A comprehensive digital platform built to monitor, manage, and report on water quality restoration efforts along the Fells Point waterfront.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Environmental monitoring organizations traditionally rely on manual data collection - field technicians visiting sensor stations weekly to download readings onto USB drives. This process was too slow to detect pollution events before they became crises.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We designed and deployed a cloud-native IoT data platform on AWS. Sensors stream readings via LoRaWAN gateways to AWS IoT Core, feeding a real-time processing pipeline built on Kinesis Data Streams.",
      },
      {
        type: "ul",
        content: [
          "Automated alert engine: triggers notifications when readings breach regulatory thresholds.",
          "Historical trend analysis: correlating pollution events with tidal cycles.",
          "Public-facing dashboard: providing community transparency for local water quality.",
        ],
      },
    ],
    results: [
      { label: "Sensor Data Latency", value: "< 30 sec" },
      { label: "Alert Detection Time", value: "10x faster" },
      { label: "Manual Effort Saved", value: "85%" },
      { label: "Compliance Reports", value: "Automated" },
    ],
    nextSlug: "abandoned-mine-reclamation",
    nextTitle: "Abandoned Mine Reclamation",
  },
  "abandoned-mine-reclamation": {
    title: "Abandoned Mine Reclamation",
    badge: "GovTech",
    image: "/images/casestudy-mine.jpg",
    brand: "State Environmental Agency",
    location: "Pennsylvania, USA",
    technology: "GIS, Python, PostgreSQL, React",
    timeline: "8 Months",
    release: "2023",
    overview:
      "A GIS-powered web application enabling state environmental agencies to track, prioritize, and manage remediation of hundreds of abandoned mine sites.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Pennsylvania has over 5,000 documented abandoned mine land (AML) sites. Managing this inventory through paper records made prioritization manual and slow.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built a full-stack GIS web application that centralizes the AML inventory in a PostGIS PostgreSQL database with interactive Mapbox visualization.",
      },
    ],
    results: [
      { label: "Sites Digitized", value: "5,000+" },
      { label: "Prioritization Time", value: "Weeks to Hours" },
      { label: "Field Efficiency", value: "+60%" },
    ],
    prevSlug: "fells-point-water-restoration",
    prevTitle: "Fells Point Water Restoration",
    nextSlug: "clark-county-public-schools-clean",
    nextTitle: "Clark County Public Schools",
  },
  "clark-county-public-schools-clean": {
    title: "Clark County Public Schools",
    badge: "EdTech",
    image: "/images/casestudy-schools.jpg",
    brand: "Clark County School District",
    location: "Nevada, USA",
    technology: "React, Node.js, PostgreSQL",
    timeline: "7 Months",
    release: "2023",
    overview:
      "A unified student information and facilities management platform for one of the largest public school districts in the United States.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Serving 300,000+ students across 350+ schools, Clark County managed records, maintenance, and HR through disconnected legacy tools.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built a microservices platform unifying enrollment, predictive maintenance, and state reporting into an intuitive administrator portal.",
      },
    ],
    results: [
      { label: "Systems Consolidated", value: "7 to 1" },
      { label: "IT Maintenance Cost", value: "-45%" },
      { label: "User Satisfaction", value: "94%" },
    ],
    prevSlug: "abandoned-mine-reclamation",
    prevTitle: "Abandoned Mine Reclamation",
    nextSlug: "blackbelt-broadband-application",
    nextTitle: "Blackbelt Broadband",
  },
  "blackbelt-broadband-application": {
    title: "Blackbelt Broadband Application",
    badge: "Telecom",
    image: "/images/casestudy-broadband.jpg",
    brand: "Blackbelt Broadband",
    location: "Alabama, USA",
    technology: "React Native, AWS, Node.js",
    timeline: "5 Months",
    release: "2023",
    overview:
      "A full-featured mobile and web customer portal for a rural broadband provider serving underserved communities across Alabama.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Rapid growth strained support infrastructure, leading to high call volume and lower customer satisfaction.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We delivered a React Native mobile app and self-service portal giving customers real-time usage graphs and one-tap outage reporting.",
      },
    ],
    results: [
      { label: "Support Call Volume", value: "-52%" },
      { label: "CSAT Score", value: "+38 pts" },
      { label: "App Rating", value: "4.8 Stars" },
    ],
    prevSlug: "clark-county-public-schools-clean",
    prevTitle: "Clark County Public Schools",
    nextSlug: "enft-nft-marketplace",
    nextTitle: "eNFT Marketplace",
  },
  "enft-nft-marketplace": {
    title: "eNFT : NFT Marketplace",
    badge: "Web3",
    image: "/images/casestudy-nft.jpg",
    brand: "eNFT Platform",
    location: "USA",
    technology: "Solidity, Ethereum, React",
    timeline: "6 Months",
    release: "2023",
    overview:
      "A full-stack NFT marketplace platform enabling artists, collectors, and brands to mint, buy, sell, and auction digital assets on Ethereum.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Complex wallet setups and unpredictable gas fees created high friction for non-crypto native users.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We developed gasless lazy minting smart contracts, custodial onboarding via email, and a high-speed indexing backend.",
      },
    ],
    results: [
      { label: "NFTs Minted", value: "10,000+" },
      { label: "Trading Volume", value: "$2M+" },
      { label: "Onboarding Time", value: "< 2 min" },
    ],
    prevSlug: "blackbelt-broadband-application",
    prevTitle: "Blackbelt Broadband",
    nextSlug: "dms-granthalaya",
    nextTitle: "DMS Granthalaya",
  },
  "dms-granthalaya": {
    title: "Granthalaya : Document Management System",
    badge: "Enterprise SaaS",
    image: "/images/casestudy-dms.jpg",
    brand: "AEIS Granthalaya",
    location: "USA",
    technology: "React, Node.js, Elasticsearch",
    timeline: "5 Months",
    release: "2023",
    overview:
      "A comprehensive Document Management System (DMS) built for enterprise clients to manage, version-control, and classify thousands of documents.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Distributed teams experienced version conflicts and slow audit retrieval times across shared network drives.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We engineered an ML-powered DMS with full-text Elasticsearch, version diff viewing, and immutable compliance audit logs.",
      },
    ],
    results: [
      { label: "Retrieval Time", value: "-90%" },
      { label: "Version Conflicts", value: "Eliminated" },
      { label: "User Adoption", value: "96%" },
    ],
    prevSlug: "enft-nft-marketplace",
    prevTitle: "eNFT Marketplace",
    nextSlug: "dapper-email-management-dashboard",
    nextTitle: "Dapper Email Dashboard",
  },
  "dapper-email-management-dashboard": {
    title: "Dapper: Email Management Dashboard",
    badge: "Productivity SaaS",
    image: "/images/casestudy-email.jpg",
    brand: "Dapper",
    location: "USA",
    technology: "React, Node.js, Gmail API",
    timeline: "4 Months",
    release: "2023",
    overview:
      "An intelligent email analytics and workflow automation dashboard connecting Gmail and Outlook APIs for sales teams.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Knowledge workers spend nearly 28% of their workweek managing inboxes with no unified cross-account analytics.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built Dapper - a React SPA connected to Gmail and Outlook APIs with NLP email triage and smart follow-up reminders.",
      },
    ],
    results: [
      { label: "Time Saved", value: "4+ hrs/wk" },
      { label: "NPS Score", value: "72" },
      { label: "App Retention", value: "81%" },
    ],
    prevSlug: "dms-granthalaya",
    prevTitle: "DMS Granthalaya",
  },
};

function getGeneric(slug: string): CaseStudyData {
  return {
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    badge: "Case Study",
    image: "/images/dashboard.webp",
    overview: "A comprehensive technology engagement delivering measurable business outcomes.",
    blocks: [],
    results: [],
  };
}

export default async function GenericCaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseStudies[slug] || getGeneric(slug);

  return (
    <>
      <PageHeader label={`Case Study - ${data.badge}`} title={data.title} />

      <section style={{ padding: "16px 0 40px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "24px",
              padding: "44px 52px",
              boxShadow: "var(--shadow-sm)",
              transition: "background-color 0.3s ease",
            }}
          >
            {(data.brand || data.technology) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "28px",
                  paddingBottom: "32px",
                  marginBottom: "36px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {[
                  { label: "Brand", val: data.brand },
                  { label: "Location", val: data.location },
                  { label: "Technology", val: data.technology },
                  { label: "Timeline", val: data.timeline },
                  { label: "Release", val: data.release },
                ]
                  .filter((m) => m.val)
                  .map((m, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--foreground-muted)",
                        }}
                      >
                        {m.label}
                      </span>
                      <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--foreground)" }}>
                        {m.val}
                      </span>
                    </div>
                  ))}
              </div>
            )}

            {data.image && (
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  marginBottom: "40px",
                  aspectRatio: "16/9",
                  maxHeight: "480px",
                }}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}

            <div
              style={{
                background: "var(--surface)",
                padding: "32px 36px",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                marginBottom: "44px",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.75",
                  color: "var(--foreground)",
                  fontWeight: 500,
                }}
              >
                {data.overview}
              </p>
            </div>

            <div style={{ maxWidth: "820px" }}>
              {data.blocks.map((block, i) => {
                if (block.type === "p")
                  return (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.75",
                        color: "var(--foreground-muted)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {block.content as string}
                    </p>
                  );
                if (block.type === "h3")
                  return (
                    <h3
                      key={i}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        margin: "2.5rem 0 1rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {block.content as string}
                    </h3>
                  );
                if (block.type === "ul")
                  return (
                    <ul
                      key={i}
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {(block.content as string[]).map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "flex-start",
                            fontSize: "0.92rem",
                            lineHeight: "1.65",
                            color: "var(--foreground-muted)",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "var(--foreground)",
                              flexShrink: 0,
                              marginTop: "8px",
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                return null;
              })}
            </div>

            {data.results.length > 0 && (
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "36px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "24px",
                  }}
                >
                  Key Project Outcomes
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {data.results.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--surface)",
                        padding: "24px 20px",
                        borderRadius: "16px",
                        border: "1px solid var(--border)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "2rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          lineHeight: "1",
                          marginBottom: "6px",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {r.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--foreground-muted)",
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(data.prevSlug || data.nextSlug) && (
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                {data.prevSlug ? (
                  <Link
                    href={`/case-studies/${data.prevSlug}`}
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      gap: "4px",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--foreground-muted)",
                      }}
                    >
                      Previous Case Study
                    </span>
                    <span style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "0.95rem" }}>
                      {data.prevTitle}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {data.nextSlug ? (
                  <Link
                    href={`/case-studies/${data.nextSlug}`}
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      gap: "4px",
                      textAlign: "right",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--foreground-muted)",
                      }}
                    >
                      Next Case Study
                    </span>
                    <span style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "0.95rem" }}>
                      {data.nextTitle}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
