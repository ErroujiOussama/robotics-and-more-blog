import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ContentSection />
      <Newsletter />
    </div>
  );
};

export default Index;