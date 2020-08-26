"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "projects",
      [
        {
          projectName: "I made an app that can count beans",
          feLink: "beancounter-frontend.com",
          beLink: "beancounter-backend.com",
          projectImg:
            "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/beans.jpg",
          ytUrl: "youtube.com/beancounter",
          projectDesc:
            "My mother is very angry at me every time I get a bad grade in Math, and forces me to count beans, the jokes on her, if she wants to know if it's correct, she has to count herself",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          projectName: "An app that does your math homework",
          feLink: "mathsux-frontend.com",
          beLink: "mathsux-backend.com",
          projectImg: "https://i.ytimg.com/vi/Kp2bYWRQylk/maxresdefault.jpg",
          ytUrl: "youtube.com/mathsux",
          projectDesc:
            "I only like math if it's in python, this app solves my problems, literally",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          projectName: "Hot single men in your area",
          feLink: "hotsinglemen-frontend.com",
          beLink: "hotsinglemen-backend.com",
          projectImg:
            "https://qph.fs.quoracdn.net/main-qimg-1694bca506b96e0cb542a000a947bdc2.webp",
          ytUrl: "youtube.com/hotsinglemen",
          projectDesc:
            "I don't like to see only hot single ladies in my area, as a woman I want to see hot single men instead",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
