const config = require("../config/appConfig");
const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const initialize = async function () {
  const connection = await mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`);

  connection.end();

  const sequelize = new Sequelize({
    ...config.db,
    ...{ models: [__dirname + "../models/**.js"] },
  });

  await sequelize.sync();
};

module.exports = {
  initialize,
};
