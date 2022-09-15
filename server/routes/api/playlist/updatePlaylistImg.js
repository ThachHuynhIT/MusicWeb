const Playlist = require("../../../models/PlayList");
const path = require("path");

const Resize = require("../../../middlewares/Resize");

module.exports = async function (req, res, next) {
  const imagePath = path.join("test/public/img");
  const fileUpload = new Resize(imagePath);
  const name = req.body.name;
  if (req.file) {
    const filename = await fileUpload.save(req.file.buffer);
    const img = path.join(process.env.LOCAL_STATIC_STORE + filename);
    Playlist.updateOne({ _id: req.params.playlistId }, { img: img, name: name })
      .then(res.status(200).json({ url: img, name: name }))
      .catch(next);
  } else {
    Playlist.updateOne({ _id: req.params.playlistId }, { name: name })
      .then(res.status(200).json({ name: name }))
      .catch(next);
  }
};
