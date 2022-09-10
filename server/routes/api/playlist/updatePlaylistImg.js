const Playlist = require("../../../models/PlayList");
const path = require("path");
require("dotenv").config();

const Resize = require("../../../middlewares/Resize");

module.exports = async function (req, res) {
  const imagePath = path.join( "test/public/img");
  // call class Resize
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }
  const filename = await fileUpload.save(req.file.buffer);
  const img = path.join(process.env.LOCAL_PATH_STORE+filename)

  Playlist.updateOne({_id: req.params.playlistId},{img:img})
  .then()

  return res.status(200).json({ url: img });
};
