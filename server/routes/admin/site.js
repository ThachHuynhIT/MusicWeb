const express = require("express");
const router = express.Router();
// const { index } = require('../app/controllers/MusicsController');

const sitesController = require("../controllers/SitesController");

router.get("/admin", sitesController.admin);
router.get("/", sitesController.index);

module.exports = router;
