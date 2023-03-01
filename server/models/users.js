const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

class User {
  static async createUser(dataUser) {
    try {
      let data = {
        ...dataUser,
        created_at: new Date(),
      };
      let db = getDatabase();
      let userCollection = db.collection("Users");
      let res = await userCollection.insertOne(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async findUser(email) {
    try {
      let db = getDatabase();
      let userCollection = db.collection("Users");
      let data = await userCollection.findOne({
        email: email,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async findByPk(id) {
    try {
      let db = getDatabase();
      let userCollection = db.collection("Users");
      let data = await userCollection.findOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
