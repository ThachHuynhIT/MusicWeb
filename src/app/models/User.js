const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
// const bcrypt = require(bcrypt);

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 225,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    avatar: { type: String },
    rank: { type: String },
    status: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

// add plugin
mongoose.plugin(slug);
Album.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model("User", User);
