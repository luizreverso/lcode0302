const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

const dogs = [];

app.get('/', (req, res) => {
    // console.log(req)
    // console.log("query", req.query)
    // console.log("params", req.params)
    // console.log("body", req.body)
    res.send(dogs)
})

app.post('/create', (req, res) => {

    console.log("body", req.body)
    dogs.push(req.body.name)

    console.log(dogs)

    res.send("Adicionado com sucesso")
})

// seguindo o padrao CRUD (create, read, update, delete), criar os endpoints restantes
// bonus round!!!: criar um endpoint de com a intencao de trazer um unico cachorro especificado por algum parametro

// app.get("/teste", (req, res) => {
//     console.log("ola eu estou no servidor! :)");

//     res.send("Hello from teste")w
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
