const express = require('express');

const musicRouter = require("./music");
const sitesRouter = require("./site");
const albumRouter = require("./album");
const userRouter = require("./user");

const router = express.Router();

  router.get("/user", userRouter);

  router.get("/album", albumRouter);

  router.get("/music", musicRouter);

  router.get("/", sitesRouter);

module.exports = router;
