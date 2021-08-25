class User {
    constructor(user) {
        this.create(user)
    }

    create(user) {
        const testeUser = {
            ...user,
            blablabla: "teste"
        }

        // {
        //     name: "",
        //     email: "",
        //     password: ""
        // }
        // console.log("user que chega aqui no construct", user)
        // console.log("user que chega aqui no construct", testeUser)


        const { name: userName = "", password } = user;
        // const name = user.name;
        // const email = user.email;
        // const userName = user.name || ""

        this.name = userName;
        // email com if
            // this.email;
            // if(user.email) {
            //     this.email = user.email
            // } else {
            //     this.email = ""
            // }
        // email com ternario <condicao> ? return true : return false
            // this.email = user.email ? user.email : "";
            // this.email = user.email ? `email:${user.email}` : "";
        // email com shorthand ternario que pode ser utilizado quando a condicao for === o return de verdadeiro
        this.email = user.email || "";
        this.password = password

        return this;
    }

    // assim a gente consegue garantir que nenhuma variavel nao esperada entre em nossa funcao
    // constructor({name: userName = "", email,  password}) {
    //     this.name = userName;
    //     this.email = email || "";
    //     this.password = password
    // }


    // create(user) {
    //     console.log(user);

    //     const formattedUser = formatUser(user);

    //     console.log("por algum motivo eu preciso utilizar o user do parametro", user)

    //     const createdUser = saveUser(formattedUser);

    //     console.log("mostrar id")

    // }
}

module.exports = User;