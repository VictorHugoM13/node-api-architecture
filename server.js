// Importa o módulo nativo "http" do Node.js.
// Esse módulo permite criar servidores HTTP sem instalar bibliotecas externas.
const http = require('http');


// Cria um servidor HTTP.
// O método createServer recebe uma função (callback)
// que será executada toda vez que uma requisição chegar ao servidor.
const server = http.createServer((req, res) => {

  // Define o status da resposta HTTP e os headers.
  // 200 = requisição bem sucedida.
  // Content-Type: application/json informa ao cliente que a resposta é JSON.
  res.writeHead(200, {'Content-Type': 'application/json'});

  // Envia a resposta para o cliente e finaliza a conexão.
  // JSON.stringify transforma o objeto JavaScript em texto JSON,
  // pois o protocolo HTTP envia dados como texto.
  res.end(JSON.stringify({ message: 'Hello World' }));

});


// Faz o servidor "escutar" requisições na porta 3000.
// Ou seja, quando alguém acessar http://localhost:3000
// o servidor executará a função passada em createServer.
server.listen(3000);