"use client";

import TrailDescriptionInput from "components/trailDescriptionInput";
import TrailInvitationComponent from "components/invitationComponent";
import SummaryCard from "components/summaryCard";
import AddChallengeCard from "components/addChallengeCard";
import React, { useState, useEffect } from "react";
import { ListTodo, Plus } from "lucide-react";
import api from "services/api";
import { useRouter } from "next/navigation";
import NavBar from "components/navBar";
import { outfit, dmSans } from "styles/fonts";

// Mocks
const mockTags = ["Customizada", "Aventura", "Cultura", "Natureza", "Gastronomia", "História", "Natal", "São João", "Carnaval", "Páscoa"];

const mockLink = "https://capibatrilhas.com/invite/abc123";

/*const mockChallenges = [
{
    id: "c1",
    name: "Visita ao Paço do Frevo",
    location: "Recife Antigo",
    score: 900,
    // Ação: Visitar e validar a presença
    description: "Visite a área de exposição principal do Paço do Frevo para validar sua presença.",
  },
  {
    id: "c2",
    name: "Maratona EU AMO RECIFE",
    location: "Bairro do Recife",
    score: 150,
    // Descrição ajustada para refletir uma "maratona" de pontos a serem encontrados
    description: "Conclua a sequência de três checkpoints turísticos da trilha e confirme a última localização no letreiro 'EU AMO RECIFE'.",
  },
  {
    id: "c3",
    name: "Um Dia no Recém-Inaugurado Parque da Tamarineira",
    location: "Tamarineira",
    score: 100,
    // Ação: Checar um painel informativo
    description: "Confirme sua visita checando o painel informativo próximo à entrada principal do Parque da Tamarineira.",
  },
  {
    id: "c4",
    name: "O Tesouro do Mercado de São José",
    location: "Mercado de São José",
    score: 200,
    // Ação: Compra/Interação com parceiro
    description: "Realize uma compra em uma das lojas parceiras identificadas dentro do Mercado de São José.",
  },
  {
    id: "c5",
    name: "Mirante da Boa Vista",
    location: "Rua da Aurora",
    score: 75,
    // Ação: Confirmação de ponto turístico
    description: "Confirme sua presença no Mirante da Boa Vista, desfrutando da vista panorâmica da Rua da Aurora.",
  },
  {
    id: "c6",
    name: "Ato de Solidariedade",
    location: "Hemope",
    score: 300,
    // Ação: Ação social (doação)
    description: "Complete uma doação de sangue em um hemocentro parceiro e valide sua ação.",
  },
  {
    id: "c7",
    name: "Conhecendo a Cervejaria",
    location: "Pina",
    score: 300,
    // Ação: Interação no local parceiro
    description: "Visite a Cervejaria X (parceira) e valide sua presença no balcão de atendimento após o consumo de qualquer produto.",
  },
];*/


// Interface de acordo com o shema.prisma do backend

interface Challenge {
  id: number;
  title: string;
  description: string;
  theme: string;
  location: string;
  rewards: number;
}


const CreateTrailPage: React.FC = () => {

  const router = useRouter();

  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChallenges, setSelectedChallenges] = useState<number[]>([]);
  const [showCapibaWarning, setShowCapibaWarning] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [topic, setTopic] = useState<string>("");




  useEffect(() => {

    const fetchChallenges = async () => {

      setIsLoading(true);


      try {

        const response = await api.get("/challenge");
        console.log("Resposta da API:", response.data);
        setChallenges(response.data.data);

      } catch (error) {

        console.error("Erro ao buscar desafios:", error);

      } finally {

        setIsLoading(false);

      }
    }

    fetchChallenges();
  }, []);





  const handleToggleChallenge = (id: number, selected: boolean) => {
    if (selected) {
      const found = challenges.find((c) => c.id === id);
      const challengeScore = found?.rewards ?? 0;


      const currentTotal = selectedChallenges.reduce((sum, cId) => {
        const c = challenges.find((ch) => ch.id === cId);
        return sum + (c?.rewards ?? 0);
      }, 0);

      const wouldBeRemaining = 1000 - (currentTotal + challengeScore);

      // Não permite adicionar se ficaria negativo
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

  const handleCreateTrail = async () => {

    if (!isFormValid) return;

    try {
      // Montando o objeto conforme o seu Schema Prisma
      const payload = {
        title: title,
        description: description,
        theme: topic, 
        startDate: dateRange.from?.toISOString(),
        endDate: dateRange.to?.toISOString(),
        totalRewards: totalRewardValue,
        ownerId: 1, // por equanto vou passar um id fixo
        challenges: selectedChallenges, 
      };

      console.log("Enviando Trilha:", payload);

      const response = await api.post("/trail", payload);

      if (response.status === 201 || response.status === 200) {
        alert("Trilha criada com sucesso!");
        router.push("/myTrails");
      }
    } catch (error) {
      console.error("Erro ao salvar trilha:", error);
      alert("Ocorreu um erro ao criar sua trilha. Verifique os dados e tente novamente.");
    }
  };

  const handleDateRangeChange = (range: { from?: Date; to?: Date } | undefined) => {
    if (range) {
      setDateRange(range);
    }
  };

  const selectedCount = selectedChallenges.length;
  const totalRewardValue = selectedChallenges.reduce((sum, id) => {
    const found = challenges.find((c) => c.id === id);
    return sum + (found?.rewards ?? 0);
  }, 0);
  const remainingCapibaValue = 1000 - totalRewardValue;

  // Validação: todos os campos preenchidos?
  const isFormValid =
    title.trim() !== "" &&
    description.trim() !== "" &&
    dateRange.from &&
    dateRange.to &&
    selectedChallenges.length > 0;


  
  

  return (


    <div className={`${dmSans.className} min-h-screen bg-gray-50`}>
      <NavBar />

      <div className="bg-linear-to-r from-[#2563EB] to-[#1E40AF] text-white px-6 py-8"> {/*aqui*/}
        <div className="flex items-center gap-3 mb-4">
          {/* <button 
            onClick={() => window.history.back()}
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="Voltar"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="text-lg font-medium">Voltar</span>
          </button> */}
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
          onTopicChange={setTopic}
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
            {isLoading ? (
              <p className="text-center py-10 text-gray-500 italic">Buscando desafios disponíveis...</p>
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
              <p className="text-center py-10 text-red-400">Nenhum desafio encontrado.</p>
            )}
          </div>
        </div>
      </div>

      {showCapibaWarning && (
        <div className={`fixed bottom-6 right-6 bg-red-500 text-white rounded-lg p-4 shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out ${warningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
          <span className="text-sm font-medium">Quantidade máxima por Trilha atingida! Não há capibas disponíveis para adicionar este desafio.</span>
        </div>
      )}

      <div className="flex justify-center p-6">
        <button
          onClick={() => {
            handleCreateTrail();
          }}
          disabled={!isFormValid}
          className={`w-1/2 flex justify-center  py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${outfit.className} ${isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer justify-center flex items-center gap-2"
              : "bg-gray-300 text-gray-500 cursor-not-allowed justify-center flex items-center gap-2"
            }`}
        >
          Criar minha Trilha
        </button>
      </div>
    </div>
  );
};

export default CreateTrailPage;
