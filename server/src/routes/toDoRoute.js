const express = require("express");
const ToDoController = require("../controllers/ToDoController");
const ToDoValidator = require("../validators/ToDoValidator");

const router = express.Router();

const toDoController = new ToDoController();
const toDoValidator = new ToDoValidator();

router.get("/:id", toDoValidator.operationsById, toDoController.getTodo);
router.delete("/:id", toDoValidator.operationsById, toDoController.deleteTodo);
router.get("/", toDoController.getAllTodos);
router.post("/", toDoValidator.createTodo, toDoController.createTodo);
router.post(
  "/:id/complete",
  toDoValidator.operationsById,
  toDoController.completeTodo
);
router.post(
  "/:id/uncomplete",
  toDoValidator.operationsById,
  toDoController.unCompleteTodo
);

module.exports = router;
