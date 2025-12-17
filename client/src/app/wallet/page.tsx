'use client';

import React from 'react';
import NavBar from 'components/navBar';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Lock, 
  Trophy, 
  Star, 
  History,
  Coins
} from 'lucide-react';
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const userData = {
  balance: 1450,
  level: 5,
  currentXp: 750,
  nextLevelXp: 1000,
};

const transactions = [
  { id: 1, title: "Recompensa: Capibatrilha de Carnaval", date: "Hoje, 14:30", amount: 500, type: "entry" },
  { id: 2, title: "Compra: Cupom Açaí do Cais", date: "Ontem, 18:20", amount: -200, type: "exit" },
  { id: 3, title: "Desafio: Selfie no Galo", date: "15 Dez, 10:00", amount: 70, type: "entry" },
  { id: 4, title: "Desafio: Bolo de Rolo Master", date: "14 Dez, 16:45", amount: 90, type: "entry" },
  { id: 5, title: "Compra: Skin de Avatar", date: "12 Dez, 09:00", amount: -150, type: "exit" },
];

const achievements = [
  { id: 1, title: "Explorador do Recife", desc: "Completou 5 trilhas no centro.", icon: <MapPinIcon />, unlocked: true },
  { id: 2, title: "Folião Nato", desc: "Participou de 3 desafios de Carnaval.", icon: <StarIcon />, unlocked: true },
  { id: 3, title: "Gastrônomo", desc: "Provou 5 pratos típicos.", icon: <UtensilsIcon />, unlocked: true },
  { id: 4, title: "Historiador", desc: "Visitou todos os museus da lista.", icon: <BookIcon />, unlocked: false },
  { id: 5, title: "Lenda Urbana", desc: "Chegou ao Nível 20.", icon: <CrownIcon />, unlocked: false },
  { id: 6, title: "Social", desc: "Convidou 3 amigos para trilhas.", icon: <UsersIcon />, unlocked: false },
];


function MapPinIcon() { return <Trophy className="w-6 h-6 text-[#ffc107]" /> }
function StarIcon() { return <Star className="w-6 h-6 text-[#ffc107]" /> }
function UtensilsIcon() { return <Coins className="w-6 h-6 text-[#ffc107]" /> }
function BookIcon() { return <Trophy className="w-6 h-6 text-gray-400" /> }
function CrownIcon() { return <Trophy className="w-6 h-6 text-gray-400" /> }
function UsersIcon() { return <Trophy className="w-6 h-6 text-gray-400" /> }


export default function WalletPage() {
  const xpPercentage = (userData.currentXp / userData.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <NavBar />

      <div className="bg-[#2563EB] pt-10 pb-20 rounded-b-[3rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full md:w-1/2 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#ffc107] rounded-lg shadow-sm">
                   <Wallet className="text-[#2563EB] w-6 h-6" />
                </div>
                <span className={`${dmSans.className} text-blue-100 font-medium tracking-wide`}>Saldo Atual</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h1 className={`${outfit.className} text-5xl text-white font-bold`}>
                  {userData.balance}
                </h1>
                <span className={`${dmSans.className} text-[#ffc107] font-bold text-xl`}>Capibas</span>
              </div>
              <p className={`${dmSans.className} text-blue-200 text-sm mt-2 opacity-80`}>
                Use suas Capibas para resgatar prêmios exclusivos.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-2">
                <div>
                   <span className={`${dmSans.className} text-blue-200 text-sm uppercase tracking-wider font-bold`}>Nível do Usuário</span>
                   <div className="flex items-center gap-2">
                      <h2 className={`${outfit.className} text-4xl text-white font-bold`}>{userData.level}</h2>
                      <span className={`${outfit.className} text-white/60 text-lg`}>Explorador</span>
                   </div>
                </div>
                <div className="text-right">
                    <span className={`${dmSans.className} text-[#ffc107] font-bold`}>
                        {userData.currentXp} / {userData.nextLevelXp} XP
                    </span>
                </div>
              </div>

              <div className="w-full bg-black/20 rounded-full h-4 backdrop-blur-sm overflow-hidden border border-white/10">
                <div 
                    className="bg-linear-to-r from-[#ffc107] to-yellow-300 h-full rounded-full shadow-[0_0_15px_rgba(255,193,7,0.6)] transition-all duration-1000"
                    style={{ width: `${xpPercentage}%` }}
                ></div>
              </div>
              <p className={`${dmSans.className} text-blue-200 text-xs mt-2 text-right`}>
                Faltam {userData.nextLevelXp - userData.currentXp} XP para o próximo nível
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <History className="text-[#2563EB] w-5 h-5" />
                            <h3 className={`${outfit.className} text-xl text-gray-900`}>Extrato de Capibas</h3>
                        </div>
                        <button className={`${dmSans.className} text-sm text-[#2563EB] font-medium hover:underline`}>
                            Ver tudo
                        </button>
                    </div>
                    
                    <div className="p-2">
                        {transactions.map((t) => (
                            <div key={t.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                        t.type === 'entry' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
                                    }`}>
                                        {t.type === 'entry' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                                    </div>
                                    <div>
                                        <p className={`${dmSans.className} text-gray-800 font-medium text-sm leading-tight group-hover:text-[#2563EB] transition-colors`}>
                                            {t.title}
                                        </p>
                                        <p className={`${dmSans.className} text-gray-400 text-xs mt-0.5`}>
                                            {t.date}
                                        </p>
                                    </div>
                                </div>
                                <span className={`${outfit.className} font-bold ${
                                    t.type === 'entry' ? 'text-green-600' : 'text-red-500'
                                }`}>
                                    {t.type === 'entry' ? '+' : ''}{t.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="mb-6">
                        <h3 className={`${outfit.className} text-xl text-gray-900 mb-1`}>Minhas Conquistas</h3>
                        <p className={`${dmSans.className} text-gray-500 text-sm`}>
                            Desbloqueie conquistas para subir de nível e ganhar bônus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {achievements.map((ach) => (
                            <div 
                                key={ach.id} 
                                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                                    ach.unlocked 
                                        ? 'bg-white border-[#ffc107]/30 shadow-[0_2px_8px_rgba(255,193,7,0.15)] hover:-translate-y-1' 
                                        : 'bg-gray-50 border-gray-200 opacity-70 grayscale'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                                        ach.unlocked ? 'bg-linear-to-br from-yellow-100 to-yellow-50' : 'bg-gray-200'
                                    }`}>
                                        {ach.icon}
                                    </div>
                                    
                                    <div>
                                        <h4 className={`${outfit.className} font-bold text-gray-900 flex items-center gap-2`}>
                                            {ach.title}
                                            {!ach.unlocked && <Lock size={14} className="text-gray-400" />}
                                        </h4>
                                        <p className={`${dmSans.className} text-sm text-gray-500 mt-1 leading-snug`}>
                                            {ach.desc}
                                        </p>
                                    </div>
                                </div>
                                
                                {ach.unlocked && (
                                    <div className="absolute top-2 right-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}