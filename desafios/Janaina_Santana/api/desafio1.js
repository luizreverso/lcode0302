// async await fetch

const fetch = require("node-fetch")

const divisor = async () => {
    const resultadoDivisao = await fetch("http://localhost:6000/numbers")
        .then((res) => {
            return res.json()
        })
        .then((retornoDaApi) => {

            if (retornoDaApi.x != undefined && retornoDaApi.y != 0) {
                console.log(`x = ${retornoDaApi.x} e y = ${retornoDaApi.y}`);
                return retornoDaApi.x / retornoDaApi.y
            }
            throw new Error(`Valores inválidos para fazer a divisão. ${retornoDaApi.x}, ${retornoDaApi.y}`)
        })
    console.log(`O resultado da divisão é ${resultadoDivisao.toFixed(2)}`);
}

divisor().catch((error) => {
    console.log(error.message)
})