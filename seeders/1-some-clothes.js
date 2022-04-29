"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "clothings",
      [
        {
          color: "red",
          price: 100,
          name: "T-shirt",
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "orange",
          price: 200,
          name: "Pants",
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "blue",
          price: 80,
          name: "Shoes",
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("clothings", null, {});
  },
};
