'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FriendRequest extends Model {
    static associate(models) {
      FriendRequest.belongsTo(models.User, { foreignKey: 'sender', as: 'Sender' });
      FriendRequest.belongsTo(models.User, { foreignKey: 'receiver', as: 'Receiver' });
    }
  }

  FriendRequest.init({
    sender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FriendRequest',
  });

  return FriendRequest;
};
