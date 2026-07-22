"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendData } from "@/lib/mock-data/insight-ai";

export function TrendChart({ data }: { data: TrendData[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
        <XAxis 
          dataKey="date" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#71717a', fontSize: 12 }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#71717a', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
        />
        <Area 
          type="monotone" 
          dataKey="feedbackCount" 
          stroke="#06B6D4" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorCount)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
