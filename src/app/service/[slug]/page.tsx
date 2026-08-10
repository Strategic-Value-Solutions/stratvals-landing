import PageHeader from "../../../components/PageHeader";
import ContactFormSection from "../../../components/ContactFormSection";
import Link from "next/link";
import styles from "./ServiceDetail.module.css";

type Stat = { label: string; value: string };
type Provision = { title: string; desc: string };
type Step = { num: string; title: string; desc: string };
type IndustryApp = { sector: string; detail: string };

type ServiceData = {
  title: string;
  subtitle: string;
  category: string;
  intro: string;
  stats: Stat[];
  whatWeProvide: Provision[];
  approach: Step[];
  industries: IndustryApp[];
  caseHighlight?: { title: string; link: string; label: string };
};

const services: Record<string, ServiceData> = {
  "product-road-mapping-engineering": {
    title: "Product Road Mapping & Engineering",
    subtitle: "From Vision to Market-Ready Product & Enterprise Scale",
    category: "Product Strategy & Cloud Engineering",
    intro:
      "Need help with packaging the next big technology idea or transforming traditional software development processes? We help create a product roadmap for strategic growth and industry positioning, guide your cloud migration, and introduce the latest SecDevOps and CI/CD processes. Our engineering teams integrate closely with your executive stakeholders to map out the entire product lifecycle: from initial ideation and technical feasibility through to continuous deployment and global scale.",
    stats: [
      { label: "Release Velocity", value: "4× Faster CI/CD Deployments" },
      { label: "Architecture", value: "Cloud-Native Microservices" },
      { label: "Quality Benchmark", value: "Sub-100ms API Latency" },
      { label: "Security Standard", value: "SOC 2 & SecDevOps Built-In" },
    ],
    whatWeProvide: [
      {
        title: "Discovery & Product Strategy",
        desc: "We conduct thorough market research, technical feasibility assessments, competitive analysis, and user-persona mapping to ensure the product solves real enterprise challenges and captures market share.",
      },
      {
        title: "Cloud-Native Architecture",
        desc: "Utilizing microservices, React, Next.js, Node.js, and automated CI/CD pipelines on AWS or Azure designed for high availability, security, and sub-100ms response times across peak volume.",
      },
      {
        title: "Agile Delivery & Governance",
        desc: "Two-week sprints, continuous working software demos, and transparent backlog management keep your executive team fully in control of priorities, scope, and engineering velocity.",
      },
      {
        title: "eCommerce Platform Engineering",
        desc: "Bespoke commerce engines, Hyvä Theme Magento implementations, and Shopify Plus integrations optimized for conversion, live inventory availability, and heavy traffic surges.",
      },
      {
        title: "Mobile Application Engineering",
        desc: "Native iOS (Swift) and Android (Kotlin) apps or cross-platform React Native solutions designed with intuitive UX, offline syncing, and enterprise security standards.",
      },
      {
        title: "ERP & CRM Systems Integration",
        desc: "Seamless integration and customization of leading ERP and CRM platforms, ensuring your core business software ecosystem communicates reliably without batch delays.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Discover & Map",
        desc: "We deeply analyze your business context, market landscape, competitive environment, user personas, and technical debt to build a solid strategic product roadmap.",
      },
      {
        num: "02",
        title: "Architecture & Prototype",
        desc: "Our UI/UX designers craft intuitive, high-converting interfaces and interactive prototypes: validated with stakeholders before production engineering begins.",
      },
      {
        num: "03",
        title: "Agile Engineering",
        desc: "Our engineers build with quality and transparency. You receive full visibility into sprint velocity with weekly working software demos and automated CI/CD builds.",
      },
      {
        num: "04",
        title: "Cutover & Hypercare",
        desc: "We orchestrate careful cutovers including load testing, security audits, real-time monitoring setup, and 90-day post-launch hypercare operational support.",
      },
    ],
    industries: [
      { sector: "e-Commerce", detail: "Headless catalog engines, variant-level ATP, and instant search integration." },
      { sector: "Logistics & 3PL", detail: "Real-time tracking portals, driver dispatch apps, and automated warehouse alerts." },
      { sector: "Healthcare", detail: "HIPAA-compliant patient portals, telehealth platforms, and HL7/FHIR record sync." },
      { sector: "Manufacturing", detail: "IoT telemetry dashboards, predictive maintenance alerts, and supply chain portals." },
      { sector: "Construction", detail: "Field workforce apps, mobile project reporting, and sub-contractor management." },
      { sector: "Real Estate", detail: "Property management platforms, tenant portals, and CRM integration workflows." },
    ],
    caseHighlight: {
      label: "Flagship Case Study",
      title: "Legal Services Marketplace: Digital Transformation",
      link: "/case-studies/legal-services-marketplace",
    },
  },

  "strategic-program-management": {
    title: "Strategic Program Management",
    subtitle: "Delivering Complex Multi-Million Dollar Initiatives With Precision",
    category: "Executive Advisory & Program Leadership",
    intro:
      "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources to understand the implications of every choice our clients can make. At StratVals, we provide C-suite program leadership: ensuring complex multi-million dollar initiatives are delivered on schedule, within budget, and fully aligned with corporate goals.",
    stats: [
      { label: "Delivery Record", value: "100% On-Time & On-Budget" },
      { label: "Leadership", value: "C-Suite Steering Committees" },
      { label: "Risk Mitigation", value: "Proactive RAID & Vendor Controls" },
      { label: "Framework", value: "Hybrid Agile & Enterprise PMO" },
    ],
    whatWeProvide: [
      {
        title: "Enterprise Program Governance",
        desc: "Establish clear ownership, accountability structures, steering committee cadences, and decision frameworks that keep every cross-functional workstream aligned across departments.",
      },
      {
        title: "RAID & Risk Management",
        desc: "Proactive identification, quantification, and mitigation of risks, assumptions, issues, and dependencies: preventing delivery blockers long before they impact schedule or cost.",
      },
      {
        title: "Vendor & System Integrator Control",
        desc: "Rigorous management of third-party vendors and system integrator partners, holding external engineering teams to strict quality standards and milestone commitments.",
      },
      {
        title: "Executive Dashboard Reporting",
        desc: "Real-time, data-driven dashboards and executive briefings providing C-suite stakeholders complete visibility into program health, burn rate, and projected ROI.",
      },
      {
        title: "Change Management & Adoption",
        desc: "Structured organizational change management programs that train internal teams, accelerate user adoption, and maximize software ROI after launch.",
      },
      {
        title: "Budget & Financial Control",
        desc: "Continuous financial forecasting, resource capacity planning, and cost optimization to keep multi-year enterprise programs strictly within approved budget.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Rapid Assessment",
        desc: "Conduct a rapid 360-degree program assessment: understand scope, constraints, stakeholders, vendor contracts, dependencies, and organizational maturity.",
      },
      {
        num: "02",
        title: "Master Blueprint",
        desc: "Establish the program governance model, communication cadence, RAID log framework, steering committee charter, and integrated master schedule.",
      },
      {
        num: "03",
        title: "Cadence Execution",
        desc: "Execute the master plan with rigorous cadence management: stand-ups, steering reviews, risk assessments, and continuous workstream iteration.",
      },
      {
        num: "04",
        title: "Cutover & Handoff",
        desc: "Orchestrate program go-live with hypercare support, formal retrospectives, executive debriefs, and seamless operational handoff.",
      },
    ],
    industries: [
      { sector: "Manufacturing", detail: "Robotic automation MVP orchestration and multi-site factory rollout governance." },
      { sector: "Construction", detail: "Capital project tracking, ERP rollout governance, and contractor portal controls." },
      { sector: "Logistics", detail: "3PL system consolidation, warehouse management system (WMS) cutover leadership." },
      { sector: "Healthcare", detail: "Enterprise EHR migration program leadership and multi-hospital system integration." },
      { sector: "e-Commerce", detail: "Peak retail readiness, warehouse integration, and multi-channel ERP synchronization." },
      { sector: "Real Estate", detail: "Portfolio system transformation and corporate digital workspace rollouts." },
    ],
    caseHighlight: {
      label: "Flagship Case Study",
      title: "Robotic Automation for Food Manufacturing: Strategic Program Leadership",
      link: "/case-studies/robotic-automation-food-manufacturing",
    },
  },

  "technology-transformation": {
    title: "Technology Transformation",
    subtitle: "From Legacy Monoliths to Modern, Cloud-Native Excellence",
    category: "Digital Transformation & Cloud Architecture",
    intro:
      "Looking for digital transformation for your business but not sure where to turn? Need help with technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today's rapidly evolving environment means taking bold chances and making insightful decisions. We systematically modernize your digital infrastructure, transitioning from slow legacy systems to agile, secure, cloud-powered solutions that drive competitive advantage with zero operational disruption.",
    stats: [
      { label: "Target State", value: "Cloud-Native & Event-Driven" },
      { label: "Sync Speed", value: "<5s Live Integration Latency" },
      { label: "Availability", value: "99.99% Uptime SLA" },
      { label: "Architecture", value: "API Gateway & Microservices" },
    ],
    whatWeProvide: [
      {
        title: "Cloud Infrastructure Migration",
        desc: "Re-platforming and full re-architecture migrations to AWS, Azure, or GCP with automated infrastructure-as-code (Terraform) and zero-downtime cutover strategies.",
      },
      {
        title: "Monolithic Decoupling",
        desc: "Deconstructing legacy monoliths into maintainable microservices using the Strangler Fig pattern to accelerate feature release speed and isolate system risk.",
      },
      {
        title: "API-Led Integration & Event Bus",
        desc: "API-led architecture on MuleSoft Anypoint or custom Kafka event buses connecting ERP, WMS, storefront, and EDI channels in real time.",
      },
      {
        title: "Data Lakehouse Modernization",
        desc: "Migrating from fragmented data stores to unified cloud data lakehouses: establishing a foundation for real-time analytics, AI forecasting, and business intelligence.",
      },
      {
        title: "DevSecOps Automation",
        desc: "Automating CI/CD pipelines, container orchestration (Kubernetes), and continuous vulnerability scanning for bank-grade infrastructure security.",
      },
      {
        title: "Process & Workflow Automation",
        desc: "Automating manual business workflows using custom RPA and AI engines, freeing operational teams from error-prone batch file reconciliations.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Technical Audit",
        desc: "Comprehensive IT audit covering application portfolio, infrastructure costs, technical debt, security posture, and team capability maturity.",
      },
      {
        num: "02",
        title: "Target Architecture",
        desc: "Define target cloud architecture, API schemas, microservice boundaries, and a phased, risk-managed modernization roadmap.",
      },
      {
        num: "03",
        title: "Parallel Sprints",
        desc: "Execute modernization sprints in parallel workstreams, continuously validating performance, security, and business metrics.",
      },
      {
        num: "04",
        title: "Cutover & Upskilling",
        desc: "Cutover to the modern cloud environment with 90-day hypercare support, performance monitoring, and team upskilling workshops.",
      },
    ],
    industries: [
      { sector: "Apparel & Retail", detail: "ERP to warehouse MuleSoft integration, live variant ATP, and AI demand engines." },
      { sector: "Logistics", detail: "Legacy EDI modernization, automated order routing, and real-time cargo visibility." },
      { sector: "Healthcare", detail: "Cloud data warehouse modernization, HIPAA compliance automation, and patient APIs." },
      { sector: "Manufacturing", detail: "Industrial IoT streaming data, legacy ERP connector layers, and quality analytics." },
      { sector: "Construction", detail: "Legacy accounting software integrations and cloud field mobile sync." },
      { sector: "Real Estate", detail: "Centralized property data hub and automated lease workflow processing." },
    ],
    caseHighlight: {
      label: "Flagship Case Study",
      title: "Norrbrook Apparel Co.: Rebuilding the Commerce Stack on MuleSoft & AI",
      link: "/case-studies/norrbrook-apparel-ecommerce",
    },
  },
};

function getGenericService(slug: string): ServiceData {
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: formattedTitle,
    subtitle: "Enterprise Technology & Executive Advisory",
    category: "Strategic Capability",
    intro:
      "Strategic Value Solutions partners with executive leaders across e-Commerce, Logistics, Healthcare, Construction, Manufacturing, and Real Estate to architect scalable, high-performance technology solutions.",
    stats: [
      { label: "Focus", value: "Executive Technology Advisory" },
      { label: "Delivery", value: "Agile & Cloud-Native" },
      { label: "Scale", value: "Global Enterprise Architecture" },
      { label: "SLA", value: "99.99% Reliability Benchmark" },
    ],
    whatWeProvide: [
      {
        title: "Executive Strategic Advisory",
        desc: "C-suite consulting on technology roadmaps, vendor evaluation, and digital architecture.",
      },
      {
        title: "Custom Solution Engineering",
        desc: "Full-stack software engineering tailored to complex corporate environments and high-traffic performance demands.",
      },
      {
        title: "Cloud & Security Infrastructure",
        desc: "Bank-grade cloud deployment, multi-region scaling, and automated DevSecOps pipelines.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Discover",
        desc: "We analyze your business goals, technical constraints, and stakeholder requirements.",
      },
      {
        num: "02",
        title: "Blueprint",
        desc: "Craft the technical architecture, project roadmap, and governance model.",
      },
      {
        num: "03",
        title: "Execute",
        desc: "Build and deploy software in agile sprints with complete executive visibility.",
      },
      {
        num: "04",
        title: "Scale",
        desc: "Provide continuous monitoring, optimization, and post-launch support.",
      },
    ],
    industries: [
      { sector: "e-Commerce", detail: "Platform migrations, Shopify Plus, Hyvä Theme Magento 2." },
      { sector: "Logistics", detail: "Warehouse management systems and supply chain portals." },
      { sector: "Healthcare", detail: "HIPAA-compliant platforms and patient record sync." },
    ],
  };
}

export function generateMetadata() {
  return { title: "Services | Strategic Value Solutions" };
}

export default async function GenericServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = services[slug] || getGenericService(slug);

  return (
    <>
      <PageHeader label={`Service · ${data.category}`} title={data.title} subtitle={data.subtitle} />

      <section style={{ padding: "8px 0 64px" }}>
        <div className="container">
          <div className={styles.card}>
            {/* Category Tag */}
            <div className={styles.categoryBadge}>
              <span className={styles.badgeDot} />
              <span>{data.category}</span>
            </div>

            {/* Intro Box */}
            <div className={styles.introBox}>
              <p className={styles.introText}>{data.intro}</p>
            </div>

            {/* Stats Strip */}
            {data.stats && data.stats.length > 0 && (
              <div className={styles.statsGrid}>
                {data.stats.map((s, i) => (
                  <div key={i} className={styles.statCard}>
                    <span className={styles.statLabel}>{s.label}</span>
                    <span className={styles.statValue}>{s.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* What We Provide */}
            {data.whatWeProvide.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionTitle}>What We Provide</h3>
                <div className={styles.capabilitiesGrid}>
                  {data.whatWeProvide.map((item, i) => (
                    <div key={i} className={styles.capCard}>
                      <span className={styles.capNum}>0{i + 1} // CAPABILITY</span>
                      <h4 className={styles.capTitle}>{item.title}</h4>
                      <p className={styles.capDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Approach */}
            {data.approach.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionTitle}>Our 4-Phase Delivery Framework</h3>
                <div className={styles.approachGrid}>
                  {data.approach.map((step, i) => (
                    <div key={i} className={styles.stepCard}>
                      <div className={styles.stepNum}>{step.num}</div>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industry Applications Matrix */}
            {data.industries && data.industries.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionTitle}>Industry Applications</h3>
                <div className={styles.industryGrid}>
                  {data.industries.map((ind, i) => (
                    <div key={i} className={styles.indCard}>
                      <div className={styles.indTitle}>{ind.sector}</div>
                      <p className={styles.indDesc}>{ind.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Study Highlight Callout */}
            {data.caseHighlight && (
              <div className={styles.caseHighlight}>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>{data.caseHighlight.label}</span>
                  <span className={styles.highlightTitle}>{data.caseHighlight.title}</span>
                </div>
                <Link href={data.caseHighlight.link} className={styles.highlightBtn}>
                  <span>Explore Case Study</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
