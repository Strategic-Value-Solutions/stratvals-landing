import PageHeader from "../../../components/PageHeader";

const newsContent: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    paragraphs: { type: "p" | "h3" | "ul"; content: string | string[] }[];
  }
> = {
  "strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab": {
    title: "Strategic Value Solutions Announces Strategic Partnership with Bytes Technolab",
    date: "September 22, 2023",
    image: "/images/news-bytes.jpg",
    paragraphs: [
      {
        type: "p",
        content:
          "Strategic Value Solutions, a leading provider of strategic consulting and enterprise technology solutions, is thrilled to announce a strategic partnership with Bytes Technolab to enhance and expand service offerings across global markets.",
      },
      {
        type: "p",
        content:
          "The collaboration comes as a direct response to growing demand for comprehensive, end-to-end digital transformation solutions in today's business landscape. Both companies bring deep expertise to leverage combined strengths for corporate clients worldwide.",
      },
      {
        type: "p",
        content:
          "Strategic Value Solutions specializes in executive consulting, helping organizations streamline operations, improve profitability, and achieve long-term success. Bytes Technolab adds cutting-edge technology and design execution capabilities.",
      },
      { type: "h3", content: "Key Benefits of the Partnership Include:" },
      {
        type: "ul",
        content: [
          "Holistic Solutions: Broader range of services from technology implementation to user-centric design.",
          "Innovation: Fostering a culture of innovation across emerging technologies and engineering trends.",
          "Global Reach: Serving enterprise clients across international geographies effectively.",
          "Cost-Efficiency: Delivering measurable results through consulting and technical synergy.",
        ],
      },
      {
        type: "p",
        content:
          "This partnership represents a significant milestone, underscoring a shared commitment to delivering exceptional business outcomes worldwide.",
      },
    ],
  },
  "strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley": {
    title:
      "Strategic Value Solutions Announces Strategic Partnership with Pennsylvania State University, Great Valley",
    date: "September 22, 2023",
    image: "/images/news-partnership.jpg",
    paragraphs: [
      {
        type: "p",
        content:
          "Strategic Value Solutions is thrilled to announce a strategic partnership with Penn State University, Great Valley - a premier institute renowned for STEM and Business Management education.",
      },
      {
        type: "p",
        content:
          "The collaboration is focused on driving innovative, technology-driven research and software solutions in today's rapidly evolving business landscape.",
      },
      {
        type: "h3", content: "Partnership Highlights:" },
      {
        type: "ul",
        content: [
          "Broader Service Offerings: Integrating academic research into enterprise software delivery.",
          "Culture of Innovation: Remaining at the forefront of emerging AI and engineering frameworks.",
          "Talent Pipeline: Engaging top academic talent for client engineering projects.",
        ],
      },
      {
        type: "p",
        content:
          "We are incredibly excited about this collaboration with Penn State Great Valley to pioneer next-generation technology solutions.",
      },
    ],
  },
  "stratvals-expands-executive-advisory-practice": {
    title: "Strategic Value Solutions Expands Executive Advisory Practice to Serve Healthcare and Supply Chain Sectors",
    date: "January 15, 2024",
    image: "/images/casestudy-schools.jpg",
    paragraphs: [
      {
        type: "p",
        content:
          "Strategic Value Solutions has formally announced the expansion of its executive technology advisory practice to provide specialized strategic consulting and technology modernization services for the Healthcare and Supply Chain & Logistics sectors.",
      },
      {
        type: "p",
        content:
          "Following successful transformation programs across e-Commerce, Logistics, and EdTech, this practice expansion responds to accelerating demand from C-suite leaders navigating regulatory compliance, IoT tracking integration, ERP modernization, and cloud infrastructure transitions.",
      },
      { type: "h3", content: "Practice Expansion Highlights:" },
      {
        type: "ul",
        content: [
          "Dedicated Healthcare Advisory: HIPAA-compliant digital health architecture, EHR integrations, and patient portal security.",
          "Supply Chain & Logistics Practice: Real-time IoT fleet telemetry, predictive warehouse data pipelines, and ERP modernization.",
          "C-Suite Program Governance: Establishing steering committees, RAID risk tracking, and milestone-driven ROI measurement.",
          "Global Delivery Scale: Integrating onshore advisory leadership with high-capacity engineering execution squads.",
        ],
      },
      {
        type: "p",
        content:
          "With this expansion, Strategic Value Solutions reinforces its position as the premier executive technology consulting firm for high-stakes enterprise initiatives.",
      },
    ],
  },
};

function getGenericNews(slug: string) {
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title,
    date: "September 2023",
    image: "/images/news-partnership.jpg",
    paragraphs: [
      {
        type: "p" as const,
        content:
          "Strategic Value Solutions continues to expand its global consulting footprint and strategic partnerships to deliver high-impact technology solutions for enterprise clients.",
      },
      {
        type: "h3" as const,
        content: "Corporate Milestone Highlights",
      },
      {
        type: "ul" as const,
        content: [
          "Strategic Alignment: Unifying business strategy with technical execution.",
          "Global Delivery: Expanding engineering support capabilities across international markets.",
          "Executive Advisory: Providing C-suite governance for high-stakes technology initiatives.",
        ],
      },
    ],
  };
}

export default async function GenericNewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = newsContent[slug] || getGenericNews(slug);

  return (
    <>
      <PageHeader label="News & Press Release" title={data.title} subtitle={data.date} />

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
              {data.paragraphs.map((block, i) => {
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
