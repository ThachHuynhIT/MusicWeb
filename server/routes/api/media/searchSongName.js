const Song = require("../../../models/Song");
const Album = require("../../../models/Album");
const express = require("express");
const { query } = require("express");

module.exports = (req, res, next) => {
  let perPage = 4;
  let page = req.params.page || 1;
  var name_search = req.query.name;

  // Album.find().then((album) => {

  //   var result = album.filter((album) => {
  //     return album.name.indexOf(name_search) !== -1;
  //   });
  //   res.send({
  //     album: result,
  //   });
  // });

  if (page < 1) {
    Song.find().
    then((song) => {
      var result = song.filter((song) => {
        return song.name.indexOf(name_search) !== -1;
      });
      res.send({
        song: result,
      });
    });
  } else {
    Song.find({ type: req.params.type })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec((err, song) => {
        Song.countDocuments((err, count) => {
          if (err) return next(err);
          res.send({
            song
          });
        });
      });
  }
};
