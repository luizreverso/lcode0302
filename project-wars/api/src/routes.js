const create = require("./handlers/create")
const list = require("./handlers/list")
const update = require("./handlers/update")
const deleteHandler = require("./handlers/delete")

const configRoutes = (app) => {
    app.post("/create", create)
    app.get("/list", list)
    app.put("/:id", update)
    app.delete("/:id", deleteHandler);
}

module.exports = configRoutes