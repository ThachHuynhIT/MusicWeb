const Playlist = require("../../../models/PlayList");
const Song = require("../../../models/Song");

module.exports = (req, res, next) => {
  const songId = req.params.songId;
  const playlistId = req.params.playlistId;

  Song.findById({ _id: songId }).then((song) => {});
  Playlist.findOneAndUpdate(
    { _id: playlistId },
    {
      $push: {
        songList: {
          $each: [songId],
          $position: -1,
        },
      },
    }
  )
    .then(res.status(200).send("Thành công"))
    .catch(next);


};
