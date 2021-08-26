const list = require("./handlers/list")

const configRoutes = (app, users) => {
    app.get("/list", list)
}

module.exports = configRoutes