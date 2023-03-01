const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks");
const authentication = require("../middleware/authentication");

router.get("/", authentication.auth, controller.findTasks);
router.post("/", authentication.auth, controller.createTasks);
router.delete("/:id", authentication.auth, controller.deleteTasks);

module.exports = router;
