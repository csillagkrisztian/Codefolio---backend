"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Atieh",
          email: "atieh@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          githubLink: "https://github.com/atiehamidi",
          linkedinLink: "https://www.linkedin.com/in/atiehamidi/",
          userImg:
            "https://avatars3.githubusercontent.com/u/64927398?s=460&u=f9dcdf25def7a48132cf45fde5bc5c4a35503d42&v=4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Myrin",
          email: "myrin@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          githubLink: "https://github.com/Myrinw",
          linkedinLink: "https://www.linkedin.com/in/myrin-wouterse-32a7b6b9/",
          userImg:
            "https://avatars2.githubusercontent.com/u/60063346?s=400&u=602a8b10ffc8ece407290ccd81859cc2f031e418&v=4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Krisztián",
          email: "Krisztián@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          githubLink: "https://github.com/csillagkrisztian",
          linkedinLink:
            "https://www.linkedin.com/in/kriszti%C3%A1n-csillag-8ab09a1b0/",
          userImg:
            "https://avatars0.githubusercontent.com/u/59936284?s=400&u=9a65d8b52dcc0cadc5112508beae6a5c9966e97c&v=4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
