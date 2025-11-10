"use client";

import React, { useState } from "react";
import { Badge } from "components/ui/badge"; // <-- Ajustado para o seu caminho
import { type DateRange } from "react-day-picker" // Importação real do react-day-picker
import { Calendar } from "components/ui/calendar" // <-- Ajustado para o seu caminho

// Ícone de Calendário Simples (Inline SVG)
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);


interface TrailDescriptionCardProps {
  topic: string[];
}

const TrailDescriptionCard: React.FC<TrailDescriptionCardProps> = ({ topic }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(topic[0] || "");
  
  // Estado para o intervalo de datas (copiado da sua função Calendar05)
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Para controlar o popover

  const handleTopicSelect = (t: string) => {
    setSelectedTopic(t);
  };

  // Função para formatar o intervalo de datas para exibição no botão
  const formatRange = (range: DateRange | undefined): string => {
    if (!range || (!range.from && !range.to)) {
      return "Selecione o período";
    }

    const fromStr = range.from 
      ? range.from.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
      : 'Início?';
    
    const toStr = range.to 
      ? range.to.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
      : 'Fim?';
    
    const yearStr = (range.from || range.to)?.getFullYear();
    
    return `${fromStr} - ${toStr} (${yearStr})`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Informações da Trilha</h2>

      {/* Título */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Título da Trilha *</label>
        <input
          type="text"
          className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Minha Aventura na Cidade"
        />
      </div>

      {/* Descrição - Palavra 'Descrição' em preto, '*' em vermelho */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">
          Descrição <span className="text-red-500">*</span>
        </label>
        <textarea
          className="border border-gray-200 rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Descreva o objetivo e o que torna sua trilha especial..."
        />
      </div>

      {/* Tema */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Tema</label>
        <div className="flex flex-wrap gap-3">
          {topic.map((t) => {
            const isSelected = t === selectedTopic;
            
            const baseClasses = "cursor-pointer text-sm rounded-full transition-all duration-200 whitespace-nowrap px-4 py-2";
            const selectedClasses = "bg-blue-600 text-white border-transparent shadow-md hover:bg-blue-700";
            const unselectedClasses = "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100";

            return (
              <Badge
                key={t}
                onClick={() => handleTopicSelect(t)}
                className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}>
                {t}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Date Range Picker para Período Estimado */}
      <div className="flex flex-col gap-2 relative"> 
        <label className="font-medium">Período Estimado</label>
        
        {/* Botão de Exibição (simula o Popover Trigger) */}
        <button
          type="button"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="flex justify-between items-center text-left border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          {/* Exibe o intervalo formatado ou o placeholder */}
          <span className={dateRange?.from || dateRange?.to ? "text-gray-900" : "text-gray-500"}>
            {formatRange(dateRange)}
          </span>
          <CalendarIcon className="h-5 w-5 text-gray-500 ml-2" />
        </button>

        {/* Calendar Dropdown (Simula o Popover Content) */}
        {isCalendarOpen && (
          // Container do calendário
          <div className="absolute z-10 top-full mt-2 left-0 w-full md:w-auto"> 
            <div className="bg-white rounded-xl shadow-lg border">
                <Calendar 
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    className="p-2"
                />
                
                {/* Botão para fechar o popover (necessário para modo range) */}
                <div className="flex justify-end p-3 border-t">
                    <button 
                        onClick={() => setIsCalendarOpen(false)} 
                        className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailDescriptionCard;
