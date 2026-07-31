import PageHeader from "../../../components/PageHeader";

type Block = { type: "p" | "h3" | "ul" | "meta"; content: string | string[] };

const blogContent: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    image: string;
    blocks: Block[];
  }
> = {
  "a-complete-guide-to-enterprise-application-development": {
    title: "A Complete Guide to Enterprise Application Development",
    date: "Sep 22, 2023",
    readTime: "8 Min Read",
    image: "/images/blog1.webp",
    blocks: [
      {
        type: "p",
        content:
          "Enterprise Application Development is a strategic approach for designing, developing, and deploying mission-critical software solutions that power modern businesses. Unlike consumer apps, enterprise applications must handle massive scale, strict security requirements, complex integrations with legacy systems, and multiple user roles - all while maintaining near-perfect uptime.",
      },
      {
        type: "p",
        content:
          "As organizations across e-Commerce, Logistics, Healthcare, Construction, and Real Estate accelerate their digital transformation journeys, understanding the core principles of robust software engineering is non-negotiable. This guide walks through the architectural patterns, security frameworks, and best practices that define enterprise-grade platforms.",
      },
      { type: "h3", content: "1. What Is Enterprise Application Development?" },
      {
        type: "p",
        content:
          "Enterprise applications are software systems designed to be used by organizations to support critical operations. They include ERP (Enterprise Resource Planning), CRM platforms, supply chain logistics engines, and custom industry SaaS tools. The defining characteristic is complexity: they must integrate with dozens of internal data sources, support thousands of concurrent users, and comply with strict regulatory mandates.",
      },
      { type: "h3", content: "2. Cloud-Native Microservices Architecture" },
      {
        type: "p",
        content:
          "Monolithic architectures - where an entire application is built as a single tightly-coupled codebase - are rapidly being dismantled in favor of microservices. Each microservice is an independently deployable component responsible for a specific business domain.",
      },
      {
        type: "p",
        content:
          "Leveraging Docker containers, Kubernetes orchestration, and cloud infrastructure on AWS or Azure allows enterprise engineering teams to release features independently without risking site-wide outages.",
      },
      { type: "h3", content: "3. DevSecOps & Security Compliance" },
      {
        type: "p",
        content:
          "Security cannot be an afterthought. Modern enterprise engineering embeds automated security scans directly into CI/CD pipelines.",
      },
      {
        type: "ul",
        content: [
          "Zero-Trust Architecture: Every service request requires strict authentication and authorization.",
          "End-to-End Encryption: Data at rest and in transit encrypted via AES-256 and TLS 1.3.",
          "Automated Vulnerability Scanning: Continuous SAST and DAST analysis during every pull request.",
          "Role-Based Access Control (RBAC): Fine-grained access control preventing unauthorized data exposure.",
        ],
      },
      { type: "h3", content: "Conclusion" },
      {
        type: "p",
        content:
          "Delivering successful enterprise applications requires strategic roadmap vision, robust security engineering, and execution discipline. Strategic Value Solutions partners with corporate leaders to build scalable digital foundations that drive competitive advantage.",
      },
    ],
  },
  "from-legacy-systems-to-digital-excellence-the-tech-transformation-journey": {
    title: "From Legacy Systems to Digital Excellence: The Tech Transformation Journey",
    date: "Oct 14, 2023",
    readTime: "6 Min Read",
    image: "/images/dashboard.webp",
    blocks: [
      {
        type: "p",
        content:
          "Legacy systems often hold enterprises back, consuming up to 70% of IT budgets on maintenance alone while creating significant agility bottlenecks. Modernizing these core systems without disrupting daily business operations is the defining challenge for enterprise CIOs and CTOs today.",
      },
      { type: "h3", content: "The Strangler Fig Modernization Pattern" },
      {
        type: "p",
        content:
          "Rather than attempting high-risk big-bang re-writes, leading organizations adopt the Strangler Fig pattern. By incrementally replacing specific capabilities with modern microservices behind an API gateway, teams reduce operational risk while delivering continuous business value.",
      },
      { type: "h3", content: "Key Pillars of Tech Modernization" },
      {
        type: "ul",
        content: [
          "API Gateway & Service Mesh: Decoupling front-end user experiences from legacy back-end databases.",
          "Cloud Migration: Moving infrastructure from on-premises data centers to AWS or Azure cloud regions.",
          "Database Refactoring: Replacing monolithic relational databases with domain-driven data stores.",
        ],
      },
    ],
  },
  "maximizing-roi-with-agile-program-governance": {
    title: "Maximizing ROI with Agile Program Governance & Executive Advisory",
    date: "Nov 05, 2023",
    readTime: "7 Min Read",
    image: "/images/casestudy-dms.jpg",
    blocks: [
      {
        type: "p",
        content:
          "Over 65% of large-scale enterprise IT initiatives suffer from schedule slippage or scope creep due to fragmented governance. Strategic Program Management bridges the gap between executive vision and tactical sprint delivery.",
      },
      { type: "h3", content: "Establishing Executive Alignment & RAID Logs" },
      {
        type: "p",
        content:
          "Effective program governance mandates real-time risk, assumption, issue, and dependency (RAID) tracking. Weekly steering committees review automated metrics rather than subjective status reports.",
      },
      { type: "h3", content: "Core Governance Best Practices" },
      {
        type: "ul",
        content: [
          "Bi-Weekly Value Deliveries: Ensuring tangible working software is demonstrated to stakeholders.",
          "Objective KPI Tracking: Measuring velocity, defect density, and budget variance transparently.",
          "Change Control Architecture: Formalizing scope adjustments to protect release timelines.",
        ],
      },
    ],
  },
  "building-scalable-cloud-architecture-on-aws-and-azure": {
    title: "Building Scalable Cloud Architecture on AWS & Azure for Global Scale",
    date: "Dec 01, 2023",
    readTime: "9 Min Read",
    image: "/images/casestudy-broadband.jpg",
    blocks: [
      {
        type: "p",
        content:
          "Designing for global scale requires resilient multi-region infrastructure capable of handling millions of requests with sub-100ms latency. This guide explores architecture blueprints for enterprise multi-cloud resilience.",
      },
      { type: "h3", content: "Multi-Region Active-Active Deployment" },
      {
        type: "p",
        content:
          "By deploying applications across multiple geographically distributed cloud availability zones with automated DNS failover (Route 53 or Azure Traffic Manager), enterprises eliminate single points of failure.",
      },
      { type: "h3", content: "Architectural Foundations" },
      {
        type: "ul",
        content: [
          "Infrastructure as Code (Terraform): Version-controlling cloud environments for reproducible deployments.",
          "Container Orchestration (EKS/AKS): Auto-scaling compute nodes based on real-time traffic spikes.",
          "Distributed Caching (Redis): Reducing database query load and accelerating global response times.",
        ],
      },
    ],
  },
};

function getGenericBlog(slug: string) {
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title,
    date: "Sep 22, 2023",
    readTime: "5 Min Read",
    image: "/images/blog1.webp",
    blocks: [
      {
        type: "p" as const,
        content:
          "Modern corporate leaders face unprecedented pressure to accelerate digital transformation while maintaining system reliability and cost control. This strategic report examines how leading firms navigate tech stack modernization, AI integration, and enterprise software architecture.",
      },
      {
        type: "h3" as const,
        content: "Strategic Imperatives for Executive Leaders",
      },
      {
        type: "p" as const,
        content:
          "To stay competitive, organizations must align IT investments directly with business outcomes. By adopting agile program governance and modern cloud infrastructure, companies can reduce release cycle times while mitigating operational risk.",
      },
      {
        type: "ul" as const,
        content: [
          "Modular System Design: Decoupling core business functions for rapid iteration.",
          "Data Lakehouse Foundation: Centralizing analytics to power real-time business intelligence.",
          "Agile Governance: Establishing clear milestones, RAID logs, and executive steering committees.",
        ],
      },
    ],
  };
}

export default async function GenericBlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = blogContent[slug] || getGenericBlog(slug);

  return (
    <>
      <PageHeader
        label="Enterprise Insights"
        title={data.title}
        subtitle={data.date ? `${data.date} · ${data.readTime}` : "Blog Article"}
      />

      <section style={{ padding: "16px 0 40px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "24px",
              padding: "44px 52px",
              boxShadow: "var(--shadow-sm)",
              maxWidth: "960px",
              margin: "0 auto",
              border: "1px solid var(--border)",
              transition: "background-color 0.3s ease",
            }}
          >
            {data.image && (
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  marginBottom: "40px",
                  aspectRatio: "16/9",
                  maxHeight: "440px",
                }}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}

            <div style={{ maxWidth: "820px", margin: "0 auto" }}>
              {data.blocks.map((block, i) => {
                if (block.type === "p")
                  return (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.98rem",
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
                            fontSize: "0.94rem",
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
          </div>
        </div>
      </section>
    </>
  );
}
