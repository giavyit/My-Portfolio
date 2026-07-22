import React from "react";
import { getSentimentData, getTrendData, getRecentFeedbacks } from "@/lib/mock-data/insight-ai";
import { SentimentChart } from "@/components/organisms/insight-charts/sentiment-chart";
import { TrendChart } from "@/components/organisms/insight-charts/trend-chart";
import { RecentFeedbacks } from "@/components/molecules/recent-feedbacks";

export default async function InsightAIDashboard() {
  const [sentimentData, trendData, feedbacks] = await Promise.all([
    getSentimentData(),
    getTrendData(),
    getRecentFeedbacks()
  ]);

  return (
    <div className="insight-page-container">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Overview</h1>
        <p className="text-zinc-500">Analyze customer sentiment and feedback trends.</p>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Sentiment Box */}
        <div className="insight-card col-span-12 md:col-span-4">
          <h2 className="font-semibold text-lg mb-4">Overall Sentiment</h2>
          <div className="h-[250px] w-full">
            <SentimentChart data={sentimentData} />
          </div>
        </div>

        {/* Trend Box */}
        <div className="insight-card col-span-12 md:col-span-8">
          <h2 className="font-semibold text-lg mb-4">Feedback Volume</h2>
          <div className="h-[250px] w-full">
            <TrendChart data={trendData} />
          </div>
        </div>

        {/* Recent Feedbacks Box */}
        <div className="insight-card col-span-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Recent Feedbacks</h2>
            <button className="insight-link">
              View all
            </button>
          </div>
          <RecentFeedbacks feedbacks={feedbacks} />
        </div>
      </div>
    </div>
  );
}
