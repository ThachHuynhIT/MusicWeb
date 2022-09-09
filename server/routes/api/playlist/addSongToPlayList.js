const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  const songId = req.params.songId;
  const playlistId = req.params.playlistId;

  Playlist.updateOne(
    { _id: playlistId },
    {
      $push: {
        songList: {
          $each: [songId],
          $position: -1,
        },
      },
    }
  ).then(() => {
    Playlist.find({ _id: playlistId })
      .then((playlist) => {
        const ppllength = playlist.length;
        res.send(playlist);
      })
      .catch(next);
  });
};
