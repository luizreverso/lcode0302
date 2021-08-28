// escrever um programa que consome a api, recebe os valores e calcula x/y e retorna o resultado :)
// GET http://localhost:6000/numbers

const fetch = require("node-fetch");

function dividir(x, y) {
    // Um throw sempre vai cair no catch
    if(x == undefined){
        throw "X é undefined."
    }else if (y === 0){
        throw "Impossível dividir por zero!"
    }
    else{
        res = x / y
        return res
    }
}

const divisao = async () => {
    // console.log("DIVISÃO DE X E Y DE UMA ÚNICA API")
    const { x, y } = await fetch("http://localhost:6000/numbers")
        .then((res) => {
                if( res.status === 500){
                    throw "Y não existe!"
                }
                return res.json()
        }).catch((err) => {
            console.log("Error: ", error)
            return {}
        })

    console.log("DIVISÃO DE X E Y DE UMA ÚNICA API")
    console.log("Valor de X: ", x)
    console.log("Valor de Y: ", y)
    try {
        if( y.status === 500){
            throw "Y não existe!"
        }
        resultado = dividir(x, y)
        console.log("O resultado da divisão é: ", resultado)
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        console.log("Operação concluída!")
        console.log("------------------------------------------------------------------------------------------------------------------------------------")
    } 
}

//escrever o mesmo programa, porem x e y vem de duas apis distintas.
//GET http://localhost:6000/getx GET http://localhost:6000/gety

const getNumbers = async () => {
    // console.log("DIVISÃO DE X E Y API DISTINTAS")
    const{x} =  await fetch("http://localhost:6000/getx")
        .then((res) => {
            return res.json()
        })
    const{y} =  await fetch("http://localhost:6000/gety")
        .then((res) => {
            if( res.status === 500){
                throw "Y não existe!"
            }
            return res.json()
        }).catch((err) => {
            console.log("Error: ", error)
            return {}
        })
    console.log("DIVISÃO DE X E Y API DISTINTAS")
    console.log("Valor de X: ", x)
    console.log("Valor de Y: ", y)
    try {
        resultado = dividir(x, y)
        console.log("O resultado da divisão é: ", resultado)
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        console.log("Operação concluída!")
        console.log("------------------------------------------------------------------------------------------------------------------------------------")
    } 
} 


divisao()
getNumbers()
