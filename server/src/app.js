const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const { initialize } = require("./db");
const routes = require("./routes");
const models = require("./models");
const config = require("./config/appConfig");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("common"));
app.use(
  cors({
    origin: config.webHost,
  })
);
initialize().then(async () => {
  await models.sequelize.sync();
  app.emit("ready");
});

app.get("/health", async (request, response) => {
  request.status(200).send("App is working!");
});

app.use("/api", routes);

module.exports = app;
