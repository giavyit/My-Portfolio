import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChartLineUp, ChatCircleText, GearSix } from "@phosphor-icons/react/dist/ssr";

export default function InsightAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen flex insight-grid-bg text-zinc-900")}>
      {/* Sidebar */}
      <aside className="insight-sidebar">
        <div className="flex items-center gap-2">
          <div className="insight-logo-box">
            I
          </div>
          <span className="font-bold text-xl tracking-tight">InsightAI</span>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/insight-ai" className="insight-nav-active">
            <ChartLineUp weight="bold" className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/insight-ai/feedbacks" className="insight-nav-item">
            <ChatCircleText weight="bold" className="w-5 h-5" />
            Feedbacks
          </Link>
          <Link href="/insight-ai/settings" className="insight-nav-item mt-auto">
            <GearSix weight="bold" className="w-5 h-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
