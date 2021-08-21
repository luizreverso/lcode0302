//DESAFIO
//valide que um algoritmo é um cpf verdadeiro
//não ser enganado por letras e símbolos 
//http://www.macoratti.net/alg_cpf.htm#:~:text=O%20algoritmo%20de%20valida%C3%A7%C3%A3o%20do,%3A%20111.444.777%2D05.


//regexp cpf
// com ponto e traço     /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
// sem ponto e traço     /^\d{11}$/



console.log("Validador de CPF Regexp")

//VARIÁVEIS PARA TESTE
let cpf = "927.164.800-52"                                        //ok
//let cpf = "92716480052"                                           //ok
//let cpf = "585658666" //cpf.length <11                            //ok
//let cpf = "oi 927.164.800-52 tchau" //cpf.length >14              //ok
//let cpf = "oi 92716480052 tchau"  //cpf.length >14 sem números    //ok
//let cpf = "927164500529 tchau"   //cpf.length >11 números concatenados em sequencia     //ok


const regexpCPFcomPonto = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}")
const regexpCPFsemPonto = new RegExp("[0-9]{11}")
const regexpVerificador = new RegExp("[0-9]{12}")
//const regexpCPFcomPonto = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;     //não retorna o valor em uma string maior
//const regexpCPFsemPonto = /^\d{11}$/;                         //não retorna o valor em uma string maior


console.log("cpf.length", cpf.length)


if(cpf.length >= 11){
        var matchCPFarray = cpf.match(regexpCPFcomPonto);   //carrega um array com a string == regexp
        if (matchCPFarray === null){    //verifica se não foi encontrada a string == regexp
            var matchCPFarray = cpf.match(regexpCPFsemPonto);   //carrega um array com a string == regexp
                if (matchCPFarray === null){    //verifica se não foi encontrada a string == regexp
                    console.log("Seu CPF é inválido", cpf)  //caso ambas tentativas retornem null, o cpf é inválido
                } else {
                    var matchVerificador = cpf.match(regexpVerificador)
                    if (matchVerificador === null){
                        cpf = matchCPFarray[0]  //carrega a variável cpf com o valor da posição correspondente ao cpf do array
                        console.log("Muito bem, você digitou seu CPF sem pontuação ", cpf)
                        console.log("Salvando no banco de dados o CPF sem pontuação ", cpf) 
                    } else {
                        console.log("Seu CPF é inválido, contém mais de 11 caractéres ", matchVerificador[0])                        
                    } 
                }
        } else { 
            console.log("Seu CPF contém caracteres não numéricos ", matchCPFarray[0])
            console.log("Não se preocupe o sistema irá corrigir pra você")
            cpf = matchCPFarray[0]      //passar o valor correspondente do array pra string para ser corrigida com replace
            cpf = cpf.replace(/\./g,"") //corrige o .
            cpf = cpf.replace(/\-/g,"") //corrige o -
            console.log("Pronto, o sistema corrigiu seu CPF ", cpf)  
            console.log("Salvando no banco de dados o CPF sem pontuação ", cpf)  
        }
  
    } else {
        console.log("Seu CPF é inválido", cpf)       
        console.log("O CPF deve conter 11 números. Entrei com seu CPF novamente.")       
    }
    
