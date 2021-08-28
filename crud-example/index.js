<<<<<<< HEAD

const express = require('express')
const app = express()
const port = 3000
=======
const express = require('express')
const app = express()
const port = 8000
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e

app.use(express.json())

const dogs = [];

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send(dogs)

    
    res.send("Busca efetuada com sucesso")
 
})

app.post('/',(req, res) => {
=======
    // console.log(req)
    // console.log("query", req.query)
    // console.log("params", req.params)
    // console.log("body", req.body)
    console.log(dogs)
    res.send(dogs)
})

app.post('/create', (req, res) => {
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e

    console.log("body", req.body)
    dogs.push(req.body.name)

    console.log(dogs)

<<<<<<< HEAD
    res.send("adicionado com sucesso")
})

app.delete('/', (req, res) =>{
    const {index} = req.params
    dogs.splice(index, 1);
    console.log(dogs)
    res.send("excluido com sucesso" )
    // etc...
});


/*testar ainda o update */
app.put('/', (req, res) =>{
    const {index} = req.params
    const {name} = req.body
    dogs[index] = name
    res.send(dogs)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
=======
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
>>>>>>> f93726a072b2b436d5f694ea71aa1049cc5a857e
