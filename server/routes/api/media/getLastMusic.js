const User = require("../../../models/User");
const Song = require("../../../models/Song");
const Singer = require("../../../models/Singer");
const Album = require("../../../models/Album");
const Playlist = require("../../../models/PlayList");

module.exports = async function (req, res, next) {
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
              Album.findById({ _id: lastList }).then((album) => {
                var albumName = album.name;
                let songLists = song.filter((song) => {
                  return song.album.indexOf(albumName) !== -1;
                });
                res.send({
                  song: lastSong,
                  songLists: songLists,
                });
              });
              break;
            case "Singer":
              Singer.findOne({ _id: lastList }).then((singer) => {
                var singerName = singer.name;
                var songLists = song.filter((song) => {
                  return song.singer.indexOf(singerName) !== -1;
                });
                res.send({
                  song: lastSong,
                  songLists: songLists,
                });
              });
              break;
            case "Playlist":
              Playlist.find(
                {
                  _id: lastList,
                },
                { songList: 1, _id: 0 }
              ).then((playList) => {
                console.log(playList);
                var arr = playlist[0].songList;
                const t = { _id: { $in: arr } };
                Song.f  ind(t).then((songL) => {
                  res.send({
                    song: lastSong,
                    songLists: songL,
                  });
                });
              });
              break;
            default:
              res.send("Danh sách trống");
          }
        })
        .catch(next);
    });
  } else {
    return res.status(400).send(userId);
  }
};
