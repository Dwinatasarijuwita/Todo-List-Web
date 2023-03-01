const jwt = require("jsonwebtoken");
let secret = "rahasia";

module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, secret);
  },
  decodedToken: (token) => {
    return jwt.verify(token, secret);
  },
};
