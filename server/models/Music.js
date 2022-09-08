const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require(bcrypt);

const Music = new Schema({
  name: { type: String },
  type: { type: String },
  singer: { type: String },
  album: { type: String },
  avatar: { type: String },
  usl: { type: String },

});

module.exports = mongoose.model("Music", Music);
