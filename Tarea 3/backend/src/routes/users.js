// Formato tomado de la ayudantia de mi primera api

const Router = require('koa-router');
const router = new Router();

const { User } = require('../models');

// Ver usuarios
router.get('/', async (ctx) => {
    
    try {
        const users = await User.findAll();
        ctx.body = users;
    } catch (error) {
        console.error(error);
        ctx.status = 404;
    }
});

// Crear usuario
router.post('/', async (ctx) => {
    try {
        const user = await User.create(ctx.request.body);
        ctx.status = 201;
        ctx.body = user;
    } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
});

// Ruta asistida por copilot
// Ver usuario  por su username
// https://stackoverflow.com/questions/43401790/using-findone-and-findoneandupdate-with-http-request-mongoose uso de findone se corrobora de aca
router.get('/:username', async (ctx) => {
    try {
        const user = await User.findOne({ where: { username: ctx.params.username } });
        if (user) {
            ctx.body = user;
        } else {
            ctx.status = 404;
        }
    } catch (error) {
        console.error(error);
        ctx.status = 404;
    }
});


module.exports = router;