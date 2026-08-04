import PageHeader from "../../../components/PageHeader";
import ContactFormSection from "../../../components/ContactFormSection";

type ServiceData = {
  title: string;
  subtitle: string;
  intro: string;
  whatWeProvide: { title: string; desc: string }[];
  approach: { num: string; title: string; desc: string }[];
};

const services: Record<string, ServiceData> = {
  "product-road-mapping-engineering": {
    title: "Product Road Mapping & Engineering",
    subtitle: "From Vision to Market-Ready Product",
    intro:
      "Need help with packaging the next big technology idea or transforming traditional software development processes? We help create a product roadmap for strategic growth and industry positioning, guide your cloud migration, and introduce the latest SecDevOps and CI/CD processes. Our engineering teams integrate closely with your executive stakeholders to map out the entire product lifecycle, from initial ideation and technical feasibility through to continuous deployment and global scale.",
    whatWeProvide: [
      {
        title: "Discovery & Product Strategy",
        desc: "We conduct thorough market research, technical feasibility assessments, competitive analysis, and user-persona mapping to ensure the product solves real enterprise challenges.",
      },
      {
        title: "Cloud-Native Architecture",
        desc: "Utilizing microservices, React, Node.js, and automated CI/CD pipelines on AWS or Azure designed for high availability, security, and sub-100ms response times.",
      },
      {
        title: "Agile Delivery & Governance",
        desc: "Two-week sprints, continuous working software demos, and transparent backlog management keep your executive team fully in control of priorities.",
      },
      {
        title: "eCommerce Platform Engineering",
        desc: "Bespoke commerce engines, Hyva Theme Magento implementations, and Shopify Plus integrations optimized for conversion and heavy traffic volume.",
      },
      {
        title: "Mobile Application Engineering",
        desc: "Native iOS and Android apps or cross-platform React Native solutions designed with intuitive UX and enterprise security standards.",
      },
      {
        title: "ERP & CRM Systems Integration",
        desc: "Seamless integration and customization of leading ERP and CRM platforms, ensuring your core business software ecosystem communicates reliably.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Discover",
        desc: "We deeply analyze your business context, market landscape, competitive environment, and user needs to build a solid strategic roadmap.",
      },
      {
        num: "02",
        title: "Design",
        desc: "Our UI/UX designers craft intuitive, high-converting interfaces and interactive prototypes - validated before production engineering begins.",
      },
      {
        num: "03",
        title: "Develop",
        desc: "Our engineers build with quality and transparency. You receive full visibility into progress with weekly demos and automated CI/CD builds.",
      },
      {
        num: "04",
        title: "Launch",
        desc: "We orchestrate careful cutovers including load testing, security audits, monitoring setup, and post-launch hypercare support.",
      },
    ],
  },
  "strategic-program-management": {
    title: "Strategic Program Management",
    subtitle: "Delivering Complex Initiatives With Precision",
    intro:
      "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources to understand the implications of every choice our clients can make. At Stratvals, we provide C-suite program leadership, ensuring complex multi-million dollar initiatives are delivered on schedule, within budget, and fully aligned with corporate goals.",
    whatWeProvide: [
      {
        title: "Enterprise Program Governance",
        desc: "Establish clear ownership, accountability structures, steering committee cadences, and decision frameworks that keep every cross-functional workstream aligned.",
      },
      {
        title: "RAID & Risk Management",
        desc: "Proactive identification, quantification, and mitigation of risks, assumptions, issues, and dependencies - preventing blockers before they impact delivery.",
      },
      {
        title: "Vendor & SI Management",
        desc: "Rigorous management of third-party vendors and system integrator partners, holding external teams to strict quality and milestone commitments.",
      },
      {
        title: "Executive Dashboard Reporting",
        desc: "Real-time, data-driven dashboards and executive briefings providing C-suite stakeholders complete visibility into program health and ROI.",
      },
      {
        title: "Change Management & Adoption",
        desc: "Structured organizational change management programs that train internal teams, accelerate user adoption, and maximize software ROI.",
      },
      {
        title: "Budget & Financial Control",
        desc: "Continuous financial forecasting, resource allocation tracking, and cost optimization to keep multi-year programs within approved budget.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Assess",
        desc: "Conduct a rapid 360-degree program assessment: understand scope, constraints, stakeholders, dependencies, and organizational maturity.",
      },
      {
        num: "02",
        title: "Blueprint",
        desc: "Establish the program governance model, communication cadence, RAID log framework, and integrated master delivery schedule.",
      },
      {
        num: "03",
        title: "Execute",
        desc: "Execute the master plan with rigorous cadence management - stand-ups, steering reviews, risk assessments, and continuous iteration.",
      },
      {
        num: "04",
        title: "Transition",
        desc: "Orchestrate program go-live with hypercare support, formal retrospectives, and seamless operational handoff.",
      },
    ],
  },
  "technology-transformation": {
    title: "Technology Transformation",
    subtitle: "From Legacy Monoliths to Cloud-Native Excellence",
    intro:
      "Looking for digital transformation for your business but not sure where to turn? Need help with technology selection or cloud migration? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today's rapidly evolving environment means taking bold chances and making insightful decisions. We systematically modernize your digital infrastructure, transitioning from slow legacy systems to agile, secure, cloud-powered solutions that drive competitive advantage with zero operational disruption.",
    whatWeProvide: [
      {
        title: "Cloud Infrastructure Migration",
        desc: "Re-platforming and full re-architecture migrations to AWS, Azure, or GCP with zero-downtime cutover strategies.",
      },
      {
        title: "Monolithic Decoupling",
        desc: "Deconstructing legacy monoliths into maintainable microservices using the Strangler Fig pattern to accelerate feature release speed.",
      },
      {
        title: "Data Lakehouse Modernization",
        desc: "Migrating from fragmented data stores to unified data lakehouses - establishing a foundation for real-time analytics and AI/ML.",
      },
      {
        title: "DevSecOps Automation",
        desc: "Automating CI/CD pipelines, container orchestration (Kubernetes), and continuous vulnerability scanning for bank-grade security.",
      },
      {
        title: "API Gateway & Mesh Architecture",
        desc: "Designing secure API layers that connect legacy core databases with modern web, mobile, and third-party partner applications.",
      },
      {
        title: "Process & Workflow Automation",
        desc: "Automating manual business workflows using custom RPA and AI engines, freeing operational teams for high-value strategic work.",
      },
    ],
    approach: [
      {
        num: "01",
        title: "Audit",
        desc: "Comprehensive IT audit covering application portfolio, infrastructure costs, technical debt, security posture, and team maturity.",
      },
      {
        num: "02",
        title: "Architecture",
        desc: "Define target cloud architecture and a phased, risk-managed modernization roadmap aligned to business priorities.",
      },
      {
        num: "03",
        title: "Modernize",
        desc: "Execute modernization sprints in parallel workstreams, continuously validating performance and business metrics.",
      },
      {
        num: "04",
        title: "Stabilize",
        desc: "Cutover to the modern environment with 90-day hypercare support, performance monitoring, and team upskilling.",
      },
    ],
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
    intro:
      "Strategic Value Solutions partners with executive leaders across e-Commerce, Logistics, Healthcare, Construction, Manufacturing, and Real Estate to architect scalable, high-performance technology solutions.",
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
  };
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
      <PageHeader label="Service Overview" title={data.title} subtitle={data.subtitle} />

      <section style={{ padding: "16px 0 40px" }}>
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
                  fontSize: "1.08rem",
                  lineHeight: "1.75",
                  color: "var(--foreground)",
                  fontWeight: 500,
                }}
              >
                {data.intro}
              </p>
            </div>

            {data.whatWeProvide.length > 0 && (
              <div style={{ marginBottom: "52px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "28px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  What We Provide
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {data.whatWeProvide.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        padding: "28px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.86rem",
                          lineHeight: "1.65",
                          color: "var(--foreground-muted)",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.approach.length > 0 && (
              <div
                style={{
                  paddingTop: "36px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "28px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Our Approach
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {data.approach.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        padding: "28px 24px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "2rem",
                          fontWeight: 600,
                          color: "var(--foreground-subtle)",
                          marginBottom: "12px",
                          lineHeight: 1,
                        }}
                      >
                        {step.num}
                      </div>
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          marginBottom: "8px",
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          lineHeight: "1.6",
                          color: "var(--foreground-muted)",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
