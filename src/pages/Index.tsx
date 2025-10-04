import Navbar from "@/components/Navbar";
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
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <InteractiveDemo />
      <div id="installation">
        <Installation />
      </div>
      <div id="configuration">
        <Configuration />
      </div>
      <div id="commands">
        <Commands />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
