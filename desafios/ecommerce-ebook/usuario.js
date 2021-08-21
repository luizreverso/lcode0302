/*
    USUARIO
        nome
        email
        senha
        itensSelecionados
        historico de compras

        acoes
            escolher um ou mais ebooks para comprar
            retirar um ebook da sua lista de compra/ carrinho
            logar no sistema
            deslogar do sistema
            pagar os itens escolhidos
            editar o proprio cadastro
            ver o historico de suas compras
*/

class Usuario {
    nome = '';
    email = '';
    senha = '';
    itensSelecionados = [];

    constructor(user) {
        this.nome = user.nome;
        this.email = user.email;
        this.senha = user.senha;
        this.itensSelecionados = user.itensSelecionados;
    }

    addEbooks(book){
        this.itensSelecionados.push(book);
    }

    removeEbook(book){
        const index = this.itensSelecionados.indexOf(book);

        this.itensSelecionados.splice(index, 1);
    }

    finalizarCompra(){
        total = 0

        for (item in this.itensSelecionados){
            item.valor
        }
    }
}

module.exports = Usuario;