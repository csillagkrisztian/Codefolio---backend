"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tagprojects",
      [
        {
          tagId: 1,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          projectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          projectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tagprojects", null, {});
  },
};
