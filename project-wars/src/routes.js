const list = require("./handlers/list")

const configRoutes = (app) => {
    app.get("/list",  list)
}

module.exports = configRoutes