'use client';

import BoroughCard from 'components/featuredBoroughCards';
import TrailCard from "components/featuredTrailCards";
import { MapPin, TrendingUp, Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import EventsCard from 'components/eventsCard';
import { DM_Sans } from "next/font/google";
import { outfit } from "styles/fonts";
import NavBar from 'components/navBar';
import UserCardHomepage from 'components/mainCardHomepage';
import AddMyTrail from 'components/addMyTrail';
import { useAuth } from 'hooks/useAuth';
import api from 'services/api';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface Trail {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  type: string;
  challengesQuantity: number;
  time: string;
  prize: number;
  challengesCompleted: number;
  buttonText: string;
  tag: string;
  isPersonalized: boolean;
}

interface Borough {
  id: string;
  name: string;
  location: string;
  bonusScore: string;
  description: string;
  tags: string[];
}

interface Event {
  type: string;
  costType: string;
  name: string;
  date: string;
  location: string;
  capibas: number;
}

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const [trails, setTrails] = useState<Trail[]>([]);
  const [boroughs, setBoroughs] = useState<Borough[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loadingTrails, setLoadingTrails] = useState(true);
  const [loadingBoroughs, setLoadingBoroughs] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const trailsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchTrails() {
      try {
        const response = await api.get('/trail');
        const apiTrails = response.data.data || response.data;

        if (Array.isArray(apiTrails)) {
          const formattedTrails: Trail[] = apiTrails.map((trail: {
            id: number;
            title: string;
            description: string;
            theme: string;
            totalRewards: number;
            isHighlighted: boolean;
            startDate: string;
            endDate: string;
          }) => ({
            id: trail.id,
            title: trail.title,
            subtitle: trail.description,
            progress: 0,
            type: trail.isHighlighted ? "Destaque" : "Normal",
            challengesQuantity: 0,
            time: calculateDays(trail.startDate, trail.endDate),
            prize: trail.totalRewards,
            challengesCompleted: 0,
            buttonText: "Iniciar Trilha",
            tag: trail.theme,
            isPersonalized: false,
          }));
          setTrails(formattedTrails);
        }
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      } finally {
        setLoadingTrails(false);
      }
    }

    async function fetchBoroughs() {
      try {
        const response = await api.get('/district');
        const apiDistricts = response.data.data || response.data;

        if (Array.isArray(apiDistricts)) {
          const formattedBoroughs: Borough[] = apiDistricts
            .filter((d: { isActive?: boolean }) => d.isActive !== false)
            .map((district: {
              id: number;
              name: string;
              location: string;
              bonusScore: number;
              description: string;
              tags: string[];
            }) => ({
              id: String(district.id),
              name: district.name,
              location: district.location,
              bonusScore: `${district.bonusScore}x`,
              description: district.description,
              tags: district.tags || [],
            }));
          setBoroughs(formattedBoroughs);
        }
      } catch (error) {
        console.error('Erro ao buscar bairros:', error);
      } finally {
        setLoadingBoroughs(false);
      }
    }

    async function fetchEvents() {
      try {
        const response = await api.get('/agenda');
        const apiEvents = response.data.data || response.data;

        if (Array.isArray(apiEvents)) {
          const formattedEvents: Event[] = apiEvents
            .filter((e: { isActive?: boolean }) => e.isActive !== false)
            .map((event: {
              id: number;
              title: string;
              category: string;
              eventDate: string;
              location: string;
              value?: string;
            }) => ({
              type: event.category,
              costType: event.value === 'Gratuito' || !event.value ? 'Gratuito' : 'Pago',
              name: event.title,
              date: formatEventDate(event.eventDate),
              location: event.location,
              capibas: 50,
            }));
          setEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      } finally {
        setLoadingEvents(false);
      }
    }

    fetchTrails();
    fetchBoroughs();
    fetchEvents();
  }, []);

  function calculateDays(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} dias`;
  }

  function formatEventDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('pt-BR', options).replace(',', ' -');
  }

  const trilhasEmDestaque = trails.filter((trail) => trail.progress === 0);
  const trilhasEmAndamento = trails.filter((trail) => trail.progress > 0);

  const scrollEvents = (direction: 'left' | 'right') => {
    if (eventsScrollRef.current) {
      const scrollAmount = 300;
      eventsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollTrails = (direction: 'left' | 'right') => {
    if (trailsScrollRef.current) {
      const scrollAmount = 400;
      trailsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const userCard = {
    userName: user?.name?.split(' ')[0] || 'Usuário',
    level: user?.level || 1,
    qtyCapibas: user?.points || 0,
    sequenceOfDays: 1,
  };

  if (isLoading) {
    return (
      <div className="bg-[#fffdfc] min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#fffdfc]">

      <NavBar />

      <UserCardHomepage userCardProp={userCard}/>

      <AddMyTrail />

      <div className="px-4 md:px-10 py-10">
        <div className="flex items-center gap-2 mb-5">
          <Calendar className="h-8 w-8 text-blue-600" />
          <h1 className={`${outfit.className} text-3xl font-bold`}>Agenda Cultural</h1>
        </div>
        <div className="relative flex items-center gap-4">
          <button
            onClick={() => scrollEvents('left')}
            className="shrink-0 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
            aria-label="Scroll para esquerda"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <div ref={eventsScrollRef} className="overflow-x-auto pb-4 px-2 flex gap-3 scroll-smooth scrollbar-hide">
            {loadingEvents ? (
              <div className="flex justify-center py-8 w-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : events.length > 0 ? (
              events.map((eventItem, index) => (
                <div key={index} className="shrink-0">
                  <EventsCard event={eventItem} />
                </div>
              ))
            ) : (
              <p className={`${dmSans.className} text-gray-500 py-8`}>
                Nenhum evento disponível no momento.
              </p>
            )}
          </div>
          <button
            onClick={() => scrollEvents('right')}
            className="shrink-0 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
            aria-label="Scroll para direita"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>

      <div className="p-10">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-8 w-8 text-accent text-blue-600"></TrendingUp>
          <h1 className={`${outfit.className} text-3xl font-bold`}>Trilhas em Andamento</h1>

          <a
            href="myTrails"
            className={`${dmSans.className} ml-auto text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 hover:underline`}
          >
            Ver todas as trilhas em andamento
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {loadingTrails ? (
            <div className="col-span-2 flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : trilhasEmAndamento.length > 0 ? (
            trilhasEmAndamento.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))
          ) : (
            <p className={`${dmSans.className} text-gray-500 col-span-2`}>
              Você ainda não iniciou nenhuma trilha.
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 mb-5">
          <Star className="h-8 w-8 text-accent text-yellow-300"></Star>
          <h1 className={`${outfit.className} text-3xl font-bold`}>Trilhas em Destaque</h1>
        </div>
        <div className="relative flex items-center gap-4">
          <button
            onClick={() => scrollTrails('left')}
            className="shrink-0 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
            aria-label="Scroll para esquerda"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <div ref={trailsScrollRef} className="overflow-x-auto py-2 px-2 flex gap-6 scroll-smooth scrollbar-hide">
            {loadingTrails ? (
              <div className="flex justify-center py-8 w-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : trilhasEmDestaque.length > 0 ? (
              trilhasEmDestaque.map(trail => (
                <div
                  key={trail.id}
                  className="shrink-0 w-11/12 sm:w-[400px] lg:w-[420px] mt-1"
                >
                  <TrailCard trail={trail} />
                </div>
              ))
            ) : (
              <p className={`${dmSans.className} text-gray-500 py-8`}>
                Nenhuma trilha em destaque no momento.
              </p>
            )}
          </div>
          <button
            onClick={() => scrollTrails('right')}
            className="shrink-0 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
            aria-label="Scroll para direita"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="h-8 w-8 text-accent text-red-500"></MapPin>
          <h1 className={`${outfit.className} text-3xl font-bold`}>Bairros em Destaque</h1>
        </div>

        <h3 className={`${dmSans.className} text-gray-600 mb-5 ml-8`}>
          Descubra os bairros em destaque do mês! Complete desafios neles e
          ganhe moedas Capibas com um bônus especial.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loadingBoroughs ? (
            <div className="col-span-2 flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : boroughs.length > 0 ? (
            boroughs.map((borough) => (
              <BoroughCard key={borough.id} borough={borough} />
            ))
          ) : (
            <p className={`${dmSans.className} text-gray-500 col-span-2`}>
              Nenhum bairro em destaque no momento.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
