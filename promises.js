/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Processo finalizado");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

const dobrarNumero = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero >= 0) {
            resolve(numero * 2);
        }
        else {
            reject("Número inválido");
        }
        
    });
}

dobrarNumero(-10)
    .then((result) => {
        console.log(result);
    })
    .catch((erro) => {
        console.log(erro);
    });


const cadeiaNumeros = (numero) => {
    return new Promise((resolve, reject) => {
        resolve(numero);
    });
} 

cadeiaNumeros(5)
    .then((x) => {
        console.log(x);
        return x * 2;
    })
    .then((y) => {
        console.log(y);
        return y + 10;
    })
    .then((z) => {
        console.log(z);
    });

const login = (user, password) => {
    return new Promise((resolve, reject) => {
        if (user === "admin" && password === "1234") {
            resolve("Login realizado");
        }
        else {
            reject("Usuário ou senha inválidos");
        }
    });
}

login("adin", "1234")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

const loadDatas = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nome: "Victor",
            idade: 25
        });
    }, 3000);
});

loadDatas.then((result) => {
    console.log("Nome:", result.nome,
        "Idade:", result.idade
    );
});

const cadeiaNumeros = (numero) => {
    return new Promise((resolve, reject) => {
        resolve(numero);
    });
} 

cadeiaNumeros(3)
    .then((x) => {
        return x * 5;
    })
    .then((y) => {
        return y - 2;
    })
    .then((z) => {
        return z * 10;
    })
    .then((w) => {
        console.log(w);
    })

const simularChance = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 2);
    if (number == 1) {
        resolve("Conexão bem sucedida");
    }
    else {
        reject("Erro de conexão");
    }
});

simularChance
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });*/

const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = true;

    if (error) {
      reject(new Error("error in login!"));
    }

    console.log("user logged!");
    resolve({ email });
  });
};

loginUserPromise("felipe@gmail.com", "1234567")
  .then((user) => {
    console.log({ user });
  })
  .catch((error) => {
    console.log({ error });
  });




