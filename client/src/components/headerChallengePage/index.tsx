'use client';
import React from "react";
import { Clock, Coins, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Trails } from "components/featuredTrailCards"; 
import { DM_Sans, Outfit } from "next/font/google";
import NavBar from "components/navBar";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface TrailHeaderProps {
  trail: Trails;
}

const TrailHeader: React.FC<TrailHeaderProps> = ({ trail }) => {
  const router = useRouter();

  const members = (trail.isPersonalized && trail.members) ? trail.members : [];
  const MAX_AVATARS = 4;
  const extraMembersCount = members.length - MAX_AVATARS;

  return (

    <div className="bg-[#2563EB] min-h-fit rounded-b-[3rem] shadow-lg flex flex-col">  

      <div className="w-full">
        <NavBar />
      </div>

      <div className="p-8 pt-6">

        <div className="mb-4">
          <button 
              className={`flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all w-fit ${dmSans.className}`}
              aria-label="Voltar"
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="text-lg font-medium">Voltar</span>
          </button>
        </div>

        <div className="flex justify-between items-start mb-3 gap-4">
          <h1 className={`text-4xl text-white tracking-tight ${outfit.className}`}>
            {trail.title}
          </h1>
          
          {trail.type === "Destaque" && (
            <span className={`px-4 py-1.5 bg-[#ffc107] rounded-full text-sm text-[#2563EB] shadow-sm shrink-0 uppercase tracking-wide ${outfit.className}`}>
              Destaque
            </span>
          )}
        </div>

        <p className={`text-blue-100 max-w-2xl mb-8 text-lg leading-relaxed ${dmSans.className}`}>
          {trail.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-blue-50 mb-8">

          <div className={`flex items-center gap-5 ${dmSans.className}`}>

              <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                {trail.tag}
              </span>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 opacity-80" />
                <span>{trail.time}</span>
              </div>
              
              <div className="flex items-center font-medium text-[#ffc107]">
                <Coins className="h-5 w-5 mr-2 fill-[#ffc107]" />
                <span>{trail.prize}</span>
              </div>
          </div>

          {members.length > 0 && (
               <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
          )}

          {members.length > 0 && (
              <div className={`flex items-center gap-3 ${dmSans.className}`}>
                  <div className="flex -space-x-3 overflow-hidden">
                      {members.slice(0, MAX_AVATARS).map((member) => (
                          <img 
                              key={member.id}
                              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#2563EB] object-cover bg-blue-800"
                              src={member.avatarUrl} 
                              alt={member.name}
                              title={member.name}
                          />
                      ))}
                      
                      {extraMembersCount > 0 && (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-[#2563EB] bg-[#1E40AF] text-xs font-bold text-white">
                              +{extraMembersCount}
                          </div>
                      )}
                  </div>
                  <span className="text-sm font-medium text-blue-100">
                      participando
                  </span>
              </div>
          )}
        </div>

        <div className="mb-2">
          <div className={`flex justify-between text-sm text-blue-100 mb-2 ${dmSans.className}`}>
            <span>Progresso da Trilha</span>
            <span className="font-medium text-white">
              {trail.challengesCompleted}/{trail.challengesQuantity} desafios
            </span>
          </div>

          <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">

            <div
              className="bg-[#ffc107] h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,193,7,0.5)]"
              style={{ width: `${trail.progress}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrailHeader;