# Node API Architecture

API REST simples construída com **Node.js** e **Express** para gerenciamento de usuários.
O projeto foi criado com o objetivo de demonstrar uma **arquitetura organizada de backend**, separando responsabilidades em **controllers, services, routes e utils**.

---

# Tecnologias utilizadas

* Node.js
* Express
* Nodemon
* JavaScript
* Postman (para testes de API)

---

# Estrutura do projeto

```
src
 ├── controllers
 │    └── userController.js
 │
 ├── routes
 │    └── userRoutes.js
 │
 ├── services
 │    └── userService.js
 │
 ├── utils
 │    └── responseHandler.js
 │
 └── server.js
```

### Descrição das pastas

* **controllers** → recebem as requisições HTTP e retornam as respostas
* **services** → contêm a lógica de negócio da aplicação
* **routes** → definem os endpoints da API
* **utils** → funções auxiliares reutilizáveis
* **server.js** → arquivo principal que inicia o servidor

---

# Como executar o projeto

## 1 - Clonar o repositório

```
git clone https://github.com/seu-usuario/node-api-architecture.git
```

## 2 - Entrar na pasta do projeto

```
cd node-api-architecture
```

## 3 - Instalar as dependências

```
npm install
```

## 4 - Rodar o servidor

```
npm run dev
```

ou

```
nodemon src/server.js
```

O servidor irá iniciar em:

```
http://localhost:3000
```

---

# Rotas da API

| Método | Endpoint   | Descrição                |
| ------ | ---------- | ------------------------ |
| GET    | /users     | Lista todos os usuários  |
| GET    | /users/:id | Busca um usuário pelo ID |
| POST   | /users     | Cria um novo usuário     |
| PUT    | /users/:id | Atualiza um usuário      |
| DELETE | /users/:id | Remove um usuário        |

---

# Exemplos de requisição

## Criar usuário

### Endpoint

```
POST /users
```

### Body (JSON)

```json
{
  "name": "Victor",
  "email": "victor@email.com"
}
```

### Resposta

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Victor",
    "email": "victor@email.com"
  }
}
```

---

# Atualizar usuário

### Endpoint

```
PUT /users/1
```

### Body

```json
{
  "name": "Victor Silva",
  "email": "victor@email.com"
}
```

---

# Deletar usuário

### Endpoint

```
DELETE /users/1
```

Resposta:

```
204 No Content
```

---

# Códigos de resposta

| Código | Significado                      |
| ------ | -------------------------------- |
| 200    | Requisição realizada com sucesso |
| 201    | Recurso criado                   |
| 204    | Recurso removido                 |
| 400    | Requisição inválida              |
| 404    | Recurso não encontrado           |

---

# Testando a API

Você pode testar a API usando:

* Postman
* Insomnia
* Thunder Client (VSCode)

---

# Autor

Projeto desenvolvido para estudo de **arquitetura de APIs com Node.js e Express**.
