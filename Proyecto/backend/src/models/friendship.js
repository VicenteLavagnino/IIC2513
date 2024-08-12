'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    static associate(models) {
      Friendship.belongsTo(models.User, { foreignKey: 'user1', as: 'friend1' });
      Friendship.belongsTo(models.User, { foreignKey: 'user2', as: 'friend2' });
    }
  }

  Friendship.init({
    user1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'Friendship',
  });

  return Friendship;
};
