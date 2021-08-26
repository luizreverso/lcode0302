//const app = require("express")(); opção que faz o mesmo que as 2 linhas abaixo
const express = require("express");

const routes = require("./src/routes")

const app = express()

routes(app)

app.listen(5000, () => console.log("server started"))

