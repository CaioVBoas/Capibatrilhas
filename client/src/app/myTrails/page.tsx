import { Plus } from 'lucide-react';

export default function MyTrails() {
  return (
    <header>
      <div className="flex flex-row justify-between py-6 px-96 border border-zinc-200 shadow rounded-md">
        <h1 className="text-2xl font-semibold">Minhas Trilhas</h1>
        <button
          className="flex flex-row items-center text-sm bg-[#2563EB] text-white py-2.5 px-3 gap-2 rounded-2xl
  hover:bg-[#3b78ff] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
        >
          {' '}
          <Plus size={18}></Plus> Criar Trilha
        </button>
      </div>
    </header>
  );
}
