'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entry.belongsTo(models.User, { foreignKey: 'belongsTo' });
    }
  }
  Entry.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    date: DataTypes.DATE,
    belongsTo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};