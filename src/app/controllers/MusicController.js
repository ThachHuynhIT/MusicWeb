const Music = require("../models/Music");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MusicController {
  //[GET] route /Music
  index(req, res, next) {
    Music.find({})
      .then((music) => {
        res.render("music", {
          music: multipleMongooseToObject(music),
        });
      })
      .catch(next);
    // res.render("music");
  }

  //[GET] route /music:slug (mo rong)
  show(req, res) {
    res.send("MusicName: " + req.params.slug);
    res.render("music");
  }
}

module.exports = new MusicController();
