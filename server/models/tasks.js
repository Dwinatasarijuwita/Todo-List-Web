const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

class Tasks {
  static async findTasks() {
    try {
      let db = getDatabase();
      let tasksCollection = db.collection("Tasks");
      let data = await tasksCollection.find().toArray();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async createTasks(dataTasks) {
    try {
      let data = {
        ...dataTasks,
        created_at: new Date(),
      };
      let db = getDatabase();
      let tasksCollection = db.collection("Tasks");
      let res = await tasksCollection.insertOne(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async findByPk(id) {
    try {
      let db = getDatabase();
      let tasksCollection = db.collection("Tasks");
      let data = await tasksCollection.findOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTasks(id) {
    try {
      let db = getDatabase();
      let tasksCollection = db.collection("Tasks");
      let data = await tasksCollection.deleteOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Tasks;
