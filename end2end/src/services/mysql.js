const knex = require("knex");

const conn = knex({
    client: "mysql2",
    connection: {
        // host: "127.0.0.1",
        // port: 3306,
        user: "teste",
        password: "teste123",
        database: "teste_gama"
    }
});
console.log("gerando conexao com banco")

module.exports = conn
