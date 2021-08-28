const list = require("./handlers/list");
const crudePost = require("./handlers/post");
const crudPut = require("./handlers/put");
const crudDelete = require("./handlers/delete");


const configRoutes = (app) => {
        app.get('/list',list)
        app.post('/create',crudePost)
        app.put('/:index',crudPut)
        app.delete('/:index',crudDelete)
}

module.exports = configRoutes;


