const fetch = require('node-fetch');

// ---------------------- Lendo o arquivo de User
// fetch('http://localhost:5000/list')
//   .then(res => res.json())
//   .then(data => console.log(data))

const getAPI = async () => {
  const response = await fetch('http://localhost:5000/list');
  if (!response.ok) {
    const message = `Erro: ${response.status}`
    throw new Error(message)
  }
  const data = await response.json()
  console.log(data)
  return data
}
// Para exibir o console.log do meu array de Users
getAPI()
 .catch(err => err.message)

// ---------------------- Criado um User

const postParams = {
  method: 'POST',
  body: JSON.stringify({
    "nome": "Teste consumer api 10",
    "cpf": "000.000.000-01"
  }),
  headers: { 'Content-Type': 'application/json' }
}

const postAPI = async () => {
  const response = await fetch('http://localhost:5000/create', postParams);
  if (!response.ok) {
    const message = `Erro: ${response.status}`
    throw new Error(message)
  }
  const data = response.json()
  return data
}
postAPI()
  .then(res => console.log(res))
  .catch(err => err.message)


// fetch('http://localhost:5000/create', postParams)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

