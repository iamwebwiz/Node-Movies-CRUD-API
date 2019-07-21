const router = require("express").Router();

router.get("/", MovieController.index);

module.exports = router;
