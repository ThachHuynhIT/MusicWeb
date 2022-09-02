const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
// const bcrypt = require(bcrypt);

const Song = new Schema(
  {
    name: { type: String, require: true },
    type: { type: String },
    img: { type: String },
    url: { type: String },
    singer: { type: String },
    legion: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// add plugin
mongoose.plugin(slug);
Song.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model("Song", Song);
