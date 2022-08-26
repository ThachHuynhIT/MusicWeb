const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const mongooseDelete = require("mongoose-delete");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password:{
      type: String,
      required: true,
    },
    access_token: String,
    name: {
      type: String,
    },
    avatar: { type: String },
    rank: { type: String },
    status: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

userSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      // user.access_token = getToken(user);
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return reject(err);

      resolve(isMatch);
    });
  });
};

module.exports = mongoose.model("User", userSchema);