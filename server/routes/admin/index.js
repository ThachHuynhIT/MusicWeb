const express = require('express');

const musicRouter = require("./music");
const sitesRouter = require("./site");
const albumRouter = require("./album");
const userRouter = require("./user");

const router = express.Router();

  router.use("/user", userRouter);

  router.use("/album", albumRouter);

  router.use("/music", musicRouter);

  router.use("/", sitesRouter);

module.exports = router;
