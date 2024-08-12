const Router = require('koa-router') ;
const publications = require('./routes/publications.js') ;
const users = require('./routes/users.js') ;
const authRoutes = require('./routes/authentications.js') ;
const chats = require('./routes/chats.js') ;
const friendshipRoutes = require('./routes/friendships.js');

const dotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt');

dotenv.config();

const router = new Router();

router.use(authRoutes.routes());


// desde esta ruta todas las lineas requeriran un JWT, no aplica para arriba
router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }));

router.use('/publications', publications.routes());
router.use('/users', users.routes());
router.use('/chats', chats.routes());
router.use('/friendships', friendshipRoutes.routes());

module.exports = router;