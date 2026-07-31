import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Contact Us | Strategic Value Solutions",
  description: "Get in touch with our executive advisory team to discuss your next stage of digital transformation.",
};

const offices = [
  {
    region: "North America (HQ)",
    city: "Philadelphia & Malvern, PA",
    address: "Great Valley Corporate Center",
    email: "contact@stratvals.com",
    phone: "+1 (800) 555-STRAT",
  },
  {
    region: "EMEA Advisory Desk",
    city: "London, United Kingdom",
    address: "Canary Wharf Financial District",
    email: "emea@stratvals.com",
    phone: "+44 20 7946 0912",
  },
  {
    region: "APAC Engineering Hub",
    city: "Global Delivery Center",
    address: "Technology Park Campus",
    email: "apac@stratvals.com",
    phone: "+91 79 4000 8000",
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
                    fontWeight: 800,
                    color: "var(--foreground)",
                    marginBottom: "6px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Global Offices & Advisory Desks
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)" }}>
                  Connecting executive leaders with local domain experts across major global markets.
                </p>
              </div>

              <div
                style={{
                  background: "#e0f2fe",
                  color: "#0284c7",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                4-Hour Executive Response SLA
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {offices.map((off, i) => (
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
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#0284c7",
                      marginBottom: "6px",
                    }}
                  >
                    {off.region}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      marginBottom: "8px",
                    }}
                  >
                    {off.city}
                  </h4>
                  <div style={{ fontSize: "0.85rem", color: "var(--foreground-muted)", marginBottom: "14px" }}>
                    {off.address}
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <a href={"mailto:" + off.email} style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--foreground)" }}>
                      {off.email}
                    </a>
                    <div style={{ fontSize: "0.83rem", color: "var(--foreground-subtle)" }}>
                      {off.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
