const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
// const bcrypt = require(bcrypt);

mongoose.plugin(slug);

const Album = new Schema({
  name: { type: String, require: true },
  type: { type: String },
  img: { type: String },
  singer: { type: String },
  description: { type: String },
  slug: { type: String, slug: "name", unique: true },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Album", Album);
