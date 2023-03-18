class ToDoController {
  getTodo = async (request, response) => {
    response.status(200).send("ToDo!");
  };
}

module.exports = ToDoController;
