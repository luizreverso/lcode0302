const fetch = require('node-fetch')
const axios = require('axios')

chamaApi = () => {
  fetch('http://localhost:6000/numbers')
    .then(res => res.json())
    .then(resFim => {
      let x = resFim.x
      let y = resFim.y
      if (x != null) {
        let divide = x / y
        console.log(`o resultado da divisão da função 1 é ${divide}`)
      } else {
        console.log('O x não está definido')
      }
    })
    .catch(err => {
      console.log(err)
    })
}

numbers = async () => {
  const x = await chamaApiX()
  const y = await chamaApiY()
  if (isValid(x, y) == true) {
    let response = x / y
    console.log(`O resultado da função 2 é ${response}`)
    return response
  }
}

chamaApiX = async () => {
  try {
    const response = await axios.get('http://localhost:6000/getx')
    var respX = response.data.x
    return respX
  } catch (err) {
    console.log(err)
  }
}

chamaApiY = async () => {
  try {
    const response = await axios.get('http://localhost:6000/gety')
    var respY = response.data.y
    return respY
  } catch (err) {
    console.log(err)
  }
}

isValid = (x, y) => {
  if (x != null && x !== 0) {
    if (y != null && y !== 0) {
      return true
    }
  }
  return false
}

chamaApi()
numbers()
