const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  Playlist.find({})
    .then((playlist) => res.send(playlist))
    .catch(next);
};
