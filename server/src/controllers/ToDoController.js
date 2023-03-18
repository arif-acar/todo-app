const ToDoService = require("../services/ToDoService");

class ToDoController {
  constructor() {
    this.toDoService = new ToDoService();
  }
  getTodo = async (request, response) => {
    const todo = await this.toDoService.getToDo(request.params.id);

    response.status(todo?.statusCode ? todo.statusCode : 200).send(todo);
  };

  getAllTodos = async (request, response) => {
    const todoList = await this.toDoService.getAllToDos();

    response
      .status(todoList?.statusCode ? todoList.statusCode : 200)
      .send(todoList);
  };

  createTodo = async (request, response) => {
    const todo = await this.toDoService.createToDo(request.body);

    response.status(todo?.statusCode ? todo.statusCode : 200).send(todo);
  };

  completeTodo = async (request, response) => {
    const todo = await this.toDoService.updateToDo(
      request.params.id,
      "complete"
    );

    response.status(todo?.statusCode ? todo.statusCode : 200).send(todo);
  };
  unCompleteTodo = async (request, response) => {
    const todo = await this.toDoService.updateToDo(
      request.params.id,
      "uncomplete"
    );

    response.status(todo?.statusCode ? todo.statusCode : 200).send(todo);
  };

  deleteTodo = async (request, response) => {
    const todo = await this.toDoService.deleteToDo(request.params.id);

    response.status(todo?.statusCode ? todo.statusCode : 200).send("Deleted");
  };
}

module.exports = ToDoController;
