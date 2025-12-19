# Capibatrilhas

Capibatrilhas é uma plataforma para gestão e exploração de trilhas, desenvolvida como projeto acadêmico utilizando uma arquitetura cliente-servidor moderna.

## Sobre o Projeto

O projeto adota uma arquitetura cliente-servidor com backend monolítico, separando claramente as responsabilidades entre as camadas de apresentação e lógica de negócio. Esta abordagem permite desenvolvimento paralelo, facilita a manutenção e possibilita escalabilidade futura.

### Arquitetura

- **Frontend**: Next.js (App Router) com TypeScript e React
- **Backend**: Node.js com Express e TypeScript
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Containerização**: Docker e Docker Compose

Para mais detalhes sobre decisões arquiteturais, consulte a pasta [`docs/ADRs`](docs/ADRs).

## Início Rápido

### Pré-requisitos

- Node.js >= 18.16
- Docker e Docker Compose
- pnpm (gerenciador de pacotes)

### Configuração do Ambiente

#### 1. Clone o repositório

```bash
git clone <repository-url>
cd Capibatrilhas
```

#### 2. Configure o Backend

Navegue até a pasta do servidor e siga as instruções detalhadas no [server/README.md](server/README.md):

```bash
cd server
pnpm install
```

Crie o arquivo `.env` com as variáveis de ambiente necessárias (veja [server/README.md](server/README.md) para detalhes).

Inicie o servidor:

```bash
docker-compose up
```

Em outro terminal, execute as migrations:

```bash
pnpm migration
```

O servidor estará disponível em `http://localhost:3001`.

#### 3. Configure o Frontend

Navegue até a pasta do cliente e siga as instruções do [client/README.md](client/README.md):

```bash
cd client
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O frontend estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
Capibatrilhas/
├── client/              # Aplicação frontend (Next.js)
│   ├── src/
│   │   ├── app/         # Pages e rotas (App Router)
│   │   ├── components/  # Componentes React reutilizáveis
│   │   ├── services/    # Integração com API
│   │   ├── hooks/       # Custom React hooks
│   │   ├── utils/       # Funções utilitárias
│   │   └── types/       # Definições TypeScript
│   └── public/          # Arquivos estáticos
│
├── server/              # Aplicação backend (Express)
│   ├── src/
│   │   ├── controllers/ # Controladores das rotas
│   │   ├── routes/      # Definição de rotas
│   │   ├── service/     # Lógica de negócio
│   │   ├── repositories/# Acesso a dados
│   │   ├── middlewares/ # Middlewares Express
│   │   ├── DTOs/        # Data Transfer Objects
│   │   └── docs/        # Documentação Swagger
│   ├── prisma/          # Schema e migrations do Prisma
│   └── tests/           # Testes unitários e de integração
│
└── docs/                # Documentação do projeto
    ├── ADRs/            # Architecture Decision Records
    ├── refactoring/     # Documentação de refatorações
    └── tests/           # Planos e casos de teste
```

## Tecnologias Principais

### Frontend
- **Next.js 15** - Framework React com renderização híbrida
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Axios** - Cliente HTTP
- **React Hook Form + Zod** - Validação de formulários
- **Jest** - Testes

### Backend
- **Node.js + Express** - Servidor HTTP
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para PostgreSQL
- **JWT** - Autenticação
- **bcryptjs** - Hash de senhas
- **AWS SDK** - Upload de arquivos para S3
- **Swagger** - Documentação de API
- **Jest + Supertest** - Testes

## Testes

### Backend

```bash
cd server
pnpm test           # Executar todos os testes
pnpm test:unit      # Testes unitários
pnpm test:integration # Testes de integração
```

### Frontend

```bash
cd client
pnpm test           # Executar todos os testes
pnpm test:watch     # Modo watch
pnpm test:ci        # Testes com coverage
```

## Qualidade de Código

O projeto utiliza:
- **ESLint** - Análise estática de código
- **Prettier** - Formatação automática
- **Commits Convencionais** - Padrão de mensagens de commit
- **TypeScript** - Verificação de tipos

### Executar linting

```bash
# Backend
cd server
pnpm lint

# Frontend
cd client
pnpm lint
```

## Funcionalidades Principais

- ✅ Sistema de autenticação com JWT
- ✅ CRUD completo de trilhas
- ✅ Upload de imagens para S3
- ✅ Gerenciamento de perfis de usuário
- ✅ Sistema de agendamento de eventos
- ✅ Exploração de trilhas
- ✅ Desafios e conquistas
- ✅ Carteira digital

## Documentação

- **API**: Disponível via Swagger em `http://localhost:3001/api-docs` quando o servidor estiver rodando
- **ADRs**: Decisões arquiteturais documentadas em [`docs/ADRs`](docs/ADRs)
- **Plano de Testes**: Disponível em [`docs/tests/tests-plan.md`](docs/tests/tests-plan.md)

## Desenvolvimento

### Geradores de Código

O projeto inclui geradores para agilizar o desenvolvimento:

**Backend:**
```bash
cd server
pnpm generate:crud  # Gerar CRUD completo
```

**Frontend:**
```bash
cd client
pnpm generate       # Gerar componentes e páginas
```

### Migrations de Banco de Dados

```bash
cd server
pnpm migration              # Executar migrations
pnpm prisma:generate        # Gerar Prisma Client
pnpm prisma:studio          # Abrir Prisma Studio
```

## Problemas Comuns

### Porta já em uso
Se a porta 3001 (backend) ou 3000 (frontend) já estiver em uso:

```bash
# Listar processos usando a porta
netstat -ano | findstr :3001

# Parar o processo
taskkill /PID <PID> /F
```

### Problemas com Docker
Se encontrar erros relacionados a módulos não encontrados:

```bash
cd server
docker-compose down --volumes
docker-compose up --build
```

### Problemas com Migrations
Em caso de erros nas migrations, consulte a seção "Erros comuns" no [server/README.md](server/README.md).

## Equipe

Projeto desenvolvido como parte da disciplina de Desenvolvimento de Software.

## Licença

MIT

## Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do Prisma](https://www.prisma.io/docs/)
- [Documentação do Docker](https://docs.docker.com/)
