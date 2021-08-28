// let 
// const pessoa = {
//   nome: 'XHADJIOOCOSOA', 
//   idade: 12
// }
//  Array []
// console.log(pessoa)
// pessoa.nome = 'Maria'
// console.log(pessoa)
// var 
function sum(num1, num2) {
  let result;
  result = num1 + num2
  return result
}

function sub(num1, num2) {
  let result;
  result = num1 - num2
  return result
}

function mut(num1, num2) {
  let result;
  result = num1 * num2
  return result
}

const div = (num1, num2) => {
  let result;
  result = num1 / num2
  return result
}

const calculator = (op, num1, num2) => {
 let result =  op(num1, num2)
 return result
}

console.log(calculator(div, 10,2))