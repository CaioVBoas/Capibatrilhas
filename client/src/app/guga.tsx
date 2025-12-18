'use client';
import React, { useState } from 'react';
import { Search, CalendarDays, ChevronDown } from 'lucide-react';
import CulturalCard from 'components/culturalCard';
import NavBar from 'components/navBar';
import { outfit, dmSans } from 'styles/fonts';


const mockEvents = [
  {
    id: 1,
    title: 'Frevo na Praça',
    description:
      'Apresentação de orquestra de frevo com dançarinos profissionais.',
    category: 'Música',
    isFree: true,
    date: '10 OUT',
    location: 'Praça do Arsenal',
    capibas: 50
  },
  {
    id: 2,
    title: 'Festival de Cinema Recifense',
    description: 'Mostra de filmes produzidos em Pernambuco.',
    category: 'Cinema',
    isFree: false,
    date: '12 OUT',
    location: 'Cinema São Luiz',
    capibas: 120
  },
  {
    id: 3,
    title: 'Feira de Artesanato',
    description: 'Artesãos locais expõem suas criações únicas.',
    category: 'Artesanato',
    isFree: true,
    date: '15 OUT',
    location: 'Marco Zero',
    capibas: 80
  },
  {
    id: 4,
    title: 'Show de Maracatu',
    description: 'Apresentação dos principais grupos de maracatu.',
    category: 'Música',
    isFree: true,
    date: '18 OUT',
    location: 'Pátio de São Pedro',
    capibas: 90
  },
  {
    id: 5,
    title: 'Exposição de Arte',
    description: 'Obras de artistas pernambucanos contemporâneos.',
    category: 'Arte',
    isFree: false,
    date: '20 OUT',
    location: 'MAMAM',
    capibas: 110
  },
  {
    id: 6,
    title: 'Sarau de Poesia',
    description: 'Noite de poesia e música com artistas locais.',
    category: 'Literatura',
    isFree: true,
    date: '22 OUT',
    location: 'Casa da Cultura',
    capibas: 70
  },
  {
    id: 7,
    title: 'Oficina de Dança Frevo',
    description: 'Aprenda os passos tradicionais do frevo.',
    category: 'Cursos e Oficinas',
    isFree: false,
    date: '14 OUT',
    location: 'Paço do Frevo',
    capibas: 130
  },

  {
    id: 8,
    title: 'Exposição Fotográfica',
    description: 'Mostra sobre a história do Bairro do Recife.',
    category: 'Exposição',
    isFree: true,
    date: '19 OUT',
    location: 'Torre Malakoff',
    capibas: 85
  },
  {
    id: 9,
    title: 'Festival Gastronômico',
    description: 'Celebração dos sabores típicos pernambucanos.',
    category: 'Gastronomia',
    isFree: true,
    date: '21 OUT',
    location: 'Mercado de São José',
    capibas: 95
  },
  {
    id: 10,
    title: 'Congresso de Cultura',
    description: 'Debates sobre preservação patrimonial.',
    category: 'Congressos e Palestras',
    isFree: false,
    date: '23 OUT',
    location: 'Centro de Convenções',
    capibas: 140
  },
  {
    id: 11,
    title: 'Ciclo de Cinema',
    description: 'Exibição de clássicos nacionais restaurados.',
    category: 'Cinema',
    isFree: true,
    date: '25 OUT',
    location: 'Cinema da Fundação',
    capibas: 75
  }
];

export default function CulturalAgendaPage() {

  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [freeFilter, setFreeFilter] = useState('Todas');

  // Gera a lista de categorias dinamicamente baseada nos dados
  const categories = ['Todas', ...new Set(mockEvents.map((e) => e.category))];

  const filteredEvents = mockEvents.filter((event) => {
    const matchFree =
      freeFilter === 'Todas' ||
      (freeFilter === 'Gratuito'
        ? event.isFree === true
        : event.isFree === false);

    const matchCategory =
      categoryFilter === 'Todas' || event.category === categoryFilter;

    return matchFree && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <NavBar />
      <header className="bg-linear-to-r from-[#2563EB] to-[#1E40AF] pt-8 pb-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <CalendarDays className="w-8 h-8 text-white" />
            <h1 className={`text-3xl md:text-4xl font-bold text-white ${outfit.className}`}>
              Agenda Cultural
            </h1>
          </div>
          <p className={`text-blue-100 text-lg font-light max-w-2xl ${dmSans.className}`}>
            Descubra eventos culturais do Recife
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="gratuidade"
                className={`block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide ${outfit.className}`}
              >
                Tipo:
              </label>
              <div className="relative group">
                <select
                  id="gratuidade"
                  value={freeFilter}
                  onChange={(e) => setFreeFilter(e.target.value)}
                  className={`w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:bg-gray-100 ${dmSans.className}`}
                >
                  <option value="Todas">Todas</option>
                  <option value="Gratuito">Gratuito</option>
                  <option value="Pago">Pago</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover:text-blue-500 transition-colors">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <label
                htmlFor="categoria"
                className={`block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide ${outfit.className}`}
              >
                Categoria:
              </label>
              <div className="relative group">
                <select
                  id="categoria"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className={`w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:bg-gray-100 ${dmSans.className}`}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'Todas' ? 'Todas' : cat}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover:text-blue-500 transition-colors">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <CulturalCard key={event.id} cultural={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className={`text-lg font-bold text-gray-900 mb-1 ${outfit.className}`}>
              Nenhum evento encontrado
            </h3>
            <p className={`text-gray-500 mb-6 ${dmSans.className}`}>
              Tente selecionar outra categoria ou gratuidade.
            </p>
            <button
              onClick={() => {
                setCategoryFilter('Todas');
                setFreeFilter('Todas');
              }}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
