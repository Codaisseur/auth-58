require("dotenv").config();
const express = require("express");
const User = require("./models").user;
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

const PORT = process.env.PORT || 4000;

const app = express();

// body-parser middleware
app.use(express.json());
//app.use(authMiddleware);

// Routers
app.use("/auth", authRouter);

app.get("/users", authMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.get("/test", authMiddleware, (req, res) => {
  try {
    res.send(`hello ${req.user.username}`);
  } catch (e) {
    console.log(e.message);
  }
});

// start the app.
app.listen(PORT, () => console.log("running on", PORT));
