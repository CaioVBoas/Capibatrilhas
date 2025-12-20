import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface Achievement {
  id: string | number;
  title: string;
  description: string;
}

interface AchievementCardProps {
  data: Achievement;
}

export default function AchievementCard({ data }: AchievementCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between mb-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-gray-800 text-base">{data.title}</h3>
        <p className="text-gray-500 text-sm">{data.description}</p>
      </div>
      
      <div className={`p-2 rounded-full shrink-0 ml-4 bg-green-100`}>
        <CheckCircle2 
          className={`w-6 h-6 text-green-600`} 
        />
      </div>
    </div>
  );
}