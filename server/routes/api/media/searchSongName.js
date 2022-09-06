const Song = require("../../../models/Song");
const Album = require("../../../models/Album")
const express = require("express");
const { query } = require("express");

module.exports = (req, res, next) => {

  let perPage = 4;
  let page = req.params.page || 1;

  // Song.find().then((song) => {
  //   var name_search = req.query.name;
  //   var result = song.filter((song) => {
  //     return song.name.indexOf(name_search) !== -1;
  //   });
  //   res.send({
  //     song: result,
  //   });
  // });

  Album.find().then((album) => {
    var name_search = req.query.name;
    var result = album.filter((album) => {
      return album.name.indexOf(name_search) !== -1;
    });
    res.send({
      album: result,
    });
  });

};
