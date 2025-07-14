# 🐾 API de Adoção de Animais de Rua

Este projeto é uma API RESTful que gerencia o processo de adoção de animais de rua. Ele permite cadastrar abrigos, animais, adotantes e registrar adoções. Ideal para conectar abrigos a pessoas interessadas em adotar animais.

---

## 📦 Funcionalidades

- Cadastro de abrigos
- Cadastro de animais vinculados a abrigos
- Cadastro de adotantes
- Registro de adoções
- Listagem e consulta por ID
- Filtros por abrigo e disponibilidade
- Boas práticas de organização de código

---

## 🧱 Estrutura da API

- `GET /api/abrigos` → Lista todos os abrigos  
- `GET /api/animais` → Lista todos os animais  
- `GET /api/animais/disponiveis` → Lista só os disponíveis  
- `GET /api/adotantes` → Lista os adotantes  
- `POST`, `PUT`, `DELETE` para cada entidade  
- Rotas separadas por módulo: abrigos, animais, adotantes

---

## ⚙️ Pré-requisitos

- [Node.js v18+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Postman](https://www.postman.com/) (para testes)

---

## 🚀 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/RodHeisenberg/api-animais.git
cd api-animais
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
# ou com nodemon (se instalado)
npx nodemon index.js
```

4. Acesse no navegador ou Postman:

```
http://localhost:3000/api/animais
```

---

## 🧪 Testes com Postman

| Método | URL                                   | Body (JSON)                                           |
|--------|----------------------------------------|--------------------------------------------------------|
| GET    | /api/abrigos                          | —                                                      |
| GET    | /api/animais                          | —                                                      |
| GET    | /api/animais/1                        | —                                                      |
| POST   | /api/animais                          | `{ "nome": "Rex", "especie": "cachorro", "abrigo_id": "1" }` |
| GET    | /api/animais/abrigo/1                 | —                                                      |
| POST   | /api/adotantes                        | `{ "nome": "João", "email": "...", "telefone": "...", "endereco": "..." }` |
| PUT    | /api/adotantes/1                      | `{ "telefone": "(11) 91234-0000" }`                    |

---

## 📁 Estrutura de Diretórios

```
api-animais/
├── data/
│   ├── abrigos.json
│   ├── animais.json
│   └── adotantes.json
├── routes/
│   ├── abrigos.routes.js
│   ├── animais.routes.js
│   └── adotantes.routes.js
├── index.js
├── .gitignore
└── README.md
```

---

## 🛠️ Tecnologias

- Node.js
- Express
- JSON como banco de dados temporário
- Postman (testes)
- Visual Studio Code

---

## 👨‍🏫 Projeto criado para fins didáticos no curso de Engenharia de Software - Jala University

---
