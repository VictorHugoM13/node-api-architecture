// Importa o serviço de usuários.
// Esse arquivo contém a lógica de manipulação dos dados (buscar, criar, atualizar, deletar usuários)
const userService = require('../services/userService');


// Exporta uma função chamada getUsers.
// Essa função será usada na rota para retornar todos os usuários
exports.getUsers = (req, res) => {

  // Chama a função getAll() do service para buscar todos os usuários
  // e envia o resultado como resposta em formato JSON
  res.json(userService.getAll());
};


// Exporta a função responsável por buscar um usuário pelo ID
exports.getUserById = (req, res) => {

  // Pega o id que vem na URL da requisição (req.params.id)
  // Converte para número usando Number()
  // e chama o service para buscar o usuário
  const user = userService.getById(Number(req.params.id));

  // Se nenhum usuário for encontrado, retorna erro 404 (não encontrado)
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

  // Se o usuário existir, retorna os dados dele em JSON
  res.json(user);
};


// Exporta a função responsável por criar um novo usuário
exports.createUser = (req, res) => {

  // Desestruturação do objeto req.body
  // Pega os campos name e email enviados na requisição
  const { name, email } = req.body;

  // Verifica se name ou email não foram enviados
  if (!name || !email) {

    // Se faltar algum deles, retorna erro 400 (requisição inválida)
    return res.status(400).json({ error: "Nome e email obrigatórios" });
  }

  // Chama a função create do service passando os dados do usuário
  const newUser = userService.create({ name, email });

  // Retorna status 201 (recurso criado) e os dados do novo usuário
  res.status(201).json(newUser);
};


// Exporta a função responsável por atualizar um usuário
exports.updateUser = (req, res) => {

  // Chama o service passando:
  // - o id do usuário vindo da URL
  // - os dados enviados no body para atualização
  const updated = userService.update(Number(req.params.id), req.body);

  // Se o usuário não existir, retorna erro 404
  if (!updated) return res.status(404).json({ error: "Usuário não encontrado" });

  // Se a atualização ocorrer com sucesso, retorna os dados atualizados
  res.json(updated);
};


// Exporta a função responsável por remover um usuário
exports.deleteUser = (req, res) => {

  // Chama o service para remover o usuário usando o id da URL
  const removed = userService.remove(Number(req.params.id));

  // Se não encontrar o usuário, retorna erro 404
  if (!removed) return res.status(404).json({ error: "Usuário não encontrado" });

  // Se remover com sucesso, retorna status 204
  // 204 significa "No Content" (sem conteúdo na resposta)
  res.status(204).send();
};