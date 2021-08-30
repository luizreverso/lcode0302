const express = require("express");
const app = express();


app.get("/getx", (_req, res) => {
    console.log("iniciando a requisicao getX");

    const x = Math.floor(Math.random() * 10);

    res.send({
        x: x !== 7 ? x : undefined,
    })
});

app.get("/gety", (_req, res) => {
  console.log("iniciando a requisicao getY");

  const y = Math.floor(Math.random() * 10);

  res.send({
      y
  })
});


app.listen(9001, () => console.log("servidor iniciado na porta 9001"))