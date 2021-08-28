const divide = (num1, num2) => {
  if (num2 !== 0) {
    const result = num1 / num2
    return result
  }
  return "Não é possivel fazer um divisão por 0"
}

console.log(divide(4,0))