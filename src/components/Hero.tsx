import { Button } from "@/components/ui/button";
import { Github, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary-glow font-medium">Part of the FkVim Ecosystem</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <span className="bg-gradient-primary bg-clip-text text-transparent">fkthemes.nvim</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          A powerful theme manager for Neovim. Switch, preview, and configure colorschemes with a sleek UI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#installation">Get Started</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/flashcodes-themayankjha/fkthemes.nvim" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Terminal preview mockup */}
        <div className="mt-20 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
            <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground ml-4">fkthemes.nvim</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-accent">:FkThemePicker</div>
              <div className="text-muted-foreground mt-2">→ Opening theme picker...</div>
              <div className="text-primary mt-1">✓ Theme switched to catppuccin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
