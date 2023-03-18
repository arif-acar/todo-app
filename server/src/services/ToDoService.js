const ToDoRepository = require("../repositories/ToDoRepository");

class ToDoService {
  constructor() {
    this.todoRepository = new ToDoRepository();
  }

  getToDo = (id) => {
    return this.todoRepository.findById(id);
  };

  getAllToDos = () => {
    return this.todoRepository.findAll();
  };

  createToDo = (todo) => {
    return this.todoRepository.create(todo);
  };

  updateToDo = async (id, status) => {
    const todo = await this.todoRepository.findById(id);

    if (todo) {
      todo.status = status;
      return this.todoRepository.update({ status }, id);
    } else {
      return null;
    }
  };

  deleteToDo = async (id) => {
    return this.todoRepository.deleteById(id);
  };
}

module.exports = ToDoService;
