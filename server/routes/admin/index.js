const musicRouter = require("./music");
const sitesRouter = require("./site");
const albumRouter = require("./album");
const userRouter = require("./user");
const verifyToken = require("../../middlewares/verifyToken")

function route(app) {

  app.get("/user", userRouter);

  app.get("/album", albumRouter);

  app.get("/music", musicRouter);

  app.get("/", sitesRouter);
}

module.exports = route;
