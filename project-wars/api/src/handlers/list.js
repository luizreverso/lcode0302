const users = require("../states/users")

const list = async (req, res) => {
    console.log("chegou no list")
    await new Promise(r => setTimeout(r, 2000))
        .then(() => console.log("terminei de esperar"))
    console.log("retornando list")

    console.log("conectando com o banco")
    try {
        console.log(users[1].nome)

        console.log("desconectar com o banco")
        // throw // forca um erro
    } catch (error) {
        console.log("ops, algo quebrou")
        console.log(error)

        console.log("desconectar com o banco")
    } finally {
        console.log("depois de toda a tentativa e tratamento, roda eu :)")

        res.send(users) 
    }
}

module.exports = list

//try catch