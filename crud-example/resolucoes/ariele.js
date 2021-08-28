const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const dogs = [];

app.get("/", (req, res) => {
  res.send(dogs);
});

app.get("/dogs/:id", (req, res) => {
  const { id } = req.params;

  res.send(dogs[id]);
});

app.post("/dogs", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.end("Informe um nome");
  }
  dogs.push(name);

  console.log(dogs);

  res.send("Adicionado com sucesso");
});

app.put("/dogs/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  dogs[id] = name;

  res.send(dogs[id]);
});

app.delete("/dogs/:id", (req, res) => {
  const { id } = req.params;

  dogs.splice(id, 1);

  res.send(dogs);
});

// seguindo o padrao CRUD (create, read, update, delete), criar os endpoints restantes
// bonus round!!!: criar um endpoint de com a intencao de trazer um unico cachorro especificado por algum parametro

// app.get("/teste", (req, res) => {
//     console.log("ola eu estou no servidor! :)");

//     res.send("Hello from teste")w
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
