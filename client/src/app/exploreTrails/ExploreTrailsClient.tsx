'use client';
import React, { useMemo, useState } from 'react';
import ExploreTrailsCard from 'components/exploreTrailsCard';
import TrailCard, { Trails } from 'components/featuredTrailCards';
import NavBar from 'components/navBar';
import api from 'services/api';
import { adaptTrail } from './trailAdapter';

type ApiTrail = {
  id: number;
  title: string;
  description: string;
  theme: string;
  totalRewards: number;
  challenges?: any[];
};

interface ExploreTrailsClientProps {
  initialTrails: ApiTrail[];
}

export default function ExploreTrailsClient({
  initialTrails,
}: ExploreTrailsClientProps) {
  const [selectedType, setSelectedType] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  // UI state usa o formato que o CARD espera
  const [trails, setTrails] = useState<Trails[]>(
    initialTrails.map(adaptTrail)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredTrails = useMemo(() => {
    return trails.filter((trail) => {
      const matchesType =
        selectedType === 'Todas' || trail.tag === selectedType;

      const matchesSearch = trail.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesType && matchesSearch;
    });
  }, [trails, selectedType, searchTerm]);

  async function refresh() {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get<ApiTrail[]>('/trails');
      setTrails(res.data.map(adaptTrail));
    } catch {
      setError('Não foi possível carregar trilhas.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-[#e8ebf095] min-h-screen">
      <NavBar />

      <ExploreTrailsCard
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="p-12">
        <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
          <button
            onClick={refresh}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Atualizar'}
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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