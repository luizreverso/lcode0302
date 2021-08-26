const readline = require('readline-sync')

const distancia = readline.questionInt("Qual a distancia em m?");
const tempo = readline.questionInt("Qual o tempo gasto em s?");

const velocidadeMedia = (d, t) => {
  const result = d / t;
  return result.toFixed(2);
}

console.log(`A velocidade média é ${velocidadeMedia(distancia, tempo)}`);

