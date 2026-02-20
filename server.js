// Importa o framework Express.
// O require() carrega módulos no Node.js.
// Aqui estamos trazendo a função principal do Express.
const express = require('express');


// Cria uma instância da aplicação Express.
// Essa variável "app" representa o servidor web.
const app = express();


// Middleware do Express.
// express.json() permite que o servidor entenda
// dados enviados no corpo da requisição em formato JSON.
// Muito usado em requisições POST, PUT e PATCH.
app.use(express.json());


// Define uma rota HTTP do tipo GET.
// '/users/:id' significa:
// - estamos acessando a rota /users
// - ":id" é um parâmetro dinâmico da URL.
app.get('/users/:id', (req, res) => {

  // req.params → captura parâmetros da rota.
  // Exemplo: /users/10
  // id = 10
  const { id } = req.params;
  const { query } = req.query;

  // req.query → captura parâmetros da query string.
  // Exemplo: /users/10?active=true
  // active = true
  const { active } = req.query;

  // Envia uma resposta HTTP para o cliente.
  // status(200) → código HTTP de sucesso.
  // json() → envia resposta no formato JSON.
  res.status(200).json({

    // Informação indicando sucesso da requisição
    success: true,

    // Mensagem personalizada
    message: "Request recebida",

    // Retorna o parâmetro recebido na URL
    params: id,

    // Retorna o valor recebido na query string
    query: active
  });
});


// Inicia o servidor.
// Faz a aplicação "escutar" requisições na porta 3000.
app.listen(3000, () => {

  // Callback executado quando o servidor inicia.
  // Apenas exibe mensagem no terminal.
  console.log("Servidor rodando");
});