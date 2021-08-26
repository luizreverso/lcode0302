
// let index = 0;

// index = index + 1
// ++index

// console.log(index)// 0
// console.log(++index) // 1
// console.log(index++) // 2 errado, e certo é 1
// console.log(index) // 2

// for(<declaracao de indice>; <condicao de loop>; <pos-processamento>) {
// for (let index = 0; index <= 100; index++) {
//     console.log(`teste ${index}`)
// }

// let index = 9;
// // do {
// //     // escopo
// //     console.log("pra sempre", index)
// //     index++
// // } while(index < 10)

// while (index > 0) {
//     // escopo
//     console.log("while", index)
//     index--
// }

const caes = [
    "Amora",
    "Whiskey",
    "Ipa",
    "Pitu",
    "Totó",
    "Nina",
    "Laika"
]

console.log(caes.length)
// for(let index = 0; index < caes.length; index++) {
//     console.log(index)
//     console.log(`Ola amigo ${caes[index]}, voce ganhou um osso gigante :)`)
// }

// for(let cao of caes) {
//     console.log(`Ola amigo ${cao}, voce ganhou um osso gigante :)`)
// }

for(let cao in caes){
    console.log("in", cao)
}

console.log("fim do codigo")