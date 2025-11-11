import React from "react";
import ChallengeCard from "components/featuredChallengeCard";
import TrailHeader from "components/headerChallengePage";

const mockChallenges = [
  {
    id: "1",
    title: "Visita ao Bloco da Alegria",
    description:
      "Faça check-in no famoso Bloco da Alegria e tire uma foto com a fantasia típica",
    place: "Praça Central",
    prize: "+100",
    completed: true,
  },
  {
    id: "2",
    title: "Museu do Samba",
    description: "Escaneie o QR Code na entrada do Museu do Samba",
    place: "Av. Cultural, 123",
    prize: "+80",
    completed: true,
  },
  {
    id: "3",
    title: "Ensaio de Bateria",
    description: "Participe de um ensaio de bateria e registre o momento",
    place: "Quadra da Escola de Samba",
    prize: "+120",
    completed: true,
  },
  {
    id: "4",
    title: "Quiz Carnavalesco",
    description: "Responda perguntas sobre a história do Carnaval local",
    place: "Online",
    prize: "+60",
    completed: false,
  },
  {
    id: "5",
    title: "Rota dos Blocos",
    description: "Visite 3 blocos diferentes em um único dia",
    place: "Centro Histórico",
    prize: "+150",
    completed: false,
  },
];

const mockTrails = {
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
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {mockChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
      
    </div>
  );
}
