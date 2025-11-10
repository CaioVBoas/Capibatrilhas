import React from "react";
import { MapPin, Clock, Trophy } from "lucide-react";

//Interface de Props do TrailCard
interface Trails {
  title: string;
  subtitle: string;
  progress: number; 
  type: string; 
  challengesQuantity: string; 
  time: string; 
  prize: number; 
  challengesCompleted: string; 
  tag: string; 
  id: number;
}

interface TrailCardProps {
  trail: Trails;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  return (
    
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      <div className="flex justify-between items-start mb-1.5">
        <h2 className="text-xl font-semibold text-gray-900">{trail.title}</h2>
        
        {trail.type === "Destaque" && (
          <span className="px-3 py-1 bg-yellow-400 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
            Destaque
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-3">{trail.subtitle}</p>

      <div className="mb-4">
        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
          {trail.tag}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progresso</span>
          <span className="font-medium text-gray-800">
            {trail.challengesCompleted}/{trail.challengesQuantity} desafios
          </span>
        </div>
        
        {/* A barra de progresso usa a cor amarela do design como fundo */}
        <div className="w-full bg-yellow-400 rounded-full h-2.5 overflow-hidden">
          {/* E a cor azul para o progresso atual, usando 'trail.progress' */}
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${trail.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-gray-600 text-sm mb-5">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-500 mr-1.5" />
          <span>{trail.challengesQuantity} desafios</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-gray-500 mr-1.5" />
          <span>{trail.time}</span>
        </div>
        <div className="flex items-center text-yellow-600 font-medium">
          {/* Ícone do troféu com preenchimento (fill) amarelo */}
          <Trophy className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1.5" />
          <span>{trail.prize}</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-700 mt-auto">
        Continuar
      </button>
    </div>
  );
};

export default TrailCard;