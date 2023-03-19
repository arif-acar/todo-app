const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });
const config = process.env;

module.exports = {
  port: config.PORT,
  db: {
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: "mysql",
  },
  webHost: config.WEB_HOST,
};
