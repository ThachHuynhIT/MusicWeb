const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  const songId = req.params.songId;
  const playlistId = req.params.playlistId;
  if (!playlistId || !songId) {
    Playlist.updateOne(
      { _id: playlistId },
      {
        $pullAll: {
          songList: [songId],
        },
      }
    ).then(() => {
      Playlist.find({ _id: playlistId })
        .then((playlist) => {
          // const ppllength = playlist.length;
          res.send(playlist);
        })
        .catch(next);
    });
  }
};
