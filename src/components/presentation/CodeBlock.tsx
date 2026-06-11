import { motion } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="rounded-xl overflow-hidden border border-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-terminal-bg border-b border-border">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-terminal-text" />
          <span className="text-xs font-mono text-terminal-text uppercase">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-terminal-text transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-accent" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="p-4 bg-terminal-bg overflow-x-auto">
        <pre className="font-mono text-sm text-terminal-text whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeBlock;
