import TrailDescriptionCard from "components/trailDescriptionCards";
import TrailInvitationCard from "components/invitationCards";
import SummaryCard from "components/summaryCard";
import React from "react";
import { ListTodo } from "lucide-react";

const mockTags = ["Mista", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];
const mockLink = "https://capibatrilhas.com/invite/abc123";

const selectedChallengesCount = 1;
const totalRewardValue = 100;
const remainingCapibas = 1000;

const CreateTrailPage: React.FC = () => {
  return (
  
    <div className="min-h-screen bg-gray-50">
      
      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailDescriptionCard topic={mockTags} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailInvitationCard link={mockLink} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-5 mb-0">
        <SummaryCard 
          challengesSelected={selectedChallengesCount}
          totalReward={totalRewardValue}
          remainingCapibas={remainingCapibas}
        />
          <p className="text-red-300 ml-3 font-extralight text-sm">Cada trilha personalizada pode distribuir em seus desafios até 1.000 capibas, conforme sua preferência. O limite máximo de ganhos com trilhas personalizadas é de 5.000 capibas por mês*</p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 ml-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold flex items-center gap-1">
            <ListTodo className="h-5 w-5 text-gray-600" aria-hidden="true" />
            Escolha os Desafios
          </h2>
          <p className="text-gray-500 ml-3">Selecione os desafios que você gostaria de incluir na sua trilha</p>
        </div>
      </div>

    </div>
  );
};

export default CreateTrailPage;
