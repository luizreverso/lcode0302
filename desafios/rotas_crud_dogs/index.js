
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())//para parcear o que ele recebe como post
//Para conseguir usar o método Post()

const dogs = [];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const handler = (req, res) =>{
    console.log("Olá eu estou dentro do servidor")

    res.send('Hello from teste')
}
app.get('/teste0', handler)


//Rota é um endpoint de uma API
app.get('/teste', (req, res) =>{
    console.log("Estou dentro do servidor o/")

    res.send('Hello from teste')
})

app.get('/teste2', (req, res) =>{
    console.log(req)
    console.log("Query: ", req.query) // tudo que verm na url depois de ?
    // http://localhost:3000/formulario?name=Router4
    console.log("Params: ", req.params)
    
    res.send(req.query)
})

app.get('/formulario', (req, res) =>{
    console.log(req)
    console.log("Query: ", req.query) 
    console.log("Params: ", req.params)
    console.log("Body: ", req.body)
    res.send(req.query)
})

// CREATE
app.post('/adicionarDog', (req, res) =>{
    console.log("Body: ", req.body)
    dogs.push(req.body.nome)

    console.log(dogs)

    res.send("Adicionado com suceso")
})
//Para criar no Postman:
//Mude par post, acessando body e coloca em row
//Depois muda a saida para json
//{'name':"Totó"}

// READ
app.get('/listarDog', (req, res) =>{
    res.send(dogs)
})

// UPDATE
app.post('/atualizarDog', (req, res) =>{
    const indexDog = dogs.indexOf(req.body.nomeAntigo)
    dogs[indexDog] = req.body.nomeNovo

    res.send("O nome do dog foi atualizado")
})

// DELETE
app.post('/deletarDog', (req, res) =>{
    const indexDog = dogs.indexOf(req.body.nome)
    dogs.splice(indexDog, 1) 

    res.send("O nome do dog foi deletado")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
