const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json())

app.listen(PORT, () => console.log(`server up on http://localhost:${PORT}`));

module.exports = app