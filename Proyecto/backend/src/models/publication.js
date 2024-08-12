'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'madeByUser',
        as: 'author'
      });
      this.belongsTo(models.User, {
        foreignKey: 'madeToUser',
        as: 'recipient'
      });
      this.hasMany(models.Comment, {
        foreignKey: 'publicationId'
      });
      this.hasMany(models.Like, {
        foreignKey: 'publicationId'
      });
    }
  }
  
  Publication.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    madeByUser: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'username'
      },
      onDelete: 'CASCADE'
    },
    madeToUser: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'username'
      },
      onDelete: 'CASCADE'
    },
    text: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Publication',
  });

  return Publication;
};
