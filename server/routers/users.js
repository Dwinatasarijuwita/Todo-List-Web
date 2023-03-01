const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.post("/", controller.createUser);
router.post("/login", controller.findUser);

module.exports = router;
