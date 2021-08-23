function validaCPF(cpf) {

  //filtra os caracteres retirando pontos e traços.
  let filtro = cpf.replace(/\.|-/g,"");
  //valida se o cpf tem o tamanho diferente de 11. 
  if (filtro.length != 11) {

    return false;

  } else {
    //pega os 9 primeiros dígitos.
    var numeros = filtro.substring(0, 9);
    //pega os ultimos dígitos.
    var digitos = filtro.substring(9);
    //soma dos dígitos inicializado em 0.
    var soma = 0;
    //iteração decremental dos 9 primeiros dígitos
    for (var i = 10; i > 1; i--) {
      //soma dos 9 primeiros caracteres
      soma += numeros.charAt(10 - i) * i;
    }
    //o resto da divisão por 11 deve ser menor do que 2 resultando em 0,
    //senão divide novamente por 11 e diminui por 11.
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // validacao do primeiro digito
    if (resultado != digitos.charAt(0)) {

      return false;
    }
    // repete o processo para validar o segundo dígito.
    soma = 0;
    numeros = filtro.substring(0, 10);

    for (var k = 11; k > 1; k--) {

      soma += numeros.charAt(11 - k) * k;

    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // validacao do segundo digito
    if (resultado != digitos.charAt(1)) {

      return false;

    }
    // cpf valido
    return true;

  }
}
// chamada da função
console.log(validaCPF("057.380.107-01"));
console.log(validaCPF("057"));
console.log(validaCPF("05738010701"));