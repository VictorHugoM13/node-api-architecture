// Importa o framework Express
const express = require('express');

// Cria um "router" do Express
// O router serve para organizar rotas separadas da aplicação principal
const router = express.Router();

// Importa o controller responsável pela lógica de usuários
// Esse arquivo geralmente contém funções como getUsers, createUser etc.
const userController = require('../controllers/userController');

// Define uma rota GET para "/"
// Quando alguém acessar essa rota, o método getUsers será executado
// Exemplo de requisição: GET /users
router.get('/', userController.getUsers);

// Define uma rota POST para "/"
// Quando alguém enviar dados para essa rota, createUser será executado
// Exemplo de requisição: POST /users
router.post('/', userController.createUser);

// Exporta o router para ser usado em outro arquivo (normalmente app.js ou server.js)
module.exports = router;