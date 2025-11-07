import { Flame, MapPin } from "lucide-react";
import React from "react";

// Define a interface para um único bairro
interface Borough {
  name: string;
  location: string;
  bonusScore: string;
  description: string;
  tags: string[];
  id: string;
}

// Define as props do componente de card único
interface BoroughCardProps {
  borough: Borough;
}

const BoroughCard: React.FC<BoroughCardProps> = ({ borough }) => {
  return (
  
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-1.5">
        <h2 className="text-xl font-semibold text-gray-900">
          {borough.name}
        </h2>

        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-800 shadow-sm flex items-center mr-1">
          <Flame className="h-6 w-6 text-orange-500 fill-orange-500 mr-1" />{" "}
          {borough.bonusScore} Bônus
        </span>
      </div>

      <div className="text-sm text-gray-600 flex items-center mb-2">
        <MapPin className="h-6 w-6 text-accent mr-1"></MapPin> {borough.location}
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {borough.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {borough.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BoroughCard;