const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

const dogs = [];

app.get('/', (req, res) => {
    res.send(dogs)
})

app.get('/get/:index', (req, res) => {
    const position = req.params.index;
    res.send(dogs[position])
})

app.post('/create', (req, res) => {
    dogs.push(req.body.name)
    res.send(dogs)
})

app.put('/update/:index', (req, res) => {
    const position = req.params.index;
    dogs[position] = req.body.name;
    res.send(dogs)
})

app.delete('/delete/:index', (req, res) => {
    const position = req.params.index;
    dogs.splice(position, 1);
    res.send(dogs)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


// seguindo o padrao CRUD (create, read, update, delete), criar os endpoints restantes
// bonus round!!!: criar um endpoint de com a intencao de trazer um unico cachorro especificado por algum parametro