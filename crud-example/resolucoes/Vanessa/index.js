const express = require('express') // importa o express
const app = express() // cria uma variável chamada app que chama a função express
const port = 3000 // cria uma variável port definindo a porta com número 3000
app.use(express.json()); // habilita o express para leitura de arquivos json
// app.use(express.urlencoded({ extended: true })); // não sei pra que serve exatamente. 

// método GET
app.get("/", (req, res) => {
  res.send("try /characters. bonus: /kiddo"); // responde com uma mensagem quando a solicitação GET foi feita na página inicial
});

// método GET com caminho de rota /kiddo
app.get('/kiddo', (req, res) => {
  res.send('If somehow the Lord gave me a second chance at that moment, I would do it all over again.')
}) 

app.get('/characters', (req, res) => {
  const characters = {
    name: "ellie",
    actress: "ashley johnson",
  };
  return res.json(characters); // envia uma resposta em json
})

app.listen(port); // faz com que o servidor seja executado na porta 3000