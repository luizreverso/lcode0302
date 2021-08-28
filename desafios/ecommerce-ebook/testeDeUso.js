const Ecommerce = require("./ecommerce");
const User = require("./user")

<<<<<<< HEAD
const contosDoAmanha = new Product({
    name: "Contos do amanha",
    valor: 4,
    author: "Dracula",
    categories: [
        "acao",
        "suspense"
    ],
    description: "um astronauta vai para a lua e encontra um portal que o leva para o futuro",
});

const historiaDoDracula = new Product({
    name: "historiaDoDracula",
    valor: 10,
    author: "Dracula, O Proprio",
    categories: [
        "autobiografia",
        "superacao"
    ],
    description: "Bla blabla!",
});

// console.log(contosDoAmanha)
// console.log(historiaDoDracula)

const gamaStore = new Ecommerce([contosDoAmanha, historiaDoDracula]);

gamaStore.addProduct(new Product({
    name: "Mil queijos para comer antes de morrer",
    valor: 1,
    author: "Desconhecido",
    categorias: [
        "suspense",
        "viagens"
    ],
    description: "Uma historia tragica"
}))

console.log(gamaStore)


=======
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e
// CRIAR UM ECOMMERCE

const ecommerce = new Ecommerce()

<<<<<<< HEAD
//CRIAR UM USUARIO DO ECOMMERCE

ecommerce.createUser({
    name:"Carol",
    email:"teste@bom.com",
    password:"teste",

})

//LOGAR UM USUARIO

//ADICIONAR LIVROS NO ECOMMERCE

//ADICIONAR 
=======
// CRIAR UM USUARIO DO ECOMMERCE
ecommerce.createUser({
    name:"Yasmin Noronha",
    email: "yasmin-noronha@tuamaeaquelaursa.com",
    password:"testeteste",
    // os abaixo nao sao necessarios para o cadastro de usuario, somente alguem tentando adicionar variaveis ao request
    x: "teste",
    y: "password",
    exec: "DROP TABLE;"
})

// LOGAR UM USUARIO NO ECOMMERCE

const loggedUser = ecommerce.login("yasmin-noronha@tuamaeaquelaursa.com", "testeteste")
console.log(loggedUser)

// ADICIONAR LIVROS AO ECOMMERCE

// ADICIONAR LIVROS AO CARRINHO DE UM USUARIO LOGADO

// FAZER CHECKOUT DO CARRINHO DO USUARIO
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e
