import PageHeader from "../../components/PageHeader";
import ClientsSection from "../../components/ClientsSection";
import ContactFormSection from "../../components/ContactFormSection";

export const metadata = {
  title: "Client & Testimonials | Strategic Value Solutions",
  description: "See what executive leaders say about working with Strategic Value Solutions.",
};

export default function ClientTestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Client Success"
        title="Client & Testimonials"
        subtitle="Stories of executive partnership, flawless execution, and strategic outcomes delivered."
      />

      <ClientsSection />
      <ContactFormSection />
    </>
  );
}
