import PageHeader from "../../components/PageHeader";
import NewsList from "../../components/NewsList";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "News & Events | Strategic Value Solutions",
  description: "Stay up-to-date with our latest corporate announcements, press releases, and upcoming events.",
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHeader 
        title="News & Corporate Press" 
        subtitle="Official press releases, strategic announcements, and industry updates from Strategic Value Solutions."
      />
      
      <NewsList />

      {/* Press Contact & Media Kit */}
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
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
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
                Media Inquiries
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  marginBottom: "12px",
                  letterSpacing: "-0.03em",
                }}
              >
                Executive Press & Media Kit
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.92rem",
                  lineHeight: "1.65",
                  color: "var(--foreground-muted)",
                }}
              >
                For press releases, interview requests with our C-suite leadership, or official brand assets, please contact our corporate communications desk.
              </p>
            </div>

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground-subtle)" }}>
                  Media Relations Email
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--foreground)" }}>
                  press@stratvals.com
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground-subtle)" }}>
                  Response Time
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0284c7" }}>
                  Within 4 Hours (Mon-Fri)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
