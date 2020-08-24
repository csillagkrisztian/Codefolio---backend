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
      // define association here
    }
  };
  project.init({
    projectName: DataTypes.STRING,
    feLink: DataTypes.STRING,
    beLink: DataTypes.STRING,
    projectImg: DataTypes.STRING,
    ytUrl: DataTypes.STRING,
    projectDesc: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};