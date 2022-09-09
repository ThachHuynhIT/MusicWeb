const User = require("../../../models/User");
const Song = require("../../../models/Song");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const userId = req.params.userId;

  User.findById({ _id: userId }).then((user) => {
    const songId = user.lastSong;
    const albumName = user.lastAlbum;
    Song.find({})
      .then((song) => {
        var lastSong = song.filter((song) => {
          return song.id.indexOf(songId) !== -1;
        });
        var lastAlbum = song.filter((song) => {
          return (
            song.album.toLowerCase().indexOf(albumName.toLowerCase()) !== -1
          );
        });
        res.send({
          song: lastSong,
          album: lastAlbum,
        });
      })
      .catch(songId);
  });
};
