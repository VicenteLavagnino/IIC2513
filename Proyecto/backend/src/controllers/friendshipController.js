const { Friendship, User } = require('../models');
const authUtils = require('../lib/auth/jwt.js');

const createFriendship = async (ctx) => {
  try {
    const friendship = await Friendship.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = friendship;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: error.message, details: error };
  }
};

const getAllFriendships = async (ctx) => {
  try {
    const friendships = await Friendship.findAll({
      attributes: ['id', 'user1', 'user2', 'status', 'createdAt', 'updatedAt'],
    });
    ctx.status = 200;
    ctx.body = friendships;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving friendships', details: error };
  }
};

const getFriendshipById = async (ctx) => {
  try {
    const friendship = await Friendship.findOne({
      where: { id: ctx.params.id },
      attributes: ['id', 'user1', 'user2', 'status', 'createdAt', 'updatedAt'],
      include: [
        { model: User, as: 'friend1', attributes: ['id', 'username'] },
        { model: User, as: 'friend2', attributes: ['id', 'username'] }
      ]
    });
    if (friendship) {
      ctx.status = 200;
      ctx.body = friendship;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Friendship not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving friendship', details: error };
  }
};

const updateFriendship = async (ctx) => {
  try {
    const [updated] = await Friendship.update(ctx.request.body, {
      where: { id: ctx.params.id }
    });
    if (updated) {
      const updatedFriendship = await Friendship.findOne({
        where: { id: ctx.params.id },
        attributes: ['id', 'user1', 'user2', 'status', 'createdAt', 'updatedAt']
      });
      ctx.status = 200;
      ctx.body = updatedFriendship;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Friendship not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error updating friendship', details: error };
  }
};

const deleteFriendship = async (ctx) => {
  try {
    const friendship = await Friendship.findOne({
      where: { id: ctx.params.id },
      attributes: ['id', 'user1', 'user2', 'status', 'createdAt', 'updatedAt']
    });
    if (friendship) {
      const token = ctx.request.header.authorization.split(' ')[1];
      const scope = authUtils.getJWTScope(token);
      if (!scope.includes('admin')) {
        ctx.assert(scope.includes(friendship.user1) || scope.includes(friendship.user2), 403, 'You don\'t have permission to delete this friendship');
      }
    }
    const deleted = await Friendship.destroy({
      where: { id: ctx.params.id }
    });
    if (deleted) {
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Friendship not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error deleting friendship', details: error };
  }
};

module.exports = {
  createFriendship,
  getAllFriendships,
  getFriendshipById,
  updateFriendship,
  deleteFriendship
};
