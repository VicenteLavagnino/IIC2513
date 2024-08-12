const { User } = require('../models');

const getAllUsers = async (ctx) => {
  try {
    const users = await User.findAll();
    ctx.status = 200;
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving users', details: error };
  }
};

const getUser = async (ctx) => {
  try {
    const user = await User.findOne({ where: { username: ctx.params.username } });
    if (user) {
      ctx.status = 200;
      ctx.body = user;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving user', details: error };
  }
};

const updateUser = async (ctx) => {
  try {
    const [updated] = await User.update(ctx.request.body, {
      where: { username: ctx.params.username }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { username: ctx.params.username } });
      ctx.status = 200;
      ctx.body = updatedUser;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error updating user', details: error };
  }
};

const deleteUser = async (ctx) => {
  try {
    const deleted = await User.destroy({
      where: { username: ctx.params.username }
    });
    if (deleted) {
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error deleting user', details: error };
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
};
