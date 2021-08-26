const User = require("./user")

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



class Ecommerce{


    createUser(user){
        const newUser = NewUser(user)
        console.log(user)
    }
}

module.exports = Ecommerce