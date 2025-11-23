import React from 'react';
import { Coins } from 'lucide-react';

interface SummaryCardProps {
  challengesSelected: number;
  totalReward: number;
  remainingCapibas: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ challengesSelected, totalReward, remainingCapibas }) => {
  return (

    <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl shadow-sm border border-gray-200 p-8 
                border-t-4 border-t-transparent 
                transition-all duration-300 ease-in-out
                hover:-translate-y-1
                relative overflow-hidden
                ">
      
      {/* Conteúdo do Card */}
      <div className="relative z-10 grid grid-cols-3 gap-6">
        
        {/* Desafios Selecionados */}
        <div className="flex flex-col items-center justify-center p-4 bg-white/40 rounded-lg backdrop-blur-sm">
          <p className="text-gray-600 text-sm font-medium mb-2">Desafios Selecionados</p>
          <span className="text-4xl font-bold text-gray-900">{challengesSelected}</span>
        </div>

        {/* Recompensa Total */}
        <div className="flex flex-col items-center justify-center p-4 bg-white/40 rounded-lg backdrop-blur-sm">
          <p className="text-gray-600 text-sm font-medium mb-2">Recompensa Total</p>
          <span className="flex items-center gap-2 text-4xl font-bold text-yellow-500">
            <Coins className="h-8 w-8 stroke-yellow-500" />
            {totalReward}
          </span>
        </div>

        {/* Capibas Restantes */}
        <div className="flex flex-col items-center justify-center p-4 bg-white/40 rounded-lg backdrop-blur-sm">
          <p className="text-gray-600 text-sm font-medium mb-2">Capibas Restantes</p>
          <span className="flex items-center gap-2 text-4xl font-bold text-orange-500">
            <Coins className="h-8 w-8 stroke-orange-600" />
            {remainingCapibas}
          </span>
        </div>

      </div>
    </div>
  );
};

export default SummaryCard;