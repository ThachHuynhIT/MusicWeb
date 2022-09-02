const Album = require("../../../models/Album");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  Album.find({})
    .then((album) => 
      res.send(album)
    )
    .catch(next);
};
