const jwt = require("jsonwebtoken");
const User = require("../../../models/User");
require("dotenv").config();

module.exports = (req, res, next) => {
    // res.body.img = ""
  const formData = req.body;
  const token = req.params.token;
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  const userId = verified._id;

  User.updateOne({ _id: userId }, formData)
  .then(()=>res.send("success"))
  User.find({ _id: userId })
    .then((user) => res.send(user))
    .catch(next);
};
