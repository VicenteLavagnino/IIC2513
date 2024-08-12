const Router = require('koa-router');
const friendshipController = require('../controllers/friendshipController.js');
const authUtils = require('../lib/auth/jwt.js');

const router = new Router();

router.post('createFriendship', '/', authUtils.isUser, friendshipController.createFriendship);
router.get('getAllFriendships', '/', authUtils.isUser, friendshipController.getAllFriendships);
router.patch('updateFriendship', '/:id', authUtils.isUser, friendshipController.updateFriendship);
router.delete('deleteFriendship', '/:id', authUtils.isUser, friendshipController.deleteFriendship);


module.exports = router;
