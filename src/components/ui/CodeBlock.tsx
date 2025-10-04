import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
  customStyle?: any;
}

const CodeBlock: FC<CodeBlockProps> = ({ code, language, customStyle }) => {
  const style = { ...vscDarkPlus, ...customStyle };

  return (
    <SyntaxHighlighter language={language} style={style}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;