const Song = require("../models/Song");
const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose");
const slugify = require("slugify");

class AlbumController {

  index(req, res, next) {
    Promise.all([Song.find({}), Song.countDocumentsDeleted()])
      .then(([song, deletedCount]) =>
        res.render("./songs/song", {
          deletedCount,
          song: multipleMongooseToObject(song),
        })
      )
      .catch(next);
  }

  // song/:slug [GET]
  show(req, res, next) {
    Song.findOne({ slug: req.params.slug })
      .then((song) =>
        res.render("./songs/show", { song: mongooseToObject(song) })
      )
      .catch(next);
  }

  // song/create [GET]
  create(req, res, next) {
    res.render("./songs/create");
  }

  // [POST] song/store
  store(req, res, next) {
    const song = new Song(req.body);
    song
      .save()
      .then(() => res.redirect("/admin/song"))
      .catch((error) => {});
  }

  // song/edit/:id [GET]
  edit(req, res, next) {
    Song.findOne({ _id: req.params.id })
      .then((song) => {
        res.render("./songs/edit", {
          song: mongooseToObject(song),
        });
      })
      .catch(next);
  }

  // [PUT] song/:slug
  update(req, res, next) {
    const formData = req.body;
    formData.slug = slugify(formData.name, {
      remove: /[*+~.,()'"!:@]/g,
      lower: true,
      strict: true,
      locale: "vi",
    });
    //update course after adding image, slug
    Song.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect("/song"))
      .catch(next);
  }

  // [DELETE] /song/:id
  destroy(req, res, next) {
    Song.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /song/force/:id
  forceDestroy(req, res, next) {
    Song.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [GET] /song/bin
  songBin(req, res, next) {
    Song.findDeleted({})
      .then((song) => {
        res.render("./songs/bin", {
          song: multipleMongooseToObject(song),
        });
      })
      .catch(next);
  }

  // [PATCH] song/restore/:id
  restore(req, res, next) {
    Song.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [POST] song/handle-form-action
  handleFormAction(req, res, next) {
    switch (req.body.actionName) {
      case "delete":
        Song.delete({ _id: { $in: req.body.albumIDs } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Sai" });
    }
  }

}

module.exports = new AlbumController();
