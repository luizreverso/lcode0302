// Cria a lista de usuarios
const createUsers = require('./handles/create');
// Ler a lista criada
const listUsers = require('./handles/read');
// Atualiza a lista de usuarios
const updateUsers = require('./handles/update');
// Deleta um usuario
const deleteUsers = require('./handles/delete');

const routes = (app) => {
  // app.get('/list', (req, res) => res.send('Testando list'))
  app.post('/create', createUsers);
  app.get('/list', listUsers);
  app.put('update', updateUsers);
  app.delete('/delete', deleteUsers);

}

module.exports = routes;