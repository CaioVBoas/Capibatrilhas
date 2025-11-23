"use client";

import TrailDescriptionInput from "components/trailDescriptionInput";
import TrailInvitationComponent from "components/invitationComponent";
import SummaryCard from "components/summaryCard";
import AddChallengeCard from "components/addChallengeCard";
import React, { useState } from "react";
import { ListTodo, Plus, ArrowLeft } from "lucide-react";

const mockTags = ["Mista", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];
const mockLink = "https://capibatrilhas.com/invite/abc123";
const mockChallenges = [
{
    id: "c1",
    name: "Visita ao Paço do Frevo",
    location: "Recife Antigo",
    score: 900,
    // Ação: Visitar e validar a presença
    description: "Visite a área de exposição principal do Paço do Frevo para validar sua presença.",
  },
  {
    id: "c2",
    name: "Maratona EU AMO RECIFE",
    location: "Bairro do Recife",
    score: 150,
    // Descrição ajustada para refletir uma "maratona" de pontos a serem encontrados
    description: "Conclua a sequência de três checkpoints turísticos da trilha e confirme a última localização no letreiro 'EU AMO RECIFE'.",
  },
  {
    id: "c3",
    name: "Um Dia no Recém-Inaugurado Parque da Tamarineira",
    location: "Tamarineira",
    score: 100,
    // Ação: Checar um painel informativo
    description: "Confirme sua visita checando o painel informativo próximo à entrada principal do Parque da Tamarineira.",
  },
  {
    id: "c4",
    name: "O Tesouro do Mercado de São José",
    location: "Mercado de São José",
    score: 200,
    // Ação: Compra/Interação com parceiro
    description: "Realize uma compra em uma das lojas parceiras identificadas dentro do Mercado de São José.",
  },
  {
    id: "c5",
    name: "Mirante da Boa Vista",
    location: "Rua da Aurora",
    score: 75,
    // Ação: Confirmação de ponto turístico
    description: "Confirme sua presença no Mirante da Boa Vista, desfrutando da vista panorâmica da Rua da Aurora.",
  },
  {
    id: "c6",
    name: "Ato de Solidariedade",
    location: "Hemope",
    score: 300,
    // Ação: Ação social (doação)
    description: "Complete uma doação de sangue em um hemocentro parceiro e valide sua ação.",
  },
  {
    id: "c7",
    name: "Conhecendo a Cervejaria",
    location: "Pina",
    score: 300,
    // Ação: Interação no local parceiro
    description: "Visite a Cervejaria X (parceira) e valide sua presença no balcão de atendimento após o consumo de qualquer produto.",
  },
];

const CreateTrailPage: React.FC = () => {
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [showCapibaWarning, setShowCapibaWarning] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

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

  const handleDateRangeChange = (range: { from?: Date; to?: Date } | undefined) => {
    if (range) {
      setDateRange(range);
    }
  };

  const selectedCount = selectedChallenges.length;
  const totalRewardValue = selectedChallenges.reduce((sum, id) => {
    const found = mockChallenges.find((c) => c.id === id);
    return sum + (found?.score ?? 0);
  }, 0);
  const remainingCapibaValue = 1000 - totalRewardValue;

  // Validação: todos os campos preenchidos?
  const isFormValid = 
    title.trim() !== "" && 
    description.trim() !== "" && 
    dateRange.from && 
    dateRange.to && 
    selectedChallenges.length > 0;

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
        <TrailDescriptionInput 
          topic={mockTags}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onDateRangeChange={handleDateRangeChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailInvitationComponent link={mockLink} />
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
              <AddChallengeCard
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

      <div className="flex justify-center p-6">
        <button
          onClick={() => {
            if (isFormValid) {
              console.log("Trilha criada:", { title, description, dateRange, selectedChallenges });
              alert("Trilha criada com sucesso!"); //MUDAR ISSO PARA LEVAR PRA PÁGINA DAS SUAS TRILHAS
              // SUBSTITUINDO CONSOLE POR POP UP
            }
          }}
          disabled={!isFormValid}
          className={`w-1/2 flex justify-center  py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
            isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer justify-center flex items-center gap-2"
              : "bg-gray-300 text-gray-500 cursor-not-allowed justify-center flex items-center gap-2"
          }`}
        >
          Criar minha Trilha
        </button>
      </div>
    </div>
  );
};

export default CreateTrailPage;
