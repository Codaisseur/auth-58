require("dotenv").config();
const express = require("express");
const authRouter = require("./routers/auth");

console.log(process.env);

const PORT = process.env.PORT || 4000;

const app = express();

// body-parser middleware
app.use(express.json());

// Routers
app.use("/auth", authRouter);

app.get("/test", (req, res) => {
  res.send("testingggg");
});

// start the app.
app.listen(PORT, () => console.log("running on", PORT));
