// Exporta uma função chamada getUsers
// "exports" permite que essa função seja usada em outros arquivos
exports.getUsers = (req, res) => {

  // res.json envia uma resposta em formato JSON para o cliente
  // Aqui estamos retornando um objeto com uma mensagem
  res.json({ message: "Lista de usuários" });
};


// Exporta outra função chamada createUser
// Essa função normalmente seria usada para criar um novo usuário
exports.createUser = (req, res) => {

  // res.status(201) define o código HTTP da resposta
  // 201 significa: "Created" (algo foi criado com sucesso)

  // depois do status, enviamos um JSON como resposta
  res.status(201).json({ message: "Usuário criado" });
};