import React from "react";
import { Trophy } from "lucide-react";
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
    completed: true,
  },
  {
    id: 2,
    title: "Maratonista",
    description: "Complete 3 trilhas em um mês",
    completed: true,
  },
  {
    id: 3,
    title: "Colecionador",
    description: "Acumule 500 Capibas",
    completed: false, 
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
    title: "Nova insígnia desbloqueada",
    time: "Hoje",
    isCoin: false,
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-gray-50/50 min-h-screen font-sans pb-12">
      

      <ProfileHeader user={mockUser} />

      <main className="max-w-5xl mx-auto px-6 -mt-8 relative z-20 space-y-8">
        
        <section>
          <div className="flex items-center gap-2 mb-4 px-1">
            <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2 className="text-gray-900 font-bold text-xl">Conquistas</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {mockAchievements.map((item) => (
              <AchievementCard key={item.id} data={item} />
            ))}
          </div>
        </section>
        
        <section>
          <ActivityList activities={mockActivity} />
        </section>

      </main>
    </div>
  );
}