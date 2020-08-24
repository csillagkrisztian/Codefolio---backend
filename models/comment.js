'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.project);
      comment.belongsTo(models.user);

    }
  };
  comment.init({
    comment: DataTypes.TEXT,
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
    modelName: 'comment',
  });
  return comment;
};