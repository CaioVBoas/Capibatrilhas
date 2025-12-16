import React from 'react';
import { CalendarImg } from 'assets';
import Image from 'next/image';
import { MapPin, CalendarClock, Coins } from 'lucide-react';
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Events {
  type: string;
  costType: string;
  name: string;
  date: string;
  location: string;
  capibas: number;
}

interface EventsCardProps {
  event: Events;
}

const EventsCard: React.FC<EventsCardProps> = ({ event }) => {
  const isFree = event.costType.toLowerCase() === 'gratuito';

  return (
    <div className="group bg-white rounded-3xl shadow-sm border border-gray-200 outline-2 outline-[#2563EB] p-5 w-72 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mt-1.5">
      
      <div className="self-center mb-4 transition-transform duration-300 group-hover:scale-105">
        <Image src={CalendarImg} alt="Ícone do evento" />
      </div>

      <div className="flex flex-col">
        
        <h3 className={`${outfit.className} text-xl font-bold text-gray-900 leading-tight mb-2 line-clamp-2`}>
          {event.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`${outfit.className} bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-lg border border-blue-100`}>
            {event.type}
          </span>

          <span className={`${dmSans.className} text-sm font-semibold px-3 py-1 rounded-lg border ${
            isFree 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
              : 'bg-gray-50 text-gray-600 border-gray-200'
          }`}>
            {event.costType}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-2 text-gray-500">
            <CalendarClock size={18} className="text-blue-500 shrink-0" />
            <span className={`${dmSans.className} text-sm font-medium`}>
              {event.date}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={18} className="text-red-400 shrink-0" />
            <span className={`${dmSans.className} text-sm`}>
              {event.location}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-yellow-500">
            <Coins size={18} className="shrink-0" />
            <span className={`${dmSans.className} text-sm font-semibold`}>
              +{event.capibas}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsCard;