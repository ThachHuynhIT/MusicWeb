const User = require("../../../models/User");
const Song = require("../../../models/Song");

module.exports = (req, res, next) => {
  const id = req.params.userId;
  const lastAlbum = req.body.albumName;
  const lastSong = req.body.songId;

  if (id) {
    User.updateOne({ _id: id }, { lastAlbum: lastAlbum, lastSong: lastSong })
      .then(() => {
        Song.findById({ _id: lastSong }).then((song) => {
          if (song.views) {
            song.views = song.views + 1;
            song.save();
            console.log(song);
          } else {
            song.views = 1;
            song.save();
          }
        });
        res.send("Thành công");
      })
      .catch(res.status(400));
  } else {
    return res.json({ lastAlbum, id });
  }
};
