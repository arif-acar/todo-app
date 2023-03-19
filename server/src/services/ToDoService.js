const httpStatus = require("http-status");

const ToDoRepository = require("../repositories/ToDoRepository");
const ApiException = require("../utils/ApiException");
class ToDoService {
  constructor() {
    this.todoRepository = new ToDoRepository();
  }

  getToDo = async (id) => {
    try {
      const todo = await this.todoRepository.findById(id);

      if (!todo) {
        return new ApiException(httpStatus.NOT_FOUND, "ToDo not found!");
      }

      return todo;
    } catch (e) {
      console.error(e);
      return new ApiException(httpStatus.INTERNAL_SERVER_ERROR, e.message);
    }
  };

  getAllToDos = () => {
    try {
      return this.todoRepository.findAll();
    } catch (e) {
      console.error(e);
      return new ApiException(httpStatus.NOT_FOUND, e.message);
    }
  };

  createToDo = (todo) => {
    try {
      if (!todo.status) {
        todo.status = "uncomplete";
      }
      return this.todoRepository.create(todo);
    } catch (e) {
      console.error(e);
      return new ApiException(httpStatus.INTERNAL_SERVER_ERROR, e.message);
    }
  };

  updateToDo = async (id, status) => {
    try {
      const todo = await this.todoRepository.findById(id);

      if (todo) {
        todo.status = status;
        return this.todoRepository.update({ status }, id);
      } else {
        return new ApiException(httpStatus.NOT_FOUND, "Invalid ToDo Id");
      }
    } catch (e) {
      console.error(e);
      return new ApiException(httpStatus.INTERNAL_SERVER_ERROR, e.message);
    }
  };

  deleteToDo = async (id) => {
    try {
      return this.todoRepository.deleteById(id);
    } catch (e) {
      console.error(e);
      return new ApiException(httpStatus.INTERNAL_SERVER_ERROR, e.message);
    }
  };
}

module.exports = ToDoService;
