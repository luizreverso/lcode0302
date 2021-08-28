const fetch = require('node-fetch')

const divide = (num1, num2) => {
  if (num2 !== 0) {
    const result = num1 / num2;
    console.log(result);
    return;
  }
  console.log("Não é possivel fazer um divisão por 0");
};

const numbers = async () => {
  const response = await fetch('http://localhost:6000/numbers');
  const data = response.json();
  return data;
};

const getNumbers = async () => {
  const { x, y } = await numbers();
  if (x !== undefined) {
    divide(x, y);
  } else {
    console.log("Não foi possivel realizar a divisão")
  }
};

getNumbers();
