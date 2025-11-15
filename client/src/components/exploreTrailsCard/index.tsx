'use client';
// 1. Importei o ícone "Search"
import { Funnel, Search } from 'lucide-react';
import { useState } from 'react';

const trailsTypes = [
  'Todas',
  'Cultura',
  'Natureza',
  'Gastronomia',
  'Arte',
  'História'
];

export default function ExploreTrailsCard() {
  const [userInput, setUserInput] = useState('');
  const [selectedType, setSelectedType] = useState('Todas');

  return (
    <div className="w-full flex justify-center py-4 bg-zinc-50 border-b border-zinc-300">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-[#1B2432] font-semibold">
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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="bg-[#e8ebf095] p-2 pl-9 rounded-2xl border border-zinc-400 w-full text-sm text-[#5e6d83]"
            placeholder="Buscar trilhas..."
          />
        </div>

        <div className="flex px-2 py-1 items-center flex-wrap gap-y-2">
          {' '}
          {/* Adicionei items-center, flex-wrap, gap-y-2 */}
          <Funnel className="text-[#6c7d94] mx-1" size={19} />{' '}
          {/* Removi my-1 */}
          {trailsTypes.map((type) => (
            <button
              onClick={() => setSelectedType(type)}
              className={`
                px-2 py-1 text-xs rounded-2xl mx-1 font-bold
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
