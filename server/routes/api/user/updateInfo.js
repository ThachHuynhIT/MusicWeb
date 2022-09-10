const jwt = require("jsonwebtoken");
const User = require("../../../models/User");
const Resize = require("../../../middlewares/Resize");
const path = require("path");
// require("dotenv").config();

module.exports = async function (req, res, next) {
  const imagePath = path.join("test/public/img");
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }
  const filename = await fileUpload.save(req.file.buffer);
  const img = path.join(process.env.LOCAL_STATIC_STORE + filename);

  const { email, name, gender, nation } = req.body;
  const token = req.params.token;
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  const userId = verified._id;

  User.updateOne({ _id: userId }, { email, name, gender, nation, img: img })
    .then(() => {
      User.find({ _id: userId }, { password: 0 })
        .then((user) => res.send(user))
        .catch(res.status(400).send("Err"));
    })
    .catch(res.status(400).send("Err"));
};
