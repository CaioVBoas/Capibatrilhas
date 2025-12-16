import React from 'react';
import { Calendar, MapPin, Coins } from 'lucide-react';
import { dmSans, outfit } from "styles/fonts";
import Link from 'next/link';

interface Cultural {
  title: string;
  description: string;
  category: string;
  isFree: boolean;
  date: string;
  location: string;
  capibas: number;
}

interface CulturalCardProps {
  cultural: Cultural;
}

const CulturalCard: React.FC<CulturalCardProps> = ({ cultural }) => {
  return (
    <div className={`${dmSans.className} group bg-white rounded-3xl shadow-sm border border-gray-200 p-5 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm`}>
      <div className="relative h-20 rounded-2xl bg-linear-to-r from-blue-100 via-purple-100 to-orange-100 mb-4 overflow-hidden" />

      <div className="flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wide">
            <Calendar className="w-4 h-4" />
            <span>{cultural.date}</span>
            
          </div>

          <span className={`${dmSans.className} text-xs font-semibold px-3 py-1 rounded-lg bg-[#3e7bff24] text-[#2563EB]`}>
            {cultural.category}
          </span>

          <span className={`${dmSans.className} text-xs font-semibold px-3 py-1 rounded-lg border ${
            cultural.isFree
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-gray-50 text-gray-600 border-gray-200"
          }`}>
            {cultural.isFree ? "Gratuito" : "Pago"}
          </span>
          
        </div>

        <div className="flex flex-col gap-2">
          <h2 className={`${outfit.className} text-xl font-bold text-gray-900 leading-tight`}>{cultural.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{cultural.description}</p>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-sm font-medium mt-auto pt-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{cultural.location}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <Coins className="w-4 h-4" />
            <span>+{cultural.capibas}</span>
          </div>
        </div>

        <Link href="knowMore" className={`${outfit.className} w-full py-3 rounded-xl border border-gray-200 font-semibold text-gray-800 hover:bg-gray-50 transition-colors mt-2 text-sm flex items-center justify-center`}>
          Saber mais
        </Link>
      </div>
    </div>
  );
};

export default CulturalCard;