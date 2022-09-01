const express = require("express");


function route(app) {
  app.get("/user", userRouter);

  app.get("/album", albumRouter);

  app.get("/music", musicRouter);

  app.get("/", sitesRouter);
}

module.exports = route;
