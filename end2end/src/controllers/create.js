const conn = require("../services/mysql");

const create = async (req, res) => {
    try {
        if(req.body.cpf?.length > 11){
            res.status(500).send("erro no tamanho do cpf")
            return;
        } 

        await conn("users").insert(req.body);

        res.send("criado")
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = create;