import React from "react"
import { CalendarImg } from "assets"
import Image from "next/image"
import { MapPin } from "lucide-react";

interface Events {
    type:  string,
    costType: string,
    name: string,
    date: string,
    location: string
}

interface EventsCardProps {
  event: Events;
}

const EventsCard: React.FC<EventsCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-72">
       <div className="self-center">
        <Image src={ CalendarImg } alt="" />
       </div>

       <div className="px-1 py-3 flex flex-row justify-between items-center font-bold">
        <h3 className=" bg-yellow-400 rounded-2xl px-3 py-1">{event.type}</h3>
        <h3 className="rounded-2xl px-3 py-1 border border-black">{event.costType}</h3>
       </div>

       <div className="py-2">
        <h3 className="font-bold">{event.name}</h3>
        <h4>{event.date}</h4>
        <h4 className="flex gap-1 py-1"><MapPin></MapPin>{event.location}</h4>
       </div>
    </div>
  );
};

export default EventsCard;