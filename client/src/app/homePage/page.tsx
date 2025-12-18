'use client';

import BoroughCard from 'components/featuredBoroughCards'; // Importa o novo componente de card único
import TrailCard from "components/featuredTrailCards";
import { MapPin, TrendingUp, Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import EventsCard from 'components/eventsCard';
import { DM_Sans } from "next/font/google";
import { outfit } from "styles/fonts";
import NavBar from 'components/navBar';
import UserCardHomepage from 'components/mainCardHomepage';
import AddMyTrail from 'components/addMyTrail';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mockUserCard = {
  userName: "Guilherme",
  level: 5,
  qtyCapibas: 450,
  sequenceOfDays: 7,
}

const mockBoroughs = [
  {
    name: 'Recife Antigo',
    location: 'Centro da Cidade',
    bonusScore: '2.5x',
    description:
      'Coração histórico da cidade, onde tudo começou. Arquitetura colonial, museus e o famoso Marco Zero.',
    tags: ['Marco Zero', 'Passo Alfândega', 'Cais do Porto'],
    id: '1'
  },
  {
    name: 'Boa Viagem',
    location: 'Zona Sul',
    bonusScore: '5.0x',
    description:
      'Bairro mais famoso e cartão-postal da cidade, conhecido pela sua longa praia urbana, piscinas naturais formadas por recifes e o calçadão movimentado.',
    tags: [
      'Praia de Boa Viagem',
      'Parque Dona Lindu',
      'Feirinha de Boa Viagem'
    ],
    id: '5'
  },
  {
    name: 'Casa Amarela',
    location: 'Zona Norte',
    bonusScore: '3.5x',
    description:
      'Um dos bairros mais populosos e tradicionais, famoso pelo seu mercado centenário, a maior feira livre da cidade e o Sítio Trindade.',
    tags: ['Mercado de Casa Amarela', 'Sítio Trindade', 'Feira Livre'],
    id: '4'
  },
  {
    name: 'Poço da Panela',
    location: 'Zona Norte',
    bonusScore: '3.0x',
    description:
      'Bairro bucólico e histórico, conhecido por suas ruas arborizadas, antigos casarões preservados e a tranquilidade às margens do Rio Capibaribe.',
    tags: ['Casarões Antigos', 'Rio Capibaribe', 'Igreja da Saúde'],
    id: '6'
  }
];

const mockEvents = [
  {
    type: 'Música',
    costType: 'Gratuito',
    name: 'Show de Verão no Parador',
    date: '15 de Dezembro, 20:00',
    location: 'Recife Antigo',
    capibas: 80
  },
  {
    type: 'Arte',
    costType: 'Pago',
    name: "Exposição 'Novas Cores'",
    date: '10 a 20 de Dezembro',
    location: 'Museu Cais do Sertão',
    capibas: 120
  },
  {
    type: 'Gastronomia',
    costType: 'Pago',
    name: 'Festival do Hambúrguer',
    date: '12 de Dezembro, 17:00',
    location: 'Parque Dona Lindu',
    capibas: 100
  },
  {
    type: 'Esporte',
    costType: 'Gratuito',
    name: "Corrida de Rua 'Recife Corre'",
    date: '22 de Dezembro, 07:00',
    location: 'Marco Zero',
    capibas: 90
  },
  {
    type: 'Teatro',
    costType: 'Pago',
    name: 'Peça: O Auto da Compadecida',
    date: '18 de Dezembro, 19:30',
    location: 'Teatro de Santa Isabel',
    capibas: 130
  },
  {
    type: 'Música',
    costType: 'Pago',
    name: 'Festival de Jazz',
    date: '20 de Dezembro, 21:00',
    location: 'Parque da Jaqueira',
    capibas: 110
  },
  {
    type: 'Cinema',
    costType: 'Gratuito',
    name: 'Cinema ao Ar Livre',
    date: '14 de Dezembro, 18:00',
    location: 'Praça do Arsenal',
    capibas: 70
  },
  {
    type: 'Dança',
    costType: 'Gratuito',
    name: 'Apresentação de Frevo',
    date: '16 de Dezembro, 17:00',
    location: 'Pátio de São Pedro',
    capibas: 85
  },
  {
    type: 'Literatura',
    costType: 'Gratuito',
    name: 'Feira Literária do Recife',
    date: '19 de Dezembro, 09:00',
    location: 'Parque 13 de Maio',
    capibas: 75
  },
  {
    type: 'Artesanato',
    costType: 'Gratuito',
    name: 'Feira de Artesanato',
    date: '21 de Dezembro, 10:00',
    location: 'Mercado de São José',
    capibas: 65
  }
];
const mockTrails = [
{
  id: 1,
  title: "Capibatrilha de Carnaval",
  subtitle: "Explore os melhores blocos e pontos culturais do Carnaval da cidade",
  progress: 42, 
  type: "Destaque",
  challengesQuantity: 7,
  time: "5 dias",
  prize: 500,
  challengesCompleted: 3,
  buttonText: "Continuar",
  tag: "Cultura",
  isPersonalized: true,
},
{
  id: 2,
  title: "Capibatrilha Gastronômica",
  subtitle: "Descubra os sabores únicos da culinária do Recife com desafios deliciosos",
  progress: 60, 
  type: "Destaque",
  challengesQuantity: 5,
  time: "6 dias",
  prize: 400,
  challengesCompleted: 3,
  buttonText: "Continuar",
  tag: "Gastronomia",
  isPersonalized: false,
},
{
  id: 3,
  title: "Capibatrilha de Natal",
  subtitle: "Descubra o Natal de um novo jeito embalado pelas luzes e decorações natalinas na melhor cidade do Brasil",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: 8,
  time: "10 dias",
  prize: 300,
  challengesCompleted: 0,
  buttonText: "Iniciar Trilha",
  tag: "Natal",
  isPersonalized: false,
},
{
  id: 4,
  title: "7 Dias de Verão",
  subtitle: "Desafios diários em praias e pontos turísticos da cidade",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: 7,
  time: "7 dias",
  prize: 350,
  challengesCompleted: 0,
  buttonText: "Iniciar Trilha",
  tag: "Verão",
  isPersonalized: false,
},
{
    id: 5,
    title: "Capibatrilha Histórica",
    subtitle: "Volte no tempo e descubra as raízes do Recife Antigo",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: 6,
    time: "4 dias",
    prize: 250,
    challengesCompleted: 0,
    buttonText: "Iniciar Trilha",
    tag: "História",
    isPersonalized: false,
},
{
    id: 6,
    title: "Circuito de Arte Urbana",
    subtitle: "Explore os murais de grafite e galerias de arte da cidade",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: 5,
    time: "3 dias",
    prize: 200,
    challengesCompleted: 0,
    buttonText: "Iniciar Trilha",
    tag: "Arte",
    isPersonalized: false,
},
{
    id: 7,
    title: "Recife Verde: Parques",
    subtitle: "Uma jornada relaxante pelos principais parques e áreas verdes",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: 4,
    time: "2 dias",
    prize: 150,
    challengesCompleted: 0,
    buttonText: "Iniciar Trilha",
    tag: "Natureza",
    isPersonalized: false,
},
];

export default function HomePage() {
  const trilhasEmDestaque = mockTrails.filter((trail) => trail.progress === 0);
  const trilhasEmAndamento = mockTrails.filter((trail) => trail.progress > 0);
  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const trailsScrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="bg-[#fffdfc]">
      
      <NavBar />

      <UserCardHomepage userCardProp={mockUserCard}/>

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
            {mockEvents.map((eventItem, index) => (
              <div key={index} className="shrink-0">
                <EventsCard event={eventItem} />
              </div>
            ))}
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
          {trilhasEmAndamento.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
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
            {trilhasEmDestaque.map(trail => (
              <div
                key={trail.id}
                className="shrink-0 w-11/12 sm:w-[400px] lg:w-[420px] mt-1"
              >
                <TrailCard trail={trail} />
              </div>
            ))}
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
          {mockBoroughs.map((borough) => (
            <BoroughCard key={borough.id} borough={borough} />
          ))}
        </div>
      </div>
    </div>
  );
}
