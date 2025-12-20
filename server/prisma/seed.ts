import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Starting database seed...');

  // Limpar dados existentes (em ordem de dependência)
  await prisma.completedChallenge.deleteMany({});
  await prisma.trailParticipation.deleteMany({});
  await prisma.trailInvitation.deleteMany({});
  await prisma.trailChallenge.deleteMany({});
  await prisma.trail.deleteMany({});
  await prisma.challenge.deleteMany({});
  await prisma.highlightedDistrict.deleteMany({});
  await prisma.eventAgenda.deleteMany({});

  // 1. Criar Desafios (12-15)
  console.log('Creating challenges...');
  await prisma.challenge.createMany({
    data: [
      {
        title: 'Explore o Recife Antigo',
        description: 'Visite os principais pontos históricos do Recife Antigo e tire fotos',
        theme: 'História',
        conclusionCriteria: 'Visitar 5 pontos históricos',
        conclusionToken: '100001',
        location: 'Recife Antigo, Recife - PE',
        rewards: 100,
        isActive: true,
      },
      {
        title: 'Arte de Rua em Boa Viagem',
        description: 'Encontre e fotografe 3 murais de arte urbana no bairro de Boa Viagem',
        theme: 'Arte',
        conclusionCriteria: 'Fotografar 3 murais diferentes',
        conclusionToken: '100002',
        location: 'Boa Viagem, Recife - PE',
        rewards: 80,
        isActive: true,
      },
      {
        title: 'Gastronomia Nordestina',
        description: 'Prove 3 pratos típicos da culinária pernambucana',
        theme: 'Gastronomia',
        conclusionCriteria: 'Registrar 3 pratos diferentes',
        conclusionToken: '100003',
        location: 'Diversos, Recife - PE',
        rewards: 120,
        isActive: true,
      },
      {
        title: 'Caminhada na Orla',
        description: 'Complete uma caminhada de 5km pela orla de Boa Viagem',
        theme: 'Esporte',
        conclusionCriteria: 'Percorrer 5km',
        conclusionToken: '100004',
        location: 'Orla de Boa Viagem, Recife - PE',
        rewards: 90,
        isActive: true,
      },
      {
        title: 'Mercado de São José',
        description: 'Visite o histórico Mercado de São José e conheça suas tradições',
        theme: 'Cultura',
        conclusionCriteria: 'Visitar e registrar o mercado',
        conclusionToken: '100005',
        location: 'São José, Recife - PE',
        rewards: 110,
        isActive: true,
      },
      {
        title: 'Pôr do Sol na Praia',
        description: 'Assista e fotografe o pôr do sol em uma das praias do Recife',
        theme: 'Natureza',
        conclusionCriteria: 'Fotografar o pôr do sol',
        conclusionToken: '100006',
        location: 'Praias do Recife - PE',
        rewards: 70,
        isActive: true,
      },
      {
        title: 'Instituto Ricardo Brennand',
        description: 'Visite o Instituto Ricardo Brennand e explore seu acervo',
        theme: 'Cultura',
        conclusionCriteria: 'Visitar e registrar a visita',
        conclusionToken: '100007',
        location: 'Várzea, Recife - PE',
        rewards: 130,
        isActive: true,
      },
      {
        title: 'Parque da Jaqueira',
        description: 'Faça uma atividade física no Parque da Jaqueira',
        theme: 'Esporte',
        conclusionCriteria: 'Realizar atividade física',
        conclusionToken: '100008',
        location: 'Parque da Jaqueira, Recife - PE',
        rewards: 85,
        isActive: true,
      },
      {
        title: 'Marco Zero',
        description: 'Visite o Marco Zero e tire foto com a escultura',
        theme: 'História',
        conclusionCriteria: 'Fotografar no Marco Zero',
        conclusionToken: '100009',
        location: 'Marco Zero, Recife - PE',
        rewards: 95,
        isActive: true,
      },
      {
        title: 'Oficina Cerâmica Francisco Brennand',
        description: 'Explore a Oficina de Cerâmica e seus jardins',
        theme: 'Arte',
        conclusionCriteria: 'Visitar e registrar',
        conclusionToken: '100010',
        location: 'Várzea, Recife - PE',
        rewards: 125,
        isActive: true,
      },
      {
        title: 'Torre Malakoff',
        description: 'Conheça a Torre Malakoff e sua história',
        theme: 'História',
        conclusionCriteria: 'Visitar a torre',
        conclusionToken: '100011',
        location: 'Recife Antigo, Recife - PE',
        rewards: 75,
        isActive: true,
      },
      {
        title: 'Praia de Boa Viagem',
        description: 'Passe um dia na famosa Praia de Boa Viagem',
        theme: 'Natureza',
        conclusionCriteria: 'Visitar a praia',
        conclusionToken: '100012',
        location: 'Boa Viagem, Recife - PE',
        rewards: 60,
        isActive: true,
      },
      {
        title: 'Casa da Cultura',
        description: 'Visite a Casa da Cultura e conheça o artesanato local',
        theme: 'Cultura',
        conclusionCriteria: 'Visitar e registrar',
        conclusionToken: '100013',
        location: 'Santo Antônio, Recife - PE',
        rewards: 100,
        isActive: true,
      },
      {
        title: 'Rua do Bom Jesus',
        description: 'Explore a histórica Rua do Bom Jesus e seus casarões coloridos',
        theme: 'História',
        conclusionCriteria: 'Visitar a rua',
        conclusionToken: '100014',
        location: 'Recife Antigo, Recife - PE',
        rewards: 90,
        isActive: true,
      },
      {
        title: 'Paço do Frevo',
        description: 'Conheça a história do frevo no Paço do Frevo',
        theme: 'Cultura',
        conclusionCriteria: 'Visitar o museu',
        conclusionToken: '100015',
        location: 'Recife Antigo, Recife - PE',
        rewards: 115,
        isActive: true,
      },
    ],
  });
  console.log(`✅ ${15} challenges created`);

  // 2. Criar Bairros em Destaque (3)
  console.log('Creating highlighted districts...');
  await prisma.highlightedDistrict.createMany({
    data: [
      {
        name: 'Recife Antigo',
        location: 'Centro Histórico, Recife - PE',
        bonusScore: 150,
        description:
          'O coração histórico do Recife, repleto de cultura, arte e história. Conheça o Marco Zero, a Rua do Bom Jesus e diversos museus e centros culturais.',
        tags: ['História', 'Cultura', 'Arte', 'Centro'],
        urlImage: 'https://exemplo.com/recife-antigo.jpg',
        isActive: true,
      },
      {
        name: 'Boa Viagem',
        location: 'Zona Sul, Recife - PE',
        bonusScore: 120,
        description:
          'Um dos bairros mais conhecidos do Recife, famoso por sua extensa orla, restaurantes e vida noturna. Perfeito para esportes e lazer.',
        tags: ['Praia', 'Gastronomia', 'Esporte', 'Lazer'],
        urlImage: 'https://exemplo.com/boa-viagem.jpg',
        isActive: true,
      },
      {
        name: 'Várzea',
        location: 'Zona Oeste, Recife - PE',
        bonusScore: 130,
        description:
          'Bairro que abriga importantes pontos culturais como o Instituto Ricardo Brennand e a Oficina Cerâmica Francisco Brennand.',
        tags: ['Cultura', 'Arte', 'Museus'],
        urlImage: 'https://exemplo.com/varzea.jpg',
        isActive: true,
      },
    ],
  });
  console.log(`✅ ${3} highlighted districts created`);

  // 3. Criar Eventos na Agenda (3-5)
  console.log('Creating events...');
  await prisma.eventAgenda.createMany({
    data: [
      {
        title: 'Festival de Frevo',
        description:
          'Celebre o frevo com apresentações ao vivo, oficinas de dança e muita cultura pernambucana',
        location: 'Marco Zero, Recife Antigo',
        eventDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        category: 'Música',
        urlImage: 'https://exemplo.com/festival-frevo.jpg',
        urlExternal: 'https://exemplo.com/festival-frevo',
        isActive: true,
        isFeatured: true,
        tags: ['Frevo', 'Carnaval', 'Dança', 'Música'],
        organizer: 'Prefeitura do Recife',
        value: 'Gratuito',
      },
      {
        title: 'Exposição: Arte Contemporânea Nordestina',
        description:
          'Exposição com obras de artistas contemporâneos do Nordeste brasileiro',
        location: 'Instituto Ricardo Brennand',
        eventDate: new Date('2025-01-15'),
        endDate: new Date('2025-03-30'),
        category: 'Exposição',
        urlImage: 'https://exemplo.com/expo-arte.jpg',
        urlExternal: 'https://exemplo.com/expo-arte',
        isActive: true,
        isFeatured: true,
        tags: ['Arte', 'Exposição', 'Cultura'],
        organizer: 'Instituto Ricardo Brennand',
        value: 'R$ 25,00',
      },
      {
        title: 'Teatro: Auto da Compadecida',
        description:
          'Adaptação teatral do clássico de Ariano Suassuna',
        location: 'Teatro de Santa Isabel',
        eventDate: new Date('2025-01-25'),
        endDate: new Date('2025-01-27'),
        category: 'Teatro',
        urlImage: 'https://exemplo.com/teatro.jpg',
        urlExternal: 'https://exemplo.com/teatro',
        isActive: true,
        isFeatured: false,
        tags: ['Teatro', 'Cultura', 'Literatura'],
        organizer: 'Teatro de Santa Isabel',
        value: 'R$ 40,00 a R$ 80,00',
      },
      {
        title: 'Corrida da Orla',
        description:
          'Corrida de rua de 10km pela orla de Boa Viagem com vista para o mar',
        location: 'Orla de Boa Viagem',
        eventDate: new Date('2025-02-15'),
        category: 'Esporte',
        urlImage: 'https://exemplo.com/corrida.jpg',
        urlExternal: 'https://exemplo.com/corrida',
        isActive: true,
        isFeatured: false,
        tags: ['Corrida', 'Esporte', 'Saúde'],
        organizer: 'Clube de Corrida Recife',
        value: 'R$ 60,00',
      },
    ],
  });
  console.log(`✅ ${4} events created`);

  // 4. Criar Trilhas em Destaque sem dono (3)
  console.log('Creating highlighted trails...');
  
  const trail1 = await prisma.trail.create({
    data: {
      title: 'Recife Histórico',
      description:
        'Explore os principais pontos históricos do Recife e mergulhe na rica história da cidade',
      theme: 'História',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-12-31'),
      totalRewards: 450,
      isActive: true,
      isHighlighted: true,
      ownerId: null,
    },
  });

  const trail2 = await prisma.trail.create({
    data: {
      title: 'Cultura e Arte Pernambucana',
      description:
        'Conheça a rica cultura e arte de Pernambuco através de museus, centros culturais e manifestações artísticas',
      theme: 'Cultura',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-12-31'),
      totalRewards: 580,
      isActive: true,
      isHighlighted: true,
      ownerId: null,
    },
  });

  const trail3 = await prisma.trail.create({
    data: {
      title: 'Recife Ativo',
      description:
        'Trilha focada em atividades físicas e esportivas pelos principais pontos da cidade',
      theme: 'Esporte',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-06-30'),
      totalRewards: 265,
      isActive: true,
      isHighlighted: true,
      ownerId: null,
    },
  });

  console.log(`✅ ${3} highlighted trails created`);

  // 5. Associar Desafios às Trilhas
  console.log('Associating challenges to trails...');
  
  // Obter IDs dos desafios criados
  const allChallenges = await prisma.challenge.findMany({
    orderBy: { id: 'asc' },
  });

  // Trilha 1: Recife Histórico (desafios de história)
  await prisma.trailChallenge.createMany({
    data: [
      { trailId: trail1.id, challengeId: allChallenges[0].id, challengeOrder: 1 }, // Recife Antigo
      { trailId: trail1.id, challengeId: allChallenges[8].id, challengeOrder: 2 }, // Marco Zero
      { trailId: trail1.id, challengeId: allChallenges[10].id, challengeOrder: 3 }, // Torre Malakoff
      { trailId: trail1.id, challengeId: allChallenges[13].id, challengeOrder: 4 }, // Rua do Bom Jesus
      { trailId: trail1.id, challengeId: allChallenges[4].id, challengeOrder: 5 }, // Mercado de São José
    ],
  });

  // Trilha 2: Cultura e Arte (desafios culturais e artísticos)
  await prisma.trailChallenge.createMany({
    data: [
      { trailId: trail2.id, challengeId: allChallenges[6].id, challengeOrder: 1 }, // Instituto Ricardo Brennand
      { trailId: trail2.id, challengeId: allChallenges[9].id, challengeOrder: 2 }, // Oficina Cerâmica
      { trailId: trail2.id, challengeId: allChallenges[12].id, challengeOrder: 3 }, // Casa da Cultura
      { trailId: trail2.id, challengeId: allChallenges[14].id, challengeOrder: 4 }, // Paço do Frevo
      { trailId: trail2.id, challengeId: allChallenges[1].id, challengeOrder: 5 }, // Arte de Rua
      { trailId: trail2.id, challengeId: allChallenges[2].id, challengeOrder: 6 }, // Gastronomia
    ],
  });

  // Trilha 3: Recife Ativo (desafios esportivos e natureza)
  await prisma.trailChallenge.createMany({
    data: [
      { trailId: trail3.id, challengeId: allChallenges[3].id, challengeOrder: 1 }, // Caminhada na Orla
      { trailId: trail3.id, challengeId: allChallenges[7].id, challengeOrder: 2 }, // Parque da Jaqueira
      { trailId: trail3.id, challengeId: allChallenges[11].id, challengeOrder: 3 }, // Praia de Boa Viagem
      { trailId: trail3.id, challengeId: allChallenges[5].id, challengeOrder: 4 }, // Pôr do Sol
    ],
  });

  console.log('✅ Challenges associated to trails');

  console.log('\n🎉 Database seeded successfully!');
  console.log('\nSummary:');
  console.log(`  - Challenges: 15`);
  console.log(`  - Highlighted Districts: 3`);
  console.log(`  - Events: 4`);
  console.log(`  - Highlighted Trails: 3`);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error seeding database:', e);
    await prisma.$disconnect();
    throw e;
  });
