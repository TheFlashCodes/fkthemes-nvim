import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Book, Settings, Code, Palette, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Home,
    content: {
      title: "Getting Started with fkthemes.nvim",
      sections: [
        {
          heading: "Introduction",
          text: "fkthemes.nvim is a powerful Neovim theme manager that allows you to easily switch between multiple color schemes with seamless integration.",
        },
        {
          heading: "Prerequisites",
          text: "Before installing fkthemes.nvim, ensure you have:",
          list: [
            "Neovim >= 0.8.0",
            "A plugin manager (lazy.nvim, packer.nvim, etc.)",
            "Git installed on your system",
          ],
        },
        {
          heading: "Quick Start",
          code: `-- Using lazy.nvim
{
  "flashcodes-themayankjha/fkthemes.nvim",
  config = function()
    require("fkthemes").setup()
  end
}`,
        },
      ],
    },
  },
  {
    id: "installation",
    title: "Installation",
    icon: Book,
    content: {
      title: "Installation Guide",
      sections: [
        {
          heading: "Using lazy.nvim",
          code: `{
  "flashcodes-themayankjha/fkthemes.nvim",
  dependencies = {
    "nvim-lua/plenary.nvim",
  },
  config = function()
    require("fkthemes").setup({
      themes = { "catppuccin", "tokyonight", "gruvbox" },
      default_theme = "catppuccin"
    })
  end
}`,
        },
        {
          heading: "Using packer.nvim",
          code: `use {
  "flashcodes-themayankjha/fkthemes.nvim",
  requires = { "nvim-lua/plenary.nvim" },
  config = function()
    require("fkthemes").setup()
  end
}`,
        },
        {
          heading: "Manual Installation",
          text: "Clone the repository into your Neovim plugin directory:",
          code: `git clone https://github.com/flashcodes-themayankjha/fkthemes.nvim \\
  ~/.local/share/nvim/site/pack/plugins/start/fkthemes.nvim`,
        },
      ],
    },
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: Settings,
    content: {
      title: "Configuration Options",
      sections: [
        {
          heading: "Basic Configuration",
          code: `require("fkthemes").setup({
  themes = { "catppuccin", "tokyonight", "gruvbox" },
  default_theme = "catppuccin",
  transparent_background = false,
  theme_picker = {
    enabled = true,
    border = "rounded",
  }
})`,
        },
        {
          heading: "Available Options",
          text: "Configure fkthemes.nvim with these options:",
          list: [
            "themes: List of theme names to manage",
            "default_theme: Theme to load on startup",
            "transparent_background: Enable/disable transparency",
            "theme_picker.enabled: Show/hide theme picker",
            "theme_picker.border: Border style (rounded, single, double)",
          ],
        },
        {
          heading: "Advanced Configuration",
          code: `require("fkthemes").setup({
  themes = {
    "catppuccin",
    "tokyonight",
    "gruvbox",
    "rose-pine",
    "dracula",
    "nord",
  },
  default_theme = "catppuccin",
  transparent_background = true,
  theme_picker = {
    enabled = true,
    border = "rounded",
    width = 60,
    height = 20,
  },
  on_theme_change = function(theme_name)
    print("Switched to: " .. theme_name)
  end
})`,
        },
      ],
    },
  },
  {
    id: "commands",
    title: "Commands",
    icon: Code,
    content: {
      title: "Available Commands",
      sections: [
        {
          heading: "Theme Management",
          text: "Use these commands to manage your themes:",
          list: [
            ":FkTheme <name> - Switch to specified theme",
            ":FkThemePicker - Open interactive theme picker",
            ":FkThemeList - List all available themes",
            ":FkThemeNext - Cycle to next theme",
            ":FkThemePrev - Cycle to previous theme",
            ":FkThemeRandom - Switch to random theme",
          ],
        },
        {
          heading: "Keymaps",
          text: "Set up custom keymaps for quick access:",
          code: `-- Add to your init.lua
vim.keymap.set("n", "<leader>tp", ":FkThemePicker<CR>", { desc = "Theme picker" })
vim.keymap.set("n", "<leader>tn", ":FkThemeNext<CR>", { desc = "Next theme" })
vim.keymap.set("n", "<leader>tp", ":FkThemePrev<CR>", { desc = "Previous theme" })`,
        },
        {
          heading: "Lua API",
          code: `-- Switch theme programmatically
require("fkthemes").set_theme("catppuccin")

-- Get current theme
local current = require("fkthemes").get_current_theme()

-- Get list of available themes
local themes = require("fkthemes").get_themes()`,
        },
      ],
    },
  },
  {
    id: "themes",
    title: "Themes",
    icon: Palette,
    content: {
      title: "Supported Themes",
      sections: [
        {
          heading: "Available Themes",
          text: "fkthemes.nvim supports the following popular themes:",
          list: [
            "Catppuccin - Soothing pastel theme",
            "Tokyo Night - Dark theme inspired by Tokyo nights",
            "Gruvbox - Retro groove color scheme",
            "Rose Pine - All natural pine, faux fur and soho vibes",
            "Dracula - Dark theme with vibrant colors",
            "Nord - Arctic, north-bluish color palette",
            "Material - Material Design colors",
            "Moonlight - Dark theme with moonlight colors",
          ],
        },
        {
          heading: "Adding Custom Themes",
          text: "You can add custom themes by installing them separately and including them in the themes list:",
          code: `require("fkthemes").setup({
  themes = {
    "catppuccin",
    "your-custom-theme",
  }
})`,
        },
      ],
    },
  },
  {
    id: "api",
    title: "API Reference",
    icon: Zap,
    content: {
      title: "API Reference",
      sections: [
        {
          heading: "setup(config)",
          text: "Initialize fkthemes with configuration options.",
          code: `require("fkthemes").setup({
  themes = { "catppuccin", "tokyonight" },
  default_theme = "catppuccin"
})`,
        },
        {
          heading: "set_theme(name)",
          text: "Programmatically switch to a theme.",
          code: `require("fkthemes").set_theme("tokyonight")`,
        },
        {
          heading: "get_current_theme()",
          text: "Get the name of the currently active theme.",
          code: `local theme = require("fkthemes").get_current_theme()
print("Current theme: " .. theme)`,
        },
        {
          heading: "get_themes()",
          text: "Get a list of all available themes.",
          code: `local themes = require("fkthemes").get_themes()
for _, theme in ipairs(themes) do
  print(theme)
end`,
        },
        {
          heading: "next_theme()",
          text: "Cycle to the next theme in the list.",
          code: `require("fkthemes").next_theme()`,
        },
        {
          heading: "prev_theme()",
          text: "Cycle to the previous theme in the list.",
          code: `require("fkthemes").prev_theme()`,
        },
      ],
    },
  },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");

  const currentSection = docSections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border fixed left-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-6 space-y-1">
            <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            {docSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.title}
                  {activeSection === section.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden w-full border-b border-border bg-background sticky top-16 z-10">
          <div className="flex items-center gap-2 p-4 overflow-x-auto">
            {docSections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  variant={activeSection === section.id ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap gap-2 hover:text-primary hover:border-primary"
                >
                  <Icon className="w-4 h-4" />
                  {section.title}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              {currentSection?.content.title}
            </h1>

            <div className="space-y-8">
              {currentSection?.content.sections.map((section, idx) => (
                <Card key={idx} className="p-6 bg-card border-border">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {section.heading}
                  </h2>
                  {section.text && (
                    <p className="text-muted-foreground mb-4">{section.text}</p>
                  )}
                  {section.list && (
                    <ul className="space-y-2 mb-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.code && (
                    <pre className="bg-background border border-border rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-foreground">
                        {section.code}
                      </code>
                    </pre>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
