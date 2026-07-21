import PageHeader from "../../../components/PageHeader";

// Real content for each news article
const newsContent: Record<string, {
  title: string;
  date: string;
  image: string;
  paragraphs: { type: "p" | "h3" | "ul"; content: string | string[] }[];
}> = {
  "strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab": {
    title: "Strategic Value Solutions Announces Strategic Partnership with Bytes Technolab",
    date: "September 22, 2023",
    image: "/images/news-partnership.jpg",
    paragraphs: [
      { type: "p", content: "Strategic Value Solutions, a leading provider of strategic consulting and business solutions, is thrilled to announce a strategic partnership with Bytes Technolab, a renowned technology and design firm, to enhance and expand their service offerings across the global market." },
      { type: "p", content: "The collaboration between Strategic Value Solutions and Bytes Technolab comes as a direct response to the growing demand for comprehensive, end-to-end digital transformation solutions in today's business landscape. Both companies bring a wealth of experience and expertise to the table, and this partnership aims to leverage their combined strengths to deliver exceptional value to clients worldwide." },
      { type: "p", content: "Strategic Value Solutions specializes in strategic consulting, helping organizations streamline operations, improve profitability, and achieve long-term success. By joining forces with Bytes Technolab — a company known for its cutting-edge technology solutions, eCommerce development, and creative design capabilities — Strategic Value Solutions will be better equipped to address the evolving needs of its clients in an increasingly digital and competitive market." },
      { type: "h3", content: "Key Benefits of the Partnership Include:" },
      { type: "ul", content: [
        "Holistic Solutions: Clients of Strategic Value Solutions can now access a broader range of services, from technology implementation and digital transformation to user-centric design solutions.",
        "Innovation: The collaboration will foster a culture of innovation, enabling both companies to stay at the forefront of emerging technologies and design trends.",
        "Global Reach: Together, the companies will have an extended global reach, allowing them to serve clients across industries and geographies more effectively.",
        "Cost-Efficiency: Clients can expect cost-effective solutions that deliver measurable results, thanks to the synergy between consulting, technology, and design expertise."
      ]},
      { type: "p", content: "This partnership represents a significant milestone for both companies and underscores their shared commitment to delivering exceptional business outcomes. Both Strategic Value Solutions and Bytes Technolab look forward to a long and fruitful collaboration that will drive mutual growth and benefit their clients on a global scale." },
    ]
  },
  "strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley": {
    title: "Strategic Value Solutions Announces Strategic Partnership with Pennsylvania State University, Great Valley",
    date: "September 22, 2023",
    image: "/images/news-partnership.jpg",
    paragraphs: [
      { type: "p", content: "Strategic Value Solutions, a leading provider of strategic consulting and business solutions, is thrilled to announce a strategic partnership with Penn State University, Great Valley — a premier institute renowned for its excellence in STEM and Business Management education." },
      { type: "p", content: "The collaboration between Strategic Value Solutions and PSU Great Valley is all about driving innovative, technology-driven solutions in today's rapidly evolving business landscape. By joining forces with one of the most prestigious academic institutions in the region, we are positioning ourselves at the cutting edge of software innovation and talent development." },
      { type: "p", content: "Strategic Value Solutions specializes in strategic consulting, helping organizations streamline operations, improve profitability, and achieve long-term success. By joining forces with PSU, we'll be pioneering the next generation of software solutions that will transform industries and elevate User Experiences." },
      { type: "h3", content: "Partnership Highlights:" },
      { type: "ul", content: [
        "Broader Service Offerings: Clients of Strategic Value Solutions can now access a broader range of services, from technology implementation and digital transformation to user-centric design solutions.",
        "Culture of Innovation: The collaboration will foster a culture of innovation, enabling both organizations to stay at the forefront of emerging technologies.",
        "Extended Global Reach: Together, the organizations will have an extended global reach, allowing them to serve clients across industries and geographies more effectively.",
        "Cost-Effective Solutions: Clients can expect cost-effective solutions that deliver measurable results, thanks to the synergy between consulting, technology, and academic expertise."
      ]},
      { type: "p", content: "We are incredibly excited about this partnership with Penn State Great Valley. This collaboration will allow us to work closely with the next generation of technology leaders and leverage academic research to develop truly transformative solutions for our clients." },
    ]
  }
};

// Fallback generic news content
function getGenericNews(slug: string) {
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, date: "2023", image: "", paragraphs: [] };
}

export default async function GenericNewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = newsContent[slug] || getGenericNews(slug);

  return (
    <>
      <PageHeader
        title={<><span className="gradient-text">{data.title}</span></>}
        subtitle={`News & Events — ${data.date}`}
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
          {data.paragraphs.map((block, i) => {
            if (block.type === "p") return (
              <p key={i} style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "rgba(255,255,255,0.82)", marginBottom: "1.5rem" }}>
                {block.content as string}
              </p>
            );
            if (block.type === "h3") return (
              <h3 key={i} style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", margin: "2.5rem 0 1rem" }}>
                {block.content as string}
              </h3>
            );
            if (block.type === "ul") return (
              <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {(block.content as string[]).map((item, j) => {
                  const [label, ...rest] = item.split(": ");
                  return (
                    <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: "8px" }} />
                      <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: "1.7" }}>
                        <strong style={{ color: "#fff" }}>{label}:</strong> {rest.join(": ")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
            return null;
          })}
          {data.paragraphs.length === 0 && (
            <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", padding: "60px 0" }}>
              Full article coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
