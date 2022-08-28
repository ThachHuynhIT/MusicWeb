const User = require("../models/User");
const { mongooseToObject } = require("../util/mongoose");
const { multipleMongooseToObject } = require("../util/mongoose");
const loginValidator = require("../validations/login");
const signupValidator = require("../validations/signup");
const jwt = require("jsonwebtoken");
const co = require("co");
require("dotenv").config();

class UsersController {
  //[GET] route /user/list
  home(req, res, next) {
    Promise.all([User.find({}), User.countDocumentsDeleted()])
      .then(([user, deletedCount]) =>
        res.render("users/home", {
          deletedCount,
          user: multipleMongooseToObject(user),
        })
      )
      .catch(next);
  }

  //[GET] route /user/login
  login(req, res, next) {
    res.render("users/login");
  }

  //[POST] route /user/author
  author(req, res, next) {
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
        res
          .header({
            "auth-token": token,
            username: user.username,
          })
          .send(token);
      })
      .catch((err) => next(err));
  }

  //[GET] route /user/logout
  logout(req, res, next) {
    res.send("logout");
  }

  //[GET] route /user/signPage
  signup(req, res, next) {
    res.render("./users/signup");
  }

  //[POST] route /user/signupStore
  signupStore(req, res, next) {
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
      .then(() => res.json({ signupStatus: "success" }))
      .catch((err) => next(err));
  }

  //[GET] route /user/bin
  bin(req, res, next) {
    User.findDeleted({})
      .then((user) => {
        res.render("./users/bin", {
          user: multipleMongooseToObject(user),
        });
      })
      .catch(next);
  }
}

module.exports = new UsersController();
