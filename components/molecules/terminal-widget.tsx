"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface HistoryLine {
  text: string;
  type: "input" | "output" | "error" | "info";
}

export interface TerminalWidgetProps {
  className?: string;
}

export function TerminalWidget({ className }: Readonly<TerminalWidgetProps>) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: "DOAN GIA VY // SYSTEM TERMINAL ACTIVE", type: "info" },
    { text: "Type 'help' for a list of available commands.", type: "info" },
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
      const newHistory: HistoryLine[] = [...prev, { text: `vy-system:~$ ${cmd}`, type: "input" }];

      if (trimmedCmd === "") {
        return newHistory;
      }

      switch (trimmedCmd) {
        case "help":
          return [
            ...newHistory,
            { text: "Available commands:", type: "info" },
            { text: "  about    - Brief profile summary", type: "output" },
            { text: "  skills   - Core technical skills matrix", type: "output" },
            { text: "  projects - Key enterprise case studies", type: "output" },
            { text: "  contact  - Direct contact coordinates", type: "output" },
            { text: "  clear    - Clear console session logs", type: "output" },
          ];
        case "about":
          return [
            ...newHistory,
            { text: "Doãn Gia Vỹ - Senior Frontend Engineer", type: "info" },
            {
              text: "7+ years experience in high-performance web architectures, geospatial 3D engines, and responsive enterprise dashboards.",
              type: "output",
            },
            {
              text: "Currently engineering high-fidelity web ecosystems & spatial digital twin dashboards.",
              type: "output",
            },
          ];
        case "skills":
          return [
            ...newHistory,
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
          ];
        case "projects":
          return [
            ...newHistory,
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
          ];
        case "contact":
          return [
            ...newHistory,
            { text: "Direct Coordinates:", type: "info" },
            { text: "  • Email: giavy.it@gmail.com", type: "output" },
            { text: "  • Phone: 0559893935", type: "output" },
            { text: "  • Location: District 9, Ho Chi Minh City, VN", type: "output" },
            { text: "  • LinkedIn: linkedin.com/in/doangiavy", type: "output" },
          ];
        case "clear":
          return [];
        default:
          return [
            ...newHistory,
            { text: `bash: command not found: ${cmd}. Type 'help' for options.`, type: "error" },
          ];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const isMini = !!(className?.includes("h-[80px]") || className?.includes("h-20"));

  return (
    <div
      className={cn(
        "w-full flex flex-col font-mono bg-zinc-950/80 border border-zinc-800/80 rounded-3xl p-5 relative overflow-hidden group hover:border-zinc-700/80 transition-all duration-300 justify-center",
        !isMini && "justify-between",
        className || "h-full min-h-[420px]",
      )}
      onClick={focusInput}
      role="button"
      tabIndex={0}
    >
      {/* Terminal Title Header */}
      {!isMini && (
        <div className="flex justify-between items-center pb-2 border-b border-zinc-900 text-[10px] text-zinc-500 uppercase tracking-wider">
          <span>[ vy-ecosystem-terminal.sh ]</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            ONLINE
          </span>
        </div>
      )}

      {/* Output Console Logs */}
      {!isMini && (
        <div className="flex-1 overflow-y-auto text-[13px] space-y-1.5 py-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={
                line.type === "input"
                  ? "text-zinc-200"
                  : line.type === "error"
                    ? "text-red-400"
                    : line.type === "info"
                      ? "text-purple-400 font-semibold"
                      : "text-zinc-400"
              }
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
          className="flex-1 bg-transparent border-none outline-none text-zinc-200 caret-transparent font-mono p-0 focus:ring-0 text-[13px]"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
        />
        {/* Customized Blinking Caret */}
        <span
          className="inline-block w-1.5 h-4 bg-purple-500 animate-blink"
          style={{ transform: "translateY(1px)" }}
        />
      </form>
    </div>
  );
}
