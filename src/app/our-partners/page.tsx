import PageHeader from "../../components/PageHeader";
import ClientsSection from "../../components/ClientsSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Our Partners | Strategic Value Solutions",
  description: "Discover our strategic partnerships with Penn State University, Bytes Technolab, and global cloud providers.",
};

const partnerPillars = [
  {
    icon: "🔬",
    title: "R&D & Emerging Tech",
    desc: "Leveraging academic research labs at Penn State Great Valley to prototype AI, machine learning, and spatial data algorithms before enterprise rollout.",
  },
  {
    icon: "⚡",
    title: "Rapid Co-Development",
    desc: "Partnering with Bytes Technolab to spin up 50+ engineer squads on demand, reducing time-to-market for complex enterprise software by 40%.",
  },
  {
    icon: "🔒",
    title: "Enterprise Governance",
    desc: "Every partnership operates under strict ISO 27001, SOC 2 Type II compliance, and NDA confidentiality frameworks.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Strategic Alliances"
        title="Our Global Partners"
        subtitle="Collaborating with world-class academic institutions and technology engineering firms to deliver unmatched executive consulting."
      />

      <section style={{ padding: "16px 0 24px" }}>
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
                marginBottom: "28px",
                letterSpacing: "-0.03em",
              }}
            >
              Key Enterprise Alliances
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0284c7",
                    marginBottom: "10px",
                  }}
                >
                  Academic Research Partner
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    marginBottom: "12px",
                  }}
                >
                  Penn State University - Great Valley
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: "1.65",
                    color: "var(--foreground-muted)",
                  }}
                >
                  Collaborating on advanced STEM research, AI engineering frameworks, and executive technology management initiatives to keep our clients ahead of technological disruption.
                </p>
              </div>

              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#6d28d9",
                    marginBottom: "10px",
                  }}
                >
                  Global Technology Engineering
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    marginBottom: "12px",
                  }}
                >
                  Bytes Technolab
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: "1.65",
                    color: "var(--foreground-muted)",
                  }}
                >
                  Strategic co-development partner enabling rapid engineering scale, full-stack product development, cloud migrations, and 24/7 managed infrastructure support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Value Proposition */}
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
              Why Partner Synergy Matters for Our Clients
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.94rem",
                color: "var(--foreground-muted)",
                marginBottom: "32px",
              }}
            >
              Combining top-tier academic innovation with global software delivery capabilities gives our clients an unfair competitive advantage.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {partnerPillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "24px 20px",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", marginBottom: "10px" }}>{p.icon}</div>
                  <h4 style={{ fontWeight: 700, color: "var(--foreground)", marginBottom: "6px" }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: "0.86rem", lineHeight: "1.6", color: "var(--foreground-muted)" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />
      <ContactFormSection />
    </>
  );
}
