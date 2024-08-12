const { Publication, User, Friendship } = require('../models');
const authUtils = require('../lib/auth/jwt.js');
const { Op } = require('sequelize');

const createPublication = async (ctx) => {
  try {
    const publication = await Publication.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = publication;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: error.message, details: error };
  }
};

const getAllPublications = async (ctx) => {
  try {
    const publications = await Publication.findAll();
    ctx.status = 200;
    ctx.body = publications;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving publications', details: error };
  }
};

const getPublication = async (ctx) => {
  try {
    const publication = await Publication.findOne({ where: { id: ctx.params.id } });
    if (publication) {
      ctx.status = 200;
      ctx.body = publication;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Publication not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving publication', details: error };
  }
};

const getUserprofile = async (ctx) => {
  try {
    const publications = await Publication.findAll({ where: { madeToUser: ctx.params.username } });
    if (publications) {
      ctx.status = 200;
      ctx.body = publications;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Publications not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving publications', details: error };
  }
};

const getUserPosts = async (ctx) => {
  try {
    const publications = await Publication.findAll({ where: { madeByUser: ctx.params.username } });
    if (publications) {
      ctx.status = 200;
      ctx.body = publications;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Publications not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error retrieving publications', details: error };
  }
};

const updatePublication = async (ctx) => {
  try {
    const publication = await Publication.findOne({ where: { id: ctx.params.id } });
    if (publication) {
      var token = ctx.request.header.authorization.split(' ')[1];
      var scope = authUtils.getJWTScope(token);
      if (!scope.includes('admin')) {
        ctx.assert(scope.includes(publication.madeByUser), 403, 'You dont have permission to update this publication');
      }
      const [updated] = await Publication.update(ctx.request.body, {where: { id: ctx.params.id }});
      ctx.status = 200;
      ctx.body = updated;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Publication not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error updating publication', details: error };
  }
};

const deletePublication = async (ctx) => {
  try {
    const publication = await Publication.findOne({ where: { id: ctx.params.id } });
    if (publication) {
      var token = ctx.request.header.authorization.split(' ')[1];
      var scope = authUtils.getJWTScope(token);
      if (!scope.includes('admin')){
        ctx.assert(scope.includes(publication.madeByUser) || scope.includes(publication.madeToUser), 403, 'You dont have permission to delete this publication');
      }
    }
    const deleted = await Publication.destroy({
      where: { id: ctx.params.id }
    });
    if (deleted) {
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Publication not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Error deleting publication', details: error };
  }
};

const getUserPublications = async (ctx) => {
  try {
    const { username } = ctx.params;

    // Verificar si el usuario existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
      return;
    }

    // Obtener todas las publicaciones hechas al usuario
    const publications = await Publication.findAll({
      where: { madeToUser: username },
      order: [['createdAt', 'DESC']] // Ordenar por fecha de creación, más reciente primero
    });

    ctx.status = 200;
    ctx.body = publications;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: 'Error retrieving publication', details: error };
  }
};


const getFriendsPublications = async (ctx) => {
  try {
    const { username } = ctx.params;

    // Verificar si el usuario existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
      return;
    }

    // Obtener las amistades del usuario
    const friendships = await Friendship.findAll({
      where: {
        [Op.or]: [
          { user1: username },
          { user2: username }
        ],
        status: 'accepted'
      }
    });

    // Obtener los nombres de usuario de los amigos
    const friendsUsernames = friendships.map(friendship => {
      return friendship.user1 === username ? friendship.user2 : friendship.user1;
    });

    if (friendsUsernames.length === 0) {
      ctx.status = 200;
      ctx.body = [];
      return;
    }

    // Obtener todas las publicaciones hechas a los amigos
    const publications = await Publication.findAll({
      where: {
        madeToUser: {
          [Op.in]: friendsUsernames
        }
      },
      order: [['createdAt', 'DESC']] // Ordenar por fecha de creación, más reciente primero
    });

    ctx.status = 200;
    ctx.body = publications;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: error.message, details: error };
  }
};

module.exports = {
  createPublication,
  getAllPublications,
  getPublication,
  updatePublication,
  deletePublication,
  getUserprofile,
  getUserPosts,
  getUserPublications,
  getFriendsPublications
};
