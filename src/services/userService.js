// Array que vai armazenar os usuários em memória
// Cada usuário será um objeto dentro deste array
let users = [];

// Contador usado para gerar IDs únicos automaticamente
let idCounter = 1;


// Retorna todos os usuários cadastrados
exports.getAll = () => users;


// Busca um usuário específico pelo ID
exports.getById = (id) => {
  // Procura no array o primeiro usuário cujo id seja igual ao id informado
  return users.find(user => user.id === id);
};


// Cria um novo usuário
exports.create = (data) => {

  // Cria um novo objeto de usuário
  // id: recebe o valor atual do contador
  // ...data: adiciona as propriedades enviadas (nome, email, etc.)
  const newUser = { id: idCounter++, ...data };

  // Adiciona o novo usuário no array
  users.push(newUser);

  // Retorna o usuário criado
  return newUser;
};


// Atualiza um usuário existente
exports.update = (id, data) => {

  // Procura o índice do usuário no array pelo id
  const index = users.findIndex(user => user.id === id);

  // Se não encontrar o usuário, retorna null
  if (index === -1) return null;

  // Atualiza os dados do usuário
  // Mantém os dados antigos e sobrescreve com os novos
  users[index] = { ...users[index], ...data };

  // Retorna o usuário atualizado
  return users[index];
};


// Remove um usuário pelo ID
exports.remove = (id) => {

  // Procura o índice do usuário
  const index = users.findIndex(user => user.id === id);

  // Se não encontrar, retorna false
  if (index === -1) return false;

  // Remove o usuário do array
  users.splice(index, 1);

  // Retorna true indicando que a remoção deu certo
  return true;
};