import PageHeader from "../../components/PageHeader";
import AboutSection from "../../components/AboutSection";
import ClientsSection from "../../components/ClientsSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "About Us | Strategic Value Solutions",
  description:
    "We are an executives' consulting and professional services firm driving digital transformation, program management, and IT strategy across global enterprises.",
};

const engagementModels = [
  {
    num: "01",
    title: "Executive Strategic Advisory",
    subtitle: "C-Suite & Board Technology Guidance",
    desc: "Direct access to seasoned technology advisors for architecture reviews, IT due diligence, vendor selection, and digital transformation roadmaps.",
  },
  {
    num: "02",
    title: "Dedicated Managed Teams",
    subtitle: "Full-Stack Agile Squads",
    desc: "Co-located or remote engineering teams (Product Managers, Solution Architects, Senior Devs, QA) integrated directly into your corporate workflow.",
  },
  {
    num: "03",
    title: "Turnkey Solution Delivery",
    subtitle: "Milestone-Driven Execution",
    desc: "End-to-end responsibility for scoping, designing, building, and deploying custom software platforms under strict SLA and budget guarantees.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Strategic Value Solutions - Who We Are"
        title="Executive Tech Advisory & Digital Transformation"
        subtitle="Empowering corporate leaders across e-Commerce, Logistics, Healthcare, Construction, Manufacturing, and Real Estate to build future-proof technology foundations."
      />

      <AboutSection />

      {/* Mission & Core Values */}
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
                marginBottom: "16px",
                letterSpacing: "-0.03em",
              }}
            >
              Our Mission & Executive Commitment
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.75",
                color: "var(--foreground-muted)",
                marginBottom: "20px",
              }}
            >
              At Strategic Value Solutions, we examine what industry leaders are doing to stay relevant and competitive in today&apos;s fast-paced digital economy. We then strategize using smart tools and global resources to understand the implications of every decision, closing the gap between internal capability and external market success.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  background: "var(--surface)",
                  padding: "24px 20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>🎯</div>
                <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "6px" }}>
                  Outcome Focused
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground-muted)" }}>
                  We measure success not by lines of code written, but by tangible ROI, cost reductions, and market velocity.
                </p>
              </div>

              <div
                style={{
                  background: "var(--surface)",
                  padding: "24px 20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>🤝</div>
                <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "6px" }}>
                  Executive Trust
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground-muted)" }}>
                  We maintain 24/7 integrity in communicating, reporting, and collaborating with C-suite stakeholders.
                </p>
              </div>

              <div
                style={{
                  background: "var(--surface)",
                  padding: "24px 20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>🌐</div>
                <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "6px" }}>
                  Global Scale
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground-muted)" }}>
                  Flexible team deployment across North America, Europe, and Asia to support global enterprise initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Operating Models */}
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
              Flexible Engagement & Operating Models
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.94rem",
                color: "var(--foreground-muted)",
                marginBottom: "32px",
              }}
            >
              We adapt to your corporate structure, providing leadership where needed and technical muscle where required.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {engagementModels.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    padding: "32px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "var(--foreground-subtle)",
                      marginBottom: "12px",
                    }}
                  >
                    {item.num}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#0284c7",
                      marginBottom: "12px",
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.87rem",
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
        </div>
      </section>

      <ClientsSection />
      <ContactFormSection />
    </>
  );
}
