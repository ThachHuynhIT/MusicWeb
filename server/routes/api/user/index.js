const express = require("express");
const User = require("../../../models/User");
const verifyToken = require("../../../middlewares/verifyToken");
const loginValidator = require("../../../validations/login");
const signupValidator = require("../../../validations/signup");
const jwt = require("jsonwebtoken");
const co = require("co");
require("dotenv").config();

const router = express.Router();
// Đăng nhập
router.post("/login", verifyToken, (req, res, next) => {
  const { username, password } = req.body;
  const { isValid, errors } = loginValidator(req.body);

  if (!isValid) {
    return res.status(400).json({ error: true, errors });
  }

  co(function* () {
    const user = yield User.findOne({ username });
    if (!user) {
      const error = { status: 401, errors: { username: "Invalid username" } };
      throw error;
    }

    const isMatch = yield user.comparePassword(password);
    if (!isMatch) {
      const error = { status: 401, errors: { password: "Invalid password" } };
      throw error;
    }

    return user;
  })
    // res.header("auth-token", token).send(token)
    .then((user) => {
      const token = jwt.sign(
        { _id: req.params._id },
        process.env.TOKEN_SECRET,
        { expiresIn: 60 * 60 * 24 }
      );
      res.json({
        "auth-token": token,
        username: user.username,
      });
      // .send(token);
    })
    .catch((err) => next(err));
});

// Đăng ký
router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  const { isValid, errors } = signupValidator(req.body);

  if (!isValid) {
    return res.status(400).json({ error: true, errors });
  }

  co(function* () {
    const existingUser = yield User.findOne({ username });

    if (existingUser) return res.status(422).send("Username is exist");

    const user = new User(req.body);
    return user.save();
  })
    .then(() =>
      res.status(200).json({
        message: {
          msgBody: "Tao tai khoan thanh cong",
          msgError: false,
        },
      })
    )
    .catch((err) => next(err));
});
// router.get("/logout", userController.logout);

module.exports = router;
