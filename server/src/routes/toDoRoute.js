const express = require("express");
const ToDoController = require("../controllers/ToDoController");

const router = express.Router();

const toDoController = new ToDoController();

router.get("/", toDoController.getTodo);

module.exports = router;
