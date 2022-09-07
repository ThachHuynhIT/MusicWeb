const User = require("../../../models/User");


module.exports = (req, res, next) => {
    User.updateOne({ _id: req.params.userId },{lastAlbum: req.params.albumName, lastSong: req.params.songId})
      .then(res.send('Thành công'))
      .catch(res.send("Lỗi"));
};