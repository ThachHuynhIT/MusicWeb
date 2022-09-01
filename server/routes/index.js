const admin = require("./admin");
const media = require("./api/media");
const playlist = require("./api/playlist");
const user = require("./api/user");
const verifyToken = require("../../middlewares/verifyToken")

function route(app) {

    app.use("/media", media);

    app.use("/user", user);

    app.use("/playlits", playlist);

    app.use("/admin", admin);
  
  }
  
  module.exports = route;
