'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, MapPin, Coins, ArrowLeft, Clock, Users, Tag } from 'lucide-react';
import { outfit, dmSans } from 'styles/fonts';
import NavBar from 'components/navBar';

const mockEventsDetails = {
  "1": {
    id: 1,
    title: 'Frevo na Praça',
    description: 'Apresentação de orquestra de frevo com dançarinos profissionais.',
    fullDescription: 'Uma noite inesquecível de frevo com a melhor orquestra da cidade! Venha dançar e celebrar a cultura pernambucana com apresentações de dançarinos profissionais, mostrando os passos tradicionais do frevo. O evento contará com food trucks, feira de artesanato local e muito mais. Traga sua sombrinha colorida e venha fazer parte dessa festa!',
    category: 'Música',
    isFree: true,
    date: '10 OUT',
    fullDate: '10 de Outubro de 2024',
    time: '18:00',
    location: 'Praça do Arsenal',
    capibas: 50,
    organizer: 'Prefeitura do Recife',
    capacity: '500 pessoas',
    tags: ['Música', 'Cultura', 'Frevo', 'Dança'],
  },
  "2": {
    id: 2,
    title: 'Festival de Cinema Recifense',
    description: 'Mostra de filmes produzidos em Pernambuco.',
    fullDescription: 'O Festival de Cinema Recifense apresenta uma seleção especial de filmes produzidos em Pernambuco, destacando novos talentos e produções premiadas. Durante três dias, você poderá assistir a longas-metragens, curtas e documentários que retratam a cultura, história e diversidade do nosso estado. Após cada sessão, haverá debate com diretores e atores.',
    category: 'Cinema',
    isFree: false,
    date: '12 OUT',
    fullDate: '12 de Outubro de 2024',
    time: '14:00',
    location: 'Cinema São Luiz',
    capibas: 120,
    organizer: 'Fundação do Patrimônio Histórico',
    capacity: '300 pessoas',
    price: 'R$ 20,00',
    tags: ['Cinema', 'Cultura', 'Arte', 'Pernambuco'],
  }
};

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params?.id as string;
  const event = mockEventsDetails[eventId as keyof typeof mockEventsDetails];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
            Evento não encontrado
          </h1>
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:underline"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${dmSans.className} min-h-screen bg-gray-50`}>
      <NavBar />

      <div className="bg-linear-to-r from-[#2563EB] to-[#1E40AF] text-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="text-lg font-medium">Voltar</span>
          </button>
          <h1 className={`${outfit.className} text-4xl font-bold mb-2`}>
            {event.title}
          </h1>
          <p className="text-blue-100 text-lg">{event.description}</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-96 bg-linear-to-r from-blue-100 via-purple-100 to-orange-100" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
                Sobre o Evento
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg border border-blue-100 flex items-center gap-2"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Data</p>
                    <p className="text-gray-900 font-semibold">{event.fullDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Horário</p>
                    <p className="text-gray-900 font-semibold">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Local</p>
                    <p className="text-gray-900 font-semibold">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Capacidade</p>
                    <p className="text-gray-900 font-semibold">{event.capacity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Categoria</p>
                    <p className="text-gray-900 font-semibold">{event.category}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">Recompensa</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Coins className="w-5 h-5" />
                      <span className="font-bold text-lg">+{event.capibas}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
