export interface SentimentData {
  name: string;
  value: number;
  color: string;
}

export interface TrendData {
  date: string;
  feedbackCount: number;
}

export interface FeedbackData {
  id: string;
  user: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  tags: string[];
  date: string;
}

const mockDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSentimentData(): Promise<SentimentData[]> {
  await mockDelay(800);
  return [
    { name: "Positive", value: 65, color: "#10B981" }, // Emerald 500
    { name: "Neutral", value: 25, color: "#9CA3AF" }, // Gray 400
    { name: "Negative", value: 10, color: "#F43F5E" }, // Rose 500
  ];
}

export async function getTrendData(): Promise<TrendData[]> {
  await mockDelay(1000);
  return [
    { date: "Mon", feedbackCount: 120 },
    { date: "Tue", feedbackCount: 132 },
    { date: "Wed", feedbackCount: 101 },
    { date: "Thu", feedbackCount: 154 },
    { date: "Fri", feedbackCount: 190 },
    { date: "Sat", feedbackCount: 230 },
    { date: "Sun", feedbackCount: 210 },
  ];
}

export async function getRecentFeedbacks(): Promise<FeedbackData[]> {
  await mockDelay(1200);
  return [
    {
      id: "FB-1001",
      user: "Alex",
      content: "The new checkout flow is incredibly fast! Love it.",
      sentiment: "positive",
      tags: ["Checkout", "Performance"],
      date: "2 mins ago",
    },
    {
      id: "FB-1002",
      user: "Sarah",
      content: "I can't seem to reset my password, the email never arrives.",
      sentiment: "negative",
      tags: ["Auth", "Bug", "Email"],
      date: "15 mins ago",
    },
    {
      id: "FB-1003",
      user: "Mike",
      content: "Can you add a dark mode to the dashboard?",
      sentiment: "neutral",
      tags: ["Feature Request", "UI"],
      date: "1 hour ago",
    },
  ];
}
