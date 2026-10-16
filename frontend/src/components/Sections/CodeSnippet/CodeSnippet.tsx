import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface CodeSnippetProps {
    hostname: string
}

export const CodeSnippet = ( {hostname} : CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);
  const code = `<name>@${hostname}.cs.unibo.it`

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Torna all'icona originale dopo 2 secondi
  };

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      {/* Testo del codice */}
      <span className="overflow-x-auto whitespace-nowrap">{code}</span>

      {/* Pulsante di copia */}
      <button
        onClick={handleCopy}
        className="ml-4 rounded-md p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};