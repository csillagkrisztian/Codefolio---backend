'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      project.belongsTo(models.user);
      project.hasMany(models.resource);
      project.hasMany(models.comment);
      project.hasMany(models.like);
      project.belongsToMany(models.tag, {
        through: "tagproject",
        foreignKey: "projectId",
      });
    }
  };
  project.init({
    projectName: DataTypes.STRING,
    feLink: DataTypes.STRING,
    beLink: DataTypes.STRING,
    projectImg: DataTypes.STRING,
    ytUrl: DataTypes.STRING,
    projectDesc: DataTypes.STRING,
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
    modelName: 'project',
  });
  return project;
};