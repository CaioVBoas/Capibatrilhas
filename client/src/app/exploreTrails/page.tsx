'use client';
import ExploreTrailsCard from 'components/exploreTrailsCard';
import TrailCard from 'components/featuredTrailCards';
import { useState, useEffect } from 'react';
import NavBar from 'components/navBar';
import api from 'services/api';

interface Trail {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  type: string;
  challengesQuantity: number;
  time: string;
  prize: number;
  challengesCompleted: number;
  buttonText: string;
  tag: string;
  isPersonalized: boolean;
}

export default function ExploreTrails() {
  const [selectedType, setSelectedType] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrails() {
      try {
        const response = await api.get('/trail');
        const apiTrails = response.data.data || response.data;

        if (Array.isArray(apiTrails)) {
          const formattedTrails: Trail[] = apiTrails.map((trail: {
            id: number;
            title: string;
            description: string;
            theme: string;
            totalRewards: number;
            isHighlighted: boolean;
            startDate: string;
            endDate: string;
          }) => ({
            id: trail.id,
            title: trail.title,
            subtitle: trail.description,
            progress: 0,
            type: trail.isHighlighted ? "Destaque" : "Normal",
            challengesQuantity: 0,
            time: calculateDays(trail.startDate, trail.endDate),
            prize: trail.totalRewards,
            challengesCompleted: 0,
            buttonText: "Iniciar Trilha",
            tag: trail.theme,
            isPersonalized: false,
          }));
          setTrails(formattedTrails);
        }
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrails();
  }, []);

  function calculateDays(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} dias`;
  }

  const filteredTrails = trails.filter((trail) => {
    const matchesType = selectedType === 'Todas' || trail.tag === selectedType;

    const matchesSearch = trail.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full bg-[#e8ebf095] min-h-screen">
      <NavBar></NavBar>
      <ExploreTrailsCard
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {loading ? (
            <div className="col-span-2 flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredTrails.length > 0 ? (
            filteredTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-2">
              Nenhuma trilha encontrada{selectedType !== 'Todas' ? ` para ${selectedType}` : ''}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
