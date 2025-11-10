import TrailDescriptionCard from "components/trailDescription";
import React from "react";

const mockTags = ["Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal"];

const CreateTrailPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6">
      <TrailDescriptionCard topic={mockTags} />
    </div>
  );
};

export default CreateTrailPage;
