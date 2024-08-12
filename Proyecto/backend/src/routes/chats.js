const Router = require('koa-router');
const router = new Router();
const chatController = require('../controllers/chatController');
const messageController = require('../controllers/messageController');

// Rutas para la gestión de chats
router.post('/create', chatController.createChat);
router.get('/:username', chatController.getUserChats);

// Rutas para la gestión de mensajes
router.post('/message/send', messageController.sendMessage);
router.get('/message/:chatId', messageController.getChatMessages);

module.exports = router;
