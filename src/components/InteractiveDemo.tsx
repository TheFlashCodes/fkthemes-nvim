import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, ChevronRight } from "lucide-react";

const themes = {
  catppuccin: {
    name: "Catppuccin",
    bg: "#1e1e2e",
    fg: "#cdd6f4",
    comment: "#6c7086",
    keyword: "#cba6f7",
    string: "#a6e3a1",
    function: "#89b4fa",
    variable: "#f9e2af",
  },
  tokyonight: {
    name: "Tokyo Night",
    bg: "#1a1b26",
    fg: "#c0caf5",
    comment: "#565f89",
    keyword: "#bb9af7",
    string: "#9ece6a",
    function: "#7aa2f7",
    variable: "#e0af68",
  },
  gruvbox: {
    name: "Gruvbox",
    bg: "#282828",
    fg: "#ebdbb2",
    comment: "#928374",
    keyword: "#fe8019",
    string: "#b8bb26",
    function: "#fabd2f",
    variable: "#83a598",
  },
  "rose-pine": {
    name: "Rose Pine",
    bg: "#191724",
    fg: "#e0def4",
    comment: "#6e6a86",
    keyword: "#c4a7e7",
    string: "#9ccfd8",
    function: "#ebbcba",
    variable: "#f6c177",
  },
  moonlight: {
    name: "Moonlight",
    bg: "#222436",
    fg: "#c8d3f5",
    comment: "#7a88cf",
    keyword: "#ffc777",
    string: "#c3e88d",
    function: "#82aaff",
    variable: "#ff966c",
  },
  material: {
    name: "Material",
    bg: "#263238",
    fg: "#eeffff",
    comment: "#546e7a",
    keyword: "#c792ea",
    string: "#c3e88d",
    function: "#82aaff",
    variable: "#ffcb6b",
  },
};

const codeExample = `-- Configure awesome plugin
local function setup()
  require("fkthemes").setup({
    themes = { "catppuccin", "tokyonight" },
    default_theme = "catppuccin",
    transparent_background = true,
  })
  
  -- Set custom keymaps
  vim.keymap.set("n", "<leader>tp", ":FkThemePicker<CR>")
end

return { setup = setup }`;

const InteractiveDemo = () => {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("catppuccin");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to fkthemes.nvim interactive demo!",
    'Try: ":FkTheme catppuccin" or ":FkTheme tokyonight"',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setHistory((prev) => [...prev, `> ${cmd}`]);

    if (trimmedCmd.startsWith(":fktheme ")) {
      const themeName = trimmedCmd.replace(":fktheme ", "").trim();
      const themeKey = Object.keys(themes).find(
        (key) => key.toLowerCase() === themeName
      );

      if (themeKey && themeKey in themes) {
        setCurrentTheme(themeKey as keyof typeof themes);
        setHistory((prev) => [
          ...prev,
          `✓ Theme switched to ${themes[themeKey as keyof typeof themes].name}`,
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          `✗ Theme "${themeName}" not found. Available: ${Object.keys(themes).join(", ")}`,
        ]);
      }
    } else if (trimmedCmd === ":fkthemepicker") {
      setHistory((prev) => [...prev, "→ Opening theme picker..."]);
      setTimeout(() => {
        setHistory((prev) => [...prev, "Available themes: " + Object.keys(themes).join(", ")]);
      }, 500);
    } else if (trimmedCmd === ":fkthemelist") {
      setHistory((prev) => [
        ...prev,
        "Available themes:",
        ...Object.entries(themes).map(([key, theme]) => `  • ${theme.name} (:FkTheme ${key})`),
      ]);
    } else if (trimmedCmd === ":fkthemenext") {
      const themeKeys = Object.keys(themes);
      const currentIndex = themeKeys.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themeKeys.length;
      const nextTheme = themeKeys[nextIndex] as keyof typeof themes;
      setCurrentTheme(nextTheme);
      setHistory((prev) => [...prev, `✓ Cycled to ${themes[nextTheme].name}`]);
    } else if (trimmedCmd === ":help" || trimmedCmd === "help") {
      setHistory((prev) => [
        ...prev,
        "Available commands:",
        "  :FkTheme <name>  - Switch to theme",
        "  :FkThemePicker   - Show theme picker",
        "  :FkThemeList     - List all themes",
        "  :FkThemeNext     - Cycle to next theme",
        "  :help            - Show this help",
      ]);
    } else if (trimmedCmd === "clear") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        `✗ Unknown command. Type ":help" for available commands.`,
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const theme = themes[currentTheme];

  const quickCommands = [
    { label: "Catppuccin", cmd: ":FkTheme catppuccin" },
    { label: "Tokyo Night", cmd: ":FkTheme tokyonight" },
    { label: "Gruvbox", cmd: ":FkTheme gruvbox" },
    { label: "Rose Pine", cmd: ":FkTheme rose-pine" },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Try It Live
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience theme switching in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal */}
          <Card className="bg-card border-border overflow-hidden flex flex-col">
            <div className="bg-secondary px-4 py-3 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">Interactive Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-muted-foreground">Current:</div>
                <div className="px-2 py-1 rounded text-xs font-mono bg-primary/20 text-primary">
                  {theme.name}
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
              {history.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith(">")
                      ? "text-accent mb-1"
                      : line.startsWith("✓")
                      ? "text-green-500 mb-1"
                      : line.startsWith("✗")
                      ? "text-destructive mb-1"
                      : line.startsWith("→")
                      ? "text-primary mb-1"
                      : "text-muted-foreground mb-1"
                  }
                >
                  {line}
                </div>
              ))}
              <div ref={historyEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border p-4">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Type ":FkTheme catppuccin" or ":help"'
                  className="flex-1 bg-transparent outline-none text-foreground font-mono text-sm placeholder:text-muted-foreground"
                  autoFocus
                />
              </div>
            </form>

            <div className="border-t border-border p-4 flex flex-wrap gap-2">
              {quickCommands.map((cmd) => (
                <Button
                  key={cmd.cmd}
                  size="sm"
                  variant="outline"
                  className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10"
                  onClick={() => {
                    setInput(cmd.cmd);
                    inputRef.current?.focus();
                  }}
                >
                  {cmd.label}
                </Button>
              ))}
            </div>
          </Card>

          {/* Code Preview */}
          <Card
            className="border-border overflow-hidden transition-all duration-500"
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
              <span className="text-sm font-mono" style={{ color: theme.comment }}>
                config.lua
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto transition-all duration-500">
              <pre style={{ color: theme.fg }}>
                <span style={{ color: theme.comment }}>-- Configure awesome plugin</span>
                {"\n"}
                <span style={{ color: theme.keyword }}>local function</span>{" "}
                <span style={{ color: theme.function }}>setup</span>
                <span style={{ color: theme.fg }}>()</span>
                {"\n  "}
                <span style={{ color: theme.function }}>require</span>
                <span style={{ color: theme.fg }}>(</span>
                <span style={{ color: theme.string }}>"fkthemes"</span>
                <span style={{ color: theme.fg }}>).</span>
                <span style={{ color: theme.function }}>setup</span>
                <span style={{ color: theme.fg }}>({"{"}</span>
                {"\n    "}
                <span style={{ color: theme.variable }}>themes</span>
                <span style={{ color: theme.fg }}> = {"{"} </span>
                <span style={{ color: theme.string }}>"catppuccin"</span>
                <span style={{ color: theme.fg }}>, </span>
                <span style={{ color: theme.string }}>"tokyonight"</span>
                <span style={{ color: theme.fg }}> {"}"},</span>
                {"\n    "}
                <span style={{ color: theme.variable }}>default_theme</span>
                <span style={{ color: theme.fg }}> = </span>
                <span style={{ color: theme.string }}>"catppuccin"</span>
                <span style={{ color: theme.fg }}>,</span>
                {"\n    "}
                <span style={{ color: theme.variable }}>transparent_background</span>
                <span style={{ color: theme.fg }}> = </span>
                <span style={{ color: theme.keyword }}>true</span>
                <span style={{ color: theme.fg }}>,</span>
                {"\n  "}
                <span style={{ color: theme.fg }}>{"}"})</span>
                {"\n  \n  "}
                <span style={{ color: theme.comment }}>-- Set custom keymaps</span>
                {"\n  "}
                <span style={{ color: theme.fg }}>vim.keymap.</span>
                <span style={{ color: theme.function }}>set</span>
                <span style={{ color: theme.fg }}>(</span>
                <span style={{ color: theme.string }}>"n"</span>
                <span style={{ color: theme.fg }}>, </span>
                <span style={{ color: theme.string }}>"&lt;leader&gt;tp"</span>
                <span style={{ color: theme.fg }}>, </span>
                <span style={{ color: theme.string }}>":FkThemePicker&lt;CR&gt;"</span>
                <span style={{ color: theme.fg }}>)</span>
                {"\n"}
                <span style={{ color: theme.keyword }}>end</span>
                {"\n\n"}
                <span style={{ color: theme.keyword }}>return</span>
                <span style={{ color: theme.fg }}> {"{"} </span>
                <span style={{ color: theme.variable }}>setup</span>
                <span style={{ color: theme.fg }}> = </span>
                <span style={{ color: theme.variable }}>setup</span>
                <span style={{ color: theme.fg }}> {"}"}</span>
              </pre>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 Tip: Type <code className="px-2 py-1 bg-primary/10 rounded text-primary font-mono">:help</code> to see all available commands
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
