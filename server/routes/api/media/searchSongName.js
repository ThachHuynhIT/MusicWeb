const Song = require("../../../models/Song");
const Album = require("../../../models/Album");
const express = require("express");
const { query } = require("express");

module.exports = (req, res, next) => {
  // let perPage = 4;
  // let page = req.params.page || 1;
  var name_search = req.query.name;

  Promise.all([Album.find({}), Song.find({})])
    .then(([album, song]) => {
      var result2 = album.filter((album) => {
        return (
          album.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
        );
      });
      var result = song.filter((song) => {
        return (
          song.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
        );
      });
      res.send({
        song: result,
        album: result2,
      });
    })
    .catch(next);

};
