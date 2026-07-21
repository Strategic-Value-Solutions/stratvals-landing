import PageHeader from "../../components/PageHeader";
import CaseStudyArchive from "../../components/CaseStudyArchive";

export const metadata = {
  title: "Case Studies | Strategic Value Solutions",
  description: "Read our success stories and detailed case studies.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader 
        title={<>Case <span className="gradient-text">Study</span></>} 
        subtitle="Creating digital products your clients will fall in love with our recent Projects."
      />
      
      <CaseStudyArchive />
    </>
  );
}
