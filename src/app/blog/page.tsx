import PageHeader from "../../components/PageHeader";
import BlogArchive from "../../components/BlogArchive";

export const metadata = {
  title: "Blog | Strategic Value Solutions",
  description: "Read our latest thoughts on strategic technology solutions.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title={<>Our <span className="gradient-text">Blogs</span></>} 
        subtitle="Blogs"
      />
      
      <BlogArchive />
    </>
  );
}
