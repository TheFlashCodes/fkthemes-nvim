import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/ui/CodeBlock";
import { useContext } from "react";
import { ThemeContext, themes } from "@/contexts/ThemeContext";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Configuration = () => {
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
                <CodeBlock language="lua" code={`require("fkthemes").setup({
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
})`} customStyle={syntaxTheme} />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-secondary px-6 py-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-mono">Advanced options</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <CodeBlock language="lua" code={`require("fkthemes").setup({
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
})`} customStyle={syntaxTheme} />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="keymaps">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-secondary px-6 py-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-mono">Custom keymaps</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <CodeBlock language="lua" code={`require("fkthemes").setup({
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
})`} customStyle={syntaxTheme} />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Configuration;
