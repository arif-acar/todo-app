const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ToDo extends Model {
    }

    ToDo.init(
        {
            id: DataTypes.UUID,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'todo',
        },
    );
    return ToDo;
};
