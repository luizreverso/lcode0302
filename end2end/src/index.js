const swagger = require("swagger-ui-express");
const docs = require("../docs");

console.log("docs",docs)


const app = require("./services/express");
const configRoutes = require("./routes")

configRoutes(app)

app.use("/docs", swagger.serve, swagger.setup(docs))



// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));