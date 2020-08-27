"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tagproject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tagproject.belongsTo(models.project);
      tagproject.belongsTo(models.tag);
    }
  }
  tagproject.init(
    {
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tag",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "project",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "tagproject",
    }
  );
  return tagproject;
};
