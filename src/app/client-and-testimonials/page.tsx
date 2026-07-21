import PageHeader from "../../components/PageHeader";
import Partners from "../../components/Partners";

export const metadata = {
  title: "Client & Testimonials | Strategic Value Solutions",
  description: "See what our clients have to say about working with us.",
};

export default function ClientTestimonialsPage() {
  return (
    <>
      <PageHeader 
        title={<>Client & <span className="gradient-text">Testimonials</span></>} 
        subtitle="Happy Clients, Thriving Businesses: Hear Their Testimonials, Stories of Triumph and Partnership"
      />
      
      <Partners title="Words from our Clients" />
    </>
  );
}
