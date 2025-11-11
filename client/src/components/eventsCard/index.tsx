import React from 'react';
import { CalendarImg } from 'assets';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface Events {
  type: string;
  costType: string;
  name: string;
  date: string;
  location: string;
}

interface EventsCardProps {
  event: Events;
}

const EventsCard: React.FC<EventsCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-4 py-5 my-3 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-72">
      <div className="self-center">
        <Image src={CalendarImg} alt="" />
      </div>

      <div className="px-1 py-3 flex flex-row justify-between items-center font-bold">
        <h3 className=" bg-yellow-400 rounded-2xl px-3 py-0.5 text-sm">
          {event.type}
        </h3>
        <h3 className="border border-gray-400 rounded-2xl px-3 py-0.5 text-sm">
          {event.costType}
        </h3>
      </div>

      <div>
        <h3 className="font-bold">{event.name}</h3>
        <h4 className="text-sm py-0.5 text-gray-400">{event.date}</h4>
        <h4 className="flex gap-0.5 py-1 text-sm text-gray-400">
          <MapPin size={17}></MapPin>
          {event.location}
        </h4>
      </div>
    </div>
  );
};

export default EventsCard;
