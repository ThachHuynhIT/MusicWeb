const Playlist = require("../../../models/PlayList");

module.exports = (req, res, next) => {
  const songId = req.params.songId;
  const playlistId = req.params.playlistId;

  //   Playlist.find({ _id: req.params.playlistId }).then((playlist) => {
  //     const ppllength = playlist.length;
  //     Playlist.updateOne(
  //       { _id: req.params.playlistId },
  //       {
  //         $push:
  //         {
  //             songList: { [ppllength]: songId },
  //         //   songList: {
  //         //     $each: [songId],
  //         //     $position: 0,
  //         //   },
  //         },
  //       }
  //     );
  //     res.send(playlist);
  //   });

  const formData = req.body;
  Playlist.updateOne(
    { _id: playlistId },
    formData
    // {
    // //   $push: {
    // //     songList: {
    // //       $each: [songId],
    // //       $position: 0,
    // //     },
    // //   },
    // }
  );
  Playlist.find({ _id: playlistId }).then((playlist) => {
    const ppllength = playlist.length;
    res.send(playlist);
  })
  .catch(next);
};
