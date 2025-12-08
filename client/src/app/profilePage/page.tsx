import React from "react";
import { Star, Clock } from "lucide-react";
import ProfileHeader from "components/headerProfilePage";
import AchievementCard from "components/achievmentsCard";
import ActivityList from "components/recentActivitiesCard";

const mockUser = {
  name: "Maria Silva",
  email: "maria@email.com",
  level: 5,
  avatarInitials: "MS",
  stats: {
    capibas: 450,
    trails: 3,
    challenges: 28,
    days: 7,
  },
};

const mockAchievements = [
  {
    id: 1,
    title: "Explorador Iniciante",
    description: "Complete sua primeira trilha",
  },
  {
    id: 2,
    title: "Maratonista",
    description: "Complete 3 trilhas em um mês",
  },
  {
    id: 3,
    title: "Colecionador",
    description: "Acumule 500 Capibas",
  },
];

const mockActivity = [
  {
    id: 1,
    title: 'Trilha "Arte Urbana" concluída',
    time: "Há 2 dias",
    reward: "+400",
    isCoin: true,
  },
  {
    id: 2,
    title: 'Desafio "Quiz Carnavalesco"',
    time: "Há 1 dia",
    reward: "+60",
    isCoin: true,
  },
  {
    id: 3,
    title: "Nova conquista desbloqueada",
    time: "Hoje",
    isCoin: false,
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-gray-50/50 min-h-screen font-sans pb-12">
      

      <ProfileHeader user={mockUser} />

      <main className="max-w-5xl mx-auto px-6 mt-10 relative z-20 space-y-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4 mt-4 px-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2 className="text-gray-900 font-bold text-xl">Conquistas</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {mockAchievements.map((item) => (
              <AchievementCard key={item.id} data={item} />
            ))}
          </div>
        </div>

        <div>
            <div className="flex items-center gap-2 pb-4 border-b border-gray-50">
                <Clock className="w-5 h-5 text-gray-400" />
                <h2 className="text-gray-900 font-bold text-lg">Atividade Recente</h2>
            </div>
          <ActivityList activities={mockActivity} />
        </div>

      </main>
    </div>
  );
}