# Adoção do Next.js (App Router) para Renderização Híbrida e Arquitetura do Front-End

## Contexto

O projeto já adota React com TypeScript (conforme ADR 5). Para aprimorar SEO, performance e experiência do usuário, é desejável suportar renderização híbrida (SSR/SSG), roteamento moderno e componentes de servidor. A estrutura `src/app` e `next.config.ts` indicam o uso do Next.js com App Router.

## Decisão

Adotar Next.js com App Router como framework para o front-end, utilizando Server Components quando apropriado, SSR para páginas dinâmicas e SSG/ISR para conteúdo estático, mantendo TypeScript e Tailwind no ecossistema.

## Status

Aceita em 14/12/2025.

## Consequências

1. **SEO e Performance**: SSR/SSG/ISR melhoram indexação e tempo de resposta das páginas de trilhas e eventos.
2. **Arquitetura Moderna**: App Router e RSC reduzem payloads e complexidade de dados, melhorando DX e organização.
3. **Integração com Back-End**: Facilita consumo de APIs do Express mantendo contratos tipados; melhora experiência com fetch no servidor.
4. **Trade-offs e Limitações**: Fronteiras entre componentes de servidor/cliente exigem disciplina; algumas bibliotecas client-only requerem adaptações.
5. **Escalabilidade**: Rotas e layouts compostos favorecem evolução incremental do produto sem refatorações amplas.