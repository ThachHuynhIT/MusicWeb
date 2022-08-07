const express = require("express");
const router = express.Router();
// const { index } = require('../app/controllers/MusicsController');

const sitesController = require("../app/controllers/SitesController");

router.get("/:slug", sitesController.show);
router.get("/", sitesController.index);

module.exports = router;
