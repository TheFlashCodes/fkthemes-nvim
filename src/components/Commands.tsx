import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";

const commands = [
  {
    command: ":FkThemePicker",
    description: "Open the interactive theme picker with preview",
  },
  {
    command: ":FkThemeNext",
    description: "Cycle to the next theme in your list",
  },
  {
    command: ":FkThemePrev",
    description: "Cycle to the previous theme in your list",
  },
  {
    command: ":FkThemeRandom",
    description: "Apply a random theme from your collection",
  },
  {
    command: ":FkThemeList",
    description: "Display all available themes",
  },
  {
    command: ":FkThemeToggleTransparency",
    description: "Toggle transparent background on/off",
  },
];

const Commands = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Commands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available commands for theme management
          </p>
        </div>

        <div className="grid gap-4">
          {commands.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <code className="text-lg font-mono text-accent font-semibold">
                    {item.command}
                  </code>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-6 bg-secondary/50 border-primary/20">
          <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            Lua API
          </h3>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-muted-foreground">
              <span className="text-accent">require</span>
              <span className="text-foreground">(</span>
              <span className="text-green-400">"fkthemes"</span>
              <span className="text-foreground">).</span>
              <span className="text-accent">switch_theme</span>
              <span className="text-foreground">(</span>
              <span className="text-green-400">"theme_name"</span>
              <span className="text-foreground">)</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-accent">require</span>
              <span className="text-foreground">(</span>
              <span className="text-green-400">"fkthemes"</span>
              <span className="text-foreground">).</span>
              <span className="text-accent">toggle_transparency</span>
              <span className="text-foreground">()</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-accent">require</span>
              <span className="text-foreground">(</span>
              <span className="text-green-400">"fkthemes"</span>
              <span className="text-foreground">).</span>
              <span className="text-accent">get_current_theme</span>
              <span className="text-foreground">()</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Commands;
