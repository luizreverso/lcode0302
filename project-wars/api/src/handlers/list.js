const users = require("../states/users")

const list = (req, res) => {
    console.log("calling list")
    res.send(users)
}

module.exports = list