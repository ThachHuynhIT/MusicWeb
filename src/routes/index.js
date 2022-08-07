const musicRouter = require("./music");
const sitesRouter = require("./site");
const albumRouter = require("./album");

function route(app) {
  app.use("/album", albumRouter);

  app.use("/music", musicRouter);

  app.use("/", sitesRouter);
}

module.exports = route;
