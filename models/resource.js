"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      resource.belongsTo(models.project);
    }
  }
  resource.init(
    {
      title: DataTypes.STRING,
      link: DataTypes.TEXT,
      resourceImg: DataTypes.TEXT,
      resourceDes: DataTypes.TEXT,
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "resource",
    }
  );
  return resource;
};
