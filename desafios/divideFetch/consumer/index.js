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
  divide(x, y);
};

getNumbers();
