class CarrinhoDeCompra {
    itens = []
    valorTotalDaCompra = 0

    adicionarItem (item, valor) {
        this.itens.push(item)
        this.valorTotalDaCompra = this.valorTotalDaCompra + valor
    }


    removerItem (item, valor) {
        // let index;

        // for(index = 0; index < this.itens.length; index++) {
        //     console.log(this.itens[index])
        //     if(this.itens[index] === item) {
        //         console.log("achei o item passado, ele esta no indice", index)
        //         break;
        //     }
        // }

        // let novoItens = [];

        // for(let index = 0; index < this.itens.length; index++) {
        //     if(this.itens[index] !== item) {
        //         novoItens.push(this.itens[index]);
        //     }
        // }
        
        // this.itens = novoItens

        const index = this.itens.indexOf(item)
        // console.log("indice do item, seja ele qual for", index)
        this.itens.splice(index, 1)
        this.valorTotalDaCompra = this.valorTotalDaCompra - valor;
        // this.valorTotalDaCompra -= valor;
    }

    darDesconto () {
        console.log("adicionando desconto")
    }
}

class Supermercado {
    pessoasDentro = []

    abrirPortaPara(pessoa) {
        this.pessoasDentro.push(pessoa)
    }
}

const carrinhoDaLuiza = new CarrinhoDeCompra()

carrinhoDaLuiza.adicionarItem("caixa de leite", 5)
carrinhoDaLuiza.adicionarItem("queijo", 10)
carrinhoDaLuiza.adicionarItem("bolacha de chocolate", 2)
carrinhoDaLuiza.adicionarItem("achocolatado", 3.5)


console.log(carrinhoDaLuiza.itens)
console.log(carrinhoDaLuiza.valorTotalDaCompra)

carrinhoDaLuiza.removerItem("bolacha de chocolate", 6)


console.log(carrinhoDaLuiza.itens)
console.log(carrinhoDaLuiza.valorTotalDaCompra)

const carrinhoDoJao = new CarrinhoDeCompra();

carrinhoDoJao.adicionarItem("desinfetante", 3)

console.log("carrinho do jao", carrinhoDoJao.itens)
console.log("carrinho do jao", carrinhoDoJao.valorTotalDaCompra)