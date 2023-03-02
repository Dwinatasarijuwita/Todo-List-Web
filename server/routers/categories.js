const express = require("express");
const router = express.Router();
const controller = require("../controllers/categories");
const authentication = require("../middleware/authentication");

router.get("/", authentication.auth, controller.findCategory);
router.post("/", authentication.auth, controller.createCategory);
router.delete("/:id", authentication.auth, controller.deleteCategory);

module.exports = router;
