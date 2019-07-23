import express from "express";
const router = express.Router();
import { getMovies } from "./MovieController";

router.get("/", getMovies);

module.exports = router;
