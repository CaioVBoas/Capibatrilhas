# Adoção do Modelo Cliente-Servidor com Backend Monolítico

## Contexto

Para o início do projeto da disciplina, tornou-se necessário definir previamente a arquitetura de software que orientaria o desenvolvimento, servindo como base para os passos subsequentes e garantindo um direcionamento claro para aspectos como manutenção, escalabilidade e evolução do sistema no longo prazo.

Nesse contexto, foram avaliadas as seguintes alternativas arquiteturais apresentadas ao longo da disciplina:

1. Arquitetura Monolítica
2. Arquitetura Baseada em Microsserviços
3. Modelo Cliente-Servidor

É importante destacar que o modelo cliente-servidor descreve principalmente a forma de separação e comunicação entre componentes, enquanto monolítica e microsserviços tratam da organização e do empacotamento do back-end.

### Comparação em alto nível

* **Arquitetura Monolítica** — Benefícios: simplicidade de implementação e implantação (um único artefato), menor sobrecarga operacional e curva de aprendizado reduzida, especialmente para equipes pequenas. Adequada quando o escopo é limitado e a evolução é relativamente estável. Limitações: maior acoplamento interno, escalabilidade menos granular e menor flexibilidade para evolução independente de partes do sistema.

* **Arquitetura de Microsserviços** — Benefícios: escalabilidade independente por domínio, maior autonomia entre equipes, possibilidade de uso de tecnologias distintas e maior resiliência a falhas isoladas. Limitações: aumento significativo da complexidade operacional, necessidade de infraestrutura adicional (orquestração, observabilidade, comunicação entre serviços) e maior maturidade em práticas DevOps.

* **Modelo Cliente-Servidor** — Benefícios: separação clara de responsabilidades entre cliente (camada de apresentação e experiência do usuário) e servidor (regras de negócio e acesso a dados), permitindo desenvolvimento paralelo, contratos de API bem definidos e desacoplamento entre as camadas. A comunicação ocorre por meio de requisições HTTP, mantendo uma complexidade operacional moderada quando comparada a arquiteturas distribuídas.

Considerando o contexto acadêmico, o tamanho da equipe e o horizonte de entrega, a combinação de um **back-end monolítico** organizado dentro de um **modelo cliente-servidor** apresenta o melhor equilíbrio entre simplicidade, clareza arquitetural e capacidade de evolução futura.

## Decisão

Optou-se pela adoção do **modelo cliente-servidor**, no qual o sistema é dividido em front-end e back-end, aliado a uma **arquitetura monolítica no back-end**, responsável por centralizar as regras de negócio, o acesso aos dados e o processamento das requisições.

## Status

Aceita em 11/12/2025.

## Consequências

A separação entre cliente e servidor possibilita desenvolvimento paralelo entre front-end e back-end, bem como deploys independentes por camada. O front-end pode ser distribuído como uma SPA, enquanto o back-end monolítico expõe uma API responsável pelo processamento das requisições e pela persistência dos dados.

O contrato de API estabelece uma fronteira clara entre as camadas, facilitando testes de integração, documentação e versionamento, além de permitir o consumo futuro por outros clientes, como aplicações mobile.

Sob a perspectiva de segurança, os pontos sensíveis do sistema concentram-se no servidor, onde são aplicados mecanismos como autenticação, autorização e controle de acesso. Do ponto de vista da qualidade, a arquitetura favorece a testabilidade e a manutenção, uma vez que o back-end permanece centralizado e modularizado.

Como limitação, o back-end monolítico pode se tornar um gargalo em cenários de alta demanda ou crescimento significativo do sistema. Caso necessário, a arquitetura permite evolução futura para microsserviços, mediante a redefinição de limites de domínio e investimento em infraestrutura adicional. Ainda assim, no contexto atual do projeto, os benefícios de simplicidade, clareza e governança superam essas limitações.
