import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState, useContext } from "react";
import CodeBlock from "@/components/ui/CodeBlock";
import { ThemeContext, themes } from "@/contexts/ThemeContext";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = `{
  "flashcodes-themayankjha/fkthemes.nvim",
  event = "VeryLazy",
  dependencies = {
    "MunifTanjim/nui.nvim",
    "nvim-telescope/telescope.nvim",
    -- Add your themes here
  },
  config = function()
    require("fkthemes").setup({
      themes = { "tokyonight", "catppuccin", "gruvbox" },
      default_theme = "tokyonight",
      transparent_background = true,
    })
  end,
}`;

const Installation = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  const syntaxTheme = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      color: themes[theme].fg,
      background: 'transparent',
    },
    comment: { color: themes[theme].comment },
    keyword: { color: themes[theme].keyword },
    string: { color: themes[theme].string },
    function: { color: themes[theme].function },
    variable: { color: themes[theme].variable },
    punctuation: { color: themes[theme].fg },
    operator: { color: themes[theme].fg },
    number: { color: themes[theme].keyword },
    property: { color: themes[theme].keyword },
    tag: { color: themes[theme].keyword },
    boolean: { color: themes[theme].keyword },
    symbol: { color: themes[theme].keyword },
    deleted: { color: themes[theme].keyword },
    selector: { color: themes[theme].string },
    'attr-name': { color: themes[theme].string },
    char: { color: themes[theme].string },
    builtin: { color: themes[theme].string },
    inserted: { color: themes[theme].string },
    entity: { color: themes[theme].function, cursor: 'help' },
    url: { color: themes[theme].function },
    '.language-css .token.string': { color: themes[theme].function },
    '.style .token.string': { color: themes[theme].function },
    atrule: { color: themes[theme].variable },
    'attr-value': { color: themes[theme].variable },
    'class-name': { color: themes[theme].function },
    regex: { color: themes[theme].variable },
    important: { color: themes[theme].variable, fontWeight: 'bold' },
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Installation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with fkthemes.nvim in seconds
          </p>
        </div>

        <Card className="bg-card border-border overflow-hidden">
          <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">lazy.nvim</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="hover:bg-primary/10 hover:text-primary"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <div className="p-6 overflow-x-auto">
            <CodeBlock code={codeExample} language="lua" customStyle={syntaxTheme} />
          </div>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold mb-3 text-primary">Requirements</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Neovim <span className="text-foreground font-mono">&gt;= 0.8.0</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><span className="text-foreground font-mono">nui.nvim</span> for the UI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><span className="text-foreground font-mono">telescope.nvim</span> for theme selection</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold mb-3 text-primary">Package Managers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><span className="text-foreground font-mono">lazy.nvim</span> (recommended)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><span className="text-foreground font-mono">packer.nvim</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><span className="text-foreground font-mono">vim-plug</span></span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Installation;
