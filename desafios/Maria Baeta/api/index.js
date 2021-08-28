const express = require('express');
const app = express()
const port = 5000;
const routes = require('./src/routes')
app.use(express.json());

routes(app)

app.listen(port, () => console.log(`LocalHost rodando na porta ${port}`))
