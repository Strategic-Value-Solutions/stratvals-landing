import PageHeader from "../../../components/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./CaseStudyDetail.module.css";
import CaseStudyCoverCard from "../../../components/CaseStudyCoverCard";

type Fact = { label: string; value: string };
type Ticket = { code: string; title: string; desc: string };
type Pillar = { num: string; heading: string; body: string; tags: string[] };
type Layer = { name: string; desc: string };
type Outcome = { before: string; after: string; label: string; accent?: boolean };
type Phase = { tag: string; title: string; desc: string };

type Photo = { src: string; alt: string; caption: string };
type ManifestCell = { num: string; lbl: string };

type CaseStudyData = {
  slug: string;
  number: string;
  code: string;
  title: string;
  subtitle: string;
  sector: string;
  badge: string;
  cover: string;
  accent: string;
  type: "legal" | "robotics" | "commerce";
  tagline: string;
  clientNarrative?: string;
  overview: string;
  facts: Fact[];
  manifest?: ManifestCell[];
  manifestLabel?: string;
  photos?: Photo[];
  ctaHeading?: string;
  ctaBody?: string;
  challengeIntro: string;
  tickets: Ticket[];
  pillars: Pillar[];
  architecture: { title: string; intro: string; layers: Layer[] };
  outcomes: Outcome[];
  process: Phase[];
  quote: { text: string; cite: string };
  prevSlug: string;
  prevTitle: string;
  nextSlug: string;
  nextTitle: string;
};

const caseStudies: Record<string, CaseStudyData> = {
  "legal-services-marketplace": {
    slug: "legal-services-marketplace",
    number: "01",
    code: "STRATVALS-2026-01",
    title: "Digital Transformation of a Legal Services Marketplace",
    subtitle: "DIGITAL TRANSFORMATION · LEGALTECH",
    sector: "LegalTech",
    badge: "Strategy · Architecture · Delivery",
    cover: "/images/case-legal-marketplace.svg",
    accent: "#8b5cf6",
    type: "legal",
    tagline:
      "From fragmented intake and scattered documents to one secure, scalable marketplace connecting customers, providers and case files.",
    clientNarrative:
      "The client operates a legal services business serving individuals and small businesses seeking access to qualified legal providers. Prior to the engagement, the business relied entirely on manual intake, informal provider coordination and ad-hoc document handling: processes that worked at low volume but could not scale without becoming a liability. Smaller firms and pro-bono lawyers willing to take on eligible matters had no structured path to discover them, and customers had no self-service option to open a case, purchase a service or track their documents securely. Every interaction required a human touchpoint, creating bottlenecks and exposing sensitive records to unnecessary risk.",
    overview:
      "StratVals converted fragmented legal intake, provider onboarding and document handling into one digital marketplace: giving customers a direct path to create cases and purchase services, while enabling smaller firms and pro-bono lawyers to discover and accept eligible matters.",
    manifest: [
      { num: "Self-service", lbl: "Case creation and service purchasing without a single phone call" },
      { num: "Live registry", lbl: "Firms and pro-bono providers onboarding and picking up cases on demand" },
      { num: "Indexed", lbl: "Every case document searchable, versioned and access-controlled" },
      { num: "Auditable", lbl: "Immutable audit trail on all sensitive legal records at rest and in transit" },
    ],
    manifestLabel: "PLATFORM OUTCOMES",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "Digital provider portal dashboard showing case management and analytics",
        caption: "FIG. 01: PROVIDER PORTAL, POST-LAUNCH",
      },
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "Digital case intake journey on tablet and laptop interface",
        caption: "FIG. 02: DIGITAL CASE INTAKE, CUSTOMER JOURNEY",
      },
    ],
    ctaHeading: "Modernizing legal services delivery?",
    ctaBody: "StratVals designs and builds secure digital marketplaces that connect customers and providers across regulated industries.",
    facts: [
      { label: "Industry", value: "Legal Services / LegalTech" },
      { label: "Engagement", value: "Digital Transformation" },
      { label: "StratVals Role", value: "Strategy · Architecture · Delivery" },
      { label: "Build", value: "Customer Portal + Provider Registry" },
      { label: "Security Model", value: "Role-Based Access · AES-256 · Audit" },
      { label: "Release", value: "2026" },
    ],
    challengeIntro:
      "Legal access was limited by the very systems meant to support it. Intake lived in paper forms and email threads, provider coordination was manual, and case documents were exchanged as loose attachments with no ownership, no indexing and no security model. Every step added friction for customers, kept capable smaller firms out of the picture, and made protected records impossible to govern.",
    tickets: [
      { code: "INT-001", title: "Manual intake bottleneck", desc: "New matters entered legal workflows by hand: slow to open, slower to route, and a drag on conversion for first-time customers." },
      { code: "PRV-014", title: "Disconnected provider coordination", desc: "Smaller firms and pro-bono lawyers had no structured way to discover eligible cases or signal capacity to accept them." },
      { code: "DOC-022", title: "Scattered document exchanges", desc: "Case records moved as email attachments with no version control, no central search and no enforceable access rules." },
      { code: "SEC-031", title: "Unprotected sensitive records", desc: "Without a defined security model, sensitive legal documents could not be shared at scale without risking exposure." },
    ],
    pillars: [
      {
        num: "PART A",
        heading: "Customer Portal",
        body: "A responsive, self-service journey for case intake, service discovery and online purchasing with secure document upload built into every step, so customers can open a matter and buy the exact services they need without touching a phone line.",
        tags: ["CASE INTAKE", "SERVICE CATALOG", "ONLINE PURCHASING", "SECURE UPLOAD"],
      },
      {
        num: "PART B",
        heading: "Provider Registry",
        body: "Self-registration with professional profiles, eligibility workflows and structured case discovery, giving smaller firms and pro-bono lawyers a dependable pipeline of matters they are qualified to accept, instead of relying on word of mouth.",
        tags: ["SELF-REGISTRATION", "PROFESSIONAL PROFILES", "ELIGIBILITY FLOWS", "CASE DISCOVERY"],
      },
      {
        num: "PART C",
        heading: "Document Management",
        body: "Case-based metadata indexing, role-based access control, encrypted storage, full-text search and immutable auditability, turning loose attachments into a secure system of record for every matter on the platform.",
        tags: ["METADATA INDEXING", "ROLE-BASED ACCESS", "ENCRYPTED STORAGE", "AUDIT TRAIL"],
      },
      {
        num: "PART D",
        heading: "API-First Service Layer",
        body: "A single API-first layer connects the customer and provider experiences to shared case workflows. Centralized identity and access management, event-driven notifications and an integrated document repository form a modular foundation for future automation and analytics.",
        tags: ["CENTRALIZED IAM", "EVENT-DRIVEN NOTIFICATIONS", "SECURE APIs", "MODULAR CORE"],
      },
    ],
    architecture: {
      title: "Platform Architecture",
      intro:
        "Both sides of the marketplace consume the same case workflows through one API-first service layer. Identities, authorization and documents are centralized, so a change on the customer side is immediately governed on the provider side, and the whole platform stays open to future automation and analytics.",
      layers: [
        { name: "EXPERIENCE LAYER", desc: "Customer Portal · Provider Registry" },
        { name: "SERVICE LAYER", desc: "Shared case workflows · identity & access · event-driven notifications · secure APIs" },
        { name: "DATA LAYER", desc: "Document repository · encryption at rest · full-text indexing · audit log" },
      ],
    },
    outcomes: [
      { before: "Manual intake only", after: "Self-service", label: "Case creation & service purchasing without human touchpoints" },
      { before: "Word-of-mouth referrals", after: "Live registry", label: "Firms and pro-bono providers onboarding and discovering cases on demand" },
      { before: "Attachment chaos", after: "Indexed", label: "Structured case discovery, searchable records and provider-driven pickup" },
      { before: "Unprotected documents", after: "Auditable", label: "Indexed, searchable and access-controlled legal records" },
    ],
    process: [
      { tag: "PHASE 01", title: "Operating model mapping", desc: "Mapped intake, provider onboarding and document flows; defined eligibility rules and security requirements with the client's legal and ops teams." },
      { tag: "PHASE 02", title: "Architecture & security design", desc: "Locked the API-first service layer, centralized identity model, encryption scheme and audit requirements before any build began." },
      { tag: "PHASE 03", title: "Marketplace build", desc: "Delivered the customer portal and provider registry against shared case workflows, with notifications wired end-to-end." },
      { tag: "PHASE 04", title: "Provider pilot & go-live", desc: "Onboarded early firms and pro-bono providers, verified eligibility flows at volume, then cut over the full marketplace." },
    ],
    quote: {
      text: "From legal services to a connected digital ecosystem: one platform, two sides, zero paper chases.",
      cite: "Strategy, Architecture and Delivery by StratVals",
    },
    prevSlug: "norrbrook-apparel-ecommerce",
    prevTitle: "Leading Apparel Brand",
    nextSlug: "robotic-automation-food-manufacturing",
    nextTitle: "Robotic Automation for Food Manufacturing",
  },

  "robotic-automation-food-manufacturing": {
    slug: "robotic-automation-food-manufacturing",
    number: "02",
    code: "STRATVALS-2026-02",
    title: "Turning an Automation Vision into a Manufacturing-Ready Robotic Solution",
    subtitle: "FOOD MANUFACTURING · STRATEGIC PLANNING · ENGINEERING PROGRAM MANAGEMENT · ROBOTIC AUTOMATION",
    sector: "Food Manufacturing",
    badge: "Strategic Planning · Engineering Leadership",
    cover: "/images/case-robotic-automation.svg",
    accent: "#ff6a39",
    type: "robotics",
    tagline:
      "From a business challenge to an engineering opportunity: strategic planning, engineering orchestration and program leadership for robotic automation in food manufacturing.",
    clientNarrative:
      "A food manufacturing organization identified a critical production activity performed entirely by hand: repetitive, labour-intensive and difficult to keep consistent across shifts. The operation had a strong commercial case for automation, but no internal capability to define, procure or govern an engineering program of this complexity. The client needed a partner who could translate the business opportunity into an executable engineering initiative, identify and coordinate the right specialized capabilities, and govern the entire program through to a manufacturing-ready result.",
    overview:
      "A food-industry organization identified an opportunity to automate a critical manufacturing activity using robotics. StratVals provided the strategic planning and end-to-end program leadership needed to connect business intent with engineering execution: translating process needs, constraints, performance expectations and scalability goals into a structured engineering roadmap and a clear definition of success.",
    manifest: [
      { num: "On time", lbl: "MVP delivered within the agreed program schedule" },
      { num: "Within budget", lbl: "Program governed to the agreed cost envelope" },
      { num: "Robotic MVP", lbl: "Manufacturing-ready prototype engineered for the first deployment" },
      { num: "Multi-site ready", lbl: "Foundation designed for operationalization and replication across locations" },
    ],
    manifestLabel: "PROGRAM OUTCOMES",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "Industrial robotic arm operating on automated food manufacturing assembly line",
        caption: "FIG. 01: AUTOMATED CELL, PRE-DEPLOYMENT TEST",
      },
      {
        src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "High-precision industrial robotic arm operating on automated food manufacturing production line",
        caption: "FIG. 02: ROBOTIC MVP, POST-MANUFACTURING HANDOFF",
      },
    ],
    ctaHeading: "Turning an automation idea into an engineered reality?",
    ctaBody: "StratVals provides the strategy, partner orchestration and program governance to take manufacturing automation from business case to working MVP.",
    facts: [
      { label: "Industry", value: "Food Manufacturing" },
      { label: "Focus", value: "Robotic Automation" },
      { label: "StratVals Role", value: "Strategy · Orchestration · Execution" },
      { label: "MVP Status", value: "Delivered: On Time, Within Budget" },
      { label: "Current Phase", value: "Operationalization" },
      { label: "Future State", value: "Multi-Site Deployment" },
    ],
    challengeIntro:
      "The business case was compelling: reduce reliance on repetitive manual processes, improve operational consistency, and create an automation model that could eventually be replicated across manufacturing locations. The real challenge was converting that opportunity into an executable engineering program: not simply selecting a robot, but defining requirements, identifying the right engineering capabilities, developing a viable design and progressing it into a manufacturing-ready solution.",
    tickets: [
      { code: "REQ-001", title: "Opportunity without a roadmap", desc: "A strong automation business case with no executable engineering path from intent to working robot." },
      { code: "CAP-014", title: "Capability gap", desc: "Identifying and contracting the right engineering design and manufacturing partners for a one-of-a-kind build." },
      { code: "RSC-022", title: "Avoiding technology-first bias", desc: "Resisting the temptation to pick a robot before the desired business outcome, constraints and success metrics were defined." },
      { code: "GOV-031", title: "Single program direction", desc: "Keeping the client, engineering specialists and manufacturing partner aligned on one budget, schedule and definition of success." },
    ],
    pillars: [
      {
        num: "STRATEGY",
        heading: "Translate the opportunity",
        body: "Rather than beginning with a predetermined technology, the program began with the desired business outcome. StratVals converted the operational opportunity into an executable engineering initiative with structured requirements, constraints and a clear definition of success.",
        tags: ["BUSINESS-OUTCOME FIRST", "REQUIREMENTS DEFINITION", "DEFINITION OF SUCCESS"],
      },
      {
        num: "ORCHESTRATION",
        heading: "Connect the ecosystem",
        body: "Identified specialized engineering design partners capable of translating the requirements into a viable robotic solution, then brought in the engineering manufacturing partner to convert that design into a physical, manufacturing-ready prototype.",
        tags: ["DESIGN PARTNERS", "MANUFACTURING PARTNER", "SINGLE PROGRAM DIRECTION"],
      },
      {
        num: "EXECUTION",
        heading: "Govern the program",
        body: "Coordinated decisions, milestones, risks and dependencies across the ecosystem. StratVals operated at the center, allowing each organization to focus on its discipline while preserving one delivery plan, budget and schedule.",
        tags: ["MILESTONE GOVERNANCE", "RISK MANAGEMENT", "BUDGET & SCHEDULE CONTROL"],
      },
      {
        num: "SCALE",
        heading: "Engineer for the next site",
        body: "Engineering architecture, manufacturability, partner capability and governance were considered from the outset, changing the conversation from 'Can this be automated?' to 'How do we operationalize and scale it?' The foundation now supports broader adoption, not just a one-time prototype.",
        tags: ["DESIGN FOR MANUFACTURABILITY", "OPERATIONALIZATION", "MULTI-SITE DEPLOYMENT"],
      },
    ],
    architecture: {
      title: "Engagement Model",
      intro:
        "StratVals held the center of gravity between three organizations: connecting business intent with engineering execution so each partner could focus on its discipline while the program kept a single direction, delivery plan, budget and definition of success.",
      layers: [
        { name: "CLIENT", desc: "Business & operational teams · process needs · constraints · performance expectations" },
        { name: "STRATVALS", desc: "Program leadership · roadmap · decisions, milestones, risks & dependencies" },
        { name: "ENGINEERING DESIGN PARTNER", desc: "Translate requirements into a viable robotic design" },
        { name: "MANUFACTURING PARTNER", desc: "Convert the design into a physical, manufacturing-ready prototype" },
        { name: "OUTCOME", desc: "Manufacturing-ready MVP · operationalization · multi-site deployment" },
      ],
    },
    outcomes: [
      { before: "Manual, repetitive process", after: "Robotic", label: "Critical manufacturing activity automated with a working MVP" },
      { before: "Concept only", after: "Production MVP", label: "Engineered prototype designed for the first deployment" },
      { before: "Unknown timeline", after: "On time", label: "MVP delivered within the agreed schedule" },
      { before: "Unknown costs", after: "Within budget", label: "Program governed to the agreed budget" },
      { before: "Prototype phase", after: "Operationalize", label: "Current phase: converting the MVP into a live manufacturing operation" },
      { before: "Single site", after: "Multi-site", label: "Future state: replicating the automation model across manufacturing locations" },
    ],
    process: [
      { tag: "PHASE 01", title: "Requirements & definition", desc: "Translated process needs, constraints, performance expectations and scalability goals into a structured engineering roadmap." },
      { tag: "PHASE 02", title: "Capability selection", desc: "Identified and engaged specialized engineering design partners capable of delivering a viable robotic design." },
      { tag: "PHASE 03", title: "Design & prototype", desc: "Matured the design under program governance, coordinating decisions, milestones, risks and dependencies." },
      { tag: "PHASE 04", title: "Manufacturing handoff", desc: "Brought in the engineering manufacturing partner to convert the design into a physical, manufacturing-ready prototype." },
      { tag: "PHASE 05", title: "MVP delivery & scale", desc: "Delivered the MVP on time and within budget, now operationalizing the solution and evaluating multi-site deployment." },
    ],
    quote: {
      text: "From strategy to execution. From prototype to scale.",
      cite: "Strategic Planning & Engineering Program Leadership by StratVals",
    },
    prevSlug: "legal-services-marketplace",
    prevTitle: "Legal Services Marketplace",
    nextSlug: "norrbrook-apparel-ecommerce",
    nextTitle: "Leading Apparel Brand",
  },

  "norrbrook-apparel-ecommerce": {
    slug: "norrbrook-apparel-ecommerce",
    number: "03",
    code: "STRATVALS-2026-03",
    title: "Rebuilding the Commerce Stack for Peak Retail Performance",
    subtitle: "COMMERCE · MULESOFT · AI DEMAND & SHIPPING",
    sector: "Apparel & Fashion",
    badge: "Commerce · MuleSoft · AI",
    cover: "/images/case-ecommerce-apparel.svg",
    accent: "#10b981",
    type: "commerce",
    tagline:
      "Three systems that barely spoke to each other. One rebuilt commerce layer: wired together on MuleSoft, sharpened by AI demand planning and shipping optimization, and tested through the hardest week of the retail year.",
    clientNarrative:
      "A leading apparel brand selling performance and everyday wear through a direct-to-consumer storefront, two fashion marketplaces, and a regional wholesale channel. Like most SME apparel sellers, its catalog carries deep size and colour variance across every style, and its order volume swings hard around two annual peaks: a winter holiday surge and an End-of-Season Sale. Before the engagement, the DTC site ran on a templated storefront with limited control over the product detail experience, while inventory truth lived in three disconnected places: the ERP, the warehouse management system operated by a third-party logistics partner, and a set of shared spreadsheets used to reconcile the two.",
    overview:
      "This leading apparel brand ran its DTC storefront, wholesale ledger and warehouse off three systems that barely communicated. StratVals rebuilt the commerce layer, wired the ERP and warehouse together on MuleSoft Anypoint, and layered in AI-driven demand planning and shipping optimization: turning End-of-Season Sale week from a fire drill into a routine.",
    manifest: [
      { num: "96.4%", lbl: "DIFOT (delivered in full, on time) - up from 81.3%" },
      { num: "−42%",  lbl: "Stockout rate across core SKUs during peak windows" },
      { num: "3.1×",  lbl: "Peak order throughput handled without added headcount" },
      { num: "68%",   lbl: "Forecast accuracy at SKU-week level, from a 31% baseline" },
    ],
    manifestLabel: "12-MONTH POST-LAUNCH",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "Rows of high-bay warehouse racking in modern fulfillment center",
        caption: "FIG. 01: DISTRIBUTION NODE, POST-CUTOVER",
      },
      {
        src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        alt: "Shipping container terminal and freight logistics node",
        caption: "FIG. 02: INBOUND FREIGHT, PEAK REPLENISHMENT CYCLE",
      },
    ],
    ctaHeading: "Planning your next peak season?",
    ctaBody: "StratVals builds the commerce, integration, and AI layers that keep SME retailers in stock when it matters most.",

    facts: [
      { label: "Industry", value: "Apparel: DTC & Wholesale" },
      { label: "Company Size", value: "~140 employees (SME)" },
      { label: "Sales Channels", value: "DTC storefront, 2 marketplaces, wholesale EDI" },
      { label: "Core Systems", value: "ERP (order-to-cash), 3PL-managed WMS" },
      { label: "SKU Footprint", value: "~2,400 styles / 14,000+ size-colour variants" },
      { label: "Integration", value: "MuleSoft Anypoint · Event-Driven" },
      { label: "AI Engines", value: "Demand-Sensing + Carrier Rate-Shopping" },
      { label: "Peak Windows", value: "Holiday surge, End-of-Season Sale (EOSS)" },
    ],
    challengeIntro:
      "Inventory truth drifted by up to 48 hours between the ERP and the warehouse floor, because the two systems only reconciled through a nightly batch job. On drop days and during End-of-Season Sale, that drift turned directly into oversells, backorders and manual cancellations. Demand planning ran on trailing three-month averages with no size-curve or seasonality modelling, and shipping ran on one static carrier contract: moving costs and transit times in exactly the wrong direction at the moment customers were least patient.",
    tickets: [
      { code: "SYNC-001", title: "24 to 48hr inventory drift", desc: "ERP-to-warehouse sync via nightly batch reconciliation instead of live, event-driven updates." },
      { code: "OOS-014", title: "Oversells on peak drop days", desc: "Available-to-promise shown on the storefront lagged real warehouse stock: manual order cancellations spiked during promotional traffic." },
      { code: "FCST-022", title: "Flat trailing-average forecasting", desc: "No size-curve or seasonality modelling: reorder points mistimed on core SKUs exactly during peaks." },
      { code: "SHIP-031", title: "Single static carrier contract", desc: "One carrier at one flat rate, regardless of volume, distance or season: peak cost-to-serve climbed when it should have fallen." },
      { code: "DIFOT-040", title: "Delivery-in-full-on-time at 81%", desc: "DIFOT hovered at 81%, performing worst during the two highest-revenue weeks of the year." },
    ],
    pillars: [
      {
        num: "PART A",
        heading: "Custom Ecommerce Storefront",
        body: "A purpose-built, composable storefront replaced the templated site, with the product detail page driven directly by a Product Information Management (PIM) layer so size, colour, fit and fabric attributes stay consistent across DTC and marketplace listings. Available-to-promise (ATP) quantities render live at the variant level rather than the parent SKU, so a customer sees real stock for their exact size and colour, not an aggregate.",
        tags: ["HEADLESS COMMERCE", "PIM-DRIVEN PDP", "VARIANT-LEVEL ATP", "MOBILE-FIRST CHECKOUT"],
      },
      {
        num: "PART B",
        heading: "MuleSoft ERP to Warehouse Integration",
        body: "An API-led integration built on MuleSoft's Anypoint Platform connects the ERP, the 3PL's warehouse management system, the storefront, and the marketplace and wholesale EDI channels. System APIs expose the ERP and WMS; process APIs orchestrate order, inventory and fulfilment logic; experience APIs feed the storefront and marketplace listings. DataWeave transformations map SKU and variant taxonomies across systems, and inventory and order events move through an event-driven pub-sub layer instead of a nightly batch: cutting sync latency from days to seconds.",
        tags: ["ANYPOINT PLATFORM", "API-LED CONNECTIVITY", "EDI 850/856/940/945", "EVENT-DRIVEN SYNC"],
      },
      {
        num: "PART C",
        heading: "AI-Driven Demand Planning",
        body: "A demand-sensing model forecasts at SKU-week granularity, blending historical sell-through, promotional calendars, and size-curve and pack-ratio patterns specific to apparel. It recommends reorder points and safety stock per distribution node, flags SKU rationalization candidates, and rebalances slow-moving colourways toward the channels most likely to sell them before markdown is the only option.",
        tags: ["SKU-WEEK DEMAND SENSING", "SIZE-CURVE FORECASTING", "SAFETY STOCK / ROP TUNING", "MARKDOWN REBALANCING"],
      },
      {
        num: "PART D",
        heading: "AI-Driven Shipping Optimization",
        body: "A shipping-decision model rate-shops across contracted carriers in real time and switches logic between peak and non-peak modes: consolidating freight and batching pick-waves during normal volume, and shifting to zone-skipping and expedited lanes only where an on-time promise is at risk during EOSS and holiday surges. The result is a lower average cost to serve without sacrificing delivery promises when volume triples.",
        tags: ["DYNAMIC CARRIER SELECTION", "PEAK / NON-PEAK ROUTING", "FREIGHT CONSOLIDATION", "PICK-WAVE OPTIMIZATION"],
      },
    ],
    architecture: {
      title: "Integration Architecture",
      intro:
        "Inventory and order events travel as a continuous stream rather than a nightly file drop. The AI demand and shipping engines sit as consumers of the same event bus: a forecast update or a peak-mode routing switch reaches the storefront and the warehouse floor within the same integration cycle, not the next overnight batch.",
      layers: [
        { name: "STOREFRONT & CHANNELS", desc: "DTC Composable Web · Wholesale EDI · Marketplace Connectors" },
        { name: "MULESOFT INTEGRATION LAYER", desc: "System, Process & Experience APIs · DataWeave SKU Mapping · Event Bus" },
        { name: "CORE SYSTEMS & AI ENGINES", desc: "ERP System of Record · 3PL WMS · AI Demand Sensing · AI Shipping Router" },
      ],
    },
    outcomes: [
      { before: "81.3% DIFOT", after: "96.4%", label: "Delivery-in-full-on-time rate, including peak weeks" },
      { before: "31% forecast accuracy", after: "68%", label: "SKU-week forecast accuracy at variant level" },
      { before: "48hr inventory drift", after: "<30sec", label: "ERP-to-warehouse inventory sync latency", accent: true },
      { before: "1.0x baseline", after: "3.1x", label: "Peak-season order throughput with same headcount" },
      { before: "Core SKU stockouts", after: "-42%", label: "Stockout rate on top-selling styles during peak" },
      { before: "Peak cost-to-serve", after: "-18%", label: "Average shipping cost per order during EOSS" },
      { before: "Manual reconciliation", after: "-35 hrs/wk", label: "Inventory admin time reclaimed by the ops team" },
      { before: "Checkout conversion", after: "+22%", label: "Lift after variant-level ATP and faster PDP load" },
    ],
    process: [
      { tag: "WK 01-03", title: "Discovery & systems audit", desc: "Mapped ERP, WMS and storefront data models; audited SKU/variant taxonomy and EDI document flows with the wholesale channel." },
      { tag: "WK 04-12", title: "API-led integration build", desc: "Stood up System, Process and Experience API layers on MuleSoft Anypoint; migrated inventory and order sync from nightly batch to event-driven." },
      { tag: "WK 08-16", title: "Storefront & AI model build (parallel track)", desc: "Built the PIM-driven storefront and trained the demand-sensing and shipping-optimization models against 3 years of historical order and fulfilment data." },
      { tag: "WK 17-19", title: "EOSS pilot", desc: "Ran the full stack live through that season's End-of-Season Sale as a controlled pilot before holiday peak." },
      { tag: "WK 20", title: "Full cutover", desc: "Retired the legacy templated storefront and batch reconciliation process; ops team fully transitioned to the new stack ahead of the holiday surge." },
    ],
    quote: {
      text: "We used to plan peak season around what the warehouse spreadsheet told us on a Tuesday. Now the storefront, the ERP and the floor agree in real time, and the shipping engine handles the cost-versus-promise trade-off on its own.",
      cite: "Supply Chain & Operations Lead, Leading Apparel Brand",
    },
    prevSlug: "robotic-automation-food-manufacturing",
    prevTitle: "Robotic Automation for Food Manufacturing",
    nextSlug: "legal-services-marketplace",
    nextTitle: "Legal Services Marketplace",
  },
};

const studies = Object.values(caseStudies);
const slugIndex = Object.fromEntries(studies.map((s) => [s.slug, s]));

function SectionHead({ index, title, accent }: { index: string; title: string; accent: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 24,
        marginBottom: 30,
        flexWrap: "wrap",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--foreground)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.14em",
          color: accent,
          whiteSpace: "nowrap",
        }}
      >
        {index}
      </span>
    </div>
  );
}

function LayerStack({ layers, accent }: { layers: Layer[]; accent: string }) {
  return (
    <div className={styles.layerStack}>
      {layers.map((layer, i) => (
        <div key={i} className={styles.layerRow}>
          <span className={styles.layerName} style={{ color: accent }}>
            {layer.name}
          </span>
          <span className={styles.layerDesc}>{layer.desc}</span>
        </div>
      ))}
    </div>
  );
}

export function generateMetadata() {
  return { title: "Case Study | Strategic Value Solutions" };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = slugIndex[slug];

  if (!study) notFound();

  const { accent } = study;

  return (
    <>
      <PageHeader label={`Case Study · ${study.sector}`} title={study.title} />
      <section style={{ padding: "8px 0 64px" }}>
        <div className="container">
          <div className={styles.card}>
            {/* Dossier Facts */}
            <div className={styles.factsGrid}>
              {study.facts.map((f, i) => (
                <div key={i} className={styles.factItem}>
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factValue}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Pure React Cover Card */}
            <div style={{ marginBottom: "44px" }}>
              <CaseStudyCoverCard
                number={study.number}
                code={study.code}
                title={study.title}
                subtitle={study.subtitle}
                accent={study.accent}
                type={study.type}
              />
            </div>

            {/* Impact Manifest: shown when manifest data is present */}
            {study.manifest && (
              <div style={{
                border: `1px solid var(--border)`,
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: 44,
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 20px",
                  borderBottom: `1px dashed var(--border)`,
                  background: "var(--surface)",
                }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--foreground-muted)" }}>IMPACT MANIFEST</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: accent }}>{study.manifestLabel ?? "KEY OUTCOMES"}</span>
                </div>
                <div className={styles.manifestInner}>
                  {study.manifest.map((m, i) => (
                    <div key={i} style={{
                      padding: "22px 20px",
                      borderRight: i < study.manifest!.length - 1 ? `1px dashed var(--border)` : "none",
                      background: "var(--card-bg)",
                    }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.2rem,2vw,1.75rem)", fontWeight: 700, color: accent, lineHeight: 1 }}>{m.num}</div>
                      <div style={{ marginTop: 8, fontSize: "0.78rem", color: "var(--foreground-muted)", lineHeight: 1.45 }}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                  borderTop: `1px dashed var(--border)`,
                  background: "var(--surface)",
                }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "var(--foreground-subtle)" }}>ENGAGEMENT: {study.code}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "var(--foreground-subtle)" }}>SECTOR: {study.sector.toUpperCase()}</span>
                </div>
              </div>
            )}

            {/* Tagline + Overview */}
            <div className={styles.overviewBox} style={{ borderLeft: `3px solid ${accent}` }}>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--foreground)",
                  fontWeight: 600,
                  margin: "0 0 12px",
                }}
              >
                {study.tagline}
              </p>
              <p
                style={{
                  fontSize: "0.97rem",
                  lineHeight: "1.8",
                  color: "var(--foreground-muted)",
                  margin: 0,
                }}
              >
                {study.overview}
              </p>
            </div>

            {/* Client Snapshot: shown when clientNarrative is present */}
            {study.clientNarrative && (
              <div className={styles.sectionBlock}>
                <SectionHead index="00 // CLIENT SNAPSHOT" title="The Client" accent={accent} />
                <div
                  className={styles.clientSnapshotOuter}
                  style={{
                    gap: 0,
                    border: `1px solid var(--border)`,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <div style={{
                    padding: "28px 32px",
                    borderRight: `1px dashed var(--border)`,
                  }}>
                    {study.clientNarrative.split(/(?<=\.) (?=[A-Z])/).map((part, i) => (
                      <p key={i} style={{ fontSize: "0.97rem", lineHeight: 1.75, color: "var(--foreground-muted)", margin: i === 0 ? "0 0 14px" : 0 }}>
                        {part}
                      </p>
                    ))}
                  </div>
                  <div style={{
                    padding: "28px 28px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px 18px",
                    alignContent: "start",
                    background: "var(--surface)",
                  }}>
                    {study.facts.map((f, i) => (
                      <div key={i}>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.09em", color: "var(--foreground-muted)", textTransform: "uppercase", marginBottom: 4 }}>{f.label}</div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--foreground)" }}>{f.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* The Challenge */}
            <div className={styles.sectionBlock}>
              <SectionHead index="01 // THE CHALLENGE" title="The Challenge" accent={accent} />
              <div className={styles.challengeGrid}>
                <p className={styles.challengeIntro}>{study.challengeIntro}</p>
                <div className={styles.ticketsBox}>
                  {study.tickets.map((t) => (
                    <div key={t.code} className={styles.ticketRow}>
                      <span className={styles.ticketCode} style={{ color: accent }}>
                        {t.code}
                      </span>
                      <span className={styles.ticketTitle}>
                        <strong className={styles.ticketTitle}>{t.title}</strong>
                        {t.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className={styles.sectionBlock}>
              <SectionHead index="02 // THE SOLUTION" title="The Solution" accent={accent} />
              <div className={styles.pillarsGrid}>
                {study.pillars.map((p) => (
                  <div key={p.num} className={styles.pillarCard}>
                    <span className={styles.pillarNum} style={{ color: accent }}>
                      {p.num}
                    </span>
                    <h3 className={styles.pillarHeading}>{p.heading}</h3>
                    <p className={styles.pillarBody}>{p.body}</p>
                    <div className={styles.tagsRow}>
                      {p.tags.map((tag) => (
                        <span key={tag} className={styles.tagChip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className={styles.sectionBlock}>
              <SectionHead index="03 // ARCHITECTURE" title={study.architecture.title} accent={accent} />
              <p
                style={{
                  fontSize: "0.97rem",
                  lineHeight: "1.8",
                  color: "var(--foreground-muted)",
                  maxWidth: "72ch",
                  margin: "0 0 28px",
                }}
              >
                {study.architecture.intro}
              </p>

              {study.slug === "norrbrook-apparel-ecommerce" && (
                <div className={styles.diagramWrap}>
                  <svg
                    viewBox="0 0 1000 300"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Leading Apparel Brand MuleSoft Architecture Flow Diagram"
                    className={styles.diagramSvg}
                  >
                    <path
                      d="M90,150 H910"
                      stroke="var(--border)"
                      strokeWidth="1.5"
                      strokeDasharray="2 8"
                      strokeLinecap="round"
                    />

                    {/* ERP Node */}
                    <g>
                      <rect x="40" y="110" width="100" height="80" rx="8" fill="var(--surface)" stroke="#4A6FA5" strokeWidth="1.5" />
                      <text x="90" y="140" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">ERP</text>
                      <text x="90" y="156" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">ORDER-TO-CASH</text>
                      <text x="90" y="170" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">MASTER SKU DATA</text>
                      {/* <circle cx="90" cy="150" r="4" fill="var(--card-bg)" stroke="#10b981" strokeWidth="2" /> */}
                    </g>

                    {/* WMS Node */}
                    <g>
                      <rect x="220" y="110" width="110" height="80" rx="8" fill="var(--surface)" stroke="#4A6FA5" strokeWidth="1.5" />
                      <text x="275" y="136" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">WMS / 3PL</text>
                      <text x="275" y="152" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">PICK · PACK · SHIP</text>
                      <text x="275" y="166" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">LIVE STOCK COUNTS</text>
                      {/* <circle cx="275" cy="150" r="4" fill="var(--card-bg)" stroke="#10b981" strokeWidth="2" /> */}
                    </g>

                    {/* MuleSoft Core */}
                    <g>
                      <rect x="420" y="90" width="160" height="120" rx="12" fill="var(--surface)" stroke="#10b981" strokeWidth="2" />
                      <text x="500" y="118" textAnchor="middle" fill="#10b981" fontFamily="var(--font-body)" fontSize="11" fontWeight="700">MULESOFT ANYPOINT</text>
                      <text x="500" y="140" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="9">SYSTEM APIs</text>
                      <text x="500" y="156" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="9">PROCESS APIs</text>
                      <text x="500" y="172" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="9">EXPERIENCE APIs</text>
                      <text x="500" y="192" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="8">DATAWEAVE · EVENT BUS</text>
                      {/* <circle cx="500" cy="150" r="4" fill="var(--card-bg)" stroke="#10b981" strokeWidth="2" /> */}
                    </g>

                    {/* AI Demand */}
                    <g>
                      <rect x="640" y="40" width="140" height="70" rx="8" fill="var(--surface)" stroke="#4FB478" strokeWidth="1.5" />
                      <text x="710" y="66" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">AI DEMAND</text>
                      <text x="710" y="80" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">PLANNING ENGINE</text>
                      <text x="710" y="98" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="8">SKU-WEEK FORECASTS</text>
                    </g>
                    <path d="M580,150 Q610,150 640,90" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 6" fill="none" />

                    {/* AI Shipping */}
                    <g>
                      <rect x="640" y="190" width="140" height="70" rx="8" fill="var(--surface)" stroke="#4FB478" strokeWidth="1.5" />
                      <text x="710" y="216" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">AI SHIPPING</text>
                      <text x="710" y="230" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">OPTIMIZATION ENGINE</text>
                      <text x="710" y="248" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="8">PEAK / NON-PEAK ROUTING</text>
                    </g>
                    <path d="M580,150 Q610,150 640,225" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 6" fill="none" />

                    {/* Storefront Node */}
                    <g>
                      <rect x="840" y="110" width="120" height="80" rx="8" fill="var(--surface)" stroke="#4A6FA5" strokeWidth="1.5" />
                      <text x="900" y="136" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">STOREFRONT</text>
                      <text x="900" y="152" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">DTC + MARKETPLACES</text>
                      <text x="900" y="166" textAnchor="middle" fill="var(--foreground-muted)" fontFamily="var(--font-body)" fontSize="9">WHOLESALE EDI</text>
                      <circle cx="900" cy="150" r="4" fill="var(--card-bg)" stroke="#10b981" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              )}

              <div style={{ marginTop: "24px" }}>
                <LayerStack layers={study.architecture.layers} accent={accent} />
              </div>
            </div>

            {/* Outcomes */}
            <div className={styles.sectionBlock}>
              <SectionHead index="04 // BUSINESS IMPACT" title="Business Impact" accent={accent} />
              <div className={styles.outcomesGrid}>
                {study.outcomes.map((o, i) => (
                  <div key={i} className={styles.outcomeCard}>
                    <div className={styles.outcomeBefore}>{o.before}</div>
                    <div
                      className={styles.outcomeAfter}
                      style={{ color: o.accent ? accent : "var(--foreground)" }}
                    >
                      {o.after}
                    </div>
                    <div className={styles.outcomeLabel}>{o.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery: shown when photos data is present */}
            {study.photos && (
              <div className={styles.sectionBlock}>
                <div
                  className={styles.photoGalleryInner}
                  style={{
                    gap: 1,
                    background: "var(--border)",
                    border: `1px solid var(--border)`,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  {study.photos.map((img, i) => (
                    <figure key={i} style={{ margin: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: 260, objectFit: "cover", filter: "saturate(0.92) contrast(1.02)" }}
                      />
                      <figcaption style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        padding: "10px 14px",
                        color: "var(--foreground-muted)",
                        borderTop: `1px solid var(--border)`,
                        background: "var(--surface)",
                      }}>{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* Process */}
            <div className={styles.sectionBlock}>
              <SectionHead index="05 // ROLLOUT" title="Engagement Timeline" accent={accent} />
              <div className={styles.timelineList}>
                {study.process.map((phase, i) => (
                  <div key={i} className={styles.timelineRow}>
                    <span className={styles.timelineTag} style={{ color: accent }}>
                      {phase.tag}
                    </span>
                    <h4 className={styles.timelineTitle}>{phase.title}</h4>
                    <p className={styles.timelineDesc}>{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className={styles.quoteBox} style={{ borderLeft: `3px solid ${accent}` }}>
              <p className={styles.quoteText}>“{study.quote.text}”</p>
              <p className={styles.quoteCite}>{study.quote.cite}</p>
            </div>

            {/* CTA callout: shown when ctaHeading is present */}
            {study.ctaHeading && (
              <div style={{
                textAlign: "center",
                padding: "48px 32px",
                border: `1px solid var(--border)`,
                borderRadius: 20,
                background: "var(--surface)",
                marginBottom: 48,
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--foreground)", margin: "0 auto 14px", maxWidth: "28ch" }}>
                  {study.ctaHeading}
                </h3>
                <p style={{ fontSize: "0.97rem", color: "var(--foreground-muted)", margin: "0 auto 28px", maxWidth: "52ch" }}>
                  {study.ctaBody}
                </p>
                <a
                  href="/contact-us"
                  style={{
                    display: "inline-block",
                    padding: "14px 30px",
                    background: accent,
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    borderRadius: 8,
                    textTransform: "uppercase",
                  }}
                >
                  START A CONVERSATION
                </a>
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className={styles.navRow}>
              <Link href={`/case-studies/${study.prevSlug}`} className={styles.navItemPrev}>
                <span className={styles.navMeta}>← Previous Study</span>
                <span className={styles.navTitle}>{study.prevTitle}</span>
              </Link>
              <Link href={`/case-studies/${study.nextSlug}`} className={styles.navItemNext}>
                <span className={styles.navMeta}>Next Study →</span>
                <span className={styles.navTitle}>{study.nextTitle}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}