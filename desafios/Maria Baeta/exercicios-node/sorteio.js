const readline = require('readline-sync');

const numeroAleatroio = parseInt(Math.random() * 10);
// console.log(numeroAleatroio)

const numeroSorte = readline.questionInt("Qual seu numero da sorte, (0 -10)")

const sorteio = (numAl, numSort) => {
  if (numAl !== numSort) {
    console.log(`Não foi desse vez!O numero sortiado é ${numAl}`)
  } else {

    console.log(`Eba! Você está com sorte! O numero sortiado é ${numAl}`)
  }
}

sorteio(numeroAleatroio, numeroSorte);