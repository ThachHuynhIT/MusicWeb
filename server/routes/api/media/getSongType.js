const Song = require("../../../models/Song");

module.exports = (req, res, next) => {
  let perPage = 5;
  let page = req.params.page || 1;

  Song.find({ type: req.params.type }) 
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec((err, song) => {
      Song.countDocuments((err, count) => {
        if (err) return next(err);
        res.send(song); 
      });
    });
};
