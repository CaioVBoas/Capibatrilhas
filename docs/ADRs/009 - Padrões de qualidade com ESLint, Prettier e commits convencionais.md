# Padrões de Qualidade com ESLint, Prettier e Commits Convencionais

## Contexto

Com múltiplos colaboradores e dois pacotes (client e server), é essencial manter consistência de código, legibilidade e automação de verificações. O repositório já possui `eslint.config.mjs` no `client`, sugerindo padronização inicial.

## Decisão

Padronizar qualidade de código com ESLint (plugins para TypeScript/React/Import), formatação automática com Prettier e convenções de commit (Conventional Commits) validadas por ferramentas como Commitlint e hooks (Husky).

## Status

Aceita em 19/12/2025.

## Consequências

1. **Consistência e Legibilidade**: Regras compartilhadas entre `client/` e `server/` reduzem divergências e facilitam revisão.
2. **Automação e Produtividade**: Formatação e lint em pre-commit/pre-push reduzem retrabalho; integrações com CI garantem qualidade contínua.
3. **Evolução Segura**: Padrões ajudam a prevenir bugs comuns, organizam imports e reforçam melhores práticas.
4. **Versionamento Semântico**: Commits convencionais melhoram histórico e automatizam geração de release notes.
5. **Trade-offs**: Fricção inicial na adoção e necessidade de ajustes em regras; mitigado por documentação e scripts padrão.