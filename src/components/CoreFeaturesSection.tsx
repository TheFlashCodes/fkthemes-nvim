import { Card } from "@/components/ui/card";
import { Zap, Eye, Settings, Layout, Search } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick Theme Switching",
    description: "Move between themes effortlessly.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "Preview themes instantly as you navigate.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description: "Customize transparency, themes, and keymaps.",
  },
  {
    icon: Layout,
    title: "Modern UI",
    description: "Built with `nui.nvim`.",
  },
  {
    icon: Search,
    title: "Telescope Integration",
    description: "Theme selection inside Telescope.",
  },
];

const CoreFeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, idx) => (
        <Card key={idx} className="p-4 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-bold text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CoreFeaturesSection;
