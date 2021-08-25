const login = (callMessage) => {
    console.log("tentando logar");
    let index = 0;
    while (index < 1000000) {
        index++
        console.log(index)
    } 

    callMessage(index);
}

const loginResponseMessage = (index) => {
    console.log("aqui eu vou mostrar a mensagem que o login retornou", index);
}

console.log("antes de login")
login(loginResponseMessage)
console.log("depois de login")