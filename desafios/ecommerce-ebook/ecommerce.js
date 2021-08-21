/*
    SISTEMA
        produtos
        usuariosLogados

        acoes
            pegar usuarios logados
            listar produtos disponives
            adicionar novo produto
            remover um produto
*/

class Ecommerce {
    products = [];
    loggedUsers = [];

    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    addUssers(user){
        this.loggedUsers.push(user);
    }
}

module.exports = Ecommerce