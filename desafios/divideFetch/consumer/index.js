const fetch = require("node-fetch")

const request = (url) => {
    return fetch(url).then(res => {
        if (res.status === 200) return res.json()
        return {}
    })
}

const process = async () => {
    try {
        const { x } = await request("http://localhost:6000/getx")
        const { y } = await request("http://localhost:6000/gety")
        if (x === undefined || !y) throw `os valores nao sao compativeis: x = ${x} e y = ${y}`
        console.log(`resultado da divisao ${x}/${y} = ${x / y}`)
    } catch (err) {
        console.log("ERROR", err)
    }
}

process();
