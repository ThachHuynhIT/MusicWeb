const musicRouter = require("./music");
const sitesRouter = require("./site");
const albumRouter = require("./album");
const userRouter = require("./user");
const verifyToken = require("../middlewares/verifyToken")

function route(app) {
  // app.use("/playlist",verifyToken,playList)
   
  app.use("/user", userRouter);

  app.use("/album", albumRouter);

  app.use("/music", musicRouter);

  app.use("/", sitesRouter);
}

module.exports = route;
