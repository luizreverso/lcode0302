console.log("Iniciando o Js");

// Validação do primeiro digito 
const validationDigit1 = (cpf) => {
  let number = cpf.substring(0,9)
  let digit = cpf.substring(9)
  let resultSum = 0;
  for(let index = 10; index > 1; index -=1 ) {
    resultSum += number.charAt(10 - index) * index;
  }
  let result = (resultSum % 11) < 2 ? 0 : 11 - (resultSum % 11);
  if(result != digit.charAt(0)) return false;
}

// Validação do segundo digito
const validationDigit2 = (cpf) => {
  let number = cpf.substring(0,10)
  let digit = cpf.substring(9)
  let resultSum = 0;
  for(let index = 11; index > 1; index -=1 ) {
    resultSum += number.charAt(11 - index) * index;
  }
  let result = (resultSum % 11) < 2 ? 0 : 11 - (resultSum % 11);
  if(result != digit.charAt(1)) return false;
 }


const validation = () => {
  let cpf = document.querySelector('input').value;
  let alertSucess = document.getElementById('success')
  let alertErr = document.getElementById('error')
  const condition1 = validationDigit1(cpf);
  const condition2 = validationDigit2(cpf);
  if(cpf.length !== 0 && condition1 !== false && condition2 !== false) {
    alertSucess.style.display = 'block'
    alertErr.style.display = 'none'
  } else {
   alertErr.style.display = 'block'
   alertSucess.style.display = 'none'
  }
}



// Função responsavel por gerenciar os eventos 
const eventManager = () => {
  const button = document.querySelector('.btn');
  button.addEventListener('click', validation)
}

window.onload = start = () => {
  eventManager()
};