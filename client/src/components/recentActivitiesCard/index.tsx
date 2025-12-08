import React from "react";
import { Coins, Clock } from "lucide-react";

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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
         <Clock className="w-5 h-5 text-gray-400" />
         <h2 className="text-gray-900 font-bold text-lg">Atividade Recente</h2>
      </div>
      
      <div className="flex flex-col gap-1">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="py-4 px-2 hover:bg-gray-50 rounded-lg transition-colors flex justify-between items-center group"
          >
            <div>
              <p className="text-gray-800 text-base font-medium mb-1 group-hover:text-blue-600 transition-colors">
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
                  <span className="text-yellow-600 font-bold text-sm">
                    {activity.reward}
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-400 rounded-full" />
                   <span className="text-gray-400 text-xs font-medium">Info</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}