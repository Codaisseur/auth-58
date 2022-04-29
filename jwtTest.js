const { toJWT, toData } = require("./auth/jwt");

// const token = toJWT({ userId: 12 });

// console.log(token);

const data = toData(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2NTEyMzk3NDMsImV4cCI6MTY1MTIzOTc0M30.0ZpiJPVR0HwPI3FrnBm9rRppT5pMywhD7eB890-zF5I"
);

console.log("decoded token", data);
