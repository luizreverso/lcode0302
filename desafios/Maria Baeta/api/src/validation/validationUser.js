const users = require('../states/users');
const validation = (user) => {
  // const { nome, cpf } = user;
  users.some(item => item === user)
}

// Array.some(item => item === itemB)

module.exports = validation;