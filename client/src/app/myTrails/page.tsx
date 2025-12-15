'use client';
import { Plus, TrendingUp, Sparkles, CircleCheckBig } from 'lucide-react';
import { useState } from 'react';
import TrailCard from 'components/featuredTrailCards';
import { mockTrails } from './mocks';
import Link from 'next/link';
import NavBar from 'components/navBar';

export default function MyTrails() {
  const [trailType, setTrailType] = useState('Andamento');

  const filteredTrails = mockTrails.filter((trail) => {
    if (trailType === 'Andamento')
      return trail.progress > 0 && trail.progress < 100;
    if (trailType === 'Personalizadas') return trail.progress === 0;
    if (trailType === 'Concluidas') return trail.progress === 100;
    return true;
  });

  return (
    <div className="bg-zinc-100 w-full min-h-screen flex flex-col items-center">
      <NavBar />
      <header className="w-full flex justify-center py-6 border-b border-zinc-200 shadow-sm bg-white">
        <div className="w-full max-w-4xl flex flex-row justify-between items-center px-4">
          <h1 className="text-2xl font-semibold font-outfit ">Minhas Trilhas</h1>

          <Link href="/createTrail">
            <button
              className="flex flex-row items-center text-sm bg-[#2563EB] text-white py-2.5 px-3 gap-2 rounded-2xl
              hover:bg-[#3b78ff] hover:shadow-md transition-all duration-200 transform active:bg-[#1e55c7] active:scale-95 active:shadow-none"
            >
              <Plus size={18} /> Criar Trilha
            </button>
          </Link>
        </div>
      </header>

      <div className="w-full max-w-4xl flex flex-row bg-[#E4EBF1] mt-6 rounded-2xl overflow-hidden mx-4">
        <button
          onClick={() => setTrailType('Andamento')}
          className={`flex-1 py-1.5 m-1  text-zinc-700 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Andamento' ? 'hover:bg-zinc-100' : 'hover:bg-white'} ${trailType === 'Andamento' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          <TrendingUp size={16}></TrendingUp> Em Andamento
        </button>
        <button
          onClick={() => setTrailType('Personalizadas')}
          className={`flex-1 py-1.5 m-1 rounded-xl text-zinc-700 font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Personalizadas' ? 'hover:bg-zinc-100' : 'hover:bg-white'} ${trailType === 'Personalizadas' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          <Sparkles size={16}></Sparkles> Personalizadas
        </button>
        <button
          onClick={() => setTrailType('Concluidas')}
          className={`flex-1 py-1.5 m-1 rounded-xl  text-zinc-700 font-medium text-sm flex items-center justify-center gap-3 transition-all ${trailType !== 'Concluidas' ? 'hover:bg-zinc-100' : 'hover:bg-white'} ${trailType === 'Concluidas' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          <CircleCheckBig size={16}></CircleCheckBig> Concluídas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl mt-8">
        {filteredTrails.map((trail) => (
          <TrailCard key={trail.id} trail={trail} />
        ))}
      </div>
    </div>
  );
}
