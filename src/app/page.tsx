import HeroBanner from "../components/HeroBanner";
import AboutSection from "../components/AboutSection";
import SelectedWork from "../components/SelectedWork";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import ClientsSection from "../components/ClientsSection";
import BlogSection from "../components/BlogSection";
import ContactFormSection from "../components/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <SelectedWork />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <BlogSection />
      <ContactFormSection />
    </>
  );
}
