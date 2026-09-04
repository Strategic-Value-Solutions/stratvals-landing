import PageHeader from "../../components/PageHeader";
import ServicesSection from "../../components/ServicesSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Services | Strategic Value Solutions",
  description:
    "An executives' consulting and professional services firm with experience in e-Commerce, Logistics (3PL/4PL), and Healthcare.",
};

const techCategories = [
  {
    category: "Cloud & DevSecOps Infrastructure",
    tools: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Kubernetes", "Docker", "Terraform", "GitLab CI/CD"],
  },
  {
    category: "Modern Web & Mobile Engineering",
    tools: ["React.js", "Next.js", "TypeScript", "Node.js", "React Native", "Swift (iOS)", "Kotlin (Android)"],
  },
  {
    category: "Enterprise Commerce & ERP",
    tools: ["Shopify Plus", "Magento 2 (Hyva Theme)", "SAP ERP", "Salesforce CRM", "PostgreSQL", "Elasticsearch", "Redis Caching"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Capabilities & Expertise"
        title="Our Services"
        subtitle="Interactive and strategic services that will add real value to your business."
      />

      {/* Firm Positioning: verbatim from live site, expanded */}
      <section style={{ padding: "16px 0 8px" }}>
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
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "40px",
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0284c7",
                    marginBottom: "10px",
                  }}
                >
                  Who we are
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "20px",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.25,
                  }}
                >
                  Your #1 Business-specific Software Development Experts
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.0rem",
                    lineHeight: "1.75",
                    color: "var(--foreground-muted)",
                  }}
                >
                  We are an executives&apos; consulting and professional services firm with experience in e-Commerce, Logistics (3PL/4PL), and Healthcare. We support executives in achieving strategic objectives and driving business outcomes.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "16px",
                }}
              >
                {[
                  { sector: "e-Commerce", icon: "🛒", detail: "Platform migrations, Shopify Plus, headless commerce" },
                  { sector: "Logistics (3PL/4PL)", icon: "🚛", detail: "Supply chain visibility, warehouse management systems" },
                  { sector: "Healthcare", icon: "🏥", detail: "HIPAA-compliant platforms, patient portal, data systems" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "14px",
                      padding: "18px 16px",
                    }}
                  >
                    <div style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: "var(--foreground)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.sector}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--foreground-muted)", lineHeight: 1.5 }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Tech Stack Ecosystem */}
      <section style={{ padding: "16px 0 32px" }}>
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
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "12px",
                letterSpacing: "-0.03em",
              }}
            >
              Enterprise Technology Stack & Architecture
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.94rem",
                color: "var(--foreground-muted)",
                marginBottom: "32px",
              }}
            >
              We leverage modern, production-battle-tested frameworks and cloud infrastructure to ensure performance, security, and global scale across every engagement.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {techCategories.map((cat, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    padding: "28px 24px",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: "16px",
                    }}
                  >
                    {cat.category}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {cat.tools.map((tool, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.82rem",
                          fontWeight: 500,
                          padding: "6px 14px",
                          borderRadius: "var(--radius-pill)",
                          background: "var(--card-bg)",
                          color: "var(--foreground)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
