import PageHeader from "../../../components/PageHeader";

type Block = { type: "p" | "h3" | "h4" | "ul" | "grid"; content: string | string[] };

type ServiceData = {
  title: string;
  subtitle: string;
  intro: string;
  blocks: Block[];
  approach: { num: string; title: string; desc: string }[];
  whatWeProvide: { title: string; desc: string }[];
};

const services: Record<string, ServiceData> = {
  "product-road-mapping-engineering": {
    title: "Product Road Mapping & Engineering",
    subtitle: "From Vision to Market-Ready Product",
    intro: "Strategic Product Road Mapping & Engineering is the backbone of turning visionary ideas into market-leading realities. In today's fast-paced digital economy, having a structured, scalable approach to product development is non-negotiable. Our engineering teams integrate closely with your business stakeholders to map out the entire lifecycle of your product — from initial ideation and feasibility analysis through to continuous deployment and scaling.",
    blocks: [
      { type: "p", content: "We believe that the most successful products are not built by accident. They emerge from a disciplined process of discovery, strategic planning, and iterative development. Our Product Road Mapping & Engineering service provides you with that process — refined across dozens of enterprise engagements in e-Commerce, Logistics, Healthcare, Construction, and Real Estate." },
      { type: "h3", content: "What We Provide" },
    ],
    whatWeProvide: [
      { title: "Discovery & Strategy", desc: "We conduct thorough market research, technical feasibility assessments, and user-persona mapping to ensure the product solves a real, pressing problem for your target audience." },
      { title: "Architecture & Engineering", desc: "Utilizing cloud-native microservices, React, Node.js, and modern CI/CD pipelines, our engineers build platforms designed for high availability, security, and rapid iteration." },
      { title: "Agile Delivery", desc: "Two-week sprints, continuous demos, and transparent backlog management keep your team fully informed and in control of priorities at every stage." },
      { title: "eCommerce Solutions", desc: "From Magento 2 and Shopify to fully bespoke commerce platforms, we build high-performing online stores optimized for conversion and scale." },
      { title: "Mobile App Development", desc: "Native iOS and Android or cross-platform React Native apps designed with intuitive UX and built for performance at scale." },
      { title: "ERP & CRM Solutions", desc: "Integration and customization of leading ERP and CRM platforms, ensuring your business systems talk to each other and power smarter decisions." },
    ],
    approach: [
      { num: "01", title: "Discover", desc: "We deeply analyze your business context, market landscape, competitive environment, and user needs to build a solid strategic foundation." },
      { num: "02", title: "Design", desc: "Our designers craft intuitive, beautiful, and conversion-optimized user experiences — validated with real users before a single line of production code is written." },
      { num: "03", title: "Develop", desc: "Our engineers build with quality and transparency. You have full visibility into progress, with weekly demos and daily standups." },
      { num: "04", title: "Launch", desc: "We orchestrate a careful, staged launch — including load testing, monitoring setup, and rapid-response support in the critical post-launch window." },
    ]
  },
  "strategic-program-management": {
    title: "Strategic Program Management",
    subtitle: "Delivering Complex Initiatives With Precision",
    intro: "Managing large-scale enterprise transformation requires more than a Gantt chart — it requires Strategic Program Management. At Stratvals, we provide end-to-end program governance, ensuring that complex, multi-million dollar initiatives are delivered on time, within budget, and aligned with your overarching corporate strategy.",
    blocks: [
      { type: "p", content: "We bring order to complexity by implementing proven methodologies (SAFe, PMI, Agile, Waterfall, and Hybrid frameworks) tailored to your organization's unique culture and risk appetite. Our program managers act as the strategic bridge between your C-suite executives, technical delivery teams, and external vendors — ensuring alignment at every layer." },
      { type: "h3", content: "What We Provide" },
    ],
    whatWeProvide: [
      { title: "Program Governance", desc: "Establish clear ownership, accountability structures, and decision-making frameworks that keep every workstream aligned to the program's strategic objectives." },
      { title: "Risk Management", desc: "Proactive identification, quantification, and mitigation of risks — ensuring issues are resolved before they become delivery-threatening blockers." },
      { title: "Vendor Management", desc: "Rigorous management of third-party vendors and SI partners, holding them to contractual commitments and quality standards on your behalf." },
      { title: "Executive Reporting", desc: "Real-time, data-driven dashboards and executive briefings providing full transparency into program health, milestones, budget burn, and ROI trajectory." },
      { title: "Resource Planning", desc: "Strategic allocation of human capital and budget across parallel workstreams, ensuring no resource bottlenecks impede critical path delivery." },
      { title: "PMO Setup & Consulting", desc: "We can establish or mature your internal Project Management Office, building the processes, tools, and people capabilities for sustained delivery excellence." },
    ],
    approach: [
      { num: "01", title: "Discover", desc: "Conduct a thorough program assessment: understand scope, constraints, stakeholders, dependencies, and current organizational maturity." },
      { num: "02", title: "Design", desc: "Craft the program blueprint — governance model, communication cadence, RAID log framework, and integrated master schedule." },
      { num: "03", title: "Develop", desc: "Execute the plan with rigorous cadence management — stand-ups, steering committees, risk reviews, and continuous adaptation." },
      { num: "04", title: "Launch", desc: "Orchestrate the go-live with comprehensive hypercare support, retrospectives, and a formal transition to BAU operations." },
    ]
  },
  "technology-transformation": {
    title: "Technology Transformation",
    subtitle: "From Legacy Systems to Digital Excellence",
    intro: "Technology Transformation is the process of systematically modernizing your organization's entire digital infrastructure — moving from slow, fragile, legacy systems to agile, secure, cloud-powered platforms that drive competitive advantage. We help enterprises execute this journey with minimal disruption and maximum impact.",
    blocks: [
      { type: "p", content: "Our transformation framework is built on three pillars: People, Process, and Technology. We know that deploying new software is only half the challenge. The other half is ensuring your workforce embraces the change, your processes are re-engineered to leverage new capabilities, and your technology architecture is designed to evolve with the market rather than constrain it." },
      { type: "h3", content: "What We Provide" },
    ],
    whatWeProvide: [
      { title: "Cloud Migration", desc: "Lift-and-shift, re-platform, or full re-architecture migrations to AWS, Azure, or GCP — executed with zero-downtime strategies and comprehensive rollback plans." },
      { title: "Legacy Modernization", desc: "Systematically decoupling monolithic systems into maintainable, independently deployable microservices that accelerate release velocity and reduce operational risk." },
      { title: "Data Modernization", desc: "Migrating from fragmented, siloed data stores to unified, analytics-ready data lakehouses — the foundation for AI/ML and real-time business intelligence." },
      { title: "Process Automation", desc: "Identifying and automating high-volume, low-value manual processes using RPA, AI, and custom workflow engines — freeing your teams for higher-value work." },
      { title: "Cybersecurity Uplift", desc: "Zero-trust architecture implementation, vulnerability remediation, and SOC2/ISO27001 compliance readiness — protecting your business as you modernize." },
      { title: "Change Management", desc: "Structured communication, training, and adoption programs that ensure your people embrace and champion new ways of working." },
    ],
    approach: [
      { num: "01", title: "Discover", desc: "Comprehensive IT audit covering application portfolio, infrastructure, technical debt, security posture, and operational maturity." },
      { num: "02", title: "Design", desc: "Define the target state architecture and a phased, risk-managed transformation roadmap aligned to business priorities." },
      { num: "03", title: "Develop", desc: "Execute modernization sprints in parallel workstreams, continuously validating business outcomes against the transformation thesis." },
      { num: "04", title: "Launch", desc: "Cutover to the new environment with rigorous hypercare, performance monitoring, and a 90-day stabilization program." },
    ]
  }
};

function getGenericService(slug: string): ServiceData {
  return {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    subtitle: "Strategic Excellence Delivered",
    intro: "We are an executives' consulting and professional services firm with deep experience in e-Commerce, Logistics, Healthcare, Construction, Manufacturing, and Real Estate. We support executives in achieving strategic objectives and driving business outcomes.",
    blocks: [],
    whatWeProvide: [],
    approach: []
  };
}

export default async function GenericServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = services[slug] || getGenericService(slug);

  return (
    <>
      <PageHeader
        title={<><span className="gradient-text">{data.title}</span></>}
        subtitle={data.subtitle}
      />

      {/* Intro Section */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "80px" }}>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "rgba(255,255,255,0.8)" }}>{data.intro}</p>
          </div>

          {data.whatWeProvide.length > 0 && (
            <>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "48px" }}>
                What We <span className="gradient-text">Provide</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "80px" }}>
                {data.whatWeProvide.map((item, i) => (
                  <div key={i} style={{
                    background: "rgba(30,35,46,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "32px",
                    backdropFilter: "blur(10px)",
                    transition: "border-color 0.3s",
                  }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(43,127,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Our Approach */}
      {data.approach.length > 0 && (
        <section style={{ background: "rgba(20,24,34,0.95)", padding: "100px 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "64px" }}>
              Our <span className="gradient-text">Approach</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px" }}>
              {data.approach.map((step, i) => (
                <div key={i} style={{ position: "relative", padding: "40px 32px", background: "rgba(30,35,46,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "3rem", fontWeight: 800, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "16px" }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "rgba(255,255,255,0.65)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
