import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Partners from "../components/Partners";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Services />
      <OurWork />
      <Partners />
      <BlogSection />
    </>
  );
}
