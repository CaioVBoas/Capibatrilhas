# Adoção do Docker e Docker Compose para Desenvolvimento Local e Padronização de Ambientes

## Contexto

Para garantir reprodutibilidade, isolamento e facilidade de onboarding, o projeto precisa de um ambiente de desenvolvimento e execução padronizado que contemple o back-end em Node/Express (conforme ADR 4), o front-end em React/Next.js (conforme ADR 5) e o banco relacional PostgreSQL (conforme ADR 3). O repositório já contém `Dockerfile`/`dev.Dockerfile` e `docker-compose.yml` no `server`, indicando uma direção inicial para containerização e orquestração de serviços.

## Decisão

Adotar Docker para containerizar os serviços e Docker Compose para orquestrar os componentes do ambiente (por exemplo, `server`, `client` e `postgres`), padronizando o desenvolvimento local e simplificando a execução em diferentes máquinas.

## Status

Aceita em 14/12/2025.

## Consequências

1. **Reprodutibilidade e Onboarding**: Ambientes consistentes entre desenvolvedores e CI/CD, reduzindo problemas de configuração local.
2. **Isolamento e Observabilidade**: Serviços isolados com redes e volumes dedicados; logs e métricas por serviço tornam diagnóstico mais objetivo.
3. **Integração com o Stack Atual**: Facilita subir o back-end (Express/TS), front-end (Next.js/TS) e banco (PostgreSQL) de forma integrada.
4. **Trade-offs de Performance**: Em macOS, a virtualização pode impactar I/O de volumes; avaliar mapeamentos e caching conforme necessidade.
5. **Complexidade Operacional**: Imagens e orquestração adicionam uma camada de complexidade; mitigada por documentação e scripts de automação.