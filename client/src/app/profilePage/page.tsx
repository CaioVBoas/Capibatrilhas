'use client';

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import NavBar from "components/navBar";
import ProfileHeader from "components/headerProfilePage";
import AchievementCard from "components/achievmentsCard";
import { useAuth } from "hooks/useAuth";
import api from "services/api";

import { outfit, dmSans } from "../../styles/fonts";

interface Achievement {
  id: number;
  title: string;
  description: string;
}

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState({
    trails: 0,
    challenges: 0,
    weeks: 0,
  });
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      if (!user?.id) return;

      try {
        const [participationsRes, completedChallengesRes, achievementsRes] = await Promise.all([
          api.get(`/trail-participation/user/${user.id}`).catch(() => ({ data: { data: [] } })),
          api.get(`/completed-challenge/user/${user.id}`).catch(() => ({ data: { data: [] } })),
          api.get(`/user-achievement/user/${user.id}`).catch(() => ({ data: { data: [] } })),
        ]);

        const participations = participationsRes.data.data || [];
        const completedChallenges = completedChallengesRes.data.data || [];
        const userAchievements = achievementsRes.data.data || [];

        setStats({
          trails: Array.isArray(participations) ? participations.length : 0,
          challenges: Array.isArray(completedChallenges) ? completedChallenges.length : 0,
          weeks: Math.floor((user.points || 0) / 100),
        });

        if (Array.isArray(userAchievements)) {
          setAchievements(userAchievements.map((ua: { achievement: Achievement }) => ua.achievement).filter(Boolean));
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setLoadingData(false);
      }
    }

    if (user) {
      fetchUserData();
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="bg-gray-50/50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const userProfile = {
    name: user?.name || 'Usuário',
    email: user?.email || '',
    level: user?.level || 1,
    avatarInitials: user?.name ? getInitials(user.name) : 'US',
    stats: {
      capibas: user?.points || 0,
      trails: stats.trails,
      challenges: stats.challenges,
      days: 1,
      weeks: stats.weeks,
    },
  };

  return (
    <div className={`bg-gray-50/50 min-h-screen pb-12 ${dmSans.className}`}>
      <NavBar />

      <ProfileHeader user={userProfile} />

      <main className="max-w-5xl mx-auto px-6 mt-10 relative z-20 space-y-8">

        <div>
          <div className="flex items-center gap-2 mb-4 mt-4 px-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2 className={`text-gray-900 font-bold text-xl ${outfit.className}`}>Conquistas</h2>
          </div>

          <div className="flex flex-col gap-3">
            {loadingData ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : achievements.length > 0 ? (
              achievements.map((item) => (
                <AchievementCard key={item.id} data={item} />
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                Você ainda não desbloqueou nenhuma conquista.
              </p>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
