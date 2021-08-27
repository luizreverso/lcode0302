const fetch = require("node-fetch");


const postParams = {
    method: "POST",
    body: JSON.stringify({
        "nome": "usuario novo",
        "cpf": "222.222.222-22"
    }),
    headers: { 'Content-Type': 'application/json' }
}

fetch("http://localhost:5000/create", postParams)
                .then(res => res.json())
                .then(res => console.log("resultado do create", res))
                


fetch("http://localhost:5000/list")
                .then((res) => res.json())
                .then(res => console.log("resultado do list", res))


// async / await

