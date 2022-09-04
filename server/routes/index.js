const admin = require("./admin");
const api = require("./api");
const verifyToken = require("../middlewares/verifyToken");

function route(app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/api", api);

  // app.use("/admin", verifyToken,admin);
  app.use("/admin", admin);
}

module.exports = route;
