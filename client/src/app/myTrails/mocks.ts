import { Trails } from "components/featuredTrailCards";

export const mockTrails: Trails[] = [
  // --- EM ANDAMENTO ---
  {
    id: 1,
    title: "Rota do Recife Antigo",
    subtitle: "Explore os marcos históricos, do Marco Zero até a Rua do Bom Jesus.",
    progress: 65,
    type: "Destaque",
    challengesQuantity: "12",
    challengesCompleted: "8",
    time: "2h 30m",
    prize: 500,
    tag: "História",
    buttonText: "Continuar Trilha"
  },
  {
    id: 2,
    title: "Parques Urbanos",
    subtitle: "Conecte-se com a natureza visitando os principais parques da zona norte.",
    progress: 30,
    type: "Normal",
    challengesQuantity: "10",
    challengesCompleted: "3",
    time: "4h",
    prize: 350,
    tag: "Natureza",
    buttonText: "Continuar Trilha"
  },
  {
    id: 3,
    title: "Museus e Cultura",
    subtitle: "Uma imersão na arte popular e contemporânea da cidade.",
    progress: 15,
    type: "Normal",
    challengesQuantity: "8",
    challengesCompleted: "1",
    time: "3h",
    prize: 400,
    tag: "Cultura",
    buttonText: "Continuar Trilha"
  },

  // --- PERSONALIZADAS (Sugestões/Não Iniciadas) ---
  {
    id: 4,
    title: "Circuito Gastronômico",
    subtitle: "Descubra os sabores locais provando pratos típicos em mercados públicos.",
    progress: 0,
    type: "Recomendado",
    challengesQuantity: "15",
    challengesCompleted: "0",
    time: "5h",
    prize: 800,
    tag: "Gastronomia",
    buttonText: "Começar Aventura"
  },
  {
    id: 5,
    title: "Arte de Rua e Grafite",
    subtitle: "Caça aos tesouros urbanos: encontre os murais mais famosos.",
    progress: 0,
    type: "Novo",
    challengesQuantity: "6",
    challengesCompleted: "0",
    time: "1h 30m",
    prize: 200,
    tag: "Arte",
    buttonText: "Começar Aventura"
  },
  {
    id: 6,
    title: "Pontes e Rios",
    subtitle: "Um passeio fotográfico pelas pontes que cortam a cidade.",
    progress: 0,
    type: "Normal",
    challengesQuantity: "5",
    challengesCompleted: "0",
    time: "2h",
    prize: 250,
    tag: "Fotografia",
    buttonText: "Começar Aventura"
  },

  // --- CONCLUÍDAS ---
  {
    id: 7,
    title: "Lendas Assombradas",
    subtitle: "Conheça as histórias misteriosas e lendas urbanas locais.",
    progress: 100,
    type: "Normal",
    challengesQuantity: "7",
    challengesCompleted: "7",
    time: "1h 45m",
    prize: 600,
    tag: "Mistério",
    buttonText: "Ver Conquista"
  },
  {
    id: 8,
    title: "Carnaval e Frevo",
    subtitle: "A história do ritmo que move multidões durante o carnaval.",
    progress: 100,
    type: "Destaque",
    challengesQuantity: "20",
    challengesCompleted: "20",
    time: "6h",
    prize: 1000,
    tag: "Música",
    buttonText: "Ver Conquista"
  }
];