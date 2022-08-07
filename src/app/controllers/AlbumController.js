const Album = require("../models/Album");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const slugify = require("slugify");

class AlbumController {
  index(req, res, next) {
    Album.find({})
      .then((album) => {
        res.render("./albums/albums", {
          album: multipleMongooseToObject(album),
        });
      })
      .catch(next);
  }

  // album/:slug [GET]
  show(req, res, next) {
    Album.findOne({ slug: req.params.slug })
      .then((album) =>
        res.render("./albums/show", { album: mongooseToObject(album) })
      )
      .catch(next);
  }

  // album/create [GET]
  create(req, res, next) {
    res.render("./albums/create");
  }

  // [POST] album/store
  store(req, res, next) {
    const formData = req.body;

    const album = new Album(req.body);
    album
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
    res.redirect("/");
  }

  // album/edit/:id [GET]
  edit(req, res, next) {
    Album.findOne({ _id: req.params.id })
      .then((album) => {
        res.render("./albums/edit", {
          album: mongooseToObject(album),
        });
      })
      .catch(next);
  }

  // [PUT] album/:slug

  update(req, res, next) {
    const formData = req.body;
    // formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    formData.slug = slugify(formData.name, {
      remove: /[*+~.,()'"!:@]/g,
      lower: true,
      strict: true,
      locale: "vi",
    });
    //update course after adding image, slug
    Album.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect("/album"))
      .catch(next);
  }
}

module.exports = new AlbumController();
