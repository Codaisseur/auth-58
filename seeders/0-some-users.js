"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          email: "m@m.com",
          password: bcrypt.hashSync("1234", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Karla",
          email: "k@k.com",
          password: bcrypt.hashSync("1234", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Swen",
          email: "s@s.com",
          password: bcrypt.hashSync("1234", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
