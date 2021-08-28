const users = require('../states/users')

const list = (req, res) => {
  res.send(users)
};


module.exports = list