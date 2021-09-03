const listController = require("./controllers/list")
const createController = require("./controllers/create")

const configRoutes = app => {
    app.get("/list", listController);
    app.post("/create", createController)
}

module.exports = configRoutes