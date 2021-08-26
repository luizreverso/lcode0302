class User {

    constructor(user){


        const {name: userName ="", email} =user
        //const name = user.name || ""
        //const {name = "Teste", email} = user // aqui é a garantia que esse campo não vai estar vazio através do preenchimento teste
        /*const name = user.name
        const email = user.email*/
        //const userName = user.name poderia ser criada para
    


        this.name = userName;



        //criando um teste de checagem para verificacao de email
        /*this.email = user.email;
        if(user.email){
            this.email = user.email
            }else{
                this.email =""
            }*/
        // email com ternario <condicao> ?  return true : return false
        
        //this.email = user.email ? user.email : "";
        //this.email = user.email ? `email:${user.email}` : "";
        //email com shorthand ternario que pode ser utilizado quando a condicao for === o return de verdadeiro        
        this.email = user.email || "";
        this.password = user.password;
    }
   /* constructor({name: userName, password}){ // exemplo de criação de construtor limpo
        CONSEGUINDO GARANTIR QUE NENHUMA VARIAVEL NAO ESPERADA ENTRE EM NOSSA FUNCAO
        this.name = userName 
        this.email = email || ""
        this.password = password

    }*/
}

module.exports = User;

//export default User - para testar algo que já foi criado lá atrás