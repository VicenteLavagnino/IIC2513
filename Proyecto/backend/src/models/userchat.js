'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChat extends Model {
    static associate(models) {
      UserChat.belongsTo(models.User, { foreignKey: 'userId' });
      UserChat.belongsTo(models.Chat, { foreignKey: 'chatId' });
    }
  }
  
  UserChat.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Chats',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserChat',
  });

  return UserChat;
};
