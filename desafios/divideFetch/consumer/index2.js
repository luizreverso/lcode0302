const fetch = require("node-fetch");

const process = async () => {

    const responseX = await fetch("http://localhost:6000/getx")
        .then(res => res.json())

    const responseY = await fetch("http://localhost:6000/gety")
        .then(res => {

            if (res.status === 500) throw "Y não existe"
            return res.json()


        }).catch((err) => {
            console.log("Erro", err)
            return {}
        })

    console.log(responseX.x)
    console.log(responseY.y)

    try { //tratando se x for undefined
        if (responseX.x == undefined) throw "X é undefined"

        //tratando se y for undefined
        if (responseY.y == undefined) throw "Y é undefined"
        if (responseY.y === 0) throw "impossível dividir por zero 0"

        // divisao
        console.log(responseX.x / responseY.y)
    }

    catch (err) {
        console.log(err)
    }
}

process()