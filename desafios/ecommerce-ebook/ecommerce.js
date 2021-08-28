const User = require("./user")
<<<<<<< HEAD
=======
// import User from "./user"
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e

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

<<<<<<< HEAD


class Ecommerce{


    createUser(user){
        const newUser = NewUser(user)
        console.log(user)
    }
}

module.exports = Ecommerce
=======
module.exports = Ecommerce

// o codigo le a classe Ecommerce
    // criar a variavel registeredUser
    // criar a funcao createUser
    // criar a funcao anonima login
    

    // C    Create
    // R    Read    
    // U    Update
    // D    Delete
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e
