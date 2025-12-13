'use client';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function MyTrails() {
  const [trailType, setTrailType] = useState('Andamento');

  return (
    <div className="bg-zinc-100 w-full min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-center py-6 border-b border-zinc-200 shadow-sm bg-white">
        <div className="w-full max-w-4xl flex flex-row justify-between items-center px-4">
          <h1 className="text-2xl font-semibold">Minhas Trilhas</h1>

          <button
            className="flex flex-row items-center text-sm bg-[#2563EB] text-white py-2.5 px-3 gap-2 rounded-2xl
            hover:bg-[#3b78ff] hover:shadow-md transition-all duration-200 transform active:bg-[#1e55c7] active:scale-95 active:shadow-none"
          >
            <Plus size={18} /> Criar Trilha
          </button>
        </div>
      </header>

      <div className="w-full max-w-4xl flex flex-row bg-[#E4EBF1] mt-6 rounded-2xl overflow-hidden mx-4">
        <button
          onClick={() => setTrailType('Andamento')}
          className={`flex-1 py-1.5 m-1  text-zinc-700 rounded-xl font-medium text-sm ${trailType === 'Andamento' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          Em Andamento
        </button>
        <button
          onClick={() => setTrailType('Personalizadas')}
          className={`flex-1 py-1.5 m-1 rounded-xl text-zinc-700 font-medium text-sm ${trailType === 'Personalizadas' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          Personalizadas
        </button>
        <button
          onClick={() => setTrailType('Concluidas')}
          className={`flex-1 py-1.5 m-1 rounded-xl  text-zinc-700 font-medium text-sm ${trailType === 'Concluidas' ? 'bg-white' : 'bg-[#E4EBF1]'}`}
        >
          Concluídas
        </button>
      </div>
    </div>
  );
}
