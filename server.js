const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const router = require("./router");
const port = process.env.PORT || 3000;

const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.use("/api/v1", router);

server.listen(port, () => console.log(`Server listening at port ${port}`));
