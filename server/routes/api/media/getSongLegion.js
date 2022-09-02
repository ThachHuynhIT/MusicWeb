const Song = require("../../../models/Song");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  let perPage = 5;
  let page = req.params.page || 1;

  Song.find({ legion: req.params.legion }) 
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec((err, song) => {
      Song.countDocuments((err, count) => {
        if (err) return next(err);
        res.send(song); 
      });
    });
};
