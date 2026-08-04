import PageHeader from "../../components/PageHeader";
import ClientsSection from "../../components/ClientsSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Our Partners | Strategic Value Solutions",
  description:
    "Strategic Value Solutions partners with world-class organizations including Scrubs & Beyond, Husqvarna Group, Fancode, Penn State, and Bytes Technolab.",
};

const clientPartners = [
  {
    name: "Scrubs & Beyond",
    badge: "Retail & Commerce",
    color: "#2B7FFF",
    desc: "A transparent, client-centric approach to design and develop quality commerce platforms for web and mobile. This proven approach fosters seamless collaboration to build complex systems in the most secure and efficient way.",
    cta: "View Case Study",
    ctaHref: "/case-studies",
  },
  {
    name: "Husqvarna Group",
    badge: "Manufacturing & Operations",
    color: "#EDB120",
    desc: "Strategic technology advisory and program management engagement to modernize digital touchpoints and support global manufacturing operations with scalable, integrated software solutions.",
    cta: "View Case Study",
    ctaHref: "/case-studies",
  },
  {
    name: "Fancode",
    badge: "Sports & Media",
    color: "#2B7FFF",
    desc: "Full-stack product engineering and platform architecture for a leading sports media platform, enabling real-time data feeds, scalable fan experiences, and rapid feature delivery across web and mobile.",
    cta: "View Case Study",
    ctaHref: "/case-studies",
  },
];

const strategicPartners = [
  {
    badge: "Academic Research Partner",
    badgeColor: "#0284c7",
    name: "Penn State University - Great Valley",
    desc: "Collaborating on advanced STEM research, AI engineering frameworks, and executive technology management initiatives to keep our clients ahead of technological disruption.",
  },
  {
    badge: "Global Technology Engineering",
    badgeColor: "#6d28d9",
    name: "Bytes Technolab",
    desc: "Strategic co-development partner enabling rapid engineering scale, full-stack product development, cloud migrations, and 24/7 managed infrastructure support.",
  },
];

const partnerPillars = [
  {
    icon: "🔬",
    title: "R&D & Emerging Tech",
    desc: "Leveraging academic research labs at Penn State Great Valley to prototype AI, machine learning, and spatial data algorithms before enterprise rollout.",
  },
  {
    icon: "⚡",
    title: "Rapid Co-Development",
    desc: "Partnering with Bytes Technolab to spin up 50+ engineer squads on demand, reducing time-to-market for complex enterprise software significantly.",
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
        subtitle="Collaborating with world-class organizations and technology firms to deliver unmatched consulting outcomes for our executive clients."
      />

      {/* Client Partners (from live site) */}
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
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#0284c7",
                marginBottom: "8px",
              }}
            >
              Client Partnerships
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "28px",
                letterSpacing: "-0.03em",
              }}
            >
              Organizations We Have Proudly Served
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {clientPartners.map((partner, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr auto",
                    gap: "40px",
                    alignItems: "center",
                    padding: "28px 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {/* Partner Name / Logo Placeholder */}
                  <div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: partner.color,
                        marginBottom: "6px",
                      }}
                    >
                      {partner.badge}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {partner.name}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      lineHeight: "1.7",
                      color: "var(--foreground-muted)",
                      margin: 0,
                    }}
                  >
                    {partner.desc}
                  </p>

                  {/* CTA */}
                  <a
                    href={partner.ctaHref}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {partner.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic / Institutional Partners */}
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
                fontWeight: 600,
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
              {strategicPartners.map((p, i) => (
                <div
                  key={i}
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
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: p.badgeColor,
                      marginBottom: "10px",
                    }}
                  >
                    {p.badge}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: "12px",
                    }}
                  >
                    {p.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      lineHeight: "1.65",
                      color: "var(--foreground-muted)",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
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
                fontWeight: 600,
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
              Combining top-tier academic innovation with global software delivery capabilities gives our clients a real competitive advantage in their markets.
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
                  <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "6px" }}>
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
