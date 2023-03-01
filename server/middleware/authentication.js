const { decodedToken } = require("../helpers/jwt");
const User = require("../models/users");

class authentication {
  static async auth(req, res, next) {
    try {
      let access_token = req.headers.access_token;
      if (!access_token) {
        throw {
          name: "Unauthenticated",
        };
      }
      let payload = decodedToken(access_token);
      let user = await User.findByPk(payload.id);
      if (user) {
        req.user = { id: user._id, email: user.email };
        // console.log(req.user);
        next();
      } else {
        throw { name: "Unauthenticated" };
      }
    } catch (error) {
      console.log(error);
      if (error.name === "Unauthenticated") {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

module.exports =  authentication ;
