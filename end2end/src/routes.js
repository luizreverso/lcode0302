const listController = require("./controllers/list")
const createController = require("./controllers/create")

const configRoutes = app => {
    app.get("/user/list", listController);
    app.post("/user/create", createController);


    app.post("/user", (req,res ) => res.send("post user"));
    app.get("/user", (req,res ) => res.send("get user"));
    app.put("/user", (req,res ) => res.send("put user"));
}

module.exports = configRoutes