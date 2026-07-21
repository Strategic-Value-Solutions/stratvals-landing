import PageHeader from "../../components/PageHeader";
import NewsList from "../../components/NewsList";

export const metadata = {
  title: "News & Events | Strategic Value Solutions",
  description: "Stay up-to-date with our latest news and upcoming events.",
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHeader 
        title={<>News & <span className="gradient-text">Events</span></>} 
        subtitle="Stay Informed and Up-to-Date with Our Latest News and Events."
      />
      
      <NewsList />
    </>
  );
}
