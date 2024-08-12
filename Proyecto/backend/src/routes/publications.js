const Router = require('koa-router');
const router = new Router();
const publicationController = require('../controllers/publicationController');
const authUtils = require('../lib/auth/jwt.js');

router.post('createPublication', '/', authUtils.isUser, publicationController.createPublication);
router.get('getAllPublications', '/', authUtils.isUser, publicationController.getAllPublications);
router.get('getPublication', '/:id', authUtils.isUser, publicationController.getPublication);
router.patch('updatePublication', '/:id', authUtils.isUser, publicationController.updatePublication);
router.delete('deletePublication', '/:id', authUtils.isUser, publicationController.deletePublication);
router.get('getUserPublications', '/self/:username', authUtils.isUser, publicationController.getUserPublications);
router.get('getFriendsPublications', '/friends/:username', authUtils.isUser, publicationController.getFriendsPublications);


module.exports = router;
