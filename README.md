## 🤖 McQueen Bot

[![Author](https://img.shields.io/badge/author-ClodoaldoDantas-3b82f6)](https://github.com/ClodoaldoDantas)
[![MIT License](https://img.shields.io/badge/License-MIT-3b82f6.svg)](https://choosealicense.com/licenses/mit/)

McQueen Bot é um bot do Telegram projetado para trazer diversão e utilidade ao seu servidor. Com recursos que vão desde geração de piadas até comandos de moderação, o McQueen Bot está aqui para aprimorar sua experiência no Telegram.

![image](https://github.com/ClodoaldoDantas/mc-queen-bot/assets/32376905/8d830149-37d7-43b4-91c6-006ce16b603e)

## 📁 Estrutura do Projeto
```
📦src
 ┣ 📂config
 ┃ ┗ 📜env.ts
 ┣ 📂services
 ┃ ┣ 📜fetch-random-advice.ts
 ┃ ┣ 📜fetch-random-dog-photo.ts
 ┃ ┣ 📜fetch-random-fox-photo.ts
 ┃ ┣ 📜fetch-random-joke.ts
 ┃ ┗ 📜fetch-random-quote.ts
 ┣ 📂utils
 ┃ ┣ 📜commands.ts
 ┃ ┗ 📜messages.ts
 ┗ 📜index.ts
```

 ### 💻 Como executar o projeto

1. Certifique-se de ter o Node instalado na sua máquina.
2. Clone o repositório.
3. Navegue até o diretório raiz do projeto.
4. Preencha as variáveis de ambiente de acordo com o arquivo `.env.example`
5. Execute o comando `npm install` para instalar as dependências do projeto.
6. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
7. Acesse o projeto em seu navegador através do endereço `http://localhost:3000`.
