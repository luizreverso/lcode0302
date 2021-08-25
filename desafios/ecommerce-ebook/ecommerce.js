const User = require("./user")
// import User from "./user"

class Ecommerce {
    registeredUsers = []
    books = []

    createUser(user) {
        const newUser = new User(user);
        this.registeredUsers.push(newUser);
        // this.registeredUsers.push(new User(user))
    }

    // arrow function
    // funcao anonima
    login = (email, password) => {
        const user = this.registeredUsers.find(user => user.email === email && user.password === password)
        return user;
        // return this.registeredUsers.find(user => user.email === email && user.password === password)
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(name) {
        const index = books.indexOf(book => book.name === name);
        if(index >= 0)
            this.books = books.splice(index, 1)
        return this.books;
    }
}

module.exports = Ecommerce

// o codigo le a classe Ecommerce
    // criar a variavel registeredUser
    // criar a funcao createUser
    // criar a funcao anonima login
    

    // C    Create
    // R    Read    
    // U    Update
    // D    Delete