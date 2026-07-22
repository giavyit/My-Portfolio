"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface HistoryLine {
  id: string;
  text: string;
  type: "input" | "output" | "error" | "info";
}

export interface TerminalWidgetProps {
  className?: string;
}

const generateId = (): string => Math.random().toString(36).substring(2, 9);

export function TerminalWidget({ className }: Readonly<TerminalWidgetProps>) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: generateId(), text: "DOAN GIA VY // SYSTEM TERMINAL ACTIVE", type: "info" },
    { id: generateId(), text: "Type 'help' for a list of available commands.", type: "info" },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToEnd = useCallback(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToEnd();
  }, [history, scrollToEnd]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory((prev) => {
      const newHistory: HistoryLine[] = [...prev, { id: generateId(), text: `vy-system:~$ ${cmd}`, type: "input" }];

      if (trimmedCmd === "") {
        return newHistory;
      }

      const appendLines = (lines: Omit<HistoryLine, "id">[]): HistoryLine[] => {
        return [...newHistory, ...lines.map(line => ({ ...line, id: generateId() }))];
      };

      switch (trimmedCmd) {
        case "help":
          return appendLines([
            { text: "Available commands:", type: "info" },
            { text: "  about    - Brief profile summary", type: "output" },
            { text: "  skills   - Core technical skills matrix", type: "output" },
            { text: "  projects - Key enterprise case studies", type: "output" },
            { text: "  contact  - Direct contact coordinates", type: "output" },
            { text: "  clear    - Clear console session logs", type: "output" },
          ]);
        case "about":
          return appendLines([
            { text: "Doãn Gia Vỹ - Senior Frontend Engineer", type: "info" },
            {
              text: "7+ years experience in high-performance web architectures, geospatial 3D engines, and responsive enterprise dashboards.",
              type: "output",
            },
            {
              text: "Currently engineering high-fidelity web ecosystems & spatial digital twin dashboards.",
              type: "output",
            },
          ]);
        case "skills":
          return appendLines([
            { text: "Core Tech Matrix:", type: "info" },
            {
              text: "  • Frontend: ReactJS, Next.js, Vue 3, TypeScript, Tailwind, MobX",
              type: "output",
            },
            { text: "  • Visualization: CesiumJS, Three.js, WebGL2, Canvas 2D/3D", type: "output" },
            {
              text: "  • Backend & DB: C# .NET, ASP.NET Core, SQL Server, MySQL, JWT",
              type: "output",
            },
            {
              text: "  • Tools & Infra: Turbopack, Vitest, Docker, Git, Azure DevOps",
              type: "output",
            },
          ]);
        case "projects":
          return appendLines([
            { text: "Active Enterprise Deployments:", type: "info" },
            { text: "  1. National Digital Twin 15 (Present) - CesiumJS, WebGL2", type: "output" },
            {
              text: "     Designed 3D spatial NDT-Map engine with 15+ data layers.",
              type: "output",
            },
            {
              text: "  2. ADB2024 & ePN2025 (FPT) - Vue 3, ASP.NET Core, SQL Server",
              type: "output",
            },
            {
              text: "     High-performance title legal services system covering 90% US counties.",
              type: "output",
            },
          ]);
        case "contact":
          return appendLines([
            { text: "Direct Coordinates:", type: "info" },
            { text: "  • Email: giavy.it@gmail.com", type: "output" },
            { text: "  • Phone: 0559893935", type: "output" },
            { text: "  • Location: District 9, Ho Chi Minh City, VN", type: "output" },
            { text: "  • LinkedIn: linkedin.com/in/doangiavy", type: "output" },
          ]);
        case "clear":
          return [];
        default:
          return appendLines([
            { text: `bash: command not found: ${cmd}. Type 'help' for options.`, type: "error" },
          ]);
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      focusInput();
    }
  };

  const isMini = !!(className?.includes("h-[80px]") || className?.includes("h-20"));

  const getLineColor = (type: HistoryLine["type"]) => {
    switch (type) {
      case "input": return "text-zinc-200";
      case "error": return "text-red-400";
      case "info": return "text-purple-400 font-semibold";
      default: return "text-zinc-400";
    }
  };

  return (
    <div
      className={cn(
        "terminal-widget-container group",
        !isMini && "justify-between",
        className || "h-full min-h-[420px]",
      )}
      onClick={focusInput}
      onKeyDown={handleKeyDown}
    >
      {/* Terminal Title Header */}
      {!isMini && (
        <div className="terminal-header">
          <span>[ vy-ecosystem-terminal.sh ]</span>
          <span className="flex items-center gap-1.5">
            <span className="terminal-status-dot" />
            {"ONLINE"}
          </span>
        </div>
      )}

      {/* Output Console Logs */}
      {!isMini && (
        <div className="terminal-body">
          {history.map((line) => (
            <div
              key={line.id}
              className={getLineColor(line.type)}
            >
              {line.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      )}

      {/* Input Prompter */}
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex items-center gap-1 text-[13px]",
          !isMini && "pt-2 border-t border-zinc-900",
        )}
      >
        <span className="text-purple-400 font-bold">vy-system:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input-field"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
        />
        {/* Customized Blinking Caret */}
        <span
          className="terminal-caret"
          style={{ transform: "translateY(1px)" }}
        />
      </form>
    </div>
  );
}
