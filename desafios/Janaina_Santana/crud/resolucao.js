const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const dogs = [];

app.get('/', (req, res) => {
    res.send(dogs)
})

app.post('/create', (req, res) => {
    console.log("body", req.body)
    dogs.push(req.body.name)
    console.log(dogs)
    res.send("Adicionado com sucesso")
})

app.put('/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    dogs[index] = name;
    res.send(dogs)
})

app.delete('/:index', (req, res) => {
    const { index } = req.params;
    dogs.splice(index, 1);
    res.send();
})

// bonus round!!! criar um endpoint de com a intencao de trazer um unico cachorro especificado por algum parametro
app.get('/:index', (req, res) => {
    const { index } = req.params;
    res.send(dogs[index]);
    console.log(dogs[index]);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

