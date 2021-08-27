const users = require("../states/users")

const create = (req, res) => {
    users.push(req.body)
    res.send(users)
}

module.exports = create