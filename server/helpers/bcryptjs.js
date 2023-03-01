const bcrypt = require("bcryptjs");

const hashPass = (password) => bcrypt.hashSync(password, 10);

const compareHash = (password, hashPass) =>
  bcrypt.compareSync(password, hashPass);

module.exports = { hashPass, compareHash };
