const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
require("dotenv").config();
const port = process.env.PORT || 3000;

const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use("/api/v1", router);

server.listen(port, () => console.log(`Server listening at port ${port}`));
