const express = require('express');

const routes = require("./src/routes");

const app = express();    

const users = []

routes(app, users);

app.listen(5000, () => console.log('Server started!'))




