// async await fetch

const fetch = require("node-fetch")

const divisor = async () => {
    const valorX = await fetch("http://localhost:6000/getx")
        .then((res) => {
            return res.json()
        })
        .then((resultadoX) => {
            if (resultadoX.x != undefined) {
                return resultadoX.x
            }
            throw new Error("Não foi possível recuperar o valor de x.")
        })

    const valorY = await fetch("http://localhost:6000/gety")
        .then((res) => {
            return res.json().catch(() => {
                throw new Error("Não foi possível recuperar o valor de y.")
            })
        })
        .then((resultadoY) => {
            return resultadoY.y
        })

    if (valorX != undefined && valorY != 0) {
        console.log(`x = ${valorX} e y = ${valorY}`);
        console.log(`O resultado da divisão é ${(valorX / valorY).toFixed(2)}`);
    } else {
        throw new Error("Não foi possível executar a divisão.")
    }
}

divisor().catch((error) => {
    console.log(error.message)
})

