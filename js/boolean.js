const isThursday = true;
const isNight = true;


// console.log("isThursday", isThursday)

// console.log("test", 2 > 3)
// console.log("test", 2 < 3)
// console.log("test", 2 === 3)
// console.log("test", 2 !== 3)
// console.log("test", 2 <= 3)


// if( (2 == 3) || ( 4 == 4)) {
//     console.log("a codicao acima eh verdadeira")
// } 

// console.log(true && false)
// console.log(true && true) 
// console.log(false && true) 
// console.log(false && false) 
// console.log(true || false) 
// console.log(true || true) 
// console.log(false || true) 
// console.log(false || false) 


// console.log((true && true)) 
// console.log((false || (true && true))) 
// console.log(!true || (false || (true && true))) 
// console.log(!true || (false || !(true && true)) && true) 

// if(2 == 3) {
//     console.log("cheguei aqui nesse ponto de execucao")
// } else if (2 === "2") {
//     console.log("cheguei aqui nessa segunda checagem :)")
// } else if (2 === 2) {
//     console.log("cheguei aqui nessa terceira checagem :)")
// } else {
//     console.log("se nao executou o de cima executa esse :)")
// }

// let cpf = "927.164.800-52"
// let cpf = "927.164.800-52444"
// let cpf = "927.164.800"

// let cpf = "92716480052"
// let cpf = "aaaaaaaaaaa"
let cpf = "000.000.000-00"

if(cpf.indexOf(".") > 0) {
    // console.log("vai entrar aqui se existir ponto")
    cpf = cpf.replace(".", "")
    cpf = cpf.replace(".", "")
    cpf = cpf.replace("-", "")
    // cpf = cpf.replaceAll(".", "")
    // cpf = cpf.replace(/\./g, "")
}

if(cpf.length === 11) {
    console.log("salvando no banco de dados o cpf sem pontuacao", cpf)
} else {
    console.log("cpf com erro")
}
