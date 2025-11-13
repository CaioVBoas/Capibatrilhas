"use client";

import React, { useState } from "react";
import { CheckCircle, Circle, MapPin, Camera, Coins } from "lucide-react";

interface Challenge {
  id: string;
  name: string;
  location: string;
  score: number;
  description: string;
}

// Props: accept challenge data, optionally controlled `selected` and `onToggle`
interface ChallengeCardProps {
  challenge: Challenge;
  selected?: boolean;
  onToggle?: (id: string, selected: boolean) => void;
}

const AddChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, selected: selectedProp, onToggle }) => {
  const [selectedInternal, setSelectedInternal] = useState<boolean>(Boolean(selectedProp));
  const isControlled = typeof selectedProp === "boolean";
  const selected = isControlled ? selectedProp! : selectedInternal;

  const toggle = () => {
    const next = !selected;
    if (!isControlled) setSelectedInternal(next);
    if (onToggle) onToggle(challenge.id, next);
  };

  return (
    <div
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
      className={`w-full text-left rounded-xl p-6 flex flex-col gap-4 border transition-transform duration-150 ease-in-out focus:outline-none cursor-pointer ${
        selected
          ? "border-blue-500 bg-blue-50 shadow-[0_6px_20px_rgba(0,91,255,0.08)] transform -translate-y-0.5"
          : "border-gray-200 bg-white hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            {selected ? (
              <CheckCircle className="h-6 w-6 text-blue-600" />
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">{challenge.name}</h3>
            {challenge.description && (
              <p className="text-gray-500 mt-1">{challenge.description}</p>
            )}

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{challenge.location ?? "Local não informado"}</span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  // placeholder action for media/check-in
                }}
                className="ml-2 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 bg-white"
              >
                <Camera className="h-4 w-4" />
                Foto
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-yellow-500 inline-flex items-center gap-1 font-bold text-lg">
            <Coins className="h-5 w-5" />
            <span>+{challenge.score ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChallengeCard;