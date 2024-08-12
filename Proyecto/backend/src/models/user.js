'use strict';
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Asociaciones con otros modelos
      User.hasMany(models.Comment, { foreignKey: 'username' });
      User.hasMany(models.Like, { foreignKey: 'username' });
      User.hasMany(models.Publication, { foreignKey: 'madeByUser', as: 'publicationsMade' });
      User.hasMany(models.Publication, { foreignKey: 'madeToUser', as: 'publicationsReceived' });
      User.hasMany(models.FriendRequest, { foreignKey: 'sender' });
      User.hasMany(models.FriendRequest, { foreignKey: 'receiver' });
      User.belongsToMany(models.User, { through: models.Friendship, as: 'Friends1', foreignKey: 'user1' });
      User.belongsToMany(models.User, { through: models.Friendship, as: 'Friends2', foreignKey: 'user2' });
      User.belongsToMany(models.Chat, { through: models.UserChat, foreignKey: 'userId'});
      User.hasMany(models.Message, { foreignKey: 'username' });
    }

    // Método para verificar la contraseña
    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter a username'
        },
        notEmpty: {
          msg: 'Username cannot be empty'
        }
      }
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter an email'
        },
        isEmail: {
          msg: 'Please enter a valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a password'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [['male', 'female', 'other']],
          msg: 'Please enter a valid gender'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Please enter a valid age'
        },
        min: {
          args: [0],
          msg: 'Please enter a valid age'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'Please enter a valid URL'
        }
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    }
  });

  return User;
};
