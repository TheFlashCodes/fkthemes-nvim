import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";
import { useContext } from "react";
import { ThemeContext, themes } from "@/contexts/ThemeContext";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
                  <CodeBlock language="vim" code={item.command} customStyle={syntaxTheme} />
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
            <CodeBlock language="lua" code={`require("fkthemes").switch_theme("theme_name")`} customStyle={syntaxTheme} />
            <CodeBlock language="lua" code={`require("fkthemes").toggle_transparency()`} customStyle={syntaxTheme} />
            <CodeBlock language="lua" code={`require("fkthemes").get_current_theme()`} customStyle={syntaxTheme} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Commands;
