# Adoção do Prisma como ORM para Acesso a Dados

## Contexto

A camada de persistência do back-end precisa oferecer segurança de tipos, produtividade e uma forma consistente de evoluir o schema do banco de dados PostgreSQL (conforme ADR 3). O projeto já utiliza TypeScript (conforme ADR 4) e se beneficia de um ORM que forneça client tipado, migrações versionadas e uma experiência de desenvolvimento eficiente.

Ao avaliar opções populares — como TypeORM, Sequelize e Knex — identificamos que o Prisma oferece um equilíbrio favorável entre tipagem forte, DX (Developer Experience), tooling integrado e integração nativa com PostgreSQL. Além disso, sua abordagem baseada em schema centralizado facilita a comunicação entre times e reduz divergências entre modelos de dados e implementações.

## Decisão

Adotar o Prisma como ORM padrão para o acesso e a modelagem de dados no back-end, utilizando `schema.prisma` como fonte de verdade para geração de migrações, tipagens e o Prisma Client.

## Status

Aceita em 14/12/2025.

## Consequências

1. **Tipagem End-to-End e Segurança**: O Prisma Client gera tipos a partir do schema, reduzindo erros em tempo de desenvolvimento e aumentando a confiabilidade das operações de leitura/escrita.
2. **Produtividade e DX**: Ferramentas como `prisma migrate` e `prisma generate` simplificam a evolução do schema e a atualização de tipagens, acelerando o ciclo de desenvolvimento.
3. **Integração fluida com PostgreSQL**: Suporte robusto a recursos do PostgreSQL e compatibilidade com o ecossistema Node/TypeScript, alinhando-se às decisões anteriores do stack.
4. **Observabilidade e Manutenção**: O modelo declarativo facilita revisão arquitetural, auditoria de mudanças de schema e documentação das entidades do domínio.
5. **Trade-offs de Performance e Flexibilidade**: Em cenários extremamente otimizados, consultas SQL manuais podem ser mais performáticas. O projeto deverá avaliar pontos críticos e, quando necessário, empregar SQL raw mantendo o Prisma para o restante do acesso a dados.
6. **Curva de Aprendizado**: Requer familiarização com o DSL do `schema.prisma` e fluxo de migrações; mitigado por documentação extensa e tooling amigável.
