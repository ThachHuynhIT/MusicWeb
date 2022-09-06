const express = require("express");
const media = require("./media");
const playlist = require("./playlist");
const user = require("./user");

const router = express.Router();

    router.use("/media", media);

    router.use("/user", user);

    router.use("/playlits", playlist);
  
  
  module.exports = router;
