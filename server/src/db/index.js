const config = require("../config/appConfig");
const mysql = require("mysql2/promise");

const initialize = async function () {
  const connection = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`);

  connection.end();
};

module.exports = {
  initialize,
};
