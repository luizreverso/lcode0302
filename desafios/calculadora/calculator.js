//Aula Luiz Fernando da Silva 18/08/21

//Pegar esse código e fazer uma função calculadora
//colocar o máximo de funções que você conseguir
//commitar a calculadora pro Luiz 

function soma(n1,n2){
    return n1 + n2 
}

function subtracao(n1,n2){
    return n1 - n2 
}

function multiplicacao(n1,n2){
    return n1 * n2
}

function divisao(n1,n2){
    return n1 / n2
}



const calculadora = function(operacao,x,y){
    return operacao(x,y)
}



let result = calculadora(soma,8,10)
console.log("resultado soma             " + result)

result = calculadora(subtracao,8,10)
console.log("resultado subtração        " + result)

result = calculadora(multiplicacao,8,10)
console.log("resultado multiplicação    " + result)

result = calculadora(divisao,8,10)
console.log("resultado divisão          " + result)