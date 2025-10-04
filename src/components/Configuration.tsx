import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Configuration = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Configuration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize fkthemes.nvim to match your workflow
          </p>
        </div>

        <Tabs defaultValue="default" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="default">Default Setup</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="keymaps">Keymaps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="default">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-secondary px-6 py-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-mono">Default configuration</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-foreground">
{`require("fkthemes").setup({
  transparent_background = false,
  themes = {
    "tokyonight",
    "catppuccin",
    "gruvbox",
    "rose-pine",
    "material",
    "moonlight",
  },
  default_theme = "tokyonight",
})`}
                </pre>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-secondary px-6 py-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-mono">Advanced options</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-foreground">
{`require("fkthemes").setup({
  transparent_background = true,
  themes = {
    "tokyonight",
    "catppuccin",
    "gruvbox",
  },
  default_theme = "catppuccin",
  
  -- Transparency options
  transparency = {
    enable = true,
    components = {
      "Normal",
      "NormalFloat",
      "SignColumn",
      "TelescopeNormal",
    },
  },
  
  -- UI customization
  ui = {
    border = "rounded",
    preview_size = 0.8,
  },
})`}
                </pre>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="keymaps">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-secondary px-6 py-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-mono">Custom keymaps</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-foreground">
{`require("fkthemes").setup({
  keymaps = {
    enable = true,
    open_picker = {
      lhs = "<leader>tp",
      rhs = "<cmd>FkThemePicker<cr>",
      mode = "n",
      opts = { desc = "Open theme picker" },
    },
    cycle_next = {
      lhs = "<leader>tn",
      rhs = "<cmd>FkThemeNext<cr>",
      mode = "n",
      opts = { desc = "Next theme" },
    },
    cycle_previous = {
      lhs = "<leader>tN",
      rhs = "<cmd>FkThemePrev<cr>",
      mode = "n",
      opts = { desc = "Previous theme" },
    },
  },
})`}
                </pre>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Configuration;
