import { useState, useRef, useEffect, useContext } from "react";
import { toast } from "sonner";
import { Howl } from 'howler';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, ChevronRight } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext, themes } from "@/contexts/ThemeContext";

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
  const { theme: currentTheme, setTheme: setCurrentTheme, themes } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
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
        toast.success(`Theme switched to ${themes[themeKey as keyof typeof themes].name}`);
        playNotificationSound();
      } else {
        setHistory((prev) => [
          ...prev,
          `✗ Theme "${themeName}" not found. Available: ${Object.keys(themes).join(", ")}`,
        ]);
      }
    } else if (trimmedCmd === ":fkthemepicker") {
      setHistory((prev) => [...prev, "→ Opening theme picker..."]);
      setShowPicker(true);
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
      toast.success(`Cycled to ${themes[nextTheme].name}`);
      playNotificationSound();
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

  const handleThemeSelect = (themeKey: keyof typeof themes) => {
    setCurrentTheme(themeKey);
    toast.success(`Theme switched to ${themes[themeKey].name}`);
    playNotificationSound();
    setShowPicker(false);
  };

  const playNotificationSound = () => {
    const sound = new Howl({
      src: ['/notification.mp3']
    });
    sound.play();
  };

  const theme = themes[currentTheme];

  const syntaxTheme = {
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
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

  

  const quickCommands = [
    { label: "Catppuccin", cmd: ":FkTheme catppuccin" },
    { label: "Tokyo Night", cmd: ":FkTheme tokyonight" },
    { label: "Gruvbox", cmd: ":FkTheme gruvbox" },
    { label: "Rose Pine", cmd: ":FkTheme rose-pine" },
    { label: "Dracula", cmd: ":FkTheme dracula" },
    { label: "Nord", cmd: ":FkTheme nord" },
  ];

  return (
    <section id="demo" className="py-24 px-6 relative">
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
          <Card className="bg-card border-border overflow-hidden flex flex-col rounded-xl shadow-xl">
            <div className="bg-gradient-to-b from-secondary to-secondary/80 px-4 py-3 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Terminal className="w-4 h-4 text-primary ml-2" />
                <span className="text-sm text-foreground font-medium">fkthemes.nvim</span>
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
                  className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary"
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
              <CodeBlock language="lua" code={codeExample} customStyle={syntaxTheme} />
            </div>
          </Card>
        </div>

        {/* Theme Picker Modal */}
        {showPicker && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-card border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Theme Picker</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPicker(false)}
                  className="text-muted-foreground hover:text-primary"
                >
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(themes).map(([key, themeData]) => (
                  <button
                    key={key}
                    onClick={() => handleThemeSelect(key as keyof typeof themes)}
                    className="group relative p-4 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 text-left"
                    style={{ backgroundColor: themeData.bg }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold" style={{ color: themeData.fg }}>
                        {themeData.name}
                      </span>
                      {currentTheme === key && (
                        <span className="text-primary text-xl">✓</span>
                      )}
                    </div>
                    <div className="flex gap-1 mt-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.keyword }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.string }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.function }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.variable }} />
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}

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
