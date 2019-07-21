const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
require("dotenv").config();
const port = process.env.PORT || 3000;

const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api/v1", router);

server.listen(port, () => console.log(`Server listening at port ${port}`));
