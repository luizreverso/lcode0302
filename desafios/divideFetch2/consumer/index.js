const fetch = require("node-fetch");

const urlX = 'http://localhost:6000/getx'
const urlY = 'http://localhost:6000/gety'

const process = async () =>{ 
    // Tem que ser assincrono 
    //pois eu estou esperando o resultado de duas apis diferentes
    //entao para nao ocorrer o caso de uma ser mais rapido que a outra
    //eu falo que elas sao assincronas, ou seja, elas executam em final
    
    const x = await fetch(urlX)
    .then(res => res.json())
    .then(res => {return res.x})

    const y = await fetch(urlY)
        .then(res => res.json())
        .then(res => res.y)

    console.log("X:",x)
    console.log("Y:",y)

    try{
        if(x === undefined){
            //O valor de X ou Y não é definido
            throw "O valor de X não é definido" //vai printar essa mensagem como erro no catch
            //Se entrar aqui o throw envia como um erro 
            //e cai direto para o catch
        }
        else if(y === undefined){
            throw 'O valor de Y não é definido'
        }
        else{
            const resultado = x/y;
            console.log('X/Y = ', resultado)
        }
    }
    catch(erro){
        console.log('Erro:', erro)
    }
}

process()