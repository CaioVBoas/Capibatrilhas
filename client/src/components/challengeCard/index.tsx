import React, { useState } from "react";
import { MapPin, Coins, Check, HelpCircle } from "lucide-react";
import ChallengeValidationModal from "components/challengeValidationModal";
import { DM_Sans, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface Challenges {
  id: string;
  title: string;
  description: string;
  place: string;
  prize: string;
  completed: boolean;
}

interface ChallengesCardsPropos {
  challenge: Challenges;
  onValidateChallenge?: (challengeId: string, token: string) => void;
}

const ChallengeCard: React.FC<ChallengesCardsPropos> = ({ 
  challenge,
  onValidateChallenge 
}) => {
  const isCompleted = challenge.completed;
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const handleValidateChallenge = async (token: string) => {
    setIsValidating(true);
    try {
      if (onValidateChallenge) {
        await onValidateChallenge(challenge.id, token);
      }
      setShowValidationModal(false);
    } catch (error) {
      console.error("Erro ao validar desafio:", error);
    } finally {
      setIsValidating(false);
    }
  };

  return isCompleted === true ? (
    <div className="bg-green-50 p-5 rounded-2xl border border-green-200 flex flex-col h-full">

      <div className="grow">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-1.5 shrink-0">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <h2 className={`text-lg font-semibold text-gray-900 mt-1 ${outfit.className}`}>
              {challenge.id}. {challenge.title}
            </h2>
          </div>

          <div className="flex items-center gap-1 shrink-0 mt-1">
            <Coins className="h-5 w-5 text-yellow-500" />
            <span className="text-base font-medium text-yellow-600">
              {challenge.prize}
            </span>
          </div>
        </div>
        <div>
          <p className={`ml-12 text-gray-600 text-sm mt-2 ${dmSans.className}`}>{challenge.description}</p>
          <div className={`ml-11 flex items-center text-gray-600 text-sm mt-2 ${dmSans.className}`}>
            <MapPin className="h-4 w-4 text-gray-500 mr-1.5" />
            <span>{challenge.place}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="grow">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-9 w-9 text-gray-400 shrink-0" />
            <h2 className={`text-lg font-semibold text-gray-900 mt-1 ${outfit.className}`}>
              {challenge.id}. {challenge.title}
            </h2>
          </div>
          <div className="flex items-center gap-1 shrink-0 mt-1">
            <Coins className="h-5 w-5 text-yellow-500" />
            <span className="text-base font-medium text-yellow-600">
              {challenge.prize}
            </span>
          </div>
        </div>
        <div>
          <p className={`text-gray-600 text-sm mt-2 ml-12 ${dmSans.className}`}>{challenge.description}</p>
          <div className={`flex items-center text-gray-600 text-sm mt-2 ml-11 ${dmSans.className}`}>
            <MapPin className="h-4 w-4 text-gray-500 mr-1.5" />
            <span>{challenge.place}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => setShowValidationModal(true)}
        className={`w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-700 mt-7 ${outfit.className}`}
      >
        Completar Desafio
      </button>

      <ChallengeValidationModal
        isOpen={showValidationModal}
        challengeTitle={challenge.title}
        onClose={() => setShowValidationModal(false)}
        onSubmit={handleValidateChallenge}
        isLoading={isValidating}
      />
    </div>
  );
};

export default ChallengeCard;