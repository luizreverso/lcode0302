const { questionInt } = require('readline-sync')

const peso = questionInt("Qual o seu peso?");
const altura = questionInt("Qual sua altura em cm?")

const imc = (p, a) => {
  const aM = a / 100
  const result = p / (Math.pow(aM, 2))
  return result.toFixed(2);
}

// console.log(`Dado as seguintes informações: peso: ${peso} e altura ${altura} em cm. O IMC calculado é de: ${imc(peso, altura)}`)

const IMC = imc(peso, altura)
// console.log(IMC);


if (IMC < 18.5) {
  console.log("Situação: Abaixo do peso (magreza)");
} else if (IMC >= 18.5 && IMC < 25) {
  console.log('Situação: Peso normal')
} else if (IMC >= 25 && IMC < 25) {
  console.log('Situação: Acima do peso (sobrepeso)')
} else if (IMC >= 30 && IMC < 35) {
  console.log('Situação: Obesidade grau I');
} else if (IMC >= 35 && IMC < 40) {
  console.log('Situação: Obesidade grau II');
} else {
  console.log('Situação: Obesidade graus III e IV');
}



