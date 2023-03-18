const express = require("express");
const { initialize } = require("./db");
const routes = require("./routes");
const logger = require("morgan");

const app = express();

initialize().then(() => {
  app.emit("ready");
});

app.get("/health", async (request, response) => {
  request.status(200).send("App is working!");
});

app.use(logger("common"));
app.use("/api", routes);

module.exports = app;
