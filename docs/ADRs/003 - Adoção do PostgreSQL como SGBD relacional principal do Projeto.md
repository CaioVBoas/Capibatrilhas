# Adoção do PostgreSQL como SGBD Relacional Principal do Projeto

## Contexto

A camada de persistência constitui um elemento essencial da arquitetura do sistema, atuando diretamente no armazenamento, recuperação e gestão dos dados. A seleção do SGBD impacta de forma determinante a performance, a escalabilidade, a integridade das informações e o nível de complexidade no desenvolvimento.

O projeto envolve, entre outros componentes, um fluxo de auditoria de documentos caracterizado por múltiplas operações de escrita e pela necessidade de rastreabilidade completa, além da garantia de integridade transacional. Diante dessas exigências, o modelo relacional se apresenta como a solução mais aderente, dada sua capacidade de estruturar dados de forma consistente, representar relacionamentos complexos e assegurar conformidade com os princípios ACID (Atomicidade, Consistência, Isolamento e Durabilidade).

Durante o processo de avaliação, foram consideradas duas opções amplamente consolidadas e tecnicamente robustas:

1. **PostgreSQL**: reconhecido por sua forte conformidade com o padrão SQL, robustez, recursos avançados de concorrência (como MVCC) e alta garantia de integridade dos dados.
2. **MySQL**: amplamente utilizado no mercado, oferecendo boa performance e simplicidade de uso, com suporte a transações ACID quando utilizado com o mecanismo InnoDB.

## Decisão

O PostgreSQL foi adotado como o Sistema de Gerenciamento de Banco de Dados (SGBD) relacional principal do projeto.

## Status

Aceita em 11/12/2025.

## Consequências

A adoção do PostgreSQL implica nos seguintes benefícios e considerações para o projeto:

1. **Integridade e Confiabilidade dos Dados**: sua conformidade rigorosa com ACID garante que cada operação do fluxo de auditoria — como aprovações e recusas — seja registrada de forma consistente e segura, mesmo em cenários de alta concorrência.
2. **Eficiência em Operações Concorrentes**: o MVCC do PostgreSQL possibilita leituras e escritas simultâneas com impacto mínimo entre si, assegurando que usuários consultem o status de documentos sem bloqueios.
3. **Curva de Aprendizado e Trade-offs**: embora ofereça recursos avançados, o PostgreSQL pode demandar maior esforço inicial de configuração e otimização. Contudo, esse investimento se justifica pelos benefícios de longo prazo em robustez, confiabilidade e capacidade técnica.
