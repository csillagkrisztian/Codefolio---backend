"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feLink: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      beLink: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      projectImg: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ytUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      projectDesc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("projects");
  },
};
