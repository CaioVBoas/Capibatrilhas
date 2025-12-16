import React from "react";
import { Coins, AlertCircle } from "lucide-react";

export interface Activity {
  id: string | number;
  title: string;
  time: string;
  reward?: string;
  isCoin?: boolean;
}

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ">
      <div className="flex flex-col gap-1 divide-y divide-gray-300">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="py-4 px-2 hover:bg-gray-50 transition-colors flex justify-between items-center group"
          >
            <div>
              <p className="text-gray-800 text-base font-medium mb-1 transition-colors">
                {activity.title}
              </p>
              <p className="text-gray-400 text-sm">
                {activity.time}
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full group-hover:bg-white group-hover:shadow-sm transition-all">
              {activity.isCoin ? (
                <>
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500 font-bold text-sm">
                    {activity.reward}
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-2">
                   <AlertCircle className="w-5 h-5 text-yellow-500" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}