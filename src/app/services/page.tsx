import PageHeader from "../../components/PageHeader";
import ServiceDevelopment from "../../components/ServiceDevelopment";
import ServiceBox from "../../components/ServiceBox";

export const metadata = {
  title: "Services | Strategic Value Solutions",
  description: "Explore our strategic consulting and technology services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title={<>Our <span className="gradient-text">Services</span></>} 
        subtitle="Transforming ideas into scalable, high-performance solutions tailored to your strategic goals."
      />
      
      <ServiceDevelopment />
      <ServiceBox />
    </>
  );
}
