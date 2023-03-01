const { hashPass, compareHash } = require("../helpers/bcryptjs");
const { createToken } = require("../helpers/jwt");
const User = require("../models/users");

class userController {
  static async createUser(req, res) {
    try {
      let { name, phoneNumber, email, username, password } = req.body;
      let data = await User.createUser({
        name,
        phoneNumber,
        email,
        username,
        password: hashPass(password),
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findUser(req, res, next) {
    try {
      let { email, password } = req.body;
      if (email === null || password === null) {
        throw {
          name: "EmailorPassNotFound",
        };
      }
      let user = await User.findUser(email);
      if (!user) {
        throw {
          name: "InvalidCredentials", //ganti nama jadi invalidcredentials
        };
      }
      let comparePass = compareHash(password, user.password);
      if (!comparePass) {
        throw {
          name: "InvalidCredentials",
        };
      }

      let payload = {
        id: user._id,
      };
      let access_token = createToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      if (error.name === "EmailorPassNotFound") {
        res.status(400).json({ message: "Email or Password Required" });
      } else if (error.name === "InvalidCredentials") {
        res.status(401).json({ message: "Invalid Email or Password" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

module.exports = userController;
