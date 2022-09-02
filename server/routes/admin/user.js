const express = require("express");
const User = require('../../models/User');
const verifyToken = require('../../middlewares/verifyToken');

const router = express.Router();

const userController = require("../../controllers/UserController");

router.get("/", verifyToken,(req, res) => {
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
  //Access Denied
});
router.get("/list", userController.home);
router.get("/login", userController.login);
router.post("/author", userController.author);
router.get("/signup", userController.signup);
router.post("/signupStore", userController.signupStore);
router.get("/logout", userController.logout);
router.get("/bin", userController.bin);

module.exports = router;
