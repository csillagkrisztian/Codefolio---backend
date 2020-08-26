"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          comment: "nice job",
          projectId: 3,
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Liiiiiiiik",
          projectId: 2,
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "I have some question about the UI",
          projectId: 1,
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
