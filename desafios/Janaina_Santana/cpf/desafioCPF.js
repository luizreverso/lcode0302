function validaCPF(cpf) {

    const numerosAntesDoDigito = cpf.substr(0, 9);

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        let multiplicador = 10 - i;
        let numero = parseInt(cpf.charAt(i));
        soma += multiplicador * numero;
    }

    let digito = 0;
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        digito = 0;
    } else {
        digito = resto;
    }

    if (digito !== parseInt(cpf.charAt(9))) {
        console.log("cpf inválido!");
    } else {

        soma = 0;
        for (let i = 0; i < 10; i++) {
            let multiplicador = 11 - i;
            let numero = parseInt(cpf.charAt(i));
            soma += multiplicador * numero;
        }


        digito = 0;
        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            digito = 0;
        } else {
            digito = resto;
        }


        if (digito !== parseInt(cpf.charAt(10))) {
            console.log("cpf inválido!");
        } else {
            console.log("cpf válido!");
        }
    }

}

validaCPF("12314556825");