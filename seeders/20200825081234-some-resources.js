"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "resources",
      [
        {
          title: "Youtube",
          link: "https://www.youtube.com/watch?v=_UQib2QHdzs",
          resourceImg:
            "https://image.freepik.com/free-vector/worksheet-template-how-many_1308-6895.jpg",
          resourceDes:
            "The ever accurate Bean Counter processes a special order for an important client. What is ASMR?",
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/watch?v=JgmjwG-OMic",
          resourceImg:
            "https://img.freepik.com/free-vector/count-math-number-ten-worksheet_1308-23689.jpg?size=338&ext=jpg",
          resourceDes:
            "Become a Rock Star Bean Counter Overnight | Bennett McDowell",
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Github",
          link: "https://github.com/PegaFemBlog/CountBeans",
          resourceImg:
            "https://image.freepik.com/free-vector/math-worksheet-template-with-matching-numbers-vegetables_1308-7680.jpg",
          resourceDes:
            "Using functions to demonstrate how counters are used and what happens if the initial and test conditions are not chosen carefully.",
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/watch?v=L6sRNZh85Uw",
          resourceImg:
            "https://as2.ftcdn.net/jpg/02/98/27/91/500_F_298279136_WJ7q0Fm8RdHRg6syM7VjlF7mfsxBEMha.jpg",
          resourceDes:
            "we will solve the Apple and Orange Hackerrank challenge.",
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/watch?v=Alz13kGluL8",
          resourceImg:
            "https://img.freepik.com/free-vector/man-fried-meat-nature-flat-vector-illustration_74855-5889.jpg?size=338&ext=jpg&ga=GA1.2.287048748.1591172044",
          resourceDes: "React JS PROJECT - GOOGLE MAP BASIC",
          projectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("resources", null, {});
  },
};
