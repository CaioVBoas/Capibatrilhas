# Plano de Testes – Sistema de Gamificação Cidadã

## 1. Introdução

Este documento descreve o plano de testes adotado para o sistema de gamificação cidadã Capibatrilhas, que transforma experiências culturais do Recife em desafios e recompensas. O objetivo é definir a abordagem, o escopo e as técnicas de teste utilizadas para garantir a qualidade, a confiabilidade e o correto funcionamento da plataforma.

---

## 2. Objetivo

Garantir que as funcionalidades do sistema — como conclusão de trilhas, obtenção de Capibas, criação de trilhas personalizadas e resgate de badges — estejam corretas, consistentes e alinhadas aos requisitos funcionais e de negócio.

---

## 3. Escopo de Testes

### 3.1 Funcionalidades no escopo
- Conclusão de trilhas temáticas
- Acúmulo de Capibas
- Criação de trilhas personalizadas
- Consulta de progresso do usuário

### 3.2 Funcionalidades fora do escopo
- Testes de carga e estresse
- Testes de segurança avançados
- Testes de compatibilidade entre navegadores

---

## 4. Abordagem de Testes

O projeto adota uma abordagem híbrida, combinando testes de **caixa preta (Black Box)**, **caixa branca (White Box)** e **testes exploratórios**, de forma complementar.

---

## 5. Testes Black Box (Caixa Preta)

Os testes de caixa preta são utilizados para validar o comportamento funcional do sistema a partir das entradas e saídas, sem considerar a implementação interna.

### Técnicas aplicadas:
- Partição de equivalência
- Análise de valor limite
- Suposição de erros

### Exemplos de validação:
- Usuário conclui uma trilha válida e recebe Capibas corretamente
- Criação de trilha com dados válidos e inválidos

Esses testes garantem que o sistema responda corretamente aos diferentes cenários de uso esperados e inesperados.

---

## 6. Testes White Box (Caixa Branca)

Os testes de caixa branca são utilizados para validar a lógica interna do sistema, considerando fluxos de execução, decisões e condições do código.

### Técnicas aplicadas:
- Cobertura de instruções
- Cobertura de decisão
- Cobertura de condições

### Exemplos de validação:
- Regras de cálculo de Capibas
- Condições para desbloqueio de badges
- Validação de estados internos durante a progressão do usuário

Esses testes visam garantir a robustez da implementação e reduzir a probabilidade de falhas lógicas.

---

## 7. Testes Exploratórios

Os testes exploratórios são executados de forma manual e iterativa, permitindo que o testador explore o sistema livremente dentro de períodos controlados (*timeboxes*).

### Objetivos:
- Identificar defeitos não previstos em testes roteirizados
- Avaliar a usabilidade e a experiência do usuário
- Explorar cenários complexos ou pouco especificados

Os resultados obtidos durante a execução orientam a criação de novos casos de teste e ajustes na estratégia de testes automatizados.

---

## 8. Ambiente de Testes

- Aplicação em ambiente de desenvolvimento
- Navegador web moderno
- Banco de dados de teste com dados fictícios
- APIs do back-end disponíveis

---

## 9. Critérios de Entrada

- Funcionalidades implementadas
- Ambiente de testes configurado
- Dados de teste disponíveis

---

## 10. Critérios de Saída

- Casos de teste críticos executados com sucesso
- Ausência de defeitos bloqueantes
- Registro dos resultados e defeitos encontrados

---

## 11. Conclusão

A combinação de testes Black Box, White Box e testes exploratórios permite uma validação abrangente do sistema, cobrindo tanto o comportamento externo quanto a lógica interna e aspectos não previstos inicialmente. Essa estratégia assegura maior confiabilidade, qualidade e aderência aos objetivos do projeto.
