SELECT * from users;

UPDATE users SET name = "Victor Hugo" WHERE id = 1;
DELETE FROM users WHERE id = 3;

SELECT * from posts;

INSERT INTO posts (title, content, user_id)
VALUES ('Primeiro Post', 'Conteudo do post', 1);

INSERT INTO posts (title, content, user_id)
VALUES ('Segundo Post', 'Outro conteudo', 1);

INSERT INTO posts (title, content, user_id)
VALUES ('Post da Ana', 'Conteudo da Ana', 2);

SELECT
  posts.content,
  users.name
FROM posts
JOIN users ON posts.user_id = users.id;

SELECT
  posts.id,
  posts.title,
  users.name AS author
FROM posts
JOIN users ON posts.user_id = users.id;