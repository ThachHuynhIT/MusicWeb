const User = require("../../../models/User");
const Song = require("../../../models/Song");
const Playlist = require("../../../models/PlayList");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const userId = req.params.userId;

  if (userId) {
    User.findById({ _id: userId }).then((user) => {
      const songId = user.lastSong;
      const lastList = user.lastList;

      Song.find({})
        .then((song) => {
          var lastSong = song.filter((song) => {
            return song.id.indexOf(songId) !== -1;
          });
          switch (user.typeList) {
            case "Album":
              var songList = song.filter((song) => {
                return song.album.indexOf(lastList) !== -1;
              });
              break;
            case "Singer":
              var songList = song.filter((song) => {
                return song.singer.indexOf(lastList) !== -1;
              });
              break;
            case "Playlist":
              Playlist.findById({_id : lastList})
              .then((playlist)=>{
                var songList = playlist
              })
              break;
            default:
          }
          res.send({
            song: lastSong,
            songList: songList,
          });
        })

        .catch(next);
    });
  } else {
    return res.status(400).send(userId);
  }
};
