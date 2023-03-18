const express = require("express");
const { initialize } = require("./db");
const routes = require("./routes");
const logger = require("morgan");
const models = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("common"));

initialize().then(async () => {
  await models.sequelize.sync();
  app.emit("ready");
});

app.get("/health", async (request, response) => {
  request.status(200).send("App is working!");
});

app.use("/api", routes);

module.exports = app;
