'use client';
import React, { use, useEffect, useState } from "react";
import ChallengeCard from "components/challengeCard";
import TrailHeader from "components/headerChallengePage";
import { DM_Sans } from "next/font/google";
import api from "services/api";
import { Trail as TrailType, TrailChallenge, CompletedChallenge } from "types";
import { Trails } from "components/featuredTrailCards";
import { useSession } from "next-auth/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface ChallengeCardData {
  id: string;
  title: string;
  description: string;
  place: string;
  prize: string;
  completed: boolean;
}

function calculateDurationDays(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} dias`;
}

function mapTrailToComponent(trail: TrailType, userId?: number): { trailData: Trails; challenges: ChallengeCardData[] } {
  const completedChallengeIds = new Set(
    trail.completedChallenges
      ?.filter(cc => cc.userId === userId)
      .map(cc => cc.challengeId) || []
  );

  const challengesCount = trail.challenges?.length || 0;
  const completedCount = trail.completedChallenges?.filter(cc => cc.userId === userId).length || 0;
  const progress = challengesCount > 0 ? Math.round((completedCount / challengesCount) * 100) : 0;

  const members = trail.participants?.map(p => ({
    id: p.user.id,
    name: p.user.name,
    avatarUrl: p.user.urlImage || `https://i.pravatar.cc/150?u=${p.user.id}`,
  })) || [];

  const trailData: Trails = {
    id: trail.id,
    title: trail.title,
    subtitle: trail.description,
    progress,
    type: trail.isHighlighted ? "Destaque" : "Normal",
    time: calculateDurationDays(trail.startDate, trail.endDate),
    prize: trail.totalRewards,
    tag: trail.theme,
    buttonText: progress > 0 ? "Continuar" : "Iniciar Trilha",
    isPersonalized: trail.ownerId !== null,
    members,
    challengesCompleted: completedCount,
    challengesQuantity: challengesCount,
  };

  const challenges: ChallengeCardData[] = trail.challenges?.map((tc: TrailChallenge, index: number) => ({
    id: `${tc.challengeOrder + 1}`,
    title: tc.challenge.title,
    description: tc.challenge.description,
    place: tc.challenge.location,
    prize: `+${tc.challenge.rewards}`,
    completed: completedChallengeIds.has(tc.challenge.id),
  })) || [];

  return { trailData, challenges };
}

export default function ChallengePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: session } = useSession();
  const [trail, setTrail] = useState<Trails | null>(null);
  const [challenges, setChallenges] = useState<ChallengeCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrail() {
      try {
        setLoading(true);
        const response = await api.get(`/trail/${id}`);
        const trailData: TrailType = response.data.data || response.data;

        const userId = session?.user?.id;
        const { trailData: mappedTrail, challenges: mappedChallenges } = mapTrailToComponent(trailData, userId);

        setTrail(mappedTrail);
        setChallenges(mappedChallenges);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar trilha:", err);
        setError("Trilha não encontrada!");
      } finally {
        setLoading(false);
      }
    }

    fetchTrail();
  }, [id, session?.user?.id]);

  const handleValidateChallenge = async (challengeId: string, token: string) => {
    try {
      const challengeIndex = parseInt(challengeId) - 1;
      const trailChallenge = challenges[challengeIndex];

      if (!trailChallenge || !session?.user?.id) return;

      await api.post('/completed-challenge', {
        userId: session.user.id,
        challengeId: parseInt(challengeId),
        trailId: parseInt(id),
        conclusionToken: token,
      });

      setChallenges(prev => prev.map((c, idx) =>
        idx === challengeIndex ? { ...c, completed: true } : c
      ));

      if (trail) {
        const newCompletedCount = (trail.challengesCompleted || 0) + 1;
        const totalChallenges = trail.challengesQuantity || 1;
        const newProgress = Math.round((newCompletedCount / totalChallenges) * 100);

        setTrail({
          ...trail,
          challengesCompleted: newCompletedCount,
          progress: newProgress,
        });
      }
    } catch (err) {
      console.error("Erro ao validar desafio:", err);
      throw err;
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Carregando trilha...</div>
      </div>
    );
  }

  if (error || !trail) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">{error || "Trilha não encontrada!"}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <TrailHeader trail={trail} />
      <div className="p-8">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {challenges.length > 0 ? (
             challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  onValidateChallenge={handleValidateChallenge}
                />
             ))
          ) : (
             <p className={`text-gray-500 text-center ${dmSans.className}`}>Nenhum desafio encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}