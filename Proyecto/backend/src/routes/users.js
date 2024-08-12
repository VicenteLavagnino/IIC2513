const Router = require('koa-router');
const router = new Router();
const userController = require('../controllers/userController');
const publicationController = require('../controllers/publicationController');
const authUtils = require('../lib/auth/jwt.js');

router.get('getAllUsers', '/', authUtils.isAdmin, userController.getAllUsers);
router.get('getUser', '/:username', authUtils.isUser, userController.getUser);
router.patch('updateUser', '/:username', authUtils.isUser, userController.updateUser);
router.delete('deleteUser', '/:username', authUtils.isUser, userController.deleteUser);

router.get('getUserPublicationsOnProfile', '/:username/publications-on-profile', authUtils.isUser, publicationController.getUserprofile);
router.get('getUserPublicationsPosted', '/:username/publications-posted', authUtils.isUser, publicationController.getUserPosts);

module.exports = router;
