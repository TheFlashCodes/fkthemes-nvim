import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import Installation from "@/components/Installation";
import Configuration from "@/components/Configuration";
import Commands from "@/components/Commands";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <InteractiveDemo />
      <Installation />
      <Configuration />
      <Commands />
      <Footer />
    </div>
  );
};

export default Index;
