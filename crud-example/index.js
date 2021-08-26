const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

const dogs = []

app.get('/', (req, res) => {
  // console.log(req)
  // console.log("query", req.query)
  // console.log("params", req.params)
  // console.log("body", req.body)
  res.send(dogs)
})

app.post('/create', (req, res) => {
  console.log('body', req.body)
  let name = req.body.name

  if (dogs.indexOf(name) == -1) {
    dogs.push(name)
    res.send('Adicionado com sucesso')
  } else {
    res.send('Não foi possível adicionar')
  }
})

app.put('/substituir/:nomeAntigo', (req, res) => {
  let nomeAntigo = req.params.nomeAntigo
  let nomeNovo = req.body.name
  for (let i = 0; i < dogs.length; i++) {
    if (nomeAntigo == dogs[i]) {
      dogs[i] = nomeNovo
    }
  }
  res.send('Alterado com sucesso')
})

app.delete('/deletaDog/:nomeDelete', (req, res) => {
  let nomeDelete = req.params.nomeDelete
  let index = dogs.indexOf(nomeDelete) //encontrando o index
  dogs.splice(index)
  res.send(`${nomeDelete} deletado com sucesso`)
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
