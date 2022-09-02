const admin = require("./admin");
const api = require("./api");
const verifyToken = require("../middlewares/verifyToken")

function route(app) {

    app.use("/api", api);

    // app.use("/admin", verifyToken,admin);
    app.use("/admin", admin);
  
  }
  
  module.exports = route;
