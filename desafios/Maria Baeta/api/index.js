const express = require('express');
const app = express()
const porta = 5000;
const routes = require('./src/routes')

routes(app)

app.listen(porta, () => console.log('LocalHost rodando na porta 5000'))
