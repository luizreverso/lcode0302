const Ecommerce = require("./ecommerce");

// CRIAR UM ECOMMERCE

const ecommerce = new Ecommerce()

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