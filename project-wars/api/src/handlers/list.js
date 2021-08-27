const users = require("../states/users")

const list = async (req, res) => {
    console.log("chegou no list")
    await new Promise(r => setTimeout(r, 2000))
        .then(() => console.log("terminei de esperar"))
    console.log("retornando list")

    res.send(users)
}

module.exports = list