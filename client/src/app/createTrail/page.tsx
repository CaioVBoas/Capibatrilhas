"use client";

import TrailDescriptionInput from "components/trailDescriptionInput";
import TrailInvitationComponent from "components/invitationComponent";
import SummaryCard from "components/summaryCard";
import AddChallengeCard from "components/addChallengeCard";
import React, { useState, useEffect } from "react";
import { ListTodo, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import NavBar from "components/navBar";
import { outfit, dmSans } from "styles/fonts";
import api from "services/api";
import { Challenge } from "types";
import { useSession } from "next-auth/react";

const mockTags = ["Customizada", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];
const mockLink = "https://capibatrilhas.com/invite/abc123";

interface ChallengeCardFormat {
  id: string;
  name: string;
  location: string;
  score: number;
  description: string;
  originalId: number;
}

const CreateTrailPage: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [challenges, setChallenges] = useState<ChallengeCardFormat[]>([]);
  const [loadingChallenges, setLoadingChallenges] = useState(true);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [showCapibaWarning, setShowCapibaWarning] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

  useEffect(() => {
    async function fetchChallenges() {
      try {
        setLoadingChallenges(true);
        const response = await api.get('/challenge');
        const challengesData: Challenge[] = response.data.data || response.data;

        const formattedChallenges: ChallengeCardFormat[] = challengesData
          .filter(c => c.isActive)
          .map(c => ({
            id: `c${c.id}`,
            name: c.title,
            location: c.location,
            score: c.rewards,
            description: c.description,
            originalId: c.id,
          }));

        setChallenges(formattedChallenges);
      } catch (error) {
        console.error("Erro ao buscar desafios:", error);
      } finally {
        setLoadingChallenges(false);
      }
    }

    fetchChallenges();
  }, []);

  const handleToggleChallenge = (id: string, selected: boolean) => {
    if (selected) {
      const found = challenges.find((c) => c.id === id);
      const challengeScore = found?.score ?? 0;

      const currentTotal = selectedChallenges.reduce((sum, cId) => {
        const c = challenges.find((ch) => ch.id === cId);
        return sum + (c?.score ?? 0);
      }, 0);

      const wouldBeRemaining = 1000 - (currentTotal + challengeScore);

      if (wouldBeRemaining < 0) {
        setShowCapibaWarning(true);
        setWarningVisible(true);
        setTimeout(() => setWarningVisible(false), 3000);
        setTimeout(() => setShowCapibaWarning(false), 3800);
        return;
      }
    }

    setSelectedChallenges((prev) => {
      if (selected) {
        if (prev.includes(id)) return prev;
        return [...prev, id];
      }
      return prev.filter((x) => x !== id);
    });
  };

  const handleDateRangeChange = (range: { from?: Date; to?: Date } | undefined) => {
    if (range) {
      setDateRange(range);
    }
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  const selectedCount = selectedChallenges.length;
  const totalRewardValue = selectedChallenges.reduce((sum, id) => {
    const found = challenges.find((c) => c.id === id);
    return sum + (found?.score ?? 0);
  }, 0);
  const remainingCapibaValue = 1000 - totalRewardValue;

  const isFormValid =
    title.trim() !== "" &&
    description.trim() !== "" &&
    selectedTag !== "" &&
    dateRange.from &&
    dateRange.to &&
    selectedChallenges.length > 0;

  const handleCreateTrail = async () => {
    if (!isFormValid || isSubmitting) return;

    try {
      setIsSubmitting(true);

      const challengeIds = selectedChallenges.map(id => {
        const challenge = challenges.find(c => c.id === id);
        return challenge?.originalId;
      }).filter((id): id is number => id !== undefined);

      const trailData = {
        title: title.trim(),
        description: description.trim(),
        theme: selectedTag,
        startDate: dateRange.from!.toISOString(),
        endDate: dateRange.to!.toISOString(),
        totalRewards: totalRewardValue,
        challenges: challengeIds,
        ownerId: session?.user?.id,
      };

      await api.post('/trail', trailData);

      alert("Trilha criada com sucesso!");
      router.push("/myTrails");
    } catch (error) {
      console.error("Erro ao criar trilha:", error);
      alert("Erro ao criar trilha. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${dmSans.className} min-h-screen bg-gray-50`}>
      <NavBar />

      <div className="bg-linear-to-r from-[#2563EB] to-[#1E40AF] text-white px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
        </div>

        <div className="flex items-start gap-3">
          <Plus className="h-8 w-8 mt-1 shrink-0" />
          <div>
            <h1 className={`text-3xl font-bold ${outfit.className}`}>Criar Trilha Personalizada</h1>
            <p className={`text-blue-100 mt-2 ${dmSans.className}`}>Monte sua própria trilha escolhendo desafios que mais combinem com você e seus amigos!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailDescriptionInput
          topic={mockTags}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onDateRangeChange={handleDateRangeChange}
          onTagChange={handleTagChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <TrailInvitationComponent link={mockLink} />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <SummaryCard
          challengesSelected={selectedCount}
          totalReward={totalRewardValue}
          remainingCapibas={remainingCapibaValue}
        />
        <p className="text--400 ml-3 text-red-600 opacity-50">Cada trilha personalizada pode distribuir em seus desafios até 1.000 capibas, conforme sua preferência. O limite máximo de ganhos com trilhas personalizadas é de 5.000 capibas por mês*</p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 ml-6">
        <div className="flex flex-col gap-1">
          <h2 className={`text-2xl font-semibold flex items-center gap-1 ${outfit.className}`}>
            <ListTodo className="h-5 w-5 text-gray-600" aria-hidden="true" />
            Escolha os Desafios
          </h2>
          <p className="text-gray-500 ml-3">Selecione os desafios que você gostaria de incluir na sua trilha</p>

          <div className="mt-4 grid grid-cols-1 gap-4">
            {loadingChallenges ? (
              <p className="text-gray-500">Carregando desafios...</p>
            ) : challenges.length > 0 ? (
              challenges.map((c) => (
                <AddChallengeCard
                  key={c.id}
                  challenge={c}
                  selected={selectedChallenges.includes(c.id)}
                  onToggle={handleToggleChallenge}
                />
              ))
            ) : (
              <p className="text-gray-500">Nenhum desafio disponível.</p>
            )}
          </div>
        </div>
      </div>

      {showCapibaWarning && (
        <div className={`fixed bottom-6 right-6 bg-red-500 text-white rounded-lg p-4 shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out ${
          warningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-sm font-medium">Quantidade máxima por Trilha atingida! Não há capibas disponíveis para adicionar este desafio.</span>
        </div>
      )}

      <div className="flex justify-center p-6">
        <button
          onClick={handleCreateTrail}
          disabled={!isFormValid || isSubmitting}
          className={`w-1/2 flex justify-center py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${outfit.className} ${
            isFormValid && !isSubmitting
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer justify-center flex items-center gap-2"
              : "bg-gray-300 text-gray-500 cursor-not-allowed justify-center flex items-center gap-2"
          }`}
        >
          {isSubmitting ? "Criando..." : "Criar minha Trilha"}
        </button>
      </div>
    </div>
  );
};

export default CreateTrailPage;
