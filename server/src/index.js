const app = require("./app");
const config = require("./config/appConfig");

console.log("Starting todo-app Api!");

const http = require("http");

const server = http.createServer(app);

app.on("ready", () => {
  server.listen(config.port, () => {
    console.log(`Application started on port ${config.port}`);
  });
});
