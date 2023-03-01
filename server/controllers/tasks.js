const Tasks = require("../models/tasks");

class TasksController {
  static async findTasks(req, res, next) {
    try {
      const data = await Tasks.findTasks();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createTasks(req, res, next) {
    try {
      let { name, category } = req.body;
      let data = await Tasks.createTasks({
        name,
        UserId: req.user.id,
        category,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteTasks(req, res) {
    try {
      let id = req.params.id;
      let dataUser = await Tasks.findByPk(id);
      if (!dataUser) {
        throw {
          name: "notFound",
        };
      }
      let data = await Tasks.deleteTasks(id);
      res.status(200).json({ message: "Delete Success" });
    } catch (error) {
      console.log(error);
      if (error.name === "notFound") {
        res.status(400).json({ message: "Data Not Found" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

module.exports = TasksController;
