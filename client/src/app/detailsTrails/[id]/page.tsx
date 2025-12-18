'use client';
import React, { useEffect, useState } from "react"; 
import { Outfit } from 'next/font/google';
import { useParams } from "next/navigation";
import { Loader2 } from 'lucide-react';
import ChallengeCard from "components/challengeCard";
import TrailHeader, { TrailHeaderData } from "components/headerChallengePage"; 
import api from "services/api";

const outfit = Outfit({ subsets: ['latin'] });

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

export default function ChallengePage(){

  const params = useParams();
  const id = Number(params.id);

  const [headerData, setHeaderData] = useState<TrailHeaderData | null>(null);
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrailDetails() {
      if (!id) return;

      try {
        setLoading(true);
        
        const [trailResponse, challengesResponse] = await Promise.all([
          api.get(`/trail/${id}`),
          api.get(`/trail-challenge/trail/${id}`)
        ]);
        
        const trail = trailResponse.data.data;
        const challenges = challengesResponse.data.data;

        const totalChallenges = challenges.length;
        const completedChallenges = challenges.filter((item: any) => 
          item.challenge && item.challenge.isActive === false
        ).length;
        
        const progressPercentage = totalChallenges > 0 ? Math.round((completedChallenges / totalChallenges) * 100) : 0
        
        setHeaderData({
          title: trail.title,
          subtitle: trail.description || "Sem descrição",
          tag: trail.theme?.toUpperCase() || "GERAL",
          time: calculateDuration(trail.startDate, trail.endDate),
          progress: progressPercentage,
          prize: trail.totalRewards || 0,
          challengesCompleted: completedChallenges,
          challengesTotal: totalChallenges,
          type: trail.isHighlighted ? "Destaque" : "Normal",
          members: trail.members || [],
        });

        setChallenges(challenges);
      } catch (error) {
        console.error("Erro ao buscar detalhes da trilha:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrailDetails();
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
        <p className="text-xl text-gray-500 ml-3">Carregando...</p>
      </div>
    );
  }

  if (!headerData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-500">Trilha não encontrada.</p>
      </div>
    );
  }

  return (
  <div className="bg-gray-100 min-h-screen">
    {/* Mantive headerData, pois é a variável da sua integração atual */}
    <TrailHeader trail={headerData} />

    {/* Estrutura visual do segundo código (p-8 e centralização) */}
    <div className="p-8">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {challenges.length > 0 ? (
          challenges.map((item) => {
            // Lógica de integração mantida
            const challengeData = item.challenge || item;
            
            return (
              <ChallengeCard 
                key={challengeData.id}
                challenge={challengeData}
                // Lógica de isCompleted mantida
                isCompleted={challengeData.isActive === false}
              />   
            );
          })
        ) : (
          // Visual do "Nenhum desafio" ajustado para o segundo exemplo (texto simples)
          // Nota: Removi 'dmSans.className' para evitar erros se você não tiver a fonte importada,
          // mas a estrutura está idêntica.
          <p className="text-gray-500 text-center">
            Nenhum desafio encontrado.
          </p>
        )}
      </div>
    </div>
  </div>
);
}