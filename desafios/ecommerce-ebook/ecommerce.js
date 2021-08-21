class Ecommerce {
    products
    loggedUsers

    constructor(products) {
        this.products = products
    }

    addProduct(product) {
        this.products.push(product)
    }
}

module.exports = Ecommerce

//teste