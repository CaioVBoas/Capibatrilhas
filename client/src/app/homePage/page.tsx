import FeaturedBoroughCards from "components/featuredBoroughCards";
import { MapPin } from "lucide-react";
import React from "react";

const mockBoroughs = [
  {
    name: "Recife Antigo",
    location: "Centro da Cidade",
    bonusScore: "2.5x",
    description: "Coração histórico da cidade, onde tudo começou. Arquitetura colonial, museus e o famoso Marco Zero.",
    tags: ["Marco Zero", "Passo Alfândega", "Cais do Porto"],
    id: "1",
  },
{
    name: "Boa Viagem",
    location: "Zona Sul",
    bonusScore: "5.0x",
    description: "Bairro mais famoso e cartão-postal da cidade, conhecido pela sua longa praia urbana, piscinas naturais formadas por recifes e o calçadão movimentado.",
    tags: ["Praia de Boa Viagem", "Parque Dona Lindu", "Feirinha de Boa Viagem"],
    id: "5",
  },
{
    name: "Casa Amarela",
    location: "Zona Norte",
    bonusScore: "3.5x",
    description: "Um dos bairros mais populosos e tradicionais, famoso pelo seu mercado centenário, a maior feira livre da cidade e o Sítio Trindade.",
    tags: ["Mercado de Casa Amarela", "Sítio Trindade", "Feira Livre"],
    id: "4",
  },
{
    name: "Poço da Panela",
    location: "Zona Norte",
    bonusScore: "3.0x",
    description: "Bairro bucólico e histórico, conhecido por suas ruas arborizadas, antigos casarões preservados e a tranquilidade às margens do Rio Capibaribe.",
    tags: ["Casarões Antigos", "Rio Capibaribe", "Igreja da Saúde"],
    id: "6",
  }
];

export default function HomePage() {
  return (
    <div>     
        <div className="p-10">
            <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-8 w-8 text-accent text-red-500"></MapPin>
                <h1 className="text-3xl font-bold">Bairros em Destaque</h1>
            </div>

            <h3 className="text-gray-600 mb-5 ml-8">Explore os bairros em destaque do mês e descubra o que cada um tem a oferecer!</h3>

        
            <FeaturedBoroughCards boroughs={mockBoroughs} />
        </div>
    </div>
  );
}
