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
      "A comprehensive digital platform built to monitor, manage, and report on water quality restoration efforts along the Fells Point waterfront in real time, replacing a decades-old manual sampling process.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Environmental monitoring organizations traditionally relied on manual data collection. Field technicians visited sensor stations weekly to physically download readings onto USB drives. This process was too slow to detect pollution events before they became full-scale environmental crises. By the time alerts were issued, waterfront recreational areas were already compromised.",
      },
      {
        type: "p",
        content:
          "The initiative also needed a transparent public dashboard to rebuild trust with local communities who had grown skeptical of government-reported water quality data.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We designed and deployed a cloud-native IoT data platform on AWS. Sensors stream readings every 90 seconds via LoRaWAN gateways to AWS IoT Core, feeding a real-time processing pipeline built on Kinesis Data Streams and Lambda functions.",
      },
      {
        type: "ul",
        content: [
          "Automated alert engine that triggers regulatory and community notifications when sensor readings breach established thresholds.",
          "Historical trend analysis engine correlating pollution spikes with tidal cycles, rainfall events, and industrial discharge patterns.",
          "Public-facing community dashboard providing real-time transparency on water quality at every monitored location.",
          "Mobile-first admin interface enabling field technicians to log site visits, flag equipment, and escalate anomalies from the field.",
        ],
      },
      { type: "h3", content: "Technology Architecture" },
      {
        type: "p",
        content:
          "The stack was architected for resilience and cost-efficiency. LoRaWAN sensors feed into AWS IoT Core, which routes data through Kinesis Data Streams into a serverless Lambda processing layer. Processed readings are persisted in a time-series DynamoDB table and exposed via a GraphQL API consumed by the React dashboard. CloudWatch alarms trigger SNS notifications for threshold breaches.",
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
    technology: "GIS, Python, PostgreSQL, React, Mapbox",
    timeline: "8 Months",
    release: "2023",
    overview:
      "A GIS-powered web application enabling Pennsylvania state environmental agencies to track, score, prioritize, and manage remediation of over 5,000 documented abandoned mine sites across the Commonwealth.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Pennsylvania has over 5,000 documented Abandoned Mine Land (AML) sites, many of which pose active environmental and safety hazards including acid mine drainage, subsidence risks, and contaminated groundwater. Managing this inventory through disconnected paper records and spreadsheets made prioritization slow, inconsistent, and difficult to defend in funding reviews.",
      },
      {
        type: "p",
        content:
          "Federal remediation funding is competitive. Without a data-driven prioritization model, the agency risked missing out on grants due to insufficient evidence of systematic site management.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built a full-stack GIS web application that centralizes the entire AML inventory in a PostGIS-enabled PostgreSQL database with interactive Mapbox visualization. The platform introduced a weighted scoring engine that ranks sites by environmental severity, proximity to waterways, population exposure, and remediation cost efficiency.",
      },
      {
        type: "ul",
        content: [
          "Interactive GIS map with filterable layers: site type, severity score, remediation status, and funding source.",
          "Automated scoring algorithm using 14 environmental and demographic variables to rank prioritization.",
          "Field data collection mobile interface allowing inspectors to submit photos, GPS coordinates, and status updates in real time.",
          "Federal grant reporting module generating compliant documentation from the live database.",
          "Historical remediation progress tracking with milestone dashboards for agency leadership.",
        ],
      },
      { type: "h3", content: "Impact" },
      {
        type: "p",
        content:
          "The platform dramatically shortened the prioritization cycle from weeks of manual spreadsheet analysis to hours of automated scoring. The agency was able to submit a stronger, data-backed federal funding application, and field inspection productivity improved significantly with mobile data capture replacing paper forms.",
      },
    ],
    results: [
      { label: "Sites Digitized", value: "5,000+" },
      { label: "Prioritization Time", value: "Weeks to Hours" },
      { label: "Field Efficiency", value: "+60%" },
      { label: "Grant Reporting", value: "Automated" },
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
    technology: "React, Node.js, PostgreSQL, Microservices",
    timeline: "7 Months",
    release: "2023",
    overview:
      "A unified student information and facilities management platform built for one of the largest public school districts in the United States, consolidating seven legacy systems into a single, modern administrator portal serving 300,000+ students.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Clark County School District serves over 300,000 students across 350+ campuses. Before this engagement, district operations were managed through seven separate legacy systems for enrollment, payroll, facilities maintenance, HR, state reporting, and student records. None of these systems communicated with each other, creating data silos that slowed every administrative decision.",
      },
      {
        type: "p",
        content:
          "Staff members were spending hours each week manually re-entering data between systems. Maintenance work orders were tracked in a spreadsheet. State compliance reports required manual aggregation from five different sources and took weeks to produce.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built a microservices platform with a unified API layer that connects all operational domains into a single administrator portal. Each legacy system was progressively decommissioned as its function was absorbed into the new platform, ensuring zero disruption to daily operations during the migration.",
      },
      {
        type: "ul",
        content: [
          "Unified enrollment module with real-time capacity dashboards and automated waitlist management.",
          "Predictive maintenance system using historical equipment data to flag facilities issues before they become failures.",
          "Automated state compliance reporting generated from live data, reducing a 3-week process to under 4 hours.",
          "Integrated HR module connecting payroll, leave management, and substitute scheduling.",
          "Role-based access control giving principals, district officers, and field staff tailored views of relevant data.",
        ],
      },
      { type: "h3", content: "Delivery Approach" },
      {
        type: "p",
        content:
          "The engagement used a phased migration strategy. Each legacy system was mapped to the new platform domain, integrated via an API bridge, and validated before the legacy version was switched off. This approach eliminated big-bang cutover risk and allowed teachers and administrators to adopt the new tools incrementally.",
      },
    ],
    results: [
      { label: "Systems Consolidated", value: "7 to 1" },
      { label: "IT Maintenance Cost", value: "-45%" },
      { label: "User Satisfaction", value: "94%" },
      { label: "State Report Time", value: "3 wks to 4 hrs" },
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
    technology: "React Native, AWS, Node.js, REST APIs",
    timeline: "5 Months",
    release: "2023",
    overview:
      "A full-featured mobile and web customer self-service portal for a rural broadband provider serving underserved communities across Alabama, reducing support call volume by over 50% and earning a 4.8-star app store rating at launch.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Blackbelt Broadband was experiencing rapid subscriber growth in rural Alabama markets. Without a self-service platform, every billing question, service interruption, or plan change required a call to a support agent. This created long hold times, frustrated customers, and an overwhelmed support team that could not scale to meet demand.",
      },
      {
        type: "p",
        content:
          "The existing web portal was a basic billing page with no mobile experience. Subscribers in rural areas primarily accessed the internet from their phones, making a mobile-first approach critical.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We delivered a React Native mobile application and a companion web portal that gave subscribers complete visibility and control over their broadband service. The product was designed from the ground up for low-bandwidth conditions common in rural markets.",
      },
      {
        type: "ul",
        content: [
          "Real-time usage graphs showing data consumption, speed history, and quota status by device.",
          "One-tap outage reporting with automated ticket creation and SMS status updates.",
          "Plan upgrade and downgrade self-service with instant account provisioning.",
          "Bill payment with saved payment methods and auto-pay management.",
          "Equipment troubleshooting wizard walking subscribers through common router issues before escalating to support.",
          "Service appointment scheduling for technician visits with calendar integration.",
        ],
      },
      { type: "h3", content: "Results" },
      {
        type: "p",
        content:
          "Within 60 days of launch, support call volume dropped by 52%. Customer satisfaction scores jumped 38 points as subscribers gained real-time visibility into their service. The app launched at 4.8 stars and maintained that rating through the first year of operation.",
      },
    ],
    results: [
      { label: "Support Call Volume", value: "-52%" },
      { label: "CSAT Score", value: "+38 pts" },
      { label: "App Store Rating", value: "4.8 Stars" },
      { label: "Self-Service Adoption", value: "73%" },
    ],
    prevSlug: "clark-county-public-schools-clean",
    prevTitle: "Clark County Public Schools",
    nextSlug: "enft-nft-marketplace",
    nextTitle: "eNFT Marketplace",
  },
  "enft-nft-marketplace": {
    title: "eNFT: NFT Marketplace",
    badge: "Web3",
    image: "/images/casestudy-nft.jpg",
    brand: "eNFT Platform",
    location: "USA",
    technology: "Solidity, Ethereum, React, IPFS, Node.js",
    timeline: "6 Months",
    release: "2023",
    overview:
      "A full-stack NFT marketplace enabling artists, collectors, and brands to mint, buy, sell, and auction digital assets on Ethereum with gasless minting and a sub-2-minute user onboarding experience.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "The NFT market was growing rapidly, but adoption was constrained by technical friction. Setting up a crypto wallet, managing private keys, understanding gas fees, and completing a transaction took most new users 20+ minutes and often ended in abandonment. The client needed a platform that could onboard a mainstream audience without requiring any prior crypto knowledge.",
      },
      {
        type: "p",
        content:
          "Additionally, unpredictable Ethereum gas fees made minting economically risky for creators, particularly independent artists who could not afford to absorb failed transaction costs.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We developed a gasless lazy minting system using EIP-2981 royalty standards and meta-transactions, so creators pay no gas until their NFT is sold. New users sign up with email and a custodial wallet is provisioned automatically in the background, abstracting all blockchain complexity.",
      },
      {
        type: "ul",
        content: [
          "Gasless lazy minting: NFTs are minted on-chain only at the point of purchase, with the buyer covering gas costs.",
          "Custodial email onboarding: users sign up with email, a wallet is created server-side and revealed progressively.",
          "IPFS-pinned metadata ensuring NFT assets remain accessible regardless of marketplace uptime.",
          "Real-time bidding and auction engine with WebSocket-powered live updates during active auctions.",
          "Creator royalty enforcement at the smart contract level for all secondary sales.",
          "High-speed indexing backend scanning blockchain events and updating the marketplace database within seconds of on-chain activity.",
        ],
      },
      { type: "h3", content: "Scale and Outcome" },
      {
        type: "p",
        content:
          "Within the first six months of launch, over 10,000 NFTs were minted on the platform generating more than $2M in trading volume. The average onboarding time from signup to first purchase dropped to under 2 minutes, compared to the 20+ minute industry benchmark.",
      },
    ],
    results: [
      { label: "NFTs Minted", value: "10,000+" },
      { label: "Trading Volume", value: "$2M+" },
      { label: "Onboarding Time", value: "< 2 min" },
      { label: "Creator Royalties", value: "Enforced On-Chain" },
    ],
    prevSlug: "blackbelt-broadband-application",
    prevTitle: "Blackbelt Broadband",
    nextSlug: "dms-granthalaya",
    nextTitle: "DMS Granthalaya",
  },
  "dms-granthalaya": {
    title: "Granthalaya: Document Management System",
    badge: "Enterprise SaaS",
    image: "/images/casestudy-dms.jpg",
    brand: "AEIS Granthalaya",
    location: "USA",
    technology: "React, Node.js, Elasticsearch, PostgreSQL, AWS S3",
    timeline: "5 Months",
    release: "2023",
    overview:
      "A comprehensive enterprise Document Management System (DMS) built to manage, version-control, and intelligently classify thousands of documents across distributed teams, cutting retrieval time by 90% and eliminating version conflicts entirely.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Distributed enterprise teams were experiencing chronic version conflicts and costly audit failures caused by documents living across shared network drives, email threads, and local machines. Retrieving a specific version of a regulated document for a compliance audit could take days of manual searching. The lack of structured metadata made full-text search impossible.",
      },
      {
        type: "p",
        content:
          "With growing regulatory scrutiny in their sector, the client needed a solution that provided immutable audit trails, role-based access, and version history that could withstand an external compliance review.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We engineered a full-stack DMS with a React frontend, Node.js API layer, PostgreSQL for document metadata, AWS S3 for binary storage, and Elasticsearch powering full-text search across all document content and metadata fields.",
      },
      {
        type: "ul",
        content: [
          "ML-assisted auto-classification tagging documents by type, department, and retention policy on upload.",
          "Full-text Elasticsearch search across document content, metadata, author, date, and version with sub-second results.",
          "Immutable audit log recording every view, edit, download, and share event with user attribution and timestamps.",
          "Version diff viewer allowing side-by-side comparison of any two document revisions with change highlighting.",
          "Role-based access control with department-level permissions, guest access tokens, and expiring share links.",
          "Automated retention scheduling flagging documents for review or deletion based on configurable policy rules.",
        ],
      },
      { type: "h3", content: "Compliance Impact" },
      {
        type: "p",
        content:
          "The platform transformed the audit process. Documents that previously took days to locate and verify were retrievable in seconds. The immutable audit log provided regulators with a complete chain of custody for every document, and the client passed their next external compliance review without remediation findings.",
      },
    ],
    results: [
      { label: "Retrieval Time", value: "-90%" },
      { label: "Version Conflicts", value: "Eliminated" },
      { label: "User Adoption", value: "96%" },
      { label: "Audit Compliance", value: "100%" },
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
    technology: "React, Node.js, Gmail API, Outlook API, NLP",
    timeline: "4 Months",
    release: "2023",
    overview:
      "An intelligent email analytics and workflow automation dashboard connecting Gmail and Outlook APIs for high-volume sales and operations teams, saving users over 4 hours per week and achieving an NPS of 72 at launch.",
    blocks: [
      { type: "h3", content: "The Challenge" },
      {
        type: "p",
        content:
          "Research consistently shows that knowledge workers spend nearly 28% of their working week managing email. For sales teams running multiple active accounts across Gmail and Outlook, there was no unified view of pipeline communication, no intelligent prioritization, and no automation for follow-up sequences. Critical deals were stalling because follow-ups were being missed in overcrowded inboxes.",
      },
      {
        type: "p",
        content:
          "Existing email clients offered no analytics. Teams had no visibility into average response times, thread aging, or which contacts had gone cold. Managers could not coach their teams on communication velocity without manually reviewing inboxes.",
      },
      { type: "h3", content: "Our Solution" },
      {
        type: "p",
        content:
          "We built Dapper, a React single-page application connected to Gmail and Outlook via their REST APIs. An NLP classification layer (built with spaCy) automatically tags incoming emails by intent: inquiry, objection, meeting request, payment, or follow-up required. This allows the dashboard to surface the highest-priority items at the top of the queue regardless of the underlying mail client.",
      },
      {
        type: "ul",
        content: [
          "Multi-account inbox unification: Gmail and Outlook accounts viewed and managed from a single interface.",
          "NLP email triage automatically categorizing messages by intent and urgency, suppressing low-priority noise.",
          "Smart follow-up reminders triggered when a thread has received no response within a user-defined SLA window.",
          "Analytics dashboard showing per-contact and per-team response time trends, thread aging, and conversation volume.",
          "One-click unsubscribe and bulk sender management for reducing inbox noise.",
          "Weekly email health report delivered to each user summarizing communication performance and bottlenecks.",
        ],
      },
      { type: "h3", content: "User Feedback and Adoption" },
      {
        type: "p",
        content:
          "Beta users reported saving an average of 4 or more hours per week within the first month. The NPS at launch was 72, which is considered excellent for a B2B productivity tool. Day-30 retention reached 81%, well above the SaaS industry average for tools in this category.",
      },
    ],
    results: [
      { label: "Time Saved", value: "4+ hrs/wk" },
      { label: "NPS Score", value: "72" },
      { label: "Day-30 Retention", value: "81%" },
      { label: "Multi-Account Sync", value: "< 2 sec" },
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
    overview: "A comprehensive technology engagement delivering measurable business outcomes for our executive client.",
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

  const metaItems = [
    { label: "Brand", val: data.brand },
    { label: "Location", val: data.location },
    { label: "Technology", val: data.technology },
    { label: "Timeline", val: data.timeline },
    { label: "Release", val: data.release },
  ].filter((m) => m.val);

  return (
    <>
      <PageHeader label={`Case Study : ${data.badge}`} title={data.title} />

      <section style={{ padding: "16px 0 48px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "24px",
              padding: "44px 52px",
              boxShadow: "var(--shadow-sm)",
              border: "1px solid var(--border)",
              transition: "background-color 0.3s ease",
            }}
          >
            {/* Metadata Row */}
            {metaItems.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "24px",
                  paddingBottom: "28px",
                  marginBottom: "36px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {metaItems.map((m, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--foreground-muted)",
                      }}
                    >
                      {m.label}
                    </span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Hero Image - full width */}
            {data.image && (
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "44px",
                  width: "100%",
                  aspectRatio: "16/7",
                  maxHeight: "500px",
                }}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            )}

            {/* Overview callout */}
            <div
              style={{
                background: "var(--surface)",
                padding: "28px 32px",
                borderRadius: "14px",
                border: "1px solid var(--border)",
                marginBottom: "48px",
                borderLeft: "3px solid #3b82f6",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--foreground)",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {data.overview}
              </p>
            </div>

            {/* Body Content */}
            <div style={{ width: "100%" }}>
              {data.blocks.map((block, i) => {
                if (block.type === "p")
                  return (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.97rem",
                        lineHeight: "1.8",
                        color: "var(--foreground-muted)",
                        marginBottom: "1.6rem",
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
                        fontSize: "1.45rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        margin: "3rem 0 1.1rem",
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
                        margin: "0 0 2.4rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      {(block.content as string[]).map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: "14px",
                            alignItems: "flex-start",
                            fontSize: "0.94rem",
                            lineHeight: "1.7",
                            color: "var(--foreground-muted)",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "#3b82f6",
                              flexShrink: 0,
                              marginTop: "9px",
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

            {/* Results Grid */}
            {data.results.length > 0 && (
              <div
                style={{
                  marginTop: "52px",
                  paddingTop: "40px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "28px",
                    letterSpacing: "-0.02em",
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
                        padding: "28px 20px",
                        borderRadius: "16px",
                        border: "1px solid var(--border)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "2.2rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          lineHeight: "1",
                          marginBottom: "8px",
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

            {/* Prev / Next Navigation */}
            {(data.prevSlug || data.nextSlug) && (
              <div
                style={{
                  marginTop: "52px",
                  paddingTop: "28px",
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
                      gap: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--foreground-muted)",
                      }}
                    >
                      Previous Case Study
                    </span>
                    <span style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "0.97rem" }}>
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
                      gap: "5px",
                      textAlign: "right",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--foreground-muted)",
                      }}
                    >
                      Next Case Study
                    </span>
                    <span style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "0.97rem" }}>
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
