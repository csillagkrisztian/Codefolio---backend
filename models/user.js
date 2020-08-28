"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.project);
      user.hasMany(models.like);
      user.hasMany(models.comment);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      githubLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      linkedinLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userImg: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      motto: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
