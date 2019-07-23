import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
config();
import router from "router";
const port = process.env.PORT || 3000;

const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.use("/api/v1", router);

server.listen(port, () => console.log(`Server listening at port ${port}`));
