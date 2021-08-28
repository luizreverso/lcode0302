// resolução do exercicio para calcular a divisão

const fetch = require("node-fetch");

const process = async () => {

  const response = await fetch("http://localhost:6000/numbers")
    .then(res => res.json())
  try{ //tratando se x for undefined
      if(response.x == undefined ) throw "X é undefined"
      if(response.y === 0) throw "impossível dividir por zero 0"
      console.log(response.x / response.y)

  }
  catch(err){
    console.log(err)
  }
}

process()


// pode ser usado também ->>>> if(!response.x)



