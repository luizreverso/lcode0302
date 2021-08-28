const fetch = require("node-fetch");

const url = 'http://localhost:6000/numbers'


const process = async () => {
    const resultado = await fetch(url)
    .then(res => res.json())
    
    const x = resultado.x;
    const y = resultado.y;

    console.log("X:", x)
    console.log("Y:", y)

    try{
        if(x == undefined){
            //Se os valores de X ou de Y não forem definidos
            throw "O valor de X não é definido" //vai printar essa mensagem de erro no catch
            //O throw define como erro e chama o catch
        }
        else if(y == undefined){
            throw 'O valor de Y não é definido'
        }
        else{
            const resposta = x/y;
            console.log("X/Y = ", resposta)
        }
    }
    catch(erro){
        console.log('Erro:', erro)
    }
}

process()