import PageHeader from "../../../components/PageHeader";

type Block = { type: "p" | "h3" | "ul" | "meta"; content: string | string[] };

const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  image: string;
  blocks: Block[];
}> = {
  "a-complete-guide-to-enterprise-application-development": {
    title: "A Complete Guide to Enterprise Application Development",
    date: "Sep 22, 2023",
    readTime: "8 Min Read",
    image: "/images/dashboard.webp",
    blocks: [
      { type: "p", content: "Enterprise Application Development is a strategic approach for designing, developing, and deploying mission-critical software solutions that power modern businesses. Unlike consumer apps, enterprise applications must handle massive scale, strict security requirements, complex integrations with legacy systems, and multiple user roles — all while maintaining near-perfect uptime." },
      { type: "p", content: "As organizations across every industry accelerate their digital transformation journeys, understanding the principles of robust enterprise software development has never been more critical. This guide walks through the core pillars, architectural patterns, and best practices that define enterprise-grade software." },
      { type: "h3", content: "1. What Is Enterprise Application Development?" },
      { type: "p", content: "Enterprise applications are software systems designed to be used by organizations rather than individual consumers. They include ERP (Enterprise Resource Planning) systems, CRM platforms, supply chain management tools, HR management systems, and custom industry-specific solutions. The defining characteristic is complexity: they must integrate with dozens of internal and external data sources, support hundreds or thousands of concurrent users, and comply with strict regulatory frameworks." },
      { type: "h3", content: "2. Cloud-Native Architecture: The New Standard" },
      { type: "p", content: "In 2024, cloud-native has moved from a buzzword to the de facto standard for enterprise software. Traditional monolithic architectures — where the entire application is a single, tightly-coupled unit — are being systematically dismantled in favor of microservices. Each microservice is a small, independently deployable unit responsible for a single business capability. This modularity provides unparalleled flexibility: teams can update, scale, or replace individual services without impacting the rest of the system." },
      { type: "p", content: "Containerization technologies like Docker and orchestration platforms like Kubernetes are essential enablers of this approach, allowing enterprise teams to achieve consistent deployments across development, staging, and production environments." },
      { type: "h3", content: "3. Security & Compliance: Non-Negotiable from Day One" },
      { type: "p", content: "Enterprise data is extraordinarily sensitive. Whether you are handling patient health records under HIPAA, financial transactions under SOX, or EU citizen data under GDPR, compliance is not optional. Modern enterprise development mandates a DevSecOps approach — security is integrated into every stage of the development lifecycle, not bolted on at the end." },
      { type: "ul", content: [
        "Zero-Trust Security: Every request, even from inside the network, is treated as potentially malicious and must be authenticated and authorized.",
        "End-to-End Encryption: Data at rest and in transit must be encrypted using industry-standard protocols (AES-256, TLS 1.3).",
        "Automated Vulnerability Scanning: CI/CD pipelines should include SAST, DAST, and dependency scanning tools to catch vulnerabilities before they reach production.",
        "Role-Based Access Control (RBAC): Granular permissions ensure employees only access the data and functions relevant to their role."
      ]},
      { type: "h3", content: "4. Integration Architecture" },
      { type: "p", content: "A major challenge in enterprise software is integrating with the existing technology stack. Most large organizations operate a complex web of legacy systems, modern SaaS tools, and custom-built applications. A well-designed integration layer — typically built on REST or GraphQL APIs, event-driven messaging (Kafka, RabbitMQ), and ESBs (Enterprise Service Buses) — is essential for ensuring that data flows seamlessly and reliably across the entire organization." },
      { type: "h3", content: "5. AI & Automation: The Next Frontier" },
      { type: "p", content: "The most significant evolution in enterprise software today is the embedding of Artificial Intelligence and Machine Learning directly into core business workflows. From predictive analytics dashboards that forecast supply chain disruptions to AI-powered chatbots that handle Tier-1 support queries, intelligent automation is delivering massive ROI for forward-thinking enterprises." },
      { type: "p", content: "For organizations planning their next enterprise application, ensuring a modern, AI-ready data architecture from the outset is critical. Building on a scalable data lake or lakehouse (using platforms like Databricks or Snowflake) allows you to power today's reporting needs while leaving the door wide open for tomorrow's AI initiatives." },
      { type: "h3", content: "Conclusion" },
      { type: "p", content: "Enterprise Application Development is one of the most complex and rewarding disciplines in software engineering. Success requires a clear architectural vision, an unwavering commitment to security and compliance, and a team deeply experienced in navigating the unique challenges of large organizations. At Strategic Value Solutions, we bring all three to every engagement — helping enterprises transform their technology foundation and deliver measurable business outcomes." },
    ]
  }
};

function getGenericBlog(slug: string) {
  return {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    date: "",
    readTime: "",
    image: "",
    blocks: [] as Block[]
  };
}

export default async function GenericBlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = blogContent[slug] || getGenericBlog(slug);

  return (
    <>
      <PageHeader
        title={<><span className="gradient-text">{data.title}</span></>}
        subtitle={data.date ? `${data.date} · ${data.readTime}` : "Blog"}
      />
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: "860px" }}>
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              style={{ width: "100%", borderRadius: "16px", marginBottom: "48px", objectFit: "cover", maxHeight: "480px" }}
            />
          )}
          {data.blocks.map((block, i) => {
            if (block.type === "p") return (
              <p key={i} style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "rgba(255,255,255,0.82)", marginBottom: "1.5rem" }}>
                {block.content as string}
              </p>
            );
            if (block.type === "h3") return (
              <h3 key={i} style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", margin: "2.5rem 0 1rem", paddingLeft: "16px", borderLeft: "3px solid var(--primary)" }}>
                {block.content as string}
              </h3>
            );
            if (block.type === "ul") return (
              <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {(block.content as string[]).map((item, j) => {
                  const colonIdx = item.indexOf(": ");
                  const label = colonIdx > -1 ? item.substring(0, colonIdx) : "";
                  const rest = colonIdx > -1 ? item.substring(colonIdx + 2) : item;
                  return (
                    <li key={j} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: "9px" }} />
                      <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: "1.7" }}>
                        {label && <strong style={{ color: "#fff" }}>{label}: </strong>}{rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
            return null;
          })}
          {data.blocks.length === 0 && (
            <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", padding: "60px 0" }}>
              Full article coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
