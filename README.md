# CypressCucumber

Projeto de automação de um formulário com Cypress e Cucumber. A suíte usa uma página de formulário local para que os testes não dependam de um site externo.

## Pré-requisitos

- Node.js 20
- npm

## Instalação

```bash
npm install
```

## Executar os testes

Em um terminal, inicie o servidor local do formulário:

```bash
node cypress/test-server.js
```

Em outro terminal:

```bash
npm run test:e2e
```

A página de teste fica disponível em `http://127.0.0.1:8080/pesquisa/`. O GitHub Actions inicia o mesmo servidor antes de executar a suíte.
