const { getDatabase } = require("../config/mongoConnection");

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
}

module.exports = Category;
