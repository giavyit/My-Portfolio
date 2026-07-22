"use client";

import React from "react";
import { FeedbackData } from "@/lib/mock-data/insight-ai";
import { cn } from "@/lib/utils";

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "negative": return "bg-rose-100 text-rose-700 border-rose-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

export function RecentFeedbacks({ feedbacks }: { feedbacks: FeedbackData[] }) {
  return (
    <div className="flex flex-col gap-4">
      {feedbacks.map((fb) => (
        <div key={fb.id} className="insight-fb-card">
          {/* Avatar Placeholder */}
          <div className="insight-fb-avatar">
            {fb.user.charAt(0)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-zinc-900">{fb.user}</h3>
              <span className="text-xs text-zinc-400">{fb.date}</span>
            </div>
            
            <p className="text-zinc-700 mb-3 text-sm">
              &quot;{fb.content}&quot;
            </p>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("insight-fb-tag-main", getSentimentColor(fb.sentiment))}>
                {fb.sentiment}
              </span>
              
              {fb.tags.map(tag => (
                <span key={tag} className="insight-fb-tag-sub">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
