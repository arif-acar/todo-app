const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const config = require("../config/appConfig");

const models = {};

const sequelize = new Sequelize({ ...config.db });

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    models[model.name] = model;
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
