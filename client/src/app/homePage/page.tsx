import BoroughCard from "components/featuredBoroughCards"; // Importa o novo componente de card único
import TrailCard from "components/featuredTrailCards";
import { MapPin, TrendingUp, Star } from "lucide-react";
import React from "react";

const mockBoroughs = [
  {
    name: "Recife Antigo",
    location: "Centro da Cidade",
    bonusScore: "2.5x",
    description:
      "Coração histórico da cidade, onde tudo começou. Arquitetura colonial, museus e o famoso Marco Zero.",
    tags: ["Marco Zero", "Passo Alfândega", "Cais do Porto"],
    id: "1",
  },
  {
    name: "Boa Viagem",
    location: "Zona Sul",
    bonusScore: "5.0x",
    description:
      "Bairro mais famoso e cartão-postal da cidade, conhecido pela sua longa praia urbana, piscinas naturais formadas por recifes e o calçadão movimentado.",
    tags: ["Praia de Boa Viagem", "Parque Dona Lindu", "Feirinha de Boa Viagem"],
    id: "5",
  },
  {
    name: "Casa Amarela",
    location: "Zona Norte",
    bonusScore: "3.5x",
    description:
      "Um dos bairros mais populosos e tradicionais, famoso pelo seu mercado centenário, a maior feira livre da cidade e o Sítio Trindade.",
    tags: ["Mercado de Casa Amarela", "Sítio Trindade", "Feira Livre"],
    id: "4",
  },
  {
    name: "Poço da Panela",
    location: "Zona Norte",
    bonusScore: "3.0x",
    description:
      "Bairro bucólico e histórico, conhecido por suas ruas arborizadas, antigos casarões preservados e a tranquilidade às margens do Rio Capibaribe.",
    tags: ["Casarões Antigos", "Rio Capibaribe", "Igreja da Saúde"],
    id: "6",
  },
];

const mockTrails = [
{
  id: 1,
  title: "Capibatrilha de Carnaval",
  subtitle: "Explore os melhores blocos e pontos culturais do Carnaval da cidade",
  progress: 42, 
  type: "Destaque",
  challengesQuantity: "7",
  time: "5 dias",
  prize: 500,
  challengesCompleted: "3",
  buttonText: "Continuar",
  tag: "Cultura",
},
{
  id: 2,
  title: "Capibatrilha Gastronômica",
  subtitle: "Descubra os sabores únicos da culinária do Recife com desafios deliciosos",
  progress: 60, 
  type: "Destaque",
  challengesQuantity: "5",
  time: "6 dias",
  prize: 400,
  challengesCompleted: "3",
  buttonText: "Continuar",
  tag: "Gastronomia",    
},
{
  id: 3,
  title: "Capibatrilha de Natal",
  subtitle: "Descubra o Natal de um novo jeito embalado pelas luzes e decorações natalinas na melhor cidade do Brasil",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: "8",
  time: "10 dias",
  prize: 300,
  challengesCompleted: "0",
  buttonText: "Iniciar Trilha",
  tag: "Natal",
},
{
  id: 4,
  title: "7 Dias de Verão",
  subtitle: "Desafios diários em praias e pontos turísticos da cidade",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: "7",
  time: "7 dias",
  prize: 350,
  challengesCompleted: "0",
  buttonText: "Iniciar Trilha",
  tag: "Verão",
},
{
    id: 5,
    title: "Capibatrilha Histórica",
    subtitle: "Volte no tempo e descubra as raízes do Recife Antigo",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "6",
    time: "4 dias",
    prize: 250,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "História",
},
{
    id: 6,
    title: "Circuito de Arte Urbana",
    subtitle: "Explore os murais de grafite e galerias de arte da cidade",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "5",
    time: "3 dias",
    prize: 200,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "Arte",
},
{
    id: 7,
    title: "Recife Verde: Parques",
    subtitle: "Uma jornada relaxante pelos principais parques e áreas verdes",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "4",
    time: "2 dias",
    prize: 150,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "Natureza",
},
];

export default function HomePage() {
  const trilhasEmDestaque = mockTrails.filter((trail) => trail.progress === 0);
  const trilhasEmAndamento = mockTrails.filter((trail) => trail.progress > 0);

  return (
    <div>
      <div className="p-10">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-8 w-8 text-accent text-blue-600"></TrendingUp>
          <h1 className="text-3xl font-bold">Trilha em Andamento</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {trilhasEmAndamento.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
        <div className="flex items-center gap-2 mb-5">
          <Star className="h-8 w-8 text-accent text-yellow-300"></Star>
          <h1 className="text-3xl font-bold">Trilha em Destaque</h1>
        </div>
        <div className="overflow-x-auto gap-6 pb-4 flex">
          {trilhasEmDestaque.map(trail => (
            <div
              key={trail.id}
              className="shrink-0 w-11/12 sm:w-[400px] lg:w-[420px] mt-1"
            >
              <TrailCard trail={trail} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="h-8 w-8 text-accent text-red-500"></MapPin>
          <h1 className="text-3xl font-bold">Bairros em Destaque</h1>
        </div>

        <h3 className="text-gray-600 mb-5 ml-8">
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