import React from "react";
import ChallengeCard from "components/featuredChallengeCard";
import TrailHeader from "components/headerChallengePage";

const mockChallenges = [
  {
    id: "1",
    title: "Visite o Marco Zero",
    description:
      "Tire uma foto no Marco Zero e compartilhe nas redes sociais com a hashtag #Capibatrilhas.",
    place: "Marco Zero, Recife Antigo",
    prize: "+ 100",
    completed: true,
  },
  {
    id: "2",
    title: "Explore a Praia de Boa Viagem",
    description:
      "Faça uma caminhada pela orla da Praia de Boa Viagem e registre sua experiência.",
    place: "Praia de Boa Viagem, Recife",
    prize: "+ 150",
    completed: false,
  },
  {
    id: "3",
    title: "Visite o Instituto Ricardo Brennand",
    description:
      "Conheça o acervo do Instituto Ricardo Brennand e compartilhe uma foto.",
    place: "Instituto Ricardo Brennand, Recife",
    prize: "+ 200",
    completed: false,
  },
];

const mockTrails = 
{
  id: 1,
  title: "Capibatrilha de Carnaval",
  subtitle: "Explore os melhores blocos e pontos culturais do Carnaval da cidade",
  progress: 42, 
  type: "Destaque",
  challengesQuantity: "7",
  time: "5 dias",
  prize: 500,
  challengesCompleted: "3",
  buttonText: "Continuar",
  tag: "Cultura",
};

export default function ChallengePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TrailHeader trail={mockTrails} />

      <div className="p-8">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {mockChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
      
    </div>
  );
}
