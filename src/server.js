// Importa o framework Express
const express = require('express');

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
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});