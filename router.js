const router = require("express").Router();
const MovieController = require("./MovieController");

router.get("/", MovieController.getMovies);

module.exports = router;
