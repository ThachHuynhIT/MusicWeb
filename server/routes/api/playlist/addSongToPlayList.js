const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  const songId = req.params.songId;
  const playlistId = req.params.playlistId;

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
