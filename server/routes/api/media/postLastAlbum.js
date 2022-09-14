const User = require("../../../models/User");

module.exports = (req, res, next) => {
  const id = req.params.userId;
  const lastAlbum = req.body.albumName;
  const lastSong = req.body.songId;

  if (id) {
    User.updateOne({ _id: id }, { lastAlbum: lastAlbum, lastSong: lastSong })
      .then(res.send("Thành công"))
      .catch(res.status(400));
  } else {
    return res.json({ lastAlbum, id });
  }
};
