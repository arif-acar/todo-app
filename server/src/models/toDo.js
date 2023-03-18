const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const ToDo = sequelize.define("todo", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.DataTypes.STRING,
    description: Sequelize.DataTypes.STRING,
    status: Sequelize.DataTypes.STRING,
  });

  return ToDo;
};
