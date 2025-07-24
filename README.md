# 🏆 Champions League Clubs API

Uma API simples e leve desenvolvida em **Node.js + Express + TypeScript** para fornecer dados sobre clubes participantes da UEFA Champions League.

> 📦 Projeto ideal para estudos de APIs REST, manipulação de dados JSON e deploy de microsserviços simples.

---

## ✨ Funcionalidades

- ✅ Listagem de clubes participantes da Champions League
- ✅ Dados prontos para consumo em formato JSON
- ✅ Projeto com suporte a TypeScript
- ✅ Scripts prontos para desenvolvimento e build

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tsup](https://tsup.egoist.dev/) — empacotador moderno
- [TSX](https://github.com/esbuild-kit/tsx) — execução de TS direto no terminal

---

## 📁 Estrutura de Pastas

champions-league/
├── src/
│ └── server.ts # Arquivo principal da API
│ └── data/ # Dados dos clubes (JSON)
├── package.json
├── tsconfig.json
└── README.md



---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/marcoexpedito/champions-league-clubs.git

# Acesse a pasta
cd champions-league-clubs

# Instale as dependências
npm install

```

🧪 Scripts Disponíveis
Comando	Descrição
npm run start:dev	Inicia o servidor em modo desenvolvimento
npm run start:watch	Inicia o servidor com hot reload
npm run dist	Gera a build com tsup
npm run start:dist	Gera build e roda a versão compilada


📡 Endpoints
Em desenvolvimento! Exemplos esperados:

GET /clubs – Retorna a lista de todos os clubes

GET /clubs/:id – Retorna um clube específico

POST /clubs – Adiciona um novo clube (futuro)


📊 Exemplo de Resposta
[
  {
    "id": 1,
    "name": "Real Madrid"
  },
  {
    "id": 2,
    "name": "Barcelona"
  }
]
