import { MapPin } from "lucide-react";
import React from "react";

interface FeaturedBoroughCardsProps {
  boroughs: {
    name: string;
    location: string;
    bonusScore: string;
    description: string;
    tags: string[];
    id: string;
  }[];
}

const FeaturedBoroughCards: React.FC<FeaturedBoroughCardsProps> = ({ boroughs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Key por enquanto é Index, 
        mas depois substituir por ID. Tirar também o index do .map */}
      {boroughs.map((borough, index) => ( 
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col hover:shadow-md transition">
          
          <div className="flex justify-between items-start mb-1.5">
            <h2 className="text-xl font-semibold text-gray-900">
                {borough.name}
            </h2>

            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                {borough.bonusScore} pontos
            </span>
         </div>

            <div className="text-sm text-gray-600 flex items-center mb-2">
                <MapPin  className="h-6 w-6 text-accent mr-1"></MapPin> {borough.location}
            </div>
        
            <p className="text-gray-600 mb-4 leading-relaxed">{borough.description}</p>

          <div className="flex flex-wrap gap-2">
            {borough.tags.map((tag, i) => (
                <span
                key={i}
                className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
                >
                {tag}
                </span>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedBoroughCards;