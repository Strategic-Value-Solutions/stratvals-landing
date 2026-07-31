import PageHeader from "../../components/PageHeader";
import ServicesSection from "../../components/ServicesSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Services | Strategic Value Solutions",
  description:
    "Explore our core enterprise technology services: Product Road Mapping, Strategic Program Management, and Technology Transformation.",
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
        subtitle="Transforming vision into scalable, high-performance technology platforms tailored to your strategic goals."
      />

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
                fontWeight: 800,
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
              We leverage modern, production-battle-tested frameworks and cloud infrastructure standards to ensure performance, security, and global scale.
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
                      fontWeight: 700,
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
