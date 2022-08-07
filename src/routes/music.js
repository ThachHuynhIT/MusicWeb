const express = require("express");
const router = express.Router();

const musicsController = require("../app/controllers/MusicController");

router.get("/:slug", musicsController.show);
router.get("/", musicsController.index);

module.exports = router;
