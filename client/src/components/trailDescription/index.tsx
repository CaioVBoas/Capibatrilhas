"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";

interface TrailDescriptionCardProps {
  topic: string[];
}

const TrailDescriptionCard: React.FC<TrailDescriptionCardProps> = ({ topic }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(topic[0] || "");

  const handleTopicSelect = (t: string) => {
    setSelectedTopic(t);
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

      {/* Descrição */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Descrição *</label>
        <textarea
          className="border border-gray-200 rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Descreva o objetivo e o que torna sua trilha especial..."
        />
      </div>

      {/* Tema */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Tags</label>
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

      {/* Duração Estimada */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Duração Estimada</label>
        <input
          type="text"
          className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: 3 dias, 1 semana, etc."
        />
      </div>
    </div>
  );
};

export default TrailDescriptionCard;
