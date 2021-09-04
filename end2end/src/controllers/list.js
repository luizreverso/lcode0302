const conn = require("../services/mysql");

const list = async (_req, res) => {
    console.log("executing list")
    const users = await conn("users").select();
    res.send(users);
    // db("users").select().then((users => {
    //     res.send(users)
    // }))
}

module.exports = list;