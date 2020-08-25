"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",

      [
        {
          tagName: "reactjs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "redux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "react Native",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Axios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
