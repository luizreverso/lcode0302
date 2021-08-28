class Product {
    name = ""
    valor = 0
    author = ""
    categories = []
    description = ""
    soldQuantity = 0

    // constructor(name, valor, author) {
    //     this.name = name;
    //     this.valor = valor;
    // }
    constructor(product) {
        this.name = product.name;
        this.valor = product.valor;
        this.author = product.author
        this.categories = product.categories
        this.description = product.description
        this.soldQuantity = product.soldQuantity || 0
    }
}

// const contosDoAmanha = new Product("Contos do Amanha", 4);
// const contosDoAmanha = new Product({
//     name: "Contos do amanha",
//     valor: 4,
//     author: "Dracula",
//     categories: [
//         "acao",
//         "suspense"
//     ],
//     description: "um astronauta vai para a lua e encontra um portal que o leva para o futuro",
// });

// console.log(contosDoAmanha)

module.exports = Product