const users = require('../states/users');
const validationUser = require('../validation/validationUser');

const createUser = (req, res) => {
  const user = validationUser(req.body);
  if (user) {
    users.push(req.body)
    return res.status(201).json({ message: 'Adicionado com sucesso' })
  }
  res.status(400).json({ message: 'Não adicionado' })
}

module.exports = createUser;