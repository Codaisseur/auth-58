const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

// CRUD
// SIGN UP - Create a user
router.post("/signup", async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).send("you are missing some parameters");
    }
    // right before creating user => hash the password!
    const encryptedPass = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      email,
      password: encryptedPass, // pass in hashed password
      username,
    });

    res.send({ message: "signup successfull!", newUser });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("missing params");
    }
    // 1. find the user => email

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) return res.status(400).send("Wrong credentials");

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (passwordMatch) {
      //
      const token = toJWT({ userId: user.id });
      res.send({ message: "Congrats! you're logged in! :)", token });
      // We have to give this user something back to prove he has
      // authenticated. => JWT (json web token)
    } else {
      return res.status(400).send("Wrong password");
    }
    // end: validate passwords
  } catch (e) {
    next(e);
  }
});

module.exports = router;
