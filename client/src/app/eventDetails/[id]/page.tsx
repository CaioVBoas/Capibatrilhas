'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, MapPin, Coins, ArrowLeft, Clock, Users, Tag, Loader2 } from 'lucide-react';
import { outfit, dmSans } from 'styles/fonts';
import NavBar from 'components/navBar';
import api from 'services/api';

interface EventDetails {
  id: number;
  title: string;
  description: string;      
  fullDescription: string;  
  category: string;
  isFree: boolean;
  fullDate: string;         
  time: string;             
  location: string;
  capibas: number;
  organizer: string;
  capacity: string;
  tags: string[];
}

function formatFullDate(isoString: string): string {
  if (!isoString) return 'Data a confirmar';
  try {
    const datePart = isoString.split('T')[0];
    const [year, month, day] = datePart.split('-');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${day} de ${months[parseInt(month) - 1]} de ${year}`;
  } catch (e) { return isoString; }
}

function extractTime(isoString: string, fallbackTime?: string): string {
  if (fallbackTime) return fallbackTime; 
  if (!isoString || !isoString.includes('T')) return 'Horário a confirmar';
  try {
    return isoString.split('T')[1].substring(0, 5);
  } catch (e) { return 'A definir'; }
}

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);

  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const mapApiToDetails = (data: any): EventDetails => {
    const price = Number(data.price || data.valor || 0);
    const rawDate = data.startDate || data.eventDate || data.dataInicio;
    const categoryName = data.category?.name || data.category || "Geral";

    const generatedTags = data.tags || [categoryName, 'Cultura', 'Recife'];

    return {
      id: data.id,
      title: data.title || data.name || "Evento sem título",
      description: data.summary || data.description || "Detalhes do evento.",
      fullDescription: data.description || "Sem descrição detalhada disponível.",
      category: categoryName,
      isFree: price === 0,
      fullDate: formatFullDate(rawDate),
      time: extractTime(rawDate, data.time),
      location: data.location || data.local || "Local a confirmar",
      capibas: price,
      organizer: data.organizer || "Prefeitura do Recife",
      capacity: data.capacity ? `${data.capacity} pessoas` : "Lotação não informada",
      tags: generatedTags
    };
  };

  useEffect(() => {
    async function fetchDetails() {
      if (!id) return;
      try {
        const response = await api.get(`/agenda/${id}`);
        const rawData = response.data.data || response.data;
        
        setEvent(mapApiToDetails(rawData));
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
        <p className={`text-gray-500 ${dmSans.className}`}>Carregando informações...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
            Evento não encontrado
          </h1>
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:underline font-medium"
          >
            Voltar para a agenda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${dmSans.className} min-h-screen bg-gray-50`}>
      <NavBar />

      {/* CABEÇALHO AZUL */}
      <div className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-6 py-10 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 hover:bg-white/10 py-2 px-3 rounded-lg transition-all mb-6 w-fit"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-medium">Voltar</span>
          </button>
          
          <div className="flex flex-col gap-2">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold w-fit border border-white/10 backdrop-blur-sm">
                {event.category}
            </span>
            <h1 className={`${outfit.className} text-4xl md:text-5xl font-bold mb-2 leading-tight`}>
                {event.title}
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl leading-relaxed opacity-90">
                {event.description}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUNA ESQUERDA (IMAGEM + TEXTO) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Imagem Placeholder (Pode adicionar <img> real se a API retornar url) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/*  - Trigger visual context if available */}
              <div className="h-80 bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 flex items-center justify-center">
                 <Calendar className="w-16 h-16 text-blue-200 opacity-50" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
                Sobre o Evento
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
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

          {/* COLUNA DIREITA (SIDEBAR DE INFORMAÇÕES) */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="space-y-5">
                
                {/* Data */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Data</p>
                    <p className={`text-gray-900 font-bold text-lg ${outfit.className}`}>{event.fullDate}</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Horário</p>
                    <p className={`text-gray-900 font-bold text-lg ${outfit.className}`}>{event.time}</p>
                  </div>
                </div>

                {/* Local */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Local</p>
                    <p className={`text-gray-900 font-bold text-lg ${outfit.className}`}>{event.location}</p>
                  </div>
                </div>

                {/* Capacidade */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Capacidade</p>
                    <p className={`text-gray-900 font-bold text-lg ${outfit.className}`}>{event.capacity}</p>
                  </div>
                </div>

                {/* Categoria */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Tag className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Categoria</p>
                    <p className={`text-gray-900 font-bold text-lg ${outfit.className}`}>{event.category}</p>
                  </div>
                </div>

                {/* Recompensa / Preço */}
                <div className="pt-2">
                  <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <span className="text-sm text-yellow-800 font-bold uppercase">
                        {event.isFree ? 'Recompensa' : 'Custo'}
                    </span>
                    <div className="flex items-center gap-1.5 text-yellow-600">
                      <Coins className="w-6 h-6 fill-yellow-500 text-yellow-600" />
                      <span className={`font-bold text-2xl ${outfit.className}`}>
                        {event.isFree ? `+${event.capibas}` : event.capibas}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão de Ação */}
                <button className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${outfit.className} ${event.isFree ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}>
                    {event.isFree ? 'Confirmar Presença' : 'Comprar Ingresso'}
                </button>

              </div>
            </div>
            
            <div className="text-center text-sm text-gray-400">
                Organizado por <span className="font-semibold text-gray-600">{event.organizer}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}