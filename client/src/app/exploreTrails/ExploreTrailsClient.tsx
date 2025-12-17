'use client';
import React, { useMemo, useState, useEffect } from 'react';
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
  challenges?: any[]; // can be TrailChallenge[] (with nested `challenge`)
  owner?: { id: number; name: string; urlImage?: string | null };
  _count?: { participants?: number; completedChallenges?: number };
};

interface ExploreTrailsClientProps {
  // allow either an array or the backend wrapper { data: ApiTrail[] }
  initialTrails: ApiTrail[] | { data: ApiTrail[] };
}

export default function ExploreTrailsClient({
  initialTrails
}: ExploreTrailsClientProps) {
  const [selectedType, setSelectedType] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  // UI state usa o formato que o CARD espera
  const normalizeInitial = (
    payload: ExploreTrailsClientProps['initialTrails']
  ) => {
    if (!payload) return [] as ApiTrail[];
    if (Array.isArray(payload)) return payload as ApiTrail[];
    if (typeof payload === 'object' && 'data' in payload)
      return (payload as any).data as ApiTrail[];
    return [] as ApiTrail[];
  };

  const [trails, setTrails] = useState<Trails[]>(
    normalizeInitial(initialTrails).map(adaptTrail)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-fetch trails on mount if initialTrails is empty
  useEffect(() => {
    const initialData = normalizeInitial(initialTrails);
    if (initialData.length === 0) {
      refresh();
    }
  }, []); // Empty dependency: run once on mount

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
      const res = await api.get('/trail');
      // axios `res.data` is the server body; the backend wraps payload in { data: [...] }
      const payload: ApiTrail[] = Array.isArray(res.data)
        ? res.data
        : (res.data?.data ?? []);

      setTrails(payload.map(adaptTrail));
    } catch (err) {
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
