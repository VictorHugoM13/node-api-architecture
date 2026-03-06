/*const loginUser = (email, password) => {
    setTimeout(() => {
        console.log("usuário logado");
        return { email };
    }, 1500);
}

const user = loginUser("skoolder@gmail.com", "1234");

console.log(ueer);*/


/*const getUserId = (id, callback) => {
  setTimeout(() => {
    callback({ id });
  }, 1000);
}

result = getUserId(5, (result) => {
  console.log(result);
});*/



/*const getOrders = (userId, callback) => {
  setTimeout(() => {
    callback(["pedido1", "pedido2"]);
  }, 1500);
}

const result = getOrders(2, (result) => {
  console.log(result);
});

const loginUser = (email, callback) => {
  setTimeout(() => {
    console.log("Usuário logado")
    callback({id: 5, email});
  },1000);
}

const getOrders = (userId, callback) => {
  setTimeout(() => {
    console.log("Pedidos encontrados")
    callback(["pedido1", "pedido2", "pedido3"]);
  },1000);
}

const getOrdersDetails = (orderId, callback) => {
  setTimeout(() => {
    console.log("Detalhes do pedido encontrado")
    callback({id: orderId, total:100});
  },1000);
}

loginUser("skoolder@gmail.com", (user) => {
  console.log(user);
  getOrders(user.id, (order) => {
    console.log(order);
    getOrdersDetails(order[1], (orderDetail) => {
      console.log(orderDetail);
    });
  });
});

const createUser = (name, callback) => {
  setTimeout(() => {
    console.log("usuário criado");
    callback({id: 10, name});
  }, 1000);
}

const getUserProfile = (id, callback) => {
  setTimeout(() => {
    console.log("Perfil carregado");
    callback({id, bio: "Dev JS"});
  }, 1000);
}


createUser("Victor", (user) => {
  getUserProfile(user.id, (profile) =>{
    console.log(profile);
  });
});

const getProducts = (callback) =>{
  setTimeout(() => {
    console.log("Carregando produtos");
    callback([
      { id: 1, nome: "Mouse"},
      { id: 2, nome: "Teclado"},
      { id: 3, nome: "Monitor"},
    ])
  }, 1000);
}

const getProductDetail = (idProduct,  callback) => {
  setTimeout(() => {
    callback({id: idProduct, preco: 300})
  }, 1000);
}

getProducts((products) => {
  getProductDetail(products[2], (productDetail) => {
    console.log(productDetail);
  })
})

const getMovie = (callback) => {
  setTimeout(() => {
    console.log("Carregando filme");
    callback({ id: 99, movie: "Interestelar" });
  }, 1000);
}

const getReviews = (id, callback) => {
  setTimeout(() => {
    console.log("Retornando reviews");
    callback(["Ótimo", "Incrível", "10/10"]);
  }, 1000);
}

getMovie((movie)=> {
  getReviews(movie.id, (reviews) => {
    console.log(movie, reviews);
  });
});

const getUser = (callback) =>{
  setTimeout(() => {
    console.log("Carregando usuários");
    callback({ id: 7, nome: "Victor" })
  }, 1000);
}

const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("Retornando reviews");
    callback([
      { id: 1, titulo: "Post 1" },
      { id: 2, titulo: "Post 2" }
    ]);
  }, 1000);
}

getUser((user) => {
  getPosts(user.id, (posts) => {
    console.log(posts[1]);
  });
});

const getSchool = (callback) =>{
  setTimeout(() => {
    console.log("Carregando escolas");
    callback({ id: 1, nome: "Escola JS" })
  }, 1000);
}

const getStudents = (schoolId, callback) =>{
  setTimeout(() => {
    console.log("Carregando estudantes");
    callback([
      { id: 1, nome: "Ana" },
      { id: 2, nome: "Carlos" }
    ]);
  }, 1000);
}

const getGrades = (studentId, callback) =>{
  setTimeout(() => {
    console.log("Carregando grades");
    callback([8, 9, 10])
  }, 1000);
}

getSchool((school) => {
  getStudents(school.id, (students) => {
    getGrades(students[0].id, (notas) => {
      const sum = notas.reduce((total, quantidade) => total + quantidade);
      console.log(sum/notas.length);
    });
  });
});


const getStudent = (callback) =>{
  setTimeout(() => {
    console.log("Carregando alunos");
    callback({ id: 5, nome: "Victor" })
  }, 1000);
}

const getCourse = (studentId, callback) =>{
  setTimeout(() => {
    console.log("Carregando cursos");
    callback([
      { id: 1, nome: "JavaScript" },
      { id: 2, nome: "Python" }
    ]);
  }, 1000);
}

const getGrades = (courseId, callback) =>{
  setTimeout(() => {
    console.log("Carregando grades");
    callback([1, 2, 4, 3, 2, 5])
  }, 1000);
}

getStudent((student) => {
  console.log("Aluno:", student.nome);
  getCourse(student.id, (courses) => {
    console.log("Curso:", courses[0].nome);
    getGrades(courses[0].id, (notas) => {
      const sum = notas.reduce((acc, numero) => {
        return acc + numero;
      }, 0);
      console.log("Média:", sum/notas.length);
    });
  });
});*/

const getUser = (callback) =>{
  setTimeout(() => {
    callback({ id: 10, nome: "Victor" })
  }, 1000);
}

const getOrders = (userId, callback) =>{
  setTimeout(() => {
    callback([
      { id: 1, total: 10 },
      { id: 2, total: 80 },
      { id: 3, total: 200 },
      { id: 4, total: 120 },
      { id: 5, total: 80 },
      { id: 6, total: 200 }
    ]);
  }, 1000);
}

const getOrderItems = (orderId, callback) =>{
  setTimeout(() => {
    callback([
      { nome: "Mouse", preco: 50 },
      { nome: "Teclado", preco: 70 }
    ]);
  }, 1000);
}

getUser((user) => {
  console.log("Usuário:", user.nome);
  getOrders(user.id, (orders) => {
    const maiorQue100 = orders.filter(order => order.total > 100);
    console.log("Pedido selecionado:", maiorQue100[0].id);
    getOrderItems(maiorQue100, (products) => {
      const totalReal = products.reduce((acc, item) => acc + item.preco, 0);
      console.log("Total Recalculado: R$", totalReal);
    });
  });
});
