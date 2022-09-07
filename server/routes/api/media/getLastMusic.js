const User = require("../../../models/User");
const Song = require("../../../models/Song");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.access_token;
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  const userId = verified._id;

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
