
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const dogs = [];

app.get('/', (req, res) => {
    res.send(dogs)

    
    res.send("Busca efetuada com sucesso")
 
})

app.post('/',(req, res) => {

    console.log("body", req.body)
    dogs.push(req.body.name)

    console.log(dogs)

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
