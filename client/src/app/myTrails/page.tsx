'use client';

import { Plus, TrendingUp, Sparkles, CircleCheckBig } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TrailCard from 'components/featuredTrailCards';
import NavBar from 'components/navBar';
import api from 'services/api';
import { outfit } from 'styles/fonts';
import { useAuth } from 'hooks/useAuth';

interface TrailCardData {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  type: string;
  time: string;
  prize: number;
  tag: string;
  buttonText: string;
  isPersonalized?: boolean;
}

function calculateDuration(start: string, end: string): string {
  if (!start || !end) return "Tempo n/a";

  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffInMs = endDate.getTime() - startDate.getTime();

  if (isNaN(diffInMs) || diffInMs < 0) return "Indefinido";

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInDays > 30) {
    const months = Math.floor(diffInDays / 30);
    return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
  if (diffInDays >= 1) {
    return `${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'}`;
  }
  if (diffInHours >= 1) {
    return `${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
  }
  return "Menos de 1h";
}

export default function MyTrails() {
  const { user, userId, isLoading: authLoading } = useAuth();

  const [trailType, setTrailType] = useState('Andamento');
  const [trails, setTrails] = useState<TrailCardData[]>([]);
  const [loading, setLoading] = useState(true);

  const mapApiToTrailCard = (apiData: {
    id: number;
    title: string;
    description?: string;
    theme?: string;
    startDate?: string;
    endDate?: string;
    totalRewards?: number;
    ownerId?: number | null;
    participants?: { progress: number; isCompleted: boolean }[];
  }[], currentUserId: number): TrailCardData[] => {
    if (!Array.isArray(apiData)) return [];

    return apiData.map((item) => {
      const participation = item.participants?.[0];
      const progress = participation?.progress || 0;
      const isPersonalized = item.ownerId === currentUserId;

      let btnText = "Começar";
      if (progress > 0 && progress < 100) btnText = "Continuar";
      if (progress === 100) btnText = "Ver Certificado";

      return {
        id: item.id || 0,
        title: item.title || '',
        subtitle: item.description || "Sem descrição",
        progress: progress,
        type: item.theme || "Geral",
        time: calculateDuration(item.startDate || '', item.endDate || ''),
        prize: item.totalRewards || 0,
        tag: item.theme || "GERAL",
        buttonText: btnText,
        isPersonalized: isPersonalized,
      };
    });
  };

  useEffect(() => {
    async function fetchTrails() {
      if (!userId) return;

      try {
        const response = await api.get(`/trail/relations/user/${userId}`);
        const rawData = response.data.data || response.data;
        const formattedTrails = mapApiToTrailCard(rawData, userId);

        setTrails(formattedTrails);
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
        setTrails([]);
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading && userId) {
      fetchTrails();
    } else if (!authLoading && !userId) {
      setLoading(false);
    }
  }, [userId, authLoading]);

  const filteredTrails = trails.filter((trail) => {
    if (trailType === 'Andamento')
      return trail.progress > 0 && trail.progress < 100 && !trail.isPersonalized;
    if (trailType === 'Personalizadas') return trail.isPersonalized;
    if (trailType === 'Concluidas') return trail.progress === 100;
    return true;
  });

  if (authLoading || loading) {
    return (
      <div className={`w-full min-h-screen flex items-center justify-center bg-zinc-100 ${outfit.className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={`w-full min-h-screen flex flex-col items-center justify-center bg-zinc-100 ${outfit.className}`}>
        <p className="text-zinc-500 mb-4">Você precisa estar logado para ver suas trilhas.</p>
        <Link href="/">
          <button className="bg-[#2563EB] text-white py-2 px-4 rounded-lg hover:bg-[#3b78ff]">
            Fazer Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-100 w-full min-h-screen flex flex-col items-center">
      <NavBar />
      <div className={`w-full flex justify-center py-6 border-b border-zinc-200 shadow-sm bg-white ${outfit.className}`}>
        <div className="w-full max-w-4xl flex flex-row justify-between items-center px-4">
          <h1 className="text-3xl font-semibold">Minhas Trilhas</h1>
          <Link href="/createTrail">
            <button className="flex flex-row items-center text-sm font-semibold bg-[#2563EB] text-white py-3 px-5 gap-2 rounded-2xl hover:bg-[#3b78ff] hover:shadow-md transition-all duration-200 transform active:bg-[#1e55c7] active:scale-95 active:shadow-none">
              <Plus size={18} strokeWidth={3} /> Criar Trilha
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-row bg-[#E4EBF1] mt-6 rounded-2xl overflow-hidden mx-4">
        <button onClick={() => setTrailType('Andamento')} className={`flex-1 py-2 m-1 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Andamento' ? 'hover:bg-zinc-100 text-zinc-600' : 'hover:bg-[#2563EB]'} ${trailType === 'Andamento' ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-[#E4EBF1]'}`}>
          <TrendingUp size={16}></TrendingUp> Em Andamento
        </button>
        <button onClick={() => setTrailType('Personalizadas')} className={`flex-1 py-2 m-1 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Personalizadas' ? 'hover:bg-zinc-100 text-zinc-600' : 'hover:bg-[#2563EB]'} ${trailType === 'Personalizadas' ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-[#E4EBF1]'}`}>
          <Sparkles size={16}></Sparkles> Personalizadas
        </button>
        <button onClick={() => setTrailType('Concluidas')} className={`flex-1 py-2 m-1 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Concluidas' ? 'hover:bg-zinc-100 text-zinc-600' : 'hover:bg-[#2563EB]'} ${trailType === 'Concluidas' ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-[#E4EBF1]'}`}>
          <CircleCheckBig size={16}></CircleCheckBig> Concluídas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl mt-8 my-10 px-4">
        {filteredTrails.length > 0 ? (
          filteredTrails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))
        ) : (
          <div className={`col-span-full text-center text-gray-500 mt-10 ${outfit.className}`}>
            <p>Nenhuma trilha encontrada nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
