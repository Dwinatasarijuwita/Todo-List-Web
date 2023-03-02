const Categories = require("../models/categories");

class CategoryController {
  static async findCategory(req, res, next) {
    try {
      const data = await Categories.findCategory();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createCategory(req, res, next) {
    try {
      let { name } = req.body;
      let data = await Categories.createCategory({
        name,
        UserId: req.user.id,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteCategory(req, res) {
    try {
      let id = req.params.id;
      let dataUser = await Categories.findByPk(id);
      if (!dataUser) {
        throw {
          name: "notFound",
        };
      }
      let data = await Categories.deleteCategory(id);
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

module.exports = CategoryController;
