'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      Chat.belongsToMany(models.User, { through: models.UserChat, foreignKey: 'chatId' });
      Chat.hasMany(models.Message, { foreignKey: 'chatId' });
    }
  }

  Chat.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Chat',
  });

  return Chat;
};
