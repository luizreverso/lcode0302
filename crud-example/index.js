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
    console.log(dogs)
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


//crUd - update
app.put('/update', (req, res) => {
    console.log(req.body)
    dogs.splice(dogs.indexOf(req.body.name), 1, req.body.nomeAtual); 
    console.log("dogs update", dogs)
    return res.send(dogs)
      //testar no postman
      //http://localhost:8000/update?
      //abaixo disso no postman: ir em Body e definir raw > JSON
      //enviar o { "nome": "nome do cachorro", "nomeAtual": "novo nome"}
    })
  
  
  //cruD - delete
  app.delete('/delete', (req, res) => {
    dogs.splice(dogs.indexOf(req.body.name), 1); 
    console.log("dogs delete", dogs)
    return res.send(dogs)
    //testar no postman
    //http://localhost:8000/delete?
    //abaixo disso no postman: ir em Body e definir raw > JSON
    //enviar o { "nome": "nome do cachorro" }
  })

// app.get("/teste", (req, res) => {
//     console.log("ola eu estou no servidor! :)");

//     res.send("Hello from teste")w
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})