const Album = require("../models/Album");
const { multipleMongooseToObject } = require("../util/mongoose");

class SitesController {
  //[GET] route /Music
  index(req, res, next) {
    Album.find({})
      .then((album) => {
        res.render("home", {
          album: multipleMongooseToObject(album),
        });
      })
      .catch(next);
  }

  //[GET] route /music:slug (mo rong)
  admin(req, res) {
    res.json("new");
  }
}

module.exports = new SitesController();
