const models = require("../models");

const ToDo = models.todo;

class ToDoRepository {
  async findById(id) {
    return await ToDo.findOne({ where: { id } });
  }

  async findAll() {
    return await ToDo.findAll();
  }

  async create(data) {
    try {
      return await ToDo.create(data)
        .then((result) => {
          return result;
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  async update(data, id) {
    try {
      return await ToDo.update(data, { where: { id } })
        .then(() => {
          return this.findById(id);
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteById(id) {
    try {
      return await ToDo.destroy({ where: { id } })
        .then((result) => {
          return result;
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ToDoRepository;
