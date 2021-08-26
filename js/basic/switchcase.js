// const type = "cpf"
// const type = "cnpj"
const type = "rg"

const RG = "rg"
const CPF = "cpf"
const CNPJ = "cnpj"

// switch(type) {
//     // type === "cpf"
//     case CPF:
//         console.log("oi eu sou uma pessoa fisica e tenho cpf")
//     case RG:
//         console.log("oi eu sou uma pessoa e tenho rg")
//         break;
//     // type === "cnpj"
//     case CNPJ:
//         console.log("oi eu sou uma empresa muito bacana")
//         break;
//     default:
//         console.log("provavelmente eu nao sou alguem do seu pais")
// }

console.log("continuando a vida")

if(type === CPF || type === RG) {
    
    console.log("oi eu tambem testo se sou uma pessoa fisica e tenho rg")

    if(type === CPF) {
        console.log("oi eu tenho cpf")
    }
} else if (type === CNPJ) {
    console.log("oi eu tambem sou uma empresa muito bacana")
} else {
    console.log("provavelmente eu nao sou alguem do seu pais")
}