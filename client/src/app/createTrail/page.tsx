import TrailDescriptionCard from "components/trailDescriptionCards";
import TrailInvitationCard from "components/invitationCards";
import React from "react";

const mockTags = ["Mista", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];
const mockLink = "https://capibatrilhas.com/invite/abc123";

const CreateTrailPage: React.FC = () => {
  return (
  
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailDescriptionCard topic={mockTags} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailInvitationCard link={mockLink} />
      </div>

    </div>
  );
};

export default CreateTrailPage;
