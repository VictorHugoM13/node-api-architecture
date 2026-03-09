// Importa o framework Express
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');


// Cria a aplicação
const app = express();

// Importa as rotas de usuários
const userRoutes = require('./routes/userRoutes');


// Middleware global para interpretar JSON
// Permite acessar dados enviados no body via req.body
app.use(express.json());


// Middleware de log
// Executa em TODAS as requisições antes das rotas
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next(); // continua para o próximo middleware ou rota
});


// Registra as rotas de usuários
// Tudo que começar com /users será enviado para userRoutes
app.use('/users', userRoutes);

app.use(require('./middlewares/errorMiddleware'));


// Inicia o servidor

app.listen(config.port, () => {
  console.log(`Servidor rodando na porta ${config.port}`);
});