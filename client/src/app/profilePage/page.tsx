'use client';

import React, { useEffect, useState } from 'react';
import { Star, Clock, Loader2, AlertCircle } from 'lucide-react';
import NavBar from 'components/navBar';
import ProfileHeader from 'components/headerProfilePage';
import AchievementCard from 'components/achievmentsCard';
import ActivityList from 'components/recentActivitiesCard';
import { outfit, dmSans } from '../../styles/fonts';

import { getProfileData, UserProfile } from 'services/profile';

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const storedId = localStorage.getItem('userId');
      const userIdToFetch = storedId ? Number(storedId) : 1;

      if (!userIdToFetch) {
        setError('Usuário não identificado. Faça login novamente.');
        setLoading(false);
        return;
      }

      try {
        const data = await getProfileData(userIdToFetch);
        if (data) {
          setProfile(data);
        } else {
          setError('Perfil não encontrado.');
        }
      } catch {
        setError('Erro de conexão ao carregar perfil.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4 ${dmSans.className}`}
      >
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="text-gray-600 text-lg">
          {error || 'Não foi possível carregar os dados.'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  const headerUser = {
    name: profile.name,
    email: profile.email,
    level: profile.level,
    avatarInitials: getInitials(profile.name),
    stats: {
      capibas: profile.stats.capibas,
      trails: profile.stats.trilhas,
      challenges: profile.stats.desafios,
      days: profile.stats.diasSeguidos
    }
  };

  const formattedActivities = profile.recentActivity.map((act) => ({
    id: act.id,
    title: act.title,
    time: act.date,
    reward: act.value ? `+${act.value}` : '',
    isCoin: act.type === 'reward'
  }));

  return (
    <div className={`bg-gray-50/50 min-h-screen pb-12 ${dmSans.className}`}>
      <NavBar />

      <ProfileHeader user={headerUser} />

      <main className="max-w-5xl mx-auto px-6 mt-10 relative z-20 space-y-8">
        {/* Conquistas */}
        <div>
          <div className="flex items-center gap-2 mb-4 mt-4 px-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2
              className={`text-gray-900 font-bold text-xl ${outfit.className}`}
            >
              Conquistas
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {profile.achievements.length > 0 ? (
              profile.achievements.map((item) => (
                <AchievementCard key={item.id} data={item} />
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center text-gray-400">
                <p>Nenhuma conquista desbloqueada ainda.</p>
              </div>
            )}
          </div>
        </div>

        {/* Atividade Recente */}
        <div>
          <div className="flex items-center gap-2 pb-4 border-b border-gray-50">
            <Clock className="w-5 h-5 text-gray-400" />
            <h2
              className={`text-gray-900 font-bold text-lg ${outfit.className}`}
            >
              Atividade Recente
            </h2>
          </div>

          {formattedActivities.length > 0 ? (
            <ActivityList activities={formattedActivities} />
          ) : (
            <p className="mt-4 text-gray-400 text-sm text-center">
              Nenhuma atividade recente encontrada.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
