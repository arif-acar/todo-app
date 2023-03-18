const express = require("express");
const ToDoController = require("../controllers/ToDoController");

const router = express.Router();

const toDoController = new ToDoController();

router.get("/:id", toDoController.getTodo);
router.delete("/:id", toDoController.deleteTodo);
router.get("/", toDoController.getAllTodos);
router.post("/", toDoController.createTodo);
router.post("/:id/complete", toDoController.completeTodo);
router.post("/:id/uncomplete", toDoController.unCompleteTodo);

module.exports = router;
