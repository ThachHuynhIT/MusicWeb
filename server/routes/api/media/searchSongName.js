const Song = require("../../../models/Song");
const express = require("express");
const { query } = require("express");

module.exports = (req, res, next) => {
  //   var filter = req.query;
  //   Song.find(filter).then((song) => res.send(song));
  Song.find().then((song) => {
    var name_search = req.query.name;

    var result = song.filter((song) => {
      return song.name.indexOf(name_search) !== -1;
    });

    res.send({
      song: result,
    });
  });
};
