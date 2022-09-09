const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  Playlist.find({ _id: req.params.playlistId })
    .then((playlist) => res.send(playlist))
    .catch(next);
};
