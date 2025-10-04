import { Eye, Zap, Settings, Palette, Terminal, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Quick Theme Switching",
    description: "Move between themes effortlessly with instant feedback and seamless transitions.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "Preview themes in real-time as you navigate through your collection.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description: "Customize transparency, themes, keymaps, and more to fit your workflow.",
  },
  {
    icon: Palette,
    title: "Telescope Integration",
    description: "Browse and select themes with the power of Telescope's fuzzy finder.",
  },
  {
    icon: Terminal,
    title: "Modern UI",
    description: "Beautiful interface built with nui.nvim for a premium experience.",
  },
  {
    icon: Sparkles,
    title: "FkVim Ecosystem",
    description: "Part of the FkVim suite of tools for an enhanced Neovim experience.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for effortless theme management in Neovim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-accent transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
