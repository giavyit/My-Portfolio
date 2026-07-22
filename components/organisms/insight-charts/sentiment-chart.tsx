"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { SentimentData } from "@/lib/mock-data/insight-ai";

export function SentimentChart({ data }: { data: SentimentData[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          itemStyle={{ color: '#18181b', fontWeight: 500 }}
        />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
