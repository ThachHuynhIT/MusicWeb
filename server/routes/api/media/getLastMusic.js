const User = require("../../../models/User");
const Song = require("../../../models/Song");

module.exports = (req, res, next) => {
  const userId = req.params.userId;

  if (userId) {
    User.findById({ _id: userId }).then((user) => {
      const songId = user.lastSong;
      const albumName = user.lastAlbum;
      Song.find({})
        .then((song) => {
          var lastSong = song.filter((song) => {
            return song.id.indexOf(songId) !== -1;
          });
          var lastAlbum = song.filter((song) => {
            return song.album.indexOf(albumName) !== -1;
          });
          if (!lastSong || !lastAlbum) {
            res.status(400).send("Lỗi")
          }else{
            res.send({
              song: lastSong,
              album: lastAlbum,
            })
          }
        })
        .catch(res.status(400).send("Err"));
    })
    .catch(res.status(400).send("Err"))
  } else {
    return res.status(400).send(userId);
  }
};
