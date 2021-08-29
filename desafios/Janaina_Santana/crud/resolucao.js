const express = require('express');//pegando o pacote que instalamos e trazendo para o projeto
const app = express() ;            //inicializando o express e ele retorna uma aplicação chamada "app"
const port = 3000   ;     
app.use(express.json());//entenda que o que vier para ele vai tentar traduzir em json e traz o body         

const dogs = [];

//mostrando array (este é um read)
app.get('/', (req, res) => {   //definindo uma rota , neste caso é a rota '/';
    // console.log(req)
    // console.log("Query:",req.query)
    // console.log("Params:",req.params)
    // res.send(req.query)    //função handler, que é um callback rodando dentro do get. Neste caso ele chama uma função que sempre recebe dois parâmetros: req: requisição; resp: cuida do que vai responder
    res.send(dogs)
})

//Adionando name dentro de um array
app.post('/create', (req, res) => {  
    console.log("body",req.body)
    dogs.push(req.body.name)
    console.log(dogs)
    res.send("Adicionado com sucesso")  
})

//Atualizar o nome de um cachorro
app.put('/:index', (req, res) => {  
    const {index}= req.params; //recupera o index com os dados
    const {name} = req.body;
    dogs[index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    res.send(dogs)  
})

//deletar o nome de um dos cachorros (parametro do chachorro)
app.delete('/:index', (req, res) => {  
    const {index}= req.params; //recupera o index com os dados
    dogs.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
    res.send();  
})

// bonus round!!! criar um endpoint de com a intencao de trazer um unico cachorro especificado por algum parametro
app.get('/:index', (req,res) => {
    const {index}= req.params;
    res.send(dogs[index]);
    console.log(dogs[index]);
})

app.listen(port, () => { //vai ouvir uma porta e rodar a aplicação que tiver aqui dentro
  console.log(`Example app listening at http://localhost:${port}`)
})

// REALIZAR ITERAÇÕES COM O USUÁRIO