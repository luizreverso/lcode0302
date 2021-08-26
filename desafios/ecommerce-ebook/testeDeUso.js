const Product = require("./product");
const Ecommerce = require("./ecommerce");
const User = require("./user")

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


// CRIAR UM ECOMMERCE

const ecommerce = new Ecommerce()

//CRIAR UM USUARIO DO ECOMMERCE

ecommerce.createUser({
    name:"Carol",
    email:"teste@bom.com",
    password:"teste",

})

//LOGAR UM USUARIO

//ADICIONAR LIVROS NO ECOMMERCE

//ADICIONAR 