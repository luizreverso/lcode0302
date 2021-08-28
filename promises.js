
const promiseHandler = (resolve, reject) => {
    let index = 0;
    setTimeout(() => resolve(index), 3000)
}

const login = async () => {
    return new Promise(promiseHandler)
        .then((index) => {
            console.log("depois da promise", index)
        })
}



const process = () => {
    console.log("inicio de process")
    login();
    console.log("fim do process")
}

process();