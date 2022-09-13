const Playlist = require("../../../models/PlayList");
const path = require("path");

const Resize = require("../../../middlewares/Resize");

module.exports = async function (req, res, next) {
  const imagePath = path.join("test/public/img");
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }
  const filename = await fileUpload.save(req.file.buffer);
  const img = path.join(process.env.LOCAL_STATIC_STORE + filename);
  const name = req.body.name;

  Playlist.updateOne({ _id: req.params.playlistId }, { img: img, name: name })
    .then(res.status(200).json({ url: img, name: name }))
    .catch(next);
};
