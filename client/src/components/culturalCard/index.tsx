import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Cultural {
  title: string;
  description: string;
  category: string;
  isFree: boolean;
  date: string;
  location: string;
}

interface CulturalCardProps {
  cultural: Cultural;
}

const CulturalCard: React.FC<CulturalCardProps> = ({ cultural }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300 w-full max-w-sm">

      <div className="h-48 bg-linear-to-br from-blue-100 via-purple-100 to-orange-100 relative">
        <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
          {cultural.category}
        </span>
      </div> 

      <div className="p-6 flex flex-col gap-4 grow">

        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 font-medium text-sm tracking-wide uppercase">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{cultural.date}</span>
          </div>

          {cultural.isFree && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Gratuito
            </span>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
            {cultural.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {cultural.description}
          </p>
        </div>

        <div className="flex items-center text-gray-500 text-sm font-medium mt-auto pt-2">
          <MapPin className="w-4 h-4 mr-2 shrink-0" />
          <span className="truncate">{cultural.location}</span>
        </div>

        <button className="w-full py-3 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors mt-2 text-sm">
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default CulturalCard;