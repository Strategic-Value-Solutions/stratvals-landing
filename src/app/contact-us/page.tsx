import ContactFormSection from "../../components/ContactFormSection";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Strategic Value Solutions",
  description:
    "Say Hi! Reach us at contact@stratvals.com or call +1 (215) 720-1710. We are an executive technology advisory firm based in Philadelphia, PA.",
};

const contacts = [
  {
    label: "Email",
    value: "contact@stratvals.com",
    href: "mailto:contact@stratvals.com",
  },
  {
    label: "Phone",
    value: "+1 (215) 720-1710",
    href: "tel:+12157201710",
  },
  {
    label: "Headquarters",
    value: "Philadelphia & Malvern, PA",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <ContactFormSection />

      <section style={{ padding: "0 0 48px" }}>
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    marginBottom: "6px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Get in touch directly
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)" }}>
                  We typically respond within a few hours on business days.
                </p>
              </div>

              <div
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Quick response guaranteed
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {contacts.map((c, i) => (
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
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#0284c7",
                      marginBottom: "8px",
                    }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <Link
                      href={c.href}
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {c.value}
                    </Link>
                  ) : (
                    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--foreground)" }}>
                      {c.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
