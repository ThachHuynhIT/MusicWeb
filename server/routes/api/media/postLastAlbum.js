const User = require("../../../models/User");
const Song = require("../../../models/Song");

module.exports = (req, res, next) => {
  const id = req.params.userId;
  const lastSong = req.body.songId;

  const lastPlaylist = req.body.playlistId;
  const lastSinger = req.body.singerId;
  const lastAlbum = req.body.albumId;
  var err = false;

  if (id) {
    if (lastAlbum) {
      const typeList = "Album";
      User.updateOne(
        { _id: id },
        { lastList: lastAlbum, typeList: typeList, lastSong: lastSong }
      ).then(next);
    } else if (lastPlaylist) {
      const typeList = "Playlist";
      User.updateOne(
        { _id: id },
        { lasList: lastPlaylist, typeList: typeList, lastSong: lastSong }
      ).then(next);
    } else if (lastSinger) {
      const typeList = "Singer";
      User.updateOne(
        { _id: id },
        { lasList: lastSinger, typeList: typeList, lastSong: lastSong }
      ).then(next);
    } else {
      err = true;
      // console.log(err);
    }

    Song.findById({ _id: lastSong }).then((song) => {
      if (song.views) {
        song.views = song.views + 1;
        song.save();
        console.log(song);
      } else {
        song.views = 1;
        song.save();
      }
      res.status(200).json("Thành công");
    });
  } else {
    res.status(400).json("Lỗi");
  }
};
