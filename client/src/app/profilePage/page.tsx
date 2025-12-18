import React from "react";
import { Star } from "lucide-react";
import NavBar from "components/navBar";
import ProfileHeader from "components/headerProfilePage";
import AchievementCard from "components/achievmentsCard";

import { outfit, dmSans } from "../../styles/fonts";

const mockUser = {
  name: "Guilherme Silva",
  email: "guiguizinhosaunders@email.com",
  level: 5,
  avatarInitials: "GS",
  stats: {
    capibas: 450,
    trails: 3,
    challenges: 28,
    days: 7,
    weeks: 7,
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



export default function ProfilePage() {
  return (
    <div className={`bg-gray-50/50 min-h-screen pb-12 ${dmSans.className}`}>
      <NavBar />
      
      <ProfileHeader user={mockUser} />

      <main className="max-w-5xl mx-auto px-6 mt-10 relative z-20 space-y-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4 mt-4 px-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2 className={`text-gray-900 font-bold text-xl ${outfit.className}`}>Conquistas</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {mockAchievements.map((item) => (
              <AchievementCard key={item.id} data={item} />
            ))}
          </div>
        </div>



      </main>
    </div>
  );
}