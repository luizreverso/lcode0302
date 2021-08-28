const fetch = require('node-fetch')

const divide = (num1, num2) => {
  if (num2 !== 0) {
    const result = num1 / num2;
    console.log(result);
    return;
  }
  console.log("Não é possivel fazer um divisão por 0");
};

const numberX = async () => {
  const response = await fetch('http://localhost:6000/getx');
  const data = response.json();
  return data;
};

const numberY = async () => {
  const response = await fetch('http://localhost:6000/gety');
  const data = response.json();
  return data;
};


const getNumbers = async () => {
  const { x } = await numberX();
  const { y } = await numberY();
  if (x !== undefined) {
    divide(x, y);
  } else {
    console.log("Não foi possivel realizar a divisão")
  }
 }

getNumbers()

