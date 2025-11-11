"use client";

import TrailDescriptionCard from "components/trailDescriptionCards";
import TrailInvitationCard from "components/invitationCards";
import SummaryCard from "components/summaryCard";
import ChallengeCard from "components/addChallengeCard";
import React, { useState } from "react";
import { ListTodo, Plus, ArrowLeft } from "lucide-react";

const mockTags = ["Mista", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];
const mockLink = "https://capibatrilhas.com/invite/abc123";
const mockChallenges = [
  {
    id: "c1",
    name: "Marco Zero Selfie",
    location: "Recife Antigo",
    score: 900,
    description: "Tire uma selfie criativa no Marco Zero e marque a localização.",
  },
  {
    id: "c2",
    name: "Busca pelo Beco",
    location: "Bairro do Recife",
    score: 150,
    description: "Encontre e fotografe o Beco da Fome, um local famoso por sua culinária local.",
  },
  {
    id: "c3",
    name: "Tradição em Movimento",
    location: "Casa Amarela",
    score: 100,
    description: "Grave um vídeo de 10 segundos tentando dançar o Frevo no Sítio Trindade.",
  },
  {
    id: "c4",
    name: "O Tesouro do Mercado",
    location: "Mercado de São José",
    score: 200,
    description: "Compre e fotografe uma fruta exótica que você nunca provou antes no mercado.",
  },
  {
    id: "c5",
    name: "Recifes de Boa Viagem",
    location: "Praia de Boa Viagem",
    score: 75,
    description: "Faça uma foto panorâmica da orla e das piscinas naturais na maré baixa.",
  },
];

const CreateTrailPage: React.FC = () => {
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [showCapibaWarning, setShowCapibaWarning] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  const handleToggleChallenge = (id: string, selected: boolean) => {
    if (selected) {
      const found = mockChallenges.find((c) => c.id === id);
      const challengeScore = found?.score ?? 0;
      
 
      const currentTotal = selectedChallenges.reduce((sum, cId) => {
        const c = mockChallenges.find((ch) => ch.id === cId);
        return sum + (c?.score ?? 0);
      }, 0);
      
      const wouldBeRemaining = 1000 - (currentTotal + challengeScore);
      
      // Não permite adicionar se ficaria negativo
      if (wouldBeRemaining < 0) {
        setShowCapibaWarning(true);
        setWarningVisible(true);
        setTimeout(() => setWarningVisible(false), 3000);
        setTimeout(() => setShowCapibaWarning(false), 3800);
        return;
      }
    }
    
    setSelectedChallenges((prev) => {
      if (selected) {
        if (prev.includes(id)) return prev;
        return [...prev, id];
      }
      return prev.filter((x) => x !== id);
    });
  };

  const selectedCount = selectedChallenges.length;
  const totalRewardValue = selectedChallenges.reduce((sum, id) => {
    const found = mockChallenges.find((c) => c.id === id);
    return sum + (found?.score ?? 0);
  }, 0);
  const remainingCapibaValue = 1000 - totalRewardValue;

  return (
  
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-blue-600 text-white px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => window.history.back()}
            className="hover:opacity-80 transition-opacity"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <span className="text-lg font-medium">Voltar</span>
        </div>
        
        <div className="flex items-start gap-3">
          <Plus className="h-8 w-8 mt-1 flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold">Criar Trilha Personalizada</h1>
            <p className="text-blue-100 mt-2">Monte sua própria trilha escolhendo desafios que mais combinem com você e seus amigos!</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailDescriptionCard topic={mockTags} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailInvitationCard link={mockLink} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <SummaryCard 
          challengesSelected={selectedCount}
          totalReward={totalRewardValue}
          remainingCapibas={remainingCapibaValue}
        />
          <p className="text--400 ml-3 text-red-600 opacity-50">Cada trilha personalizada pode distribuir em seus desafios até 1.000 capibas, conforme sua preferência. O limite máximo de ganhos com trilhas personalizadas é de 5.000 capibas por mês*</p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 ml-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold flex items-center gap-1">
            <ListTodo className="h-5 w-5 text-gray-600" aria-hidden="true" />
            Escolha os Desafios
          </h2>
          <p className="text-gray-500 ml-3">Selecione os desafios que você gostaria de incluir na sua trilha</p>

          <div className="mt-4 grid grid-cols-1 gap-4">
            {mockChallenges.map((c) => (
              <ChallengeCard
                key={c.id}
                challenge={c}
                selected={selectedChallenges.includes(c.id)}
                onToggle={handleToggleChallenge}
              />
            ))}
          </div>
        </div>
      </div>

      {showCapibaWarning && (
        <div className={`fixed bottom-6 right-6 bg-red-500 text-white rounded-lg p-4 shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out ${
          warningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-sm font-medium">Quantidade máxima por Trilha atingida! Não há capibas disponíveis para adicionar este desafio.</span>
        </div>
      )}
    </div>
  );
};

export default CreateTrailPage;
