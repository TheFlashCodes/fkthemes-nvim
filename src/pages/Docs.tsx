import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Howl } from 'howler';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, Home, Book, Settings, Code, Palette, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import CodeBlock from "@/components/ui/CodeBlock";
import { ThemeContext, themes } from "@/contexts/ThemeContext";
import DocsToc from "@/components/DocsToc";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";

const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Home,
    content: {
      title: "Getting Started with fkthemes.nvim",
      sections: [
        {
          id: "introduction",
          heading: "Introduction",
          text: "fkthemes.nvim is a powerful Neovim theme manager that allows you to easily switch between multiple color schemes with seamless integration. It is a modern Neovim plugin for theme management. Easily switch, preview, and configure multiple colorschemes with a sleek UI powered by nui.nvim and telescope.nvim.",
        },
        {
          id: "core-features",
          heading: "Core Features",
          component: <CoreFeaturesSection />,
        },
        {
          id: "prerequisites",
          heading: "Prerequisites",
          text: "Before installing fkthemes.nvim, ensure you have:",
          list: [
            "Neovim >= 0.8.0",
            "[nui.nvim](https://github.com/MunifTanjim/nui.nvim)",
            "[telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)",
            "Git installed on your system",
          ],
        },
        {
          id: "quick-installation",
          heading: "Quick Installation",
          text: "Install fkthemes.nvim using your favorite plugin manager:",
          code: `{\n  "flashcodes-themayankjha/fkthemes.nvim",\n  dependencies = {\n    "nvim-lua/plenary.nvim",\n  },\n  config = function()\n    require(\"fkthemes\").setup({\n      themes = { \"catppuccin\", \"tokyonight\", \"gruvbox\" },\n      default_theme = \"catppuccin\"
    })\n  end
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
          id: "lazy-nvim",
          heading: "Using lazy.nvim",
          code: `{\n  "flashcodes-themayankjha/fkthemes.nvim",\n  dependencies = {\n    "nvim-lua/plenary.nvim",\n  },\n  config = function()\n    require(\"fkthemes\").setup({\n      themes = { \"catppuccin\", \"tokyonight\", \"gruvbox\" },\n      default_theme = \"catppuccin\"
    })\n  end
}`,
        },
        {
          id: "packer-nvim",
          heading: "Using packer.nvim",
          code: `use {\n  \"flashcodes-themayankjha/fkthemes.nvim\",\n  requires = { \"nvim-lua/plenary.nvim\" },\n  config = function()\n    require(\"fkthemes\").setup()\n  end
}`,
        },
        {
          id: "manual-installation",
          heading: "Manual Installation",
          text: "Clone the repository into your Neovim plugin directory:",
          code: `git clone https://github.com/flashcodes-themayankjha/fkthemes.nvim \\n  ~/.local/share/nvim/site/pack/plugins/start/fkthemes.nvim`,
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
          id: "basic-configuration",
          heading: "Basic Configuration",
          code: `require(\"fkthemes\").setup({\n  themes = { \"catppuccin\", \"tokyonight\", \"gruvbox\" },\n  default_theme = \"catppuccin\",\n  transparent_background = false,\n  theme_picker = {\n    enabled = true,\n    border = \"rounded\",
  }
})`,
        },
        {
          id: "available-options",
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
          id: "advanced-configuration",
          heading: "Advanced Configuration",
          code: `require(\"fkthemes\").setup({\n  themes = {\n    \"catppuccin\",\n    \"tokyonight\",\n    \"gruvbox\",\n    \"rose-pine\",\n    \"dracula\",\n    \"nord\",
  },\n  default_theme = \"catppuccin\",
  transparent_background = true,\n  theme_picker = {\n    enabled = true,\n    border = \"rounded\",
    width = 60,\n    height = 20,
  },
  on_theme_change = function(theme_name)
    print(\"Switched to: \" .. theme_name)
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
          id: "theme-management",
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
          id: "keymaps",
          heading: "Keymaps",
          text: "Set up custom keymaps for quick access:",
          code: `-- Add to your init.lua
vim.keymap.set(\"n\", \"<leader>tp\", \":FkThemePicker<CR>\", { desc = \"Theme picker\" })
vim.keymap.set(\"n\", \"<leader>tn\", \":FkThemeNext<CR>\", { desc = \"Next theme\" })
vim.keymap.set(\"n\", \"<leader>tp\", \":FkThemePrev<CR>\", { desc = \"Previous theme\" })
`,
        },
        {
          id: "lua-api",
          heading: "Lua API",
          code: `-- Switch theme programmatically
require(\"fkthemes\").set_theme(\"catppuccin\")

-- Get current theme
local current = require(\"fkthemes\").get_current_theme()

-- Get list of available themes
local themes = require(\"fkthemes\").get_themes()`,
        },
      ],
    },
  },
  {
    id: "interactive-demo",
    title: "Try FkTheme in Browser",
    icon: Code,
    href: "/docs/interactive-demo",
  },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const { theme: currentTheme, setTheme, themes } = useContext(ThemeContext);

  const handleThemeChange = (themeKey: keyof typeof themes) => {
    setTheme(themeKey);
    toast.success(`Theme switched to ${themes[themeKey].name}`);
    playNotificationSound();
  };

  const playNotificationSound = () => {
    const sound = new Howl({
      src: ['/notification.mp3']
    });
    sound.play();
  };

  const currentSection = docSections.find((s) => s.id === activeSection);
  const theme = themes[currentTheme];

  const syntaxTheme = {
    'pre[class*="language-"]': {
      background: 'transparent',
    },
    'code[class*="language-"]': {
      color: theme.fg,
      background: 'transparent',
    },
    comment: { color: theme.comment },
    keyword: { color: theme.keyword },
    string: { color: theme.string },
    function: { color: theme.function },
    variable: { color: theme.variable },
    punctuation: { color: theme.fg },
    operator: { color: theme.fg },
    number: { color: theme.keyword },
    property: { color: theme.keyword },
    tag: { color: theme.keyword },
    boolean: { color: theme.keyword },
    symbol: { color: theme.keyword },
    deleted: { color: theme.keyword },
    selector: { color: theme.string },
    'attr-name': { color: theme.string },
    char: { color: theme.string },
    builtin: { color: theme.string },
    inserted: { color: theme.string },
    entity: { color: theme.function, cursor: 'help' },
    url: { color: theme.function },
    '.language-css .token.string': { color: theme.function },
    '.style .token.string': { color: theme.function },
    atrule: { color: theme.variable },
    'attr-value': { color: theme.variable },
    'class-name': { color: theme.function },
    regex: { color: theme.variable },
    important: { color: theme.variable, fontWeight: 'bold' },
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
  };

  const headings = currentSection?.content.sections.map((section) => ({ id: section.id, title: section.heading })) || [];

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
            <div className="space-y-4">
              <Select onValueChange={(value) => handleThemeChange(value as keyof typeof themes)} defaultValue={currentTheme}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(themes).map(([key, theme]) => (
                    <SelectItem key={key} value={key}>{theme.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {docSections.map((section) => {
              const Icon = section.icon;
              if (section.href) {
                return (
                  <Link
                    key={section.id}
                    to={section.href}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:bg-secondary hover:text-foreground`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.title}
                  </Link>
                );
              }
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
            }) }
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden w-full border-b border-border bg-background sticky top-16 z-10">
          <div className="flex items-center gap-2 p-4 overflow-x-auto">
            {docSections.map((section) => {
              const Icon = section.icon;
              if (section.href) {
                return (
                  <Button
                    key={section.id}
                    asChild
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap gap-2 hover:text-primary hover:border-primary"
                  >
                    <Link to={section.href}>
                      <Icon className="w-4 h-4" />
                      {section.title}
                    </Link>
                  </Button>
                );
              }
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
            {activeSection === "getting-started" && (
              <div className="flex flex-col items-center text-center mb-12">
                <img src="/FK-icon.png" alt="Fkthemes.nvim Logo" className="w-24 h-24 mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Fkthemes.nvim</h1>
                <p className="text-xl text-muted-foreground">A simple yet powerful theme previewer and selector plugin for Neovim.</p>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              {currentSection?.content.title}
            </h1>

            <div className="space-y-8">
              {currentSection?.content.sections.map((section, idx) => (
                <Card key={idx} id={section.id} className="p-6 bg-card border-border scroll-mt-24">
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
                  {section.component && section.component}
                  {section.code && (
                    <Card
                      className="border-border overflow-hidden transition-all duration-500 my-4"
                      style={{ backgroundColor: theme.bg }}
                    >
                      <div
                        className="px-4 py-3 flex items-center justify-between border-b transition-colors duration-500"
                        style={{ borderColor: theme.comment + "40", backgroundColor: theme.bg }}
                      >
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-destructive" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-xs text-muted-foreground">Current:</div>
                          <div className="px-2 py-1 rounded text-xs font-mono bg-primary/20 text-primary">
                            {theme.name}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto transition-all duration-500">
                        <CodeBlock language="lua" code={section.code} customStyle={syntaxTheme} />
                      </div>
                    </Card>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </main>
        <DocsToc headings={headings} />
      </div>
    </div>
  );
};

export default Docs;
