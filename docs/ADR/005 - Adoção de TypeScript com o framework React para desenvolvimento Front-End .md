# Adoção de TypeScript com o Framework React para Desenvolvimento Front-end

## Contexto

A camada de front-end constitui a interface principal da plataforma, sendo fundamental para garantir uma experiência de usuário intuitiva, responsiva e engajadora. Ela será responsável por permitir que os usuários visualizem e criem trilhas temáticas, convidem amigos, monitorem suas Capibas e acompanhem suas Insígnias de gamificação, entre outras funcionalidades essenciais.

A seleção da linguagem e do framework de front-end impacta diretamente a velocidade de desenvolvimento da interface, a reatividade do sistema, a manutenibilidade do código e a eficiência no consumo das APIs do back-end.

Considerando que o back-end será desenvolvido com TypeScript utilizando Node.js e Express.js (conforme ADR 4), a adoção de TypeScript no front-end promove unificação tecnológica e consistência de tipos em todo o stack. Esse alinhamento reduz a curva de aprendizado, otimiza a comunicação interna da equipe e melhora a capacidade de refatoração — fatores críticos para um projeto com prazo reduzido e recursos limitados.

Durante o processo de avaliação, analisamos os frameworks JavaScript mais consolidados do mercado. Em função da robustez, da manutenibilidade e da escalabilidade necessárias para lidar com os fluxos de dados complexos da plataforma, identificamos que a combinação de React com TypeScript atende plenamente às exigências do projeto. Além disso, esta escolha aproxima significativamente o time das tecnologias mais demandadas pelo mercado, fortalecendo a formação técnica dos envolvidos.

## Decisão

Adotar TypeScript em conjunto com o framework React como base tecnológica para o desenvolvimento do front-end da plataforma.

## Status

Aceita em 11/12/2025.

## Consequências

A escolha por TypeScript e React implica nos seguintes benefícios e considerações para o projeto:

1. **Unificação Tecnológica e Produtividade da Equipe**: Utilizar TypeScript ao longo de todo o stack permitirá que a equipe transite com maior facilidade entre front-end e back-end, elevando a produtividade, reduzindo o tempo de onboarding e proporcionando uma compreensão mais integrada do fluxo de dados em todo o sistema.

2. **Consistência e Segurança de Tipos no Front-end**: A tipagem estática oferecida pelo TypeScript garantirá maior previsibilidade e segurança no tratamento de dados provenientes do back-end. Isso reduz erros em tempo de execução, facilita a depuração e fortalece a qualidade geral do código.

3. **Interface Reativa e Modular com React**: A arquitetura baseada em componentes do React favorece a criação de interfaces modulares, reutilizáveis e altamente responsivas, adequadas para elementos como cards de trilha, páginas de destaque e telas de criação de trilhas personalizadas.

4. **Ecossistema Amplo e Ferramentas Modernas**: A combinação React + TypeScript dispõe de um ecossistema extremamente maduro, composto por bibliotecas, ferramentas de desenvolvimento e uma comunidade ativa. Isso acelera significativamente o desenvolvimento e facilita a integração com APIs tipadas do back-end.

5. **Curva de Aprendizado Inicial (Trade-off)**: Embora o TypeScript apresente uma curva de aprendizado inicial para membros menos familiarizados com tipagem estática, o investimento é rapidamente compensado pelos benefícios em segurança, robustez e padronização ao longo de toda a aplicação.
