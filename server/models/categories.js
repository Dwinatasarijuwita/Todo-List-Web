const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

class Category {
  static async findCategory() {
    try {
      let db = getDatabase();
      let categoryCollection = db.collection("Categories");
      let data = await categoryCollection.find().toArray();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(dataCategories) {
    try {
      let data = {
        ...dataCategories,
        created_at: new Date(),
      };
      let db = getDatabase();
      let categoryCollection = db.collection("Categories");
      let res = await categoryCollection.insertOne(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async findByPk(id) {
    try {
      let db = getDatabase();
      let tasksCollection = db.collection("Categories");
      let data = await tasksCollection.findOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCategory(id) {
    try {
      let db = getDatabase();
      let tasksCollection = db.collection("Categories");
      let data = await tasksCollection.deleteOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Category;
