// Importa o serviço de usuários.
// Esse arquivo contém a lógica de manipulação dos dados (buscar, criar, atualizar, deletar usuários)
const userService = require('../services/userService');
const response = require('../utils/responseHandler');


// Exporta uma função chamada getUsers.
// Essa função será usada na rota para retornar todos os usuários
exports.getUsers = (req, res) => {
  const users = userService.getAll();
  response.success(res, users);
};


// Exporta a função responsável por buscar um usuário pelo ID
exports.getUserById = (req, res) => {
  const user = userService.getById(Number(req.params.id));

  if (!user) return response.error(res, "Usuário não encontrado", 404);

  response.success(res, user);
};


exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return response.error(res, "Nome e email obrigatórios", 400);
  }

  const newUser = userService.create({ name, email });

  response.success(res, newUser, 201);
};

// Exporta a função responsável por atualizar um usuário
exports.updateUser = (req, res) => {
  const updated = userService.update(Number(req.params.id), req.body);

  if (!updated) return response.error(res, "Usuário não encontrado", 404);

  response.success(res, updated);
};


// Exporta a função responsável por remover um usuário
exports.deleteUser = (req, res) => {
  const removed = userService.remove(Number(req.params.id));

  if (!removed) return response.error(res, "Usuário não encontrado", 404);

  res.status(204).send();
};