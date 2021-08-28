// const app = require("express")();
const express = require("express");

const routes = require("./src/routes")

const app = express()

var users = []

routes(app, users)


app.listen(5000, () => console.log("server started"))