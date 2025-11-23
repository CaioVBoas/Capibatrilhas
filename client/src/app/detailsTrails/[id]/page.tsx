import React from "react";
import ChallengeCard from "components/challengeCard";
import TrailHeader from "components/headerChallengePage";


const mockTrails = [
{
  id: 1,
  title: "Capibatrilha de Carnaval",
  subtitle: "Explore os melhores blocos e pontos culturais do Carnaval da cidade",
  progress: 42, 
  type: "Destaque",
  challengesQuantity: "7",
  time: "5 dias",
  prize: 500,
  challengesCompleted: "3",
  buttonText: "Continuar",
  tag: "Cultura",
},
{
  id: 2,
  title: "Capibatrilha Gastronômica",
  subtitle: "Descubra os sabores únicos da culinária do Recife com desafios deliciosos",
  progress: 60, 
  type: "Destaque",
  challengesQuantity: "5",
  time: "6 dias",
  prize: 400,
  challengesCompleted: "3",
  buttonText: "Continuar",
  tag: "Gastronomia",    
},
{
  id: 3,
  title: "Capibatrilha de Natal",
  subtitle: "Descubra o Natal de um novo jeito embalado pelas luzes e decorações natalinas na melhor cidade do Brasil",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: "8",
  time: "10 dias",
  prize: 300,
  challengesCompleted: "0",
  buttonText: "Iniciar Trilha",
  tag: "Natal",
},
{
  id: 4,
  title: "7 Dias de Verão",
  subtitle: "Desafios diários em praias e pontos turísticos da cidade",
  progress: 0, 
  type: "Destaque",
  challengesQuantity: "7",
  time: "7 dias",
  prize: 350,
  challengesCompleted: "0",
  buttonText: "Iniciar Trilha",
  tag: "Verão",
},
{
    id: 5,
    title: "Capibatrilha Histórica",
    subtitle: "Volte no tempo e descubra as raízes do Recife Antigo",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "6",
    time: "4 dias",
    prize: 250,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "História",
},
{
    id: 6,
    title: "Circuito de Arte Urbana",
    subtitle: "Explore os murais de grafite e galerias de arte da cidade",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "5",
    time: "3 dias",
    prize: 200,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "Arte",
},
{
    id: 7,
    title: "Recife Verde: Parques",
    subtitle: "Uma jornada relaxante pelos principais parques e áreas verdes",
    progress: 0, 
    type: "Destaque",
    challengesQuantity: "4",
    time: "2 dias",
    prize: 150,
    challengesCompleted: "0",
    buttonText: "Iniciar Trilha",
    tag: "Natureza",
},
];

export const mockChallenges = {

  "1": [
    {
      id: "1-1",
      title: "Selfie no Galo",
      description: "Visite o QG do Galo da Madrugada e tire uma foto com o estandarte.",
      place: "Sede do Galo da Madrugada",
      prize: "+70", 
      completed: true,
    },
    {
      id: "1-2",
      title: "Passo de Frevo",
      description: "Visite o Paço do Frevo e tente acertar um passo de frevo.",
      place: "Paço do Frevo",
      prize: "+70", 
      completed: true,
    },
    {
      id: "1-3",
      title: "Maracatu na Rua da Moeda",
      description: "Faça check-in durante um ensaio de Maracatu na Rua da Moeda.",
      place: "Rua da Moeda",
      prize: "+80", 
      completed: true,
    },
    {
      id: "1-4",
      title: "Boneco de Olinda",
      description: "Encontre e tire uma foto com um dos famosos Bonecos Gigantes de Olinda.",
      place: "Alto da Sé, Olinda",
      prize: "+70", 
      completed: false,
    },
    {
      id: "1-5",
      title: "Homem da Meia-Noite",
      description: "Descubra a história do Homem da Meia-Noite no museu do clube.",
      place: "Sede do Homem da Meia-Noite",
      prize: "+80", 
      completed: false,
    },
    {
      id: "1-6",
      title: "Quiz do Frevo",
      description: "Complete o quiz sobre a história do frevo e do carnaval.",
      place: "Online",
      prize: "+60", 
      completed: false,
    },
    {
      id: "1-7",
      title: "Fantasia de Bloco",
      description: "Tire uma foto usando uma fantasia em um bloco de rua.",
      place: "Qualquer Bloco de Rua",
      prize: "+70", 
      completed: false,
    },
  ],

  "2": [
    {
      id: "2-1",
      title: "O Sabor do Mercado",
      description: "Prove um pastel de feira ou um caldo de cana no Mercado de São José.",
      place: "Mercado de São José",
      prize: "+70", 
      completed: true,
    },
    {
      id: "2-2",
      title: "Bolo de Rolo Master",
      description: "Visite uma confeitaria famosa e compre um autêntico Bolo de Rolo.",
      place: "Casa dos Frios",
      prize: "+90", 
      completed: true,
    },
    {
      id: "2-3",
      title: "Caldinho na Orla",
      description: "Tome um caldinho de feijão na beira-mar de Boa Viagem.",
      place: "Praia de Boa Viagem",
      prize: "+70", 
      completed: true,
    },
    {
      id: "2-4",
      title: "Almoço Regional",
      description: "Almoce um prato regional, como Chambaril ou Bode Guisado.",
      place: "Restaurante Leite ou O Bode",
      prize: "+100", 
      completed: false,
    },
    {
      id: "2-5",
      title: "Doce Cartola",
      description: "Experimente a sobremesa pernambucana 'Cartola' (banana e queijo).",
      place: "Parraxaxá ou similar",
      prize: "+70", 
      completed: false,
    },
  ],

  "3": [
    {
      id: "3-1",
      title: "Luzes da Jaqueira",
      description: "Caminhe pelo Parque da Jaqueira à noite e veja a decoração de Natal.",
      place: "Parque da Jaqueira",
      prize: "+40", 
      completed: false,
    },
    {
      id: "3-2",
      title: "Auto de Natal",
      description: "Assista a uma apresentação do Baile do Menino Deus ou outro auto de natal.",
      place: "Marco Zero",
      prize: "+50", 
      completed: false,
    },
    {
      id: "3-3",
      title: "Decoração no Shopping",
      description: "Tire uma foto na decoração de Natal principal do Shopping RioMar ou Recife.",
      place: "Shopping RioMar",
      prize: "+30", 
      completed: false,
    },
    {
      id: "3-4",
      title: "Missa do Galo",
      description: "Participe da Missa do Galo em uma das igrejas históricas do centro.",
      place: "Igreja da Matriz",
      prize: "+40", 
      completed: false,
    },
    {
      id: "3-5",
      title: "Presente Artesanal",
      description: "Compre um presente de Natal no Centro de Artesanato de Pernambuco.",
      place: "Centro de Artesanato (Marco Zero)",
      prize: "+40", 
      completed: false,
    },
    {
      id: "3-6",
      title: "Luzes da Rua do Bom Jesus",
      description: "Visite a Rua do Bom Jesus à noite para ver a iluminação especial.",
      place: "Rua do Bom Jesus",
      prize: "+30", 
      completed: false,
    },
    {
      id: "3-7",
      title: "Ceia Solidária",
      description: "Participe de uma campanha de doação de alimentos para a ceia de Natal.",
      place: "Online / Ponto de Coleta",
      prize: "+40", 
      completed: false,
    },
    {
      id: "3-8",
      title: "Presépio Gigante",
      description: "Encontre e fotografe um dos presépios montados em praças públicas.",
      place: "Praça de Casa Forte",
      prize: "+30", 
      completed: false,
    },
  ],

  "4": [
    {
      id: "4-1",
      title: "Água de Coco no Calçadão",
      description: "Tome uma água de coco gelada em um quiosque da orla de Boa Viagem.",
      place: "Calçadão de Boa Viagem",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-2",
      title: "Piscinas Naturais",
      description: "Verifique a tábua de marés e mergulhe nas piscinas naturais.",
      place: "Praia de Boa Viagem (Maré Baixa)",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-3",
      title: "Pôr do Sol no Dona Lindu",
      description: "Assista ao pôr do sol no gramado do Parque Dona Lindu.",
      place: "Parque Dona Lindu",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-4",
      title: "Futevôlei na Areia",
      description: "Participe ou assista a um jogo de futevôlei nas quadras da praia.",
      place: "Areia de Boa Viagem",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-5",
      title: "Passeio de Catamarã",
      description: "Faça o passeio 'Recife e suas Pontes' de catamarã pelo Rio Capibaribe.",
      place: "Cais das Cinco Pontas",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-6",
      title: "Cadeira de Praia",
      description: "Alugue uma cadeira de praia e um guarda-sol e relaxe por uma hora.",
      place: "Praia de Boa Viagem",
      prize: "+50", 
      completed: false,
    },
    {
      id: "4-7",
      title: "Ciclofaixa de Lazer",
      description: "Pedale pela ciclofaixa de lazer no domingo de manhã.",
      place: "Ciclofaixa Móvel (Centro/Zona Sul)",
      prize: "+50", 
      completed: false,
    },
  ],

  "5": [
    {
      id: "5-1",
      title: "Quilômetro Zero",
      description: "Pise no Marco Zero, o ponto inicial de todas as estradas de Pernambuco.",
      place: "Marco Zero",
      prize: "+40", 
      completed: false,
    },
    {
      id: "5-2",
      title: "Primeira Sinagoga",
      description: "Visite a Sinagoga Kahal Zur Israel, a primeira das Américas.",
      place: "Rua do Bom Jesus",
      prize: "+40", 
      completed: false,
    },
    {
      id: "5-3",
      title: "Pátio de São Pedro",
      description: "Explore o Pátio de São Pedro e fotografe as casas coloniais.",
      place: "Pátio de São Pedro",
      prize: "+40", 
      completed: false,
    },
    {
      id: "5-4",
      title: "O Forte das Cinco Pontas",
      description: "Visite o Forte das Cinco Pontas e o Museu da Cidade do Recife.",
      place: "Forte das Cinco Pontas",
      prize: "+40", 
      completed: false,
    },
    {
      id: "5-5",
      title: "Convento de Olinda",
      description: "Suba até o Convento de São Francisco em Olinda e veja a vista.",
      place: "Alto da Sé, Olinda",
      prize: "+40", 
      completed: false,
    },
    {
      id: "5-6",
      title: "Instituto Ricardo Brennand",
      description: "Conheça a coleção de armas brancas e a arquitetura do IRB.",
      place: "Instituto Ricardo Brennand",
      prize: "+50", 
      completed: false,
    },
  ],

  "6": [
    {
      id: "6-1",
      title: "Grafite na Rua da Moeda",
      description: "Encontre e fotografe seu mural de grafite favorito na Rua da Moeda.",
      place: "Rua da Moeda",
      prize: "+40", 
      completed: false,
    },
    {
      id: "6-2",
      title: "Oficina Brennand",
      description: "Visite a Oficina Cerâmica Francisco Brennand e caminhe pelo Templo Central.",
      place: "Oficina Brennand, Várzea",
      prize: "+40", 
      completed: false,
    },
    {
      id: "6-3",
      title: "Poesia nas Pontes",
      description: "Encontre os grafites e artes urbanas sob as pontes do centro do Recife.",
      place: "Ponte Duarte Coelho",
      prize: "+40", 
      completed: false,
    },
    {
      id: "6-4",
      title: "Parque das Esculturas",
      description: "Atravesse de barco e visite o Parque de Esculturas de F. Brennand.",
      place: "Recife Antigo (em frente ao Marco Zero)",
      prize: "+40", 
      completed: false,
    },
    {
      id: "6-5",
      title: "Galeria a Céu Aberto",
      description: "Explore o Bairro do Recife e encontre 3 intervenções artísticas.",
      place: "Bairro do Recife",
      prize: "+40", 
      completed: false,
    },
  ],

  "7": [
    {
      id: "7-1",
      title: "Volta na Jaqueira",
      description: "Faça uma caminhada ou corrida na pista de cooper do Parque da Jaqueira.",
      place: "Parque da Jaqueira",
      prize: "+40", 
      completed: false,
    },
    {
      id: "7-2",
      title: "Jardim do Baobá",
      description: "Visite o Jardim do Baobá e veja a árvore centenária às margens do Capibaribe.",
      place: "Jardim do Baobá",
      prize: "+40", 
      completed: false,
    },
    {
      id: "7-3",
      title: "Horto de Dois Irmãos",
      description: "Passeie pelo horto e conheça as espécies da Mata Atlântica.",
      place: "Parque de Dois Irmãos",
      prize: "+30", 
      completed: false,
    },
    {
      id: "7-4",
      title: "Sítio Trindade",
      description: "Conheça o Sítio Trindade, importante parque e centro cultural da Zona Norte.",
      place: "Sítio Trindade, Casa Amarela",
      prize: "+40", 
      completed: false,
    },
  ],
};


export default function ChallengePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const trail = mockTrails.find(t => t.id === Number(id));
  const challenges = mockChallenges[id as keyof typeof mockChallenges] || [];

  if (!trail) {
    return <div>Trilha não encontrada!</div>;
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <TrailHeader trail={trail} />
      <div className="p-8">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
}