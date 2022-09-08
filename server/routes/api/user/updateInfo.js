const jwt = require("jsonwebtoken");
const User = require("../../../models/User");

module.exports = (req, res, next) => {
    // res.body.img = ""
  const formData = req.body;
  const token = req.cookies.access_token;
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  const userId = verified._id;

  User.updateOne({ _id: userId }, formData)
  User.find({ _id: userId })
    .then((user) => res.send(user))
    .catch(next);
};
