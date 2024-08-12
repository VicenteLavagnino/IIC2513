const Router = require('koa-router');
const router = new Router();   // Create a new router

router.get('/', async (ctx) => {
  ctx.body = 'Hello World';
});

router.use('/users', require('./routes/users').routes());
router.use('/entries', require('./routes/entries').routes());


module.exports = router;
