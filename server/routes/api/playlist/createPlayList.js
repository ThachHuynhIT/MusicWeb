const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  Playlist.find({}).then((playlist) => {
    if (playlist.length <= 10) {
      const playlist = new Playlist({
        name: req.params.name,
        userId: req.params.userId,
      });
      playlist.save().then((playlist) => res.send(playlist));
    } else {
      return res.json("Không thể tạo thêm danh sách phát");
    }
  });
};
