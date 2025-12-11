# Adoção de TypeScript com Node.js e Framework Express.js para Desenvolvimento do Back-End

## Contexto

A seleção da linguagem e do framework para o desenvolvimento do back-end é uma decisão fundamental, pois influencia diretamente a velocidade de desenvolvimento, a manutenibilidade do código, a performance do sistema e a integração com outras tecnologias, incluindo o banco de dados relacional PostgreSQL (conforme ADR 3).

O projeto, desenvolvido em parceria com a moeda social Capiba, consiste em um sistema de gamificação cidadã que transforma experiências culturais do Recife em desafios e recompensas. Nele, os usuários completam trilhas temáticas, acumulam Capibas, criam trilhas personalizadas com amigos e resgatam badges, incentivando o turismo, a cultura e o engajamento social. Dentro da arquitetura cliente-servidor (conforme ADR 2), o back-end desempenha papel crítico ao gerenciar múltiplas APIs e garantir a integridade dos dados relacionados a trilhas, selos e interações dos usuários.

Considerando o prazo da disciplina e a necessidade de maximizar a produtividade e a consistência técnica, optamos por um stack que prioriza coerência, segurança e eficiência no processo de desenvolvimento.

## Decisão

Adotar TypeScript com Node.js e o framework Express.js como base tecnológica para o desenvolvimento do back-end do projeto.

## Status

Aceita em 11/12/2025.

## Consequências

A adoção de TypeScript com Node.js e Express.js implica nos seguintes benefícios e considerações:

1. **Unificação Tecnológica e Produtividade da Equipe**: A utilização de TypeScript em todo o stack (front-end e back-end) reduz a necessidade de alternância entre linguagens e paradigmas distintos. Isso aumenta a produtividade e torna o desenvolvimento mais fluido, especialmente em um projeto com prazo reduzido.

2. **Robustez e Manutenibilidade com Tipagem Estática**: A tipagem estática do TypeScript melhora a qualidade e a segurança do código, prevenindo erros em tempo de desenvolvimento e facilitando a refatoração. Essa robustez é fundamental para lidar com os fluxos de dados complexos do sistema de gamificação.

3. **Ecossistema Amplo e Flexibilidade para Construção de APIs**: O ecossistema do Node.js, aliado ao Express.js como framework minimalista, oferece alta flexibilidade para a criação de APIs personalizadas. Isso permite que funcionalidades como criação de trilhas, sistema de recompensas e gerenciamento de doações sejam implementadas com agilidade e performance.

4. **Curva de Aprendizado do TypeScript (Trade-off)**: Embora o TypeScript apresente uma curva de aprendizado inicial, especialmente para membros menos familiarizados com tipagem estática, esse esforço é compensado pelos ganhos em segurança, padronização e produtividade. O suporte oferecido por IDEs modernas contribui para mitigar essa dificuldade.
