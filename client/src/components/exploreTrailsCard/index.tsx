'use client';
import { Funnel, Search } from 'lucide-react';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700']
});

const trailsTypes = [
  'Todas',
  'Cultura',
  'Natureza',
  'Gastronomia',
  'Arte',
  'História'
];

interface ExploreTrailsCardProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ExploreTrailsCard({
  selectedType,
  setSelectedType,
  searchTerm,
  setSearchTerm
}: ExploreTrailsCardProps) {
  return (
    <div className="w-full grid justify-center py-4 bg-zinc-50 border-b border-zinc-300">
      <div className="flex flex-col gap-4">
        <h1 className={`text-3xl font-semibold text-[#1B2432] ${outfit.className}`}>
          Explorar Trilhas
        </h1>

        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5e6d83]"
            size={16}
          />

          <input
            type="text"
            name=""
            id=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#e8ebf095] placeholder:font-sans placeholder:font-semibold p-2 pl-9 rounded-2xl border border-zinc-400 w-full text-sm text-[#5e6d83]"
            placeholder="Buscar trilhas..."
          />
        </div>

        <div className="flex py-1 items-center flex-wrap gap-y-2 font-sans">
          <Funnel className="text-[#6c7d94] mx-1" size={19} />{' '}
          {trailsTypes.map((type) => (
            <button
              onClick={() => setSelectedType(type)}
              className={`
                px-3 py-1.5 text-xs rounded-2xl mx-1 font-bold
                ${
                  selectedType === type
                    ? 'bg-[#1162D4] text-white border border-[#627084]'
                    : 'bg-white text-[#627084] border border-[#627084]'
                }
              `}
              key={type}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
