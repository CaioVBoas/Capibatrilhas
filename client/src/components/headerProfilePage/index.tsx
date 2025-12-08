import React from "react";
import { Settings, Trophy, Flame, CheckCircle2, Coins, LucideIcon } from "lucide-react";

interface UserStats {
  capibas: number;
  trails: number;
  challenges: number;
  days: number;
}

interface UserProfile {
  name: string;
  email: string;
  level: number;
  avatarInitials: string;
  stats: UserStats;
}

interface ProfileHeaderProps {
  user: UserProfile;
}

const StatBox = ({ icon: Icon, value, label }: { icon: LucideIcon; value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl py-3 px-6 flex-1 min-w-30 border border-white/10 shadow-sm transition-transform hover:scale-105">
    <div className="flex items-center gap-2 text-white mb-1">
      <Icon className="w-5 h-5 text-yellow-300" />
      <span className="font-bold text-2xl leading-none">{value}</span>
    </div>
    <span className="text-blue-50 text-sm font-medium tracking-wide">{label}</span>
  </div>
);

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <header className="bg-blue-600 pt-10 pb-12 rounded-b-[3rem] shadow-xl relative overflow-hidden mb-8">

      <div className="absolute top-[-20%] right-[-5%] w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="flex justify-between items-start mb-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center border-[3px] border-blue-300 shadow-lg ring-4 ring-blue-600/20">
              <span className="text-white text-2xl font-bold tracking-wider">
                {user.avatarInitials}
              </span>
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold mb-1">{user.name}</h1>
              <div className="flex items-center gap-3">
                <p className="text-blue-100 text-sm">{user.email}</p>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Nível {user.level}
                </span>
              </div>
            </div>
          </div>
          <button 
            className="p-2 text-blue-100 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Configurações"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-4 justify-between">
          <StatBox icon={Coins} value={user.stats.capibas} label="Capibas" />
          <StatBox icon={Trophy} value={user.stats.trails} label="Trilhas" />
          <StatBox icon={CheckCircle2} value={user.stats.challenges} label="Desafios" />
          <StatBox icon={Flame} value={user.stats.days} label="Dias" />
        </div>
      </div>
    </header>
  );
}