import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Us | Strategic Value Solutions",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title={<>Hey! Contact Us</>} 
        subtitle="Contact Us"
        email="contact@stratvals.com"
      />
      
      <ContactForm />
    </>
  );
}
