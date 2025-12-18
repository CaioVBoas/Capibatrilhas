import React, { useState, useEffect } from "react";
import { MapPin, Clock, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";
import { Outfit, DM_Sans } from "next/font/google";
import api from "services/api";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export interface Trails {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  type: string;
  time: string;
  prize: number;
  tag: string;
  buttonText: string;
  isPersonalized?: boolean;
}

interface TrailCardProps {
  trail: Trails;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    loading: true,
  });

  useEffect(() => {
    async function fetchStats() {
      if (!trail.id) return;
      try {
        const response = await api.get(`trail-challenge/trail/${trail.id}`);
        const apiData = response.data.data || response.data; 

        if (Array.isArray(apiData)) {
          const total = apiData.length;
          const completed = apiData.filter(
            (item: any) => item.challenge && item.challenge.isActive === false
          ).length;

          setStats({ total, completed, loading: false });
        } else {
          setStats({ total: 0, completed: 0, loading: false });
        }
      } catch (error) {
        console.error("Erro estatísticas:", error);
        setStats({ total: 0, completed: 0, loading: false });
      }
    }
    fetchStats();
  }, [trail.id]);

  return (
    <div className="h-full bg-white rounded-2xl shadow-sm border border-gray-200 outline-2 outline-[#2563EB] p-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-1.5">
        <h2 className={`${outfit.className} text-xl font-semibold text-gray-900`}>{trail.title}</h2>
        {trail.type === "Destaque" && (
          <div className="flex items-center gap-3">
            {trail.isPersonalized && <Sparkles className="h-5 w-5 text-gray-500" />}
            <span className={`${outfit.className} px-3 py-1 bg-yellow-400 rounded-full text-sm font-semibold text-gray-900 shadow-sm`}>
              Destaque
            </span>
          </div>
        )}
      </div>

      <p className={`${dmSans.className} text-gray-600 mb-3`}>{trail.subtitle}</p>

      <div className="mb-4">
        <span className={`${outfit.className} px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-800 shadow-sm`}>
          {trail.tag}
        </span>
      </div>

      <div className="mb-4">
        <div className={`${dmSans.className} flex justify-between text-sm text-gray-600 mb-1.5`}>
          <span>Progresso</span>
          {stats.loading ? (
            <span className="h-5 w-24 bg-gray-200 animate-pulse rounded"></span>
          ) : (
            <span className="font-medium text-gray-800">
              {stats.completed}/{stats.total} desafios
            </span>
          )}
        </div>
        <div className="w-full bg-yellow-400 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${trail.progress}%` }}
          ></div>
        </div>
      </div>

      <div className={`${dmSans.className} flex justify-between items-center text-gray-600 text-sm mb-5`}>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-500 mr-1.5" />
          <span>{stats.loading ? "..." : stats.total} desafios</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-gray-500 mr-1.5" />
          <span>{trail.time}</span>
        </div>
        <div className="flex items-center text-yellow-600 font-medium">
          <Trophy className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1.5" />
          <span>{trail.prize}</span>
        </div>
      </div>

      <Link href={`/detailsTrails/${trail.id}`} passHref className="mt-auto">
        <button className={`${outfit.className} w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-700`}>
          {trail.buttonText}
        </button>
      </Link>
    </div>
  );
};

export default TrailCard;