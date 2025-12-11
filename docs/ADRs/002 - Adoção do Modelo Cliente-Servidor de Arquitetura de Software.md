# Adoção do Modelo Cliente-Servidor de Arquitetura de Software

## Contexto

Para o início do projeto da disciplina, tornou-se necessário definir previamente o modelo arquitetural que orientaria o desenvolvimento, servindo como base para os passos subsequentes e garantindo um direcionamento claro para aspectos como escalabilidade, manutenção e evolução do sistema no longo prazo.

Nesse sentido, avaliamos três alternativas apresentadas ao longo da disciplina:

1. Arquitetura Monolítica  
2. Arquitetura Cliente-Servidor  
3. Arquitetura Baseada em Microsserviços

Comparação em alto nível:

- **Monolítica** — Benefícios: simplicidade de implementação e implantação (um único artefato), menor sobrecarga operacional e curva de aprendizado reduzida, especialmente para equipes pequenas. Adequada quando o escopo é limitado e a evolução é relativamente estável. Limitações: acoplamento elevado, escalabilidade menos granular e flexibilidade tecnológica reduzida.

- **Microsserviços** — Benefícios: escalabilidade independente por domínio, autonomia entre equipes, possibilidade de uso de tecnologias distintas e maior resiliência a falhas isoladas. Limitações: aumento da complexidade operacional (orquestração, observabilidade, comunicação entre serviços, versionamento), maior latência entre serviços e necessidade de maturidade em práticas DevOps e infraestrutura.

- **Cliente-Servidor** — Benefícios: separação clara de responsabilidades entre cliente (interface/experiência) e servidor (regras de negócio e dados), permitindo desenvolvimento paralelo, ciclos de deploy independentes por camada e escalabilidade facilitada no backend (horizontal ou vertical). Essa abordagem possibilita ainda o uso de CDN para distribuição de ativos do cliente e mantém uma complexidade operacional moderada — substancialmente inferior à de microsserviços — enquanto preserva um contrato de API bem definido, o que favorece modularidade, testes e manutenção.

Considerando o contexto acadêmico, o tamanho da equipe e o horizonte de entrega, a arquitetura cliente-servidor apresenta o melhor equilíbrio entre simplicidade operacional e capacidade de evolução, mantendo a possibilidade de, futuramente, extrair domínios do backend para serviços independentes caso haja justificativa técnica.

## Decisão

Optamos pela adoção do modelo cliente-servidor como arquitetura de software do projeto.

## Status

Aceita em 11/12/2025.

## Consequências

A separação entre cliente e servidor possibilita desenvolvimento paralelo entre front-end e back-end, deploys independentes por camada e escalabilidade direcionada: ativos estáticos do cliente podem ser servidos por CDN, enquanto o servidor é dimensionado conforme as demandas de API e banco de dados. O contrato de API estabelece uma fronteira estável, facilitando testes de integração, documentação (OpenAPI), versionamento e permitindo o consumo futuro por outros clientes, como aplicações mobile.

Sob a perspectiva de segurança, concentramos a superfície sensível no servidor, onde aplicamos autenticação, autorização, CORS e rate limiting. Do ponto de vista de qualidade, a arquitetura favorece testabilidade (testes unitários e de integração no back-end; testes E2E no front-end) e uma observabilidade clara (APM no servidor e telemetria no cliente).

Por outro lado, o servidor permanece como um núcleo único — ainda que modularizado — o que pode gerar gargalos em cenários de alta demanda. A evolução para microsserviços exigirá a reavaliação de limites de domínio e investimento em infraestrutura complementar (mensageria, service discovery, tracing distribuído). Além disso, o contrato de API requer disciplina: mudanças devem seguir versionamento e planos de depreciação para evitar rupturas no cliente. Por fim, a comunicação cliente-servidor introduz latência de rede, demandando boas práticas de paginação, cache e idempotência. Apesar disso, no contexto atual do projeto, os benefícios de clareza, paralelismo e governança superam esses custos, mantendo aberta a possibilidade de evolução arquitetural futura.
