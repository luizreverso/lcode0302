const fetch = require("node-fetch");

const request = (url) => {
  return fetch(url).then(res=>{
    if (res.status === 200) return res.json();
  })
}


const process = async () => {
  try{
    const {x} = await request('http://localhost:9001/getx')
    const {y} = await request('http://localhost:9001/gety')
    if(x === undefined || !y) throw `os valores não são compatíveis: x = ${x}`
    console.log(`resultado da divisão ${x} / ${y} = ${x / y}`)
  }catch(err) {
    console.log("erro",err)
  }

}
process()