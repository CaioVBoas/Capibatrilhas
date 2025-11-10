import React from "react"

interface Events {
    type:  string,
    hasCost: boolean,
    name: string,
    date: string,
    location: string
}

interface EventsCardProps {
  event: Events;
}

const EventsCard: React.FC<EventsCardProps> = ({ event }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>Data: {event.date}</p>
      <p>Local: {event.location}</p>
      <p>Tipo: {event.type}</p>
      <p>Custo: {event.hasCost ? "Pago" : "Gratuito"}</p>
    </div>
  );
};

export default EventsCard;