const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require(bcrypt);

const Music = new Schema({
  name: { type: String },
  type: { type: String },
  singer: { type: String },
  author: { type: String },
  avatar: { type: String },
  source: { type: String },
  views: { type: Number },
});

module.exports = mongoose.model("Music", Music);
