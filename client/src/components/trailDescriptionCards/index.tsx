"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";

import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { CalendarIcon, BadgeInfo } from "lucide-react";
import { cn } from "../../lib/utils";

interface TrailDescriptionCardProps {
  topic: string[];
}

const TrailDescriptionCard: React.FC<TrailDescriptionCardProps> = ({ topic }) => {
  // Estado para gerenciar o tema selecionado. 
  // Inicializamos com o primeiro tópico da lista, se houver, para replicar a imagem.
  const [selectedTopic, setSelectedTopic] = useState<string>(topic[0] || "");

  const handleTopicSelect = (t: string) => {
    setSelectedTopic(t);
  };

  // Estado para range de datas (início / fim)
  const [range, setRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  // Estado local para abrir/fechar o calendário (simula um popover)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold flex items-center gap-1">
        <BadgeInfo className="h-5 w-5 text-gray-600" aria-hidden="true" />
        Informações da Trilha
      </h2>

      {/* Título */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Título da Trilha <span className="text-red-500">*</span></label>
        <input
          type="text"
          className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Minha Aventura na Cidade"
        />
      </div>

      {/* Descrição */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Descrição <span className="text-red-500">*</span></label>
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
            
            // Classes base para comportamento, transição e padding, que faz parecer um botão.
            const baseClasses = "cursor-pointer text-sm rounded-full transition-all duration-200 whitespace-nowrap px-4 py-2";

            // Classes para o estado SELECIONADO (Fundo Azul, Texto Branco, Sombra)
            const selectedClasses = "bg-blue-600 text-white border-transparent shadow-md hover:bg-blue-700";
            
            // Classes para o estado NÃO SELECIONADO (Fundo Branco, Borda Cinza, Texto Escuro)
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

      {/* Período da Trilha com popover de calendário (range) */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-medium">Duração Estimada</label>

        <div className="relative w-full">
          <button
            type="button"
            onClick={() => setIsCalendarOpen((v) => !v)}
            className={cn(
              "flex items-center w-full justify-start text-left font-normal py-3 px-4 rounded-xl border border-gray-200",
              !range?.from && !range?.to && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-5 w-5" />
            <span className={range?.from || range?.to ? "text-gray-900" : "text-gray-500"}>
              {range?.from || range?.to
                ? `${range?.from ? range.from.toLocaleDateString() : ""} ${range?.to ? `- ${range.to.toLocaleDateString()}` : ""}`
                : "Selecionar período"}
            </span>
          </button>

          {isCalendarOpen && (
            <div className="absolute z-20 top-full mt-2 left-0 w-full md:w-[520px]">
              <div className="bg-white rounded-2xl shadow-xl border">
                <Calendar
                  mode="range"
                  numberOfMonths={2}
                  selected={range}
                  onSelect={(r) => {
                    setRange(r);
                  }}
                  className="rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-1">Selecione a data de início e fim da trilha.</p>
      </div>
    </div>
  );
};

export default TrailDescriptionCard;
