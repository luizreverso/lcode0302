const fetch = require("node-fetch");

const process = async () => {
    const postParams = {
        method: "POST",
        body: JSON.stringify({
            "nome": "usuario novo",
            "cpf": "222.222.222-22"
        }),
        headers: { 'Content-Type': 'application/json' }
    }



    const {x, y} = await fetch("http://localhost:6000/numbers")
                    .then(res => res.json())

    

    // fetch("http://localhost:5000/create", postParams)
                    // .then(res => res.json())
                    // .then(res => console.log("resultado do create", res))
                    

    console.log("call list")
    
    const nomePessoa = await fetch("http://localhost:5000/list")
                    .then((res) => {
                        console.log("list terminou!")
                        console.log(res)
                        return res.json();
                        console.log("o codigo nao vai chegar aqui")
                        return { teste: "blablabla" }
                    })
                    .then((data) => {
                        console.log("show", data)
                        return "teste"
                        // return data[0].nome
                    })

                    // .then((res) => res.json())
                    // .then(res => console.log("resultado do list", res))

    console.log("depois da chamada de list")
    console.log("nome", nomePessoa)
}

process()
// async / await

