'use client';
import ExploreTrailsCard from 'components/exploreTrailsCard';
import TrailCard from 'components/featuredTrailCards';
import { useState } from 'react';

const mockTrails = [
  {
    id: 1,
    title: 'Capibatrilha de Carnaval',
    subtitle:
      'Explore os melhores blocos e pontos culturais do Carnaval da cidade',
    progress: 42,
    type: 'Destaque',
    challengesQuantity: '7',
    time: '5 dias',
    prize: 500,
    challengesCompleted: '3',
    buttonText: 'Continuar',
    tag: 'Cultura'
  },
  {
    id: 2,
    title: 'Capibatrilha Gastronômica',
    subtitle:
      'Descubra os sabores únicos da culinária do Recife com desafios deliciosos',
    progress: 60,
    type: 'Destaque',
    challengesQuantity: '5',
    time: '6 dias',
    prize: 400,
    challengesCompleted: '3',
    buttonText: 'Continuar',
    tag: 'Gastronomia'
  },
  {
    id: 3,
    title: 'Capibatrilha de Natal',
    subtitle:
      'Descubra o Natal de um novo jeito embalado pelas luzes e decorações natalinas na melhor cidade do Brasil',
    progress: 0,
    type: 'Destaque',
    challengesQuantity: '8',
    time: '10 dias',
    prize: 300,
    challengesCompleted: '0',
    buttonText: 'Iniciar Trilha',
    tag: 'Cultura'
  },
  {
    id: 4,
    title: '7 Dias de Verão',
    subtitle: 'Desafios diários em praias e pontos turísticos da cidade',
    progress: 0,
    type: 'Destaque',
    challengesQuantity: '7',
    time: '7 dias',
    prize: 350,
    challengesCompleted: '0',
    buttonText: 'Iniciar Trilha',
    tag: 'Natureza'
  },
  {
    id: 5,
    title: 'Capibatrilha Histórica',
    subtitle: 'Volte no tempo e descubra as raízes do Recife Antigo',
    progress: 0,
    type: 'Destaque',
    challengesQuantity: '6',
    time: '4 dias',
    prize: 250,
    challengesCompleted: '0',
    buttonText: 'Iniciar Trilha',
    tag: 'História'
  },
  {
    id: 6,
    title: 'Circuito de Arte Urbana',
    subtitle: 'Explore os murais de grafite e galerias de arte da cidade',
    progress: 0,
    type: 'Destaque',
    challengesQuantity: '5',
    time: '3 dias',
    prize: 200,
    challengesCompleted: '0',
    buttonText: 'Iniciar Trilha',
    tag: 'Arte'
  },
  {
    id: 7,
    title: 'Recife Verde: Parques',
    subtitle: 'Uma jornada relaxante pelos principais parques e áreas verdes',
    progress: 0,
    type: 'Destaque',
    challengesQuantity: '4',
    time: '2 dias',
    prize: 150,
    challengesCompleted: '0',
    buttonText: 'Iniciar Trilha',
    tag: 'Natureza'
  }
];

export default function ExploreTrails() {
  const [selectedType, setSelectedType] = useState('Todas');

  const filteredTrails = mockTrails.filter((trail) => {
    if (selectedType === 'Todas') {
      return true;
    }
    return trail.tag === selectedType;
  });

  return (
    <div className="w-full bg-[#e8ebf095] min-h-screen">
      <ExploreTrailsCard
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {filteredTrails.length > 0 ? (
            filteredTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-2">
              Nenhuma trilha encontrada para {selectedType}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
