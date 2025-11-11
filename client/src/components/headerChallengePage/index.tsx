import React from "react";
import { Clock, Trophy } from "lucide-react";

export interface Trails {
  title: string;
  subtitle: string;
  progress: number; 
  type: string; 
  challengesQuantity: string; 
  time: string; 
  prize: number; 
  challengesCompleted: string; 
  tag: string; 
  buttonText: string;
  id: number;
}

interface TrailHeaderProps {
  trail: Trails; 
}

const TrailHeader: React.FC<TrailHeaderProps> = ({ trail }) => {
  return (
    <div className="bg-blue-700 text-white p-8 rounded-b-lg">  
      <button className="text-blue-100 opacity-80 text-sm mb-4">
        &larr; Voltar
      </button>

      <div className="flex justify-between items-start mb-2">
        <h1 className="text-3xl font-bold">{trail.title}</h1>
        {trail.type === "Destaque" && (
          <span className="px-3 py-1 bg-yellow-400 rounded-full text-sm font-semibold text-gray-900 shadow-sm shrink-0">
            Destaque
          </span>
        )}
      </div>

      <p className="text-blue-100 max-w-2xl mb-4">{trail.subtitle}</p>

      <div className="flex items-center gap-5 text-blue-100 mb-4">
        <span className="px-3 py-1 bg-blue-600 border border-blue-500 rounded-full text-sm font-medium">
          {trail.tag}
        </span>
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-1.5 opacity-80" />
          <span>{trail.time}</span>
        </div>
        <div className="flex items-center font-medium">
          <Trophy className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1.5" />
          <span>{trail.prize}</span>
        </div>
      </div>

      <div className="mb-1">
        <div className="flex justify-between text-sm text-blue-100 mb-1">
          <span>Progresso da Trilha</span>
          <span className="font-medium">
            {trail.challengesCompleted}/{trail.challengesQuantity} desafios
          </span>
        </div>

        <div className="w-full bg-yellow-400 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: `${trail.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TrailHeader;