const express = require("express");
const app = express();

app.get("/numbers", (_req, res) => {
    console.log("iniciando a requisicao");

    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    res.send({
        x: x !== 7 ? x : undefined,
        y
    })
})

app.get("/getx", (_req, res) => {
    const x = Math.floor(Math.random() * 10)

    res.send({ x: x !== 7 ? x : undefined })
})

app.get("/gety", (_req, res) => {
    const y = Math.floor(Math.random() * 10)

    if (y === 4) throw "error because y === 4 :)"

    res.send({ y })
})



app.listen(6000, () => console.log("servidor iniciado na porta 6000"))