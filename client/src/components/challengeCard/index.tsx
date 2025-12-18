'use client';

import React, { useState } from "react";
import { MapPin, Coins, Check, HelpCircle } from "lucide-react";
import { Outfit, DM_Sans } from "next/font/google";
import ChallengeValidationModal from "components/challengeValidationModal";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export interface ChallengeData {
  id: number | string;
  title: string;
  description: string;
  location?: string; 
  rewards: number;    
}

interface ChallengeCardProps {
  challenge: ChallengeData;
  isCompleted?: boolean; 
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, isCompleted = false }) => {
  const formattedId = String(challenge.id).padStart(2, '0');
  const [showValidationModal, setShowValidationModal] = useState(false);

  const handleValidateChallenge = async (token: string) => {
    // Integração futura aqui
    console.log('Token recebido:', token);
    setShowValidationModal(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-green-50 p-5 rounded-2xl border border-green-200 flex flex-col h-full transition-all hover:shadow-md">
        <div className="grow">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-1.5 shrink-0 mt-0.5">
                <Check className="h-5 w-5 text-green-600" strokeWidth={3} />
              </div>
              <h2 className={`${outfit.className} text-lg font-semibold text-gray-900`}>
                {formattedId}. {challenge.title}
              </h2>
            </div>

            <div className={`flex items-center gap-1.5 shrink-0 bg-white/60 px-2 py-1 rounded-lg border border-green-100 ${outfit.className}`}>
              <Coins className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-yellow-600">
                +{challenge.rewards}
              </span>
            </div>
          </div>

          <div className="pl-11">
            <p className={`${dmSans.className} text-gray-600 text-sm mt-2 leading-relaxed`}>
              {challenge.description}
            </p>
            
            {challenge.location && (
              <div className={`flex items-center text-gray-500 text-sm mt-3 ${dmSans.className}`}>
                <MapPin className="h-4 w-4 mr-1.5" />
                <span>{challenge.location}</span>
              </div>
            )}
            
            <div className={`mt-4 inline-flex items-center text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full ${outfit.className}`}>
              Desafio Concluído
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="grow">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 rounded-full p-1.5 shrink-0 mt-0.5">
              <HelpCircle className="h-6 w-6 text-gray-400" />
            </div>
            <h2 className={`${outfit.className} text-lg font-semibold text-gray-900`}>
              {formattedId}. {challenge.title}
            </h2>
          </div>
          
          <div className={`flex items-center gap-1.5 shrink-0 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 ${outfit.className}`}>
            <Coins className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-600">
              +{challenge.rewards}
            </span>
          </div>
        </div>

        <div className="pl-11">
          <p className={`${dmSans.className} text-gray-600 text-sm mt-2 leading-relaxed`}>
            {challenge.description}
          </p>
          
          {challenge.location && (
            <div className={`flex items-center text-gray-500 text-sm mt-3 ${dmSans.className}`}>
              <MapPin className="h-4 w-4 mr-1.5" />
              <span>{challenge.location}</span>
            </div>
          )}
        </div>
      </div>

      <button 
        onClick={() => setShowValidationModal(true)}
        className={`w-full bg-[#2563EB] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 mt-6 flex items-center justify-center gap-2 ${outfit.className}`}
      >
        Completar Desafio
      </button>

      <ChallengeValidationModal
        isOpen={showValidationModal}
        challengeTitle={challenge.title}
        onClose={() => setShowValidationModal(false)}
        onSubmit={handleValidateChallenge}
        isLoading={false}
      />
    </div>
  );
};

export default ChallengeCard;