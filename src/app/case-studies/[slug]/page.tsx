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
    brand: "Fells Point Initiative",
    location: "Baltimore, MD, USA",
    technology: "IoT, AWS, React",
    timeline: "6 Months",
    release: "2023",
    overview: "A comprehensive digital platform built to monitor, manage, and report on water quality restoration efforts along the Fells Point waterfront. The client needed a scalable, real-time data ingestion system capable of processing readings from hundreds of IoT sensors deployed across tidal zones.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "Environmental monitoring organizations traditionally rely on manual data collection — field technicians visiting sensor stations weekly to download readings onto USB drives. This process was too slow to detect pollution events before they became crises, and the resulting datasets were fragmented and difficult to analyze. The Fells Point Water Restoration initiative needed a real-time, always-on monitoring infrastructure." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We designed and deployed a cloud-native IoT data platform on AWS. Sensors stream readings via LoRaWAN gateways to AWS IoT Core, which feeds a real-time processing pipeline built on Kinesis Data Streams. Processed data lands in a time-series database (Amazon Timestream) optimized for sensor data queries." },
      { type: "p", content: "On top of this infrastructure, we built a stunning React-based monitoring dashboard giving environmental scientists an intuitive, real-time view of water quality metrics — pH, dissolved oxygen, turbidity, temperature, and contaminant levels — across every sensor station on an interactive map." },
      { type: "ul", content: [
        "Automated alert engine: triggers notifications when readings breach regulatory thresholds — in seconds rather than days.",
        "Historical trend analysis: allowing scientists to identify seasonal patterns, correlate pollution events with tidal cycles, and produce audit-ready compliance reports.",
        "Public-facing dashboard: giving the community transparent, live access to water quality data for their local waterfront."
      ]},
    ],
    results: [
      { label: "Sensor Data Latency", value: "< 30 sec" },
      { label: "Alert Detection Time", value: "10x faster" },
      { label: "Manual Effort Saved", value: "85%" },
      { label: "Compliance Reports", value: "Automated" },
    ],
    nextSlug: "abandoned-mine-reclamation",
    nextTitle: "Abandoned Mine Reclamation"
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
    overview: "A GIS-powered web application enabling state environmental agencies to track, prioritize, and manage the remediation of hundreds of abandoned mine sites across the state — replacing a decades-old paper and spreadsheet-based process.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "Pennsylvania alone has over 5,000 documented abandoned mine land (AML) sites — each representing an environmental hazard ranging from subsidence risk to acid mine drainage. The state agency responsible for remediation was managing this inventory through a fragmented combination of paper records, Access databases, and spreadsheets. Prioritizing which sites to remediate next — based on environmental risk, available funding, and remediation feasibility — was a manual, months-long process." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We built a full-stack GIS web application that centralizes the entire AML inventory in a PostGIS-enabled PostgreSQL database. Every mine site is geo-referenced and rendered on an interactive Mapbox map layer, allowing field teams and agency analysts to visualize site density, proximity to water bodies, and risk scores at a glance." },
      { type: "ul", content: [
        "AI-powered risk scoring model: automatically ranks sites by remediation priority based on proximity to populated areas, hydrology, and site condition assessments.",
        "Budget scenario planning tool: lets agency leadership model funding allocation across fiscal years against projected remediation cost estimates.",
        "Mobile-first field assessment forms: allowing site inspectors to capture structured data and GPS-tagged photos directly from the field.",
        "Federal reporting automation: one-click generation of OSMRE-compliant reports, saving weeks of manual effort each quarter."
      ]},
    ],
    results: [
      { label: "Sites Digitized", value: "5,000+" },
      { label: "Prioritization Time", value: "Weeks → Hours" },
      { label: "Report Generation", value: "Automated" },
      { label: "Field Efficiency", value: "+60%" },
    ],
    prevSlug: "fells-point-water-restoration",
    prevTitle: "Fells Point Water Restoration",
    nextSlug: "clark-county-public-schools-clean",
    nextTitle: "Clark County Public Schools"
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
    overview: "A unified student information and facilities management platform for one of the largest public school districts in the United States, replacing a fragmented multi-vendor system landscape with a single source of truth.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "Clark County School District, serving over 300,000 students across 350+ schools, was managing student records, facility maintenance requests, procurement, and HR functions through seven disconnected systems purchased from different vendors over two decades. Data inconsistencies between systems were constant, reporting was unreliable, and IT maintenance costs were spiraling." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We led the design and delivery of a unified district management platform built on a modern microservices architecture. Each domain (Student Information, Facilities, HR, Procurement) is a separately deployable service with its own database, communicating via a well-defined API layer — but presenting a single, unified interface to district administrators." },
      { type: "ul", content: [
        "Real-time enrollment management: with automated waitlist processing and attendance tracking across all 350+ schools.",
        "Predictive maintenance module: using historical work order data to identify facilities at high risk of equipment failure before breakdowns occur.",
        "Role-based access control: ensuring principals, teachers, maintenance staff, and district administrators see only the data and functions relevant to their role.",
        "Compliance reporting: automated generation of state and federal reporting packages, eliminating hundreds of hours of manual data compilation."
      ]},
    ],
    results: [
      { label: "Systems Consolidated", value: "7 → 1" },
      { label: "IT Maintenance Cost", value: "-45%" },
      { label: "Reporting Time", value: "-70%" },
      { label: "User Satisfaction", value: "94%" },
    ],
    prevSlug: "abandoned-mine-reclamation",
    prevTitle: "Abandoned Mine Reclamation",
    nextSlug: "blackbelt-broadband-application",
    nextTitle: "Blackbelt Broadband"
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
    overview: "A full-featured mobile and web application for a rural broadband provider serving underserved communities across Alabama's Black Belt region — enabling self-service account management, outage reporting, and real-time service status monitoring.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "Blackbelt Broadband was growing rapidly on the back of federal rural broadband expansion funding, but their customer support infrastructure was not keeping pace. Customers had no self-service option for managing their accounts, reporting outages, or monitoring their data usage. Support call volume was overwhelming their small team, and customer satisfaction scores were declining despite the quality of the underlying network service." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We delivered a React Native mobile application (iOS and Android) paired with a responsive web portal, both powered by the same Node.js/GraphQL backend. The platform gives customers full self-service control over their broadband accounts." },
      { type: "ul", content: [
        "Real-time data usage dashboard: with daily and monthly usage graphs and proactive alerts when approaching plan limits.",
        "One-tap outage reporting: with automatic geolocation tagging that feeds directly into the NOC's incident management system.",
        "Service status map: a live network health map showing planned maintenance windows and active outage zones in the customer's area.",
        "Bill payment and plan management: fully integrated with their billing system, allowing customers to pay bills, upgrade plans, and view 12 months of invoices."
      ]},
    ],
    results: [
      { label: "Support Call Volume", value: "-52%" },
      { label: "CSAT Score", value: "+38 pts" },
      { label: "Self-Service Adoption", value: "78%" },
      { label: "App Store Rating", value: "4.8 ★" },
    ],
    prevSlug: "clark-county-public-schools-clean",
    prevTitle: "Clark County Public Schools",
    nextSlug: "enft-nft-marketplace",
    nextTitle: "eNFT Marketplace"
  },
  "enft-nft-marketplace": {
    title: "eNFT : NFT Marketplace",
    badge: "Web3",
    image: "/images/casestudy-nft.jpg",
    brand: "eNFT Platform",
    location: "USA",
    technology: "Solidity, Ethereum, React, Node.js",
    timeline: "6 Months",
    release: "2023",
    overview: "A full-stack NFT marketplace platform enabling artists, collectors, and brands to mint, buy, sell, and auction digital assets on the Ethereum blockchain — built with a focus on accessibility for non-crypto-native users.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "Existing NFT marketplaces are notoriously difficult for non-technical users. Complex wallet setups, unpredictable gas fees, and opaque transaction processes were creating massive friction for mainstream adoption. The client wanted to build a marketplace that preserved the power of blockchain-based digital ownership while delivering a Web2-level user experience." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We built the full stack — from Solidity smart contracts deployed on Ethereum Mainnet and Polygon (for low-fee transactions) to a React-based storefront and a Node.js indexing service that keeps the platform's database in sync with on-chain state." },
      { type: "ul", content: [
        "Custodial wallet option: allowing users to get started with just an email address, with assets held in a platform-managed wallet until they are ready to migrate to a self-custody solution.",
        "Lazy minting: NFTs are only minted on-chain when they are sold for the first time, eliminating upfront gas cost barriers for creators.",
        "Dutch auction and fixed-price sale mechanisms: with a smart contract-governed royalty system ensuring creators earn a percentage of every secondary sale.",
        "Carbon offset integration: each transaction is offset through a verified carbon credit protocol, addressing the environmental concerns that have dogged NFT platforms."
      ]},
    ],
    results: [
      { label: "NFTs Minted", value: "10,000+" },
      { label: "Transaction Volume", value: "$2M+" },
      { label: "Creator Royalties Paid", value: "$180K+" },
      { label: "User Onboarding Time", value: "< 2 min" },
    ],
    prevSlug: "blackbelt-broadband-application",
    prevTitle: "Blackbelt Broadband",
    nextSlug: "dms-granthalaya",
    nextTitle: "DMS Granthalaya"
  },
  "dms-granthalaya": {
    title: "Granthalaya : Document Management System (DMS)",
    badge: "Enterprise SaaS",
    image: "/images/casestudy-dms.jpg",
    brand: "AEIS : Granthalaya",
    location: "USA",
    technology: "Magento 2, React, Node.js",
    timeline: "5 Months",
    release: "2023",
    overview: "A comprehensive Document Management System (DMS) built for enterprise clients who need to manage, version-control, classify, and collaborate on thousands of documents across distributed teams — with fine-grained permissions and full audit trails.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "The client, an enterprise with distributed teams across three time zones, was managing critical business documents through a combination of shared network drives, email attachments, and consumer-grade cloud storage. Version conflicts were frequent, access control was minimal, and there was no audit trail for compliance purposes. Document retrieval for audits took days." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We designed and delivered a bespoke Document Management System with a clean, intuitive React interface and a robust Node.js/PostgreSQL backend. The system was built around the core principles of discoverability, security, and collaboration." },
      { type: "ul", content: [
        "Intelligent document classification: using ML-based auto-tagging to categorize documents at upload time, dramatically reducing the manual tagging burden.",
        "Version control with diff viewer: every edit is tracked with a full version history, and users can view a side-by-side diff between any two versions.",
        "Granular role-based access control: documents can be shared with individuals, groups, or external parties with precise read/write/comment permissions and expiry dates.",
        "Full-text search: powered by Elasticsearch, allowing users to search across millions of documents by content, not just filename.",
        "Compliance audit logs: every access, edit, share, and deletion event is recorded in an immutable audit log, simplifying regulatory compliance."
      ]},
    ],
    results: [
      { label: "Document Retrieval Time", value: "-90%" },
      { label: "Version Conflicts", value: "Eliminated" },
      { label: "Compliance Audit Prep", value: "Days → Hours" },
      { label: "User Adoption Rate", value: "96%" },
    ],
    prevSlug: "enft-nft-marketplace",
    prevTitle: "eNFT Marketplace",
    nextSlug: "dapper-email-management-dashboard",
    nextTitle: "Dapper Email Dashboard"
  },
  "dapper-email-management-dashboard": {
    title: "Dapper: Email Management Dashboard",
    badge: "Productivity SaaS",
    image: "/images/casestudy-email.jpg",
    brand: "Dapper",
    location: "USA",
    technology: "React, Node.js, Gmail API, Outlook API",
    timeline: "4 Months",
    release: "2023",
    overview: "Dapper is an AI-powered email management dashboard that unifies multiple email accounts into a single, beautifully designed interface — with smart prioritization, automated follow-up reminders, and one-click unsubscribe functionality.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      { type: "p", content: "The average knowledge worker receives over 120 emails per day and spends nearly 28% of their workweek managing their inbox. Existing email clients are built around the paradigm of a single inbox, with no intelligent prioritization or cross-account management. Dapper's founders needed a product that fundamentally reimagined how professionals interact with email." },
      { type: "h3", content: "Our Solution" },
      { type: "p", content: "We built Dapper from the ground up — a React SPA with a pixel-perfect, dark-mode-first design connected to a Node.js backend that interfaces with Gmail API, Microsoft Graph (Outlook), and IMAP for non-standard email providers." },
      { type: "ul", content: [
        "AI-powered inbox triage: our NLP model classifies every incoming email as Action Required, FYI, or Newsletter, automatically filing and surfacing the emails that need your attention.",
        "Smart follow-up reminders: Dapper tracks emails you have sent and not received a response to, proactively surfacing them for follow-up at the right time.",
        "Unified search: full-text search across all connected accounts simultaneously — finding that email from 2 years ago takes seconds.",
        "One-click bulk unsubscribe: Dapper identifies subscription and marketing emails and allows users to unsubscribe from all of them with a single click.",
        "Analytics dashboard: weekly email volume trends, response time analytics, and sender frequency charts to help users understand and optimize their communication habits."
      ]},
    ],
    results: [
      { label: "Time Saved Per User/Week", value: "4+ hours" },
      { label: "Inbox Zero Achievement", value: "3x more users" },
      { label: "NPS Score", value: "72" },
      { label: "App Retention (30-day)", value: "81%" },
    ],
    prevSlug: "dms-granthalaya",
    prevTitle: "DMS Granthalaya"
  }
};

function getGeneric(slug: string): CaseStudyData {
  return {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    badge: "Case Study",
    image: "/images/dashboard.webp",
    overview: "A comprehensive technology engagement delivering measurable business outcomes.",
    blocks: [],
    results: []
  };
}

export default async function GenericCaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = caseStudies[slug] || getGeneric(slug);

  return (
    <>
      <PageHeader
        title={<><span className="gradient-text">{data.title}</span></>}
        subtitle={`Case Study — ${data.badge}`}
      />

      {/* Meta Info Bar */}
      {(data.brand || data.technology) && (
        <section style={{ background: "rgba(20,24,34,0.95)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "32px 0" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              {[
                { label: "Brand", val: data.brand },
                { label: "Location", val: data.location },
                { label: "Technology", val: data.technology },
                { label: "Timeline", val: data.timeline },
                { label: "Release", val: data.release },
              ].filter(m => m.val).map((m, i) => (
                <div key={i}>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>{m.label}</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hero Image */}
      {data.image && (
        <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden" }}>
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "100%", height: "500px", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>
      )}

      {/* Overview */}
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ padding: "40px", background: "rgba(43,127,255,0.08)", border: "1px solid rgba(43,127,255,0.2)", borderRadius: "16px", marginBottom: "56px" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.85", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>{data.overview}</p>
          </div>

          {data.blocks.map((block, i) => {
            if (block.type === "p") return (
              <p key={i} style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "rgba(255,255,255,0.82)", marginBottom: "1.5rem" }}>
                {block.content as string}
              </p>
            );
            if (block.type === "h3") return (
              <h3 key={i} style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: "3rem 0 1.2rem", paddingLeft: "20px", borderLeft: "4px solid var(--primary)" }}>
                {block.content as string}
              </h3>
            );
            if (block.type === "ul") return (
              <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {(block.content as string[]).map((item, j) => {
                  const colonIdx = item.indexOf(": ");
                  const label = colonIdx > -1 ? item.substring(0, colonIdx) : "";
                  const rest = colonIdx > -1 ? item.substring(colonIdx + 2) : item;
                  return (
                    <li key={j} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: "10px" }} />
                      <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: "1.75" }}>
                        {label && <strong style={{ color: "#fff" }}>{label}: </strong>}{rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
            return null;
          })}
        </div>
      </section>

      {/* Results */}
      {data.results.length > 0 && (
        <section style={{ background: "rgba(20,24,34,0.95)", padding: "80px 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "48px" }}>
              The <span className="gradient-text">Results</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
              {data.results.map((r, i) => (
                <div key={i} style={{ textAlign: "center", padding: "40px 24px", background: "rgba(30,35,46,0.7)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "8px" }}>{r.value}</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pagination */}
      {(data.prevSlug || data.nextSlug) && (
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
              {data.prevSlug ? (
                <Link href={`/case-studies/${data.prevSlug}`} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)" }}>← Previous</span>
                  <span style={{ fontWeight: 600, color: "#fff" }}>{data.prevTitle}</span>
                </Link>
              ) : <div />}
              {data.nextSlug ? (
                <Link href={`/case-studies/${data.nextSlug}`} style={{ display: "flex", flexDirection: "column", gap: "6px", textAlign: "right" }}>
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)" }}>Next →</span>
                  <span style={{ fontWeight: 600, color: "#fff" }}>{data.nextTitle}</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
