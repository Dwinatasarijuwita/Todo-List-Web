const express = require("express");
const router = express.Router();
const routerUser = require("./users");
const routerTasks = require("./tasks")
const routerCategory = require("./categories")

router.use("/users", routerUser);
router.use("/tasks", routerTasks);
router.use("/categories", routerCategory);

module.exports = router;