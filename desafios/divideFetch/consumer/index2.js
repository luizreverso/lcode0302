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
  try {
    const response = await fetch('http://localhost:6000/gety');
    const data = response.json();
    return data;
  } catch (err) {
    return undefined;
  }
}

const getNumbers = async () => {
  const { x } = await numberX();
  const { y } = await numberY()
    // .catch(e => console.log(e.message));
  if (!x || !y) {
    console.log("Não foi possivel realizar a divisão")
    return
  }
  divide(x, y);
}

getNumbers()

