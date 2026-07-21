import PageHeader from "../../components/PageHeader";
import OurPartnerBox from "../../components/OurPartnerBox";

export const metadata = {
  title: "Our Partners | Strategic Value Solutions",
  description: "Discover the organizations we collaborate with.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader 
        title={<>Our <span className="gradient-text">Partners</span></>} 
        subtitle="Unlocking Success Through Partnership: Get to Know Our Collaborators"
      />
      
      <OurPartnerBox />
    </>
  );
}
