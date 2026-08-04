import PageHeader from "../../components/PageHeader";
import BlogArchive from "../../components/BlogArchive";

export const metadata = {
  title: "Blog | Strategic Value Solutions",
  description:
    "Insights, perspectives, and thought leadership on enterprise technology, digital transformation, and strategic program management.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title={<>Our <span className="gradient-text">Blog</span></>}
        subtitle="Insights and perspectives on enterprise technology, digital transformation, and the decisions that shape successful organizations."
      />

      <BlogArchive />
    </>
  );
}
