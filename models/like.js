'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      like.belongsTo(models.project);
      like.belongsTo(models.user);
    }
  };
  like.init({
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: "projects",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",

    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};