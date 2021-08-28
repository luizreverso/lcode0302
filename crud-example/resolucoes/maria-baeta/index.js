import express from 'express'
const app = express();
app.use(express.json())

// CRUD
// - Create 
// - Read 
// - Update
// - Delete

const port = 3000
const dogs = []

// mosta o array = Read
app.get("/", (req, res) => {
  res.send(dogs)
})

// Adiona informações ao array - Create

app.post("/create", (req, res) => {
  console.log(req.body.name)
  dogs.push(req.body.name)
  console.log(dogs)
  res.send("Adicionado com sucesso")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
